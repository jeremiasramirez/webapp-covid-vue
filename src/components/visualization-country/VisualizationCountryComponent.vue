<template>
      <section class="visualization">

            <article  class="message bounceIn" v-if="!data">
                <p>Elige un país para ver su información completa! </p>
            </article>

            <div v-if="data">
                
                <article class="title__visual"  >
                    <img v-if="img" :src="img" alt="logo country">
                    <i v-if="!img" class="fas fa-circle-notch circle animate circle-builded"></i>
                    <h1>{{ data.Country }}</h1>
                    <span class="recording"></span>
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