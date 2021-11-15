<template>
    <div>
      <BannerGlobalComponent />
    </div>

    <div>
        <CountriesComponent :allCountries="allCases"/>
    </div>
</template> 

<script>
import BannerGlobalComponent from "../../components/banner-global/BannerGlobalComponent.vue";
import CountriesComponent from "../../components/countries/CountriesComponent.vue";
import {ajax} from "rxjs/ajax" 
import {delay,pluck} from "rxjs/operators"

import "./PanelPage.css";


export default {
    data(){
        return {
            allCases: [],
            api_img: "https://restcountries.com/v2/name/"
        }
    },
    components:{
        BannerGlobalComponent,
        CountriesComponent
    },
    mounted(){
        this.getCovidCases()
    },
    methods: {



        





        getCovidCases(){
            this.covidCases().subscribe((cases)=>{
                this.allCases=cases; 
              
            })
        },



        getImage(img){
             ajax.get(`https://restcountries.eu/rest/v2/alpha/${img}`).pipe(pluck("response","flag")).subscribe((e)=>{
                  for(let i=0; i<this.allCases.length; i++){
                        this.allCases[i].image=e;    
                }
               
                  
            })
        },







        covidCases(){
            return  ajax.get('https://api.covid19api.com/summary').pipe(
                delay(1000), pluck('response','Countries')
            )
        } 







    }    




}
</script>