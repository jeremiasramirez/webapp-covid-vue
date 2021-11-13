<template>
    <div>
      <BannerGlobalComponent />
    </div>

    <div>
        <CountriesComponent />
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







        covidCases(){
            return  ajax.get('https://api.covid19api.com/summary').pipe(
                delay(10), pluck('response','Countries')
            )
        } 







    }    




}
</script>