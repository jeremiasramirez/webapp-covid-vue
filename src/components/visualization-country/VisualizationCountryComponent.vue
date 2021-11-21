<template>
      <section class="visualization">

            <article  class="message bounceIn" v-if="!data">
                <p>Elige un país para ver su información completa! </p>
            </article>

            <div v-if="data">
                
                <article class="title__visual">
                    
                    <img v-if="img" :src="img" alt="logo country">
                        
                        <section v-if="!img" class="container__spinning__loading">
                            <article class="spinning__loading"></article>
                        </section>  
                
                        <h1>{{ data.Country }}</h1>
                </article>

                <article class="container__info__visual" v-if="data">
                    <div class="column-1"></div>
                    <div class="column-2"></div>
                </article>

           </div>

           
        </section>
         
</template>



<script>
import "./VisualizationCountryComponent.css";

export default {
    props:[
        'data',
        'img'
    ]

    
}
</script>