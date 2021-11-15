<template>
     <article class="fake__countries">
         <div v-for="(item,index) in [1,2,3,4,5,6]" :key="index" class="container__fakes__countries animate"> 
            <div class="flag__fake"></div>
            <div class="flag__text"></div>
            <div class="flag__arrow"></div>
         </div>
     </article>

</template>


<script>
import "./FakeCountryComponent.css";


export default {
    
}
</script>