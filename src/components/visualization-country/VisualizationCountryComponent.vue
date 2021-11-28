<template>
      <section class="visualization">

            <article  class="message bounceIn" v-if="!data">
                <p>Elige un país para ver su información completa! </p>
            </article>

            <div v-if="data">
                
                <article class="title__visual">
                    
                    <img v-if="img" :src="img" alt="logo country" class="animate">
                        
                        <section v-if="!img" class="container__spinning__loading">
                            <article class="spinning__loading"></article>
                        </section>  
                
                        <h1>{{ data.Country }}</h1>
                </article>

                <article class="container__info__visual" v-if="data">
                 
                    <div class="column-1 ">
                       
                        <div class="item">
                            <p class="item__title animate">Nuevos casos</p>
                            <p class="item__value animate"> {{(data.NewConfirmed )}} </p>
                        </div>

                       <div class="item">
                            <p class="item__title animate ">Nuevas muertes</p>
                            <p class="item__value animate ">{{ (data.NewDeaths) }}</p>
                        </div>

                        <div class="item">
                            <p class="item__title animate">Nuevos recuperados</p>
                            <p class="item__value animate ">{{(data.NewRecovered) }}</p>
                        </div>
                       

                          <div class="item">
                            <p class="item__title animate">Muertes en total</p>
                            <p class="item__value animate item__value__red"> {{ dotTransform(data.TotalDeaths) }} </p>
                        </div>

                          <div class="item">
                            <p class="item__title animate"> Casos  en total</p>
                            <p class="item__value animate"> {{ dotTransform(data.TotalConfirmed) }} </p>
                        </div>
                    </div>


                    <div class="column-2">
                        
                        <div class="column__first animate">

                            <div class="item__column__first">
                                <p class="item__title__first animate"> Población </p>
                                <p class="item__value__first animate "> {{ dotTransform(dataFromCountry[0].population) }} </p>
                            </div>


                            <div class="item__column__first">
                                <p class="item__title__first animate"> Capital </p>
                                <p class="item__value__first animate "> {{  dataFromCountry[0].capital}} </p>
                            </div>

                              <div class="item__column__first">
                                <p class="item__title__first animate"> Prefijo numérico </p>
                                <p class="item__value__first animate "> +({{  dataFromCountry[0].callingCodes[0] }}) </p>
                            </div>

                             <div class="item__column__first">
                                <p class="item__title__first animate"> Region </p>
                                <p class="item__value__first animate "> {{  dataFromCountry[0].region}} </p>
                            </div>

                            <div class="item__column__first">
                                <p class="item__title__first animate"> Moneda </p>
                                <p class="item__value__first animate "> {{  dataFromCountry[0].currencies[0].code }}, {{  dataFromCountry[0].currencies[0].symbol }} </p>
                            </div>
                        </div>

                       

                    </div>
                </article>

           </div>

           
        </section>
         
</template>

 

<script>
 
import "./VisualizationCountryComponent.css"; 
 
export default {
       
    props:[
        'data',
        'img',
        'dataFromCountry'
    ],
    mounted(){
        console.log(this.dataFromCountry)
    },
    methods: {
        dotTransform(data) {
            var lastData = String(data);
            // 1,000 = 4
            if (lastData.length == 4) {
                lastData = lastData.substring(0, 1) + "," + lastData.substring(1, 4);
            }
            // 10,000 =5
            else if (lastData.length == 5) {
                lastData = lastData.substring(0, 2) + "," + lastData.substring(2, 5);
            }
            // 100,000 = 6
            else if (lastData.length == 6) {
                lastData = lastData.substring(0, 3) + "," + lastData.substring(3, 6);
            }
            // 1,000000 = 7
            else if (lastData.length == 7) {
                lastData = lastData.substring(0, 1) + "," + lastData.substring(4, 7) + "," + lastData.substring(4, 7);
            }
            //   20.550.000
            else if (lastData.length == 8) {
                lastData = lastData.substring(0, 2) + "," + lastData.substring(2, 5) + "," + lastData.substring(5, 8);
            }
            //   100.000.000
            else if (lastData.length == 9) {
                lastData = lastData.substring(0, 3) + "," + lastData.substring(3, 6) + "," + lastData.substring(6, 9);
            }
            //   1.000.000.000
            else if (lastData.length == 10) {
                lastData = lastData.substring(0, 1) + "," + lastData.substring(1, 4) + "," + lastData.substring(4, 7) + "," + lastData.substring(7, 10);
            }
            //   50.000.000.000
            else if (lastData.length == 11) {
                lastData = lastData.substring(0, 2) + "," + lastData.substring(2, 6) + "," + lastData.substring(4, 7) + "," + lastData.substring(7, 10);
            }
            // 150.000.000.000
            else if (lastData.length == 12) {
                lastData = lastData.substring(0, 3) + "," + lastData.substring(3, 6) + "," + lastData.substring(4, 7) + "," + lastData.substring(7, 10);
            }
            else {
                lastData = "0";
            }
            return lastData.toString();
        }
    }

    
}


</script>