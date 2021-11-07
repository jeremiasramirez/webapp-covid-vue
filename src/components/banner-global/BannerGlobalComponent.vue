<template>
   <section class="contain__global">
       <h1 class="title__global animate" v-if="!isLoading">A nivel global</h1>

    <div class="lastUpdate animate" v-if="existUpdate">Ultima actualización {{ lastUpdateData }}</div>
    <article class="container__global__cards ">
        
     

            <div class="card__global red__card bounceIn" v-if="!isLoading">
                <h1 class="title__card bounceIn">Nuevas muertes</h1>
                <p class="title__number bounceInTwo">+{{  (newDeaths) }}</p>
            </div>


            <div class="card__global bounceIn orange__card" v-if="!isLoading">
                <h1 class="title__card bounceIn">Nuevos confirmados</h1>
                <p class="title__number bounceInTwo">+{{  (newConfirmed) }}</p>
            </div>
        
   

            <div class="card__global bounceIn green__card" v-if="!isLoading && newRecovered">
                <h1 class="title__card bounceIn">Nuevos recuperados</h1>
                <p class="title__number bounceInTwo">+{{  (newRecovered) }}</p>
            </div>


            <div class="card__global bounceIn red__card" v-if="!isLoading">
                <h1 class="title__card bounceIn">Muertes en total</h1>
                <p class="title__number bounceInTwo">{{ (totalDeaths) }}</p>
            </div>    

            <div class="card__global bounceIn red__card" v-if="!isLoading">
                <h1 class="title__card bounceIn">Total en total</h1>
                <p class="title__number bounceInTwo">{{ (totalDeaths) }}</p>
            </div>  

            <div class="card__global bounceIn blue__card" v-if="!isLoading && totalConfirmed">
                <h1 class="title__card bounceIn">Total Confirmados</h1>
                <p class="title__number bounceInTwo">{{ (totalConfirmed) }}</p>
            </div>         

        <!-- fake card - when the data has not arrived-->
        <FakeCardComponent v-if="isLoading" />



    </article>

   </section>
</template>
<script>

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
                this.isLoading=false
                this.newDeaths = data.NewDeaths;
                this.newConfirmed = data.NewConfirmed;
                this.newRecovered=data.NewRecovered;
                this.totalDeaths = data.TotalDeaths
                this.totalConfirmed = data.TotalConfirmed
                this.lastUpdateData=new Date(data.Date).toDateString()
            })


        }


    }


}
</script>