

<template>
    




    <div class="container__countries">
        <section class="countries">
   

            <CountryComponent :data="allCountries"/>
 
        </section>






        <!-- separation of countries and visualization -->
        <section class="separation zoomIn">
              <img src="../../assets/images/arrow_right.svg" alt="flag"> 
        </section>








        <!-- visualization -->
        <section class="visualization">

            <article  class="message bounceIn">
                <p>Elige un país para ver su información completa! </p>
            </article>

 
        </section>






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
    },
    mounted(){
     
        
    }
    




 











}
</script>