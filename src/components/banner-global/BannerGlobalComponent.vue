<template>
   <section class="contain__global">
       <h1 class="title__global">A nivel global</h1>


       <article class="container__global__cards">

            <div class="card__global red__card">
                <h1 class="title__card">Nuevas muertes</h1>

                <p class="title__number">+20,340</p>
            </div>

    <!-- fake card -->

        <FakeCardComponent v-if="isLoading" />



       </article>

   </section>
</template>
<script>
import FakeCardComponent from "../../components/fake-card/FakeCardComponent";

import "./BannerGlobalComponent.css";

export default{
    data(){
        return {
            isLoading: false
        }
    },
    components: {
        FakeCardComponent
    }


}
</script>