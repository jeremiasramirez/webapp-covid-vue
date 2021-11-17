<template>

    <section class="flex-countries">
                   <!----------- search ------------>
            <article>
                 <article class="container__search" v-if="data.length">
                <input v-on:click="revertLength"  v-model="datasearch" type="search" class="search" placeholder="search"> 
            </article>


 


         <article class="countrie"  v-if="data.length">
                
            <div class="country animate" v-for="(country,index) in search().slice(start,end)" v-bind:key="index" v-on:click="getInfoFromCountry(country,index)">
                    <div class="flag">
                      
                        <img src="../../assets/images/flag.svg" alt="flag">
                    </div>
                    <p>{{ country.Country }}</p>
                      <div class="flag">
                      
                        <img src="../../assets/images/arrow.svg" alt="flag">
                    </div>
                </div>
        </article>  




            <!-- --------fake country------ -->
            <FakeCountryComponent v-if="!data.length"/>





      <!--------------counter pagination ----------->
      <article class="counter animate" v-if="!isPaginationActive && data.length">
             <div class="activePagination" v-on:click="activePagination">
                <img src="../../assets/images/compare.svg" alt="flag">
            </div>
      </article>


        <article class="counter animate" v-if="isPaginationActive && data.length" >
            <!-- <div class="skip__buttons" v-on:click="skip_back">
                <img src="../../assets/images/skip_previous.svg" alt="flag">
            </div> -->
            <button class="back" v-on:click="back"> 
                <img src="../../assets/images/arrow_left.svg" alt="flag">
                 </button>
                
                <div class="counting">
                    {{startPage}} of {{lengthPage}}
                </div>
                
            <button class="next" v-on:click="next"> 
                <img src="../../assets/images/arrow_right.svg" alt="flag">
            </button>

            <!-- <div class="skip__buttons" v-on:click="skip_next">
                <img src="../../assets/images/skip_next.svg" alt="flag">
            </div> -->

        </article>

        </article>


            
    </section>

       <!-- separation of countries and visualization -->
        <section class="separation zoomIn">
              <img src="../../assets/images/arrow_right.svg" alt="flag"> 
        </section>
 

    <VisualizationCountryComponent />

</template>


<script>
import "./CountryComponent.css";
import FakeCountryComponent from "../fake-country/FakeCountryComponent.vue";
// import CardCountrycomponent from "../card-country/CardCountry.component.vue";
import VisualizationCountryComponent from "../visualization-country/VisualizationCountryComponent"

export default {

    props: ['data'],
    
    components: {
        FakeCountryComponent,
        VisualizationCountryComponent
         
    },




    data(){
        return {
            start:0,
            data_: this.data,
            startPage:1,
            lengthPage: 0,
            datasearch:'',
            end:6,
            isPaginationActive:false
            // flag: "https://restcountries.com/v3.1/name/cuba"
        }
    },



  
    mounted(){
        this.search()  
        
    },

 
    methods: {
       


        activePagination(){
            this.lengthPage=Math.round(this.data.length / 6)
            if(this.isPaginationActive == false) this.isPaginationActive= true
            else this.isPaginationActive=false 
        },

        // revertLength(){
        //     this.startPage = 1
        //     this.start= 0
            
        // },
        search(){

            return this.data.filter(item => {
               const results=item.Slug.toLowerCase().includes(this.datasearch.toLowerCase()) 
               return results
            });
  
  
         },

 

        getInfoFromCountry(data,index){
            console.log(data)
            console.log(index)
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