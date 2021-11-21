<template>
      <section class="visualization">

            <article  class="message bounceIn" v-if="!data">
                <p>Elige un país para ver su información completa! </p>
            </article>
 
           <article class="title__visual" v-if="data">
               <img :src="img" alt="logo country">
               <h1>{{ data.Country }}</h1>
               <span class="recording"></span>
           </article>

           <article class="container__info__visual" v-if="data">
               <div class="column-1"></div>
                <div class="column-2"></div>
           </article>
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