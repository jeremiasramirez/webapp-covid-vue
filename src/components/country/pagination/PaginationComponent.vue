<template>
      
      
      <article class="counter animate" v-if="!isPaginationActive && data.length">
             <div class="activePagination" v-on:click="activePagination">
                <img src="../../../assets/images/compare.svg" alt="flag">
            </div>
      </article>


       
        <article class="counter animate" v-if="isPaginationActive && data.length" >
           
           
           
            <button class="back" v-on:click="back"> 
                <img src="../../../assets/images/arrow_left.svg" alt="flag">
                 </button>
                
                <div class="counting">
                    {{startPage}} of {{lengthPage}}
                </div>
                
            <button class="next" v-on:click="next"> 
                <img src="../../../assets/images/arrow_right.svg" alt="flag">
            </button>

          

        </article>
</template>



<script>
import "./PaginationComponent.css";

export default {

    
    props: [
        'isPaginationActive',
        'data',
        'activePagination',
        'back',
        'startPage',
        'lengthPage',
        'next'
    ]




}




</script>