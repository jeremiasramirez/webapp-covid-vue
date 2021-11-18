<template>
  <article class="countrie"  v-if="data.length">
                
            <div class="country animate" v-for="(country,index) in search().slice(start,end)" v-bind:key="index" v-on:click="getInfoFromCountry(country,index)">
                    <div class="flag">
                      
                        <img src="../../../assets/images/flag.svg" alt="flag">
                    </div>
                    <p>{{ country.Country }}</p>
                      <div class="flag">
                      
                        <img src="../../../assets/images/arrow.svg" alt="flag">
                    </div>
                </div>
        </article>  
</template>


<script>

 

export default {
    props: [
        'data',
        'search',
        'start',
        'end',
        'getInfoFromCountry'


    ]

}
</script>