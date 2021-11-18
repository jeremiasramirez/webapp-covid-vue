<template>
            
            <div class="card__global__fake animate" v-for="(x, index) in [1,2,3,4,5,6]" :key="index">
                <h1 class="title__card__fake"></h1>

                <p class="title__number__fake"></p>
            </div>
</template>


<script>
import "./FakeCardComponent.css";


export default {
    
}
</script>