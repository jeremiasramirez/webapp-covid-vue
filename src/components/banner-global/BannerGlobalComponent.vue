<template>
   <section class="contain__global">
       <h1 class="title__global">A nivel global</h1>


       <article class="container__global__cards">

            <div class="card__global red__card">
                <h1 class="title__card">Nuevas muertes</h1>

                <p class="title__number">+20,340</p>
            </div>

    <!-- fake card -->
            <div class="card__global__fake" v-for="(x, index) in [1,2]" :key="index">
                <h1 class="title__card__fake"></h1>

                <p class="title__number__fake"></p>
            </div>



       </article>

   </section>
</template>
<script>

import "./BannerGlobalComponent.css";

export default{

}
</script>