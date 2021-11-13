<template>
        <article class="countrie">
                
            <div class="country" v-for="(country,index) in [1,2,3,4,5,6]" :key="index">
                    <div class="flag">
                        <img src="https://images.visitarepublicadominicana.org/bandera-de-republica-dominicana.jpg" alt="flag">
                    </div>
                    <p>Republica dominicana</p>
                    <div>{{country}}</div>
                </div>
        </article>
</template>


<script>
import "./CountryComponent.css";


export default {
    
}
</script> 