<template>
      <section class="visualization">

            <article  class="message bounceIn">
                <p>Elige un país para ver su información completa! </p>
            </article>
 
            <p v-if="data">{{data.Country}}</p>
        </section>
</template>



<script>
import "./VisualizationCountryComponent.css";

export default {
    props:[
        'data'
    ]
}
</script>