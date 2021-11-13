

<template>
    




    <div class="container__countries">
        <section class="countries">



            <!----------- search ------------>
            <article class="container__search">
                <input type="search" class="search" placeholder="search"> 
            </article>




            <CountryComponent />


        



            <!--------------counter pagination ----------->
            <article class="counter">
                <button class="back"> BACK </button>
                
                <div class="counting">
                    1 of 4
                </div>
                
                <button class="next"> NEXT </button>
            </article>





        </section>



        <section>
            >>>
        </section>


        <!-- visualization -->
        <section class="visualization">

            <p>visualization</p>







        </section>
    </div>








</template>

<script>
import "./CountriesComponent.css"
import CountryComponent from "../country/CountryComponent.vue"
export default {
    
    components: {
        CountryComponent
    },
    
    methods: {

        next(){
            console.log("next")
        },
        back(){
              console.log("bacb")
        }
        
    }












}
</script>