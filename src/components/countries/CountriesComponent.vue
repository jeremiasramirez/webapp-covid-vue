

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
    
    props: [
        'allCountries'
    ],
    
    components: {
        CountryComponent
    } 




 











}
</script>