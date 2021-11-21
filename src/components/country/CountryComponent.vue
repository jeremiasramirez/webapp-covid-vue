<template>

    <section class="flex-countries">
        <!--------------- search ---------------->
        <article>
            <article class="container__search" v-if="data.length">
            <input v-on:click="revertLength"  v-model="datasearch" type="search" class="search" placeholder="search"> 
        </article>


 

        <CardCountrycomponent 
            :data="data"
            :search="search"
            :start="start"
            :end="end"
            :getInfoFromCountry="getInfoFromCountry"
        />
     




    <!------------- fake country ---------->
    <FakeCountryComponent v-if="!data.length"/>



    
  
    <!--------------- pagination  --------------->
    <PaginationComponent 
        :isPaginationActive="isPaginationActive"
        :data="data"
        :activePagination="activePagination"
        :back="back"
        :startPage="startPage"
        :lengthPage="lengthPage"
        :next="next"
    />


        </article>


            
    </section>

       <!-- separation of countries and visualization -->
        <section class="separation zoomIn">
              <img src="../../assets/images/arrow_right.svg" alt="flag"> 
        </section>
 

    <VisualizationCountryComponent :img="imgFromCountry" :data="dataFromVisualization"/>

</template>
 

<script>
import "./CountryComponent.css";
import PaginationComponent from "./pagination/PaginationComponent"
import FakeCountryComponent from "./fake-country/FakeCountryComponent.vue";
import CardCountrycomponent from "./card-country/CardCountry.component.vue";
import VisualizationCountryComponent from "../visualization-country/VisualizationCountryComponent"


import {ajax} from 'rxjs/ajax'

export default {

    props: ['data'],
    



    components: {
        FakeCountryComponent,
        VisualizationCountryComponent,
        PaginationComponent,
        CardCountrycomponent
         
    },




    data(){
        return {
            start:0,
            dataFromVisualization: null,
            data_: this.data,
            startPage:1,
            lengthPage: 0,
            datasearch:'',
            imgFromCountry: '',
            end:6,
            isPaginationActive:false
            // flag: "https://restcountries.com/v3.1/name/cuba"
        }
    },



  
    mounted(){
        this.search()  
    },

 
    methods: {
       
        revertLength(){
            this.end = 6
            this.start = 0
            this.startPage =1
        },

        activePagination(){
            this.lengthPage=Math.round(this.data.length / 6)
            if(this.isPaginationActive == false) this.isPaginationActive= true
            else this.isPaginationActive=false 
        },

      
        search(){

            return this.data.filter(item => {
               const results=item.Slug.toLowerCase().includes(this.datasearch.toLowerCase()) 
               return results
            });
  
  
         },

 

        getInfoFromCountry(data){
            this.imgFromCountry = null;
             this.dataFromVisualization=null;
            ajax.get(`https://restcountries.com/v2/name/${data.Country}`).subscribe((img)=>{
                this.imgFromCountry = img.response[0].flags.svg
            })
           
            this.dataFromVisualization=data;
             
        },



        next(){
           
            if(this.startPage <= this.lengthPage){
                this.end += 6
                this.start += 6
                this.startPage +=1
            }
            else{
                this.end = 6
                this.start = 0
                this.startPage =1
            }
            
        },



        back(){

            if(this.startPage > 1){
                this.end -= 6
                this.start -= 6
                this.startPage -=1
            }
           
        }
    }



}
</script> 