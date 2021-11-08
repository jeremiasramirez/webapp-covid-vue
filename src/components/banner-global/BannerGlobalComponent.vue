<template>
   <section class="contain__global">
       
       <h1 class="title__global animate" >A nivel global</h1>

    <div class="lastUpdate animate" v-if="existUpdate">Ultima actualización {{ lastUpdateData }}</div>
    <article class="container__global__cards ">
        
     

            <div class="card__global red__card bounceIn" v-if="!isLoading">
                <h1 class="title__card bounceIn">Nuevas muertes</h1>
                <p class="title__number bounceInTwo"><span class="fas fa-users"></span> +{{  (newDeaths) }}</p>
            </div>


            <div class="card__global bounceIn orange__card" v-if="!isLoading">
                <h1 class="title__card bounceIn">Nuevos confirmados</h1>
                <p class="title__number bounceInTwo"><span class="fas fa-users"></span> +{{  (newConfirmed) }}</p>
            </div>
        
   

            <div class="card__global bounceIn green__card" v-if="!isLoading">
                <h1 class="title__card bounceIn">Nuevos recuperados</h1>
                <p class="title__number bounceInTwo" v-if="newRecovered>0"><span class="fas fa-users"></span> +{{  newRecovered }}</p>
                <pre class="await" v-if="newRecovered==0">En espera</pre>
                 <span v-if="newRecovered==0" class="fas fa-sync"></span>
            </div>

            <div class="card__global bounceIn magenta__card" v-if="!isLoading">
                <h1 class="title__card bounceIn">Total recuperados</h1>
                <p class="title__number bounceInTwo" v-if="totalRecovered>0"><span class="fas fa-users"></span> +{{  totalRecovered }}</p> 
                <pre class="await" v-if="totalRecovered==0">En espera</pre>
                <span v-if="totalRecovered==0" class="fas fa-sync"></span>
                
            </div>

            <div class="card__global bounceIn red__card" v-if="!isLoading">
                <h1 class="title__card bounceIn">Muertes en total</h1>
                <p class="title__number bounceInTwo"><span class="fas fa-users"></span> +{{ (totalDeaths) }}</p>
                
            </div>    
 

            <div class="card__global bounceIn blue__card" v-if="!isLoading">
                <h1 class="title__card bounceIn">Total Confirmados</h1>
                <p class="title__number bounceInTwo"><span class="fas fa-users"></span> +{{ (totalConfirmed) }}</p>
            </div>         

        <!-- fake card - when the data has not arrived-->
        <FakeCardComponent v-if="isLoading" />

  

    </article>
 
   </section>
</template>
<script>
import dotTransform from "dot-transform"
import FakeCardComponent from "../../components/fake-card/FakeCardComponent";
import { ajax } from "rxjs/ajax"
import { pluck, delay } from 'rxjs/operators'

import "./BannerGlobalComponent.css";

export default{
   
    data(){
        return {
            isLoading: false,
            existUpdate:false,
            newDeaths: 0,
            newConfirmed:0,
            newRecovered:0,
            totalDeaths:0,
             totalConfirmed:0,
             totalRecovered:0,
             lastUpdateData: 0
        }
    },
    components: {
        FakeCardComponent
    },
    mounted(){
        this.httpGetDataForGlobal()
    },
    methods: {
        activeLastUpdateNotification(){

                 setTimeout(()=>{
                     this.existUpdate=true;
                 },5000)

                  setTimeout(()=>{
                     this.existUpdate=false;
                 },13000)  
        },
        httpGetDataForGlobal(){
            this.isLoading=true
           


            ajax.get('https://api.covid19api.com/summary').pipe(
                delay(1000),

            pluck('response','Global')).subscribe((data)=>{
              
                this.activeLastUpdateNotification()
                console.log(data)
                this.isLoading=false
                this.newDeaths = dotTransform(data.NewDeaths);
                this.newConfirmed = dotTransform(data.NewConfirmed);
                this.newRecovered=dotTransform(data.NewRecovered);
                this.totalDeaths = dotTransform(data.TotalDeaths)
                this.totalConfirmed = dotTransform(data.TotalConfirmed)
                this.totalRecovered = dotTransform(data.TotalRecovered)
                this.lastUpdateData=new Date(data.Date).toDateString()
            })


        }


    }


}
</script>