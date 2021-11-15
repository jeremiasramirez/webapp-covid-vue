<template>
    <div class="search__fake animate__fake"></div>
     <article class="fake__countries">
         <div v-for="(item,index) in [1,2,3,4,5,6]" :key="index" class="animate__fake container__fakes__countries animate"> 
            <div class="flag__fake"></div>
            <div class="flag__text"></div>
            <div class="flag__arrow"></div>
         </div>
     </article>

     <div class="pagination__fake animate__fake"></div>

</template>


<script>
import "./FakeCountryComponent.css";


export default {
    
}
</script>