

<template>
     

    <div class="container__countries">
        
        <CountryComponent :data="allCountries" />
  
    </div>








</template>

<script>

//imports
import "./CountriesComponent.css"
import CountryComponent from "../country/CountryComponent.vue";
 



export default {
    data(){
        return { }
    },
    props: [
        'allCountries'
    ],
    
    components: {
        CountryComponent
    },
    method:{
        
        
    }
    




 











}
</script>