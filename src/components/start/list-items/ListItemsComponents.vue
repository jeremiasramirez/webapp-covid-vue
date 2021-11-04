<template>
<article>
                
                <div class="list-item bounceLeft-one">
                    <span class="check__container">
                        <img src="../../../assets/images/check-circle.svg" alt="checked">
                    </span>
                    <p class="description__check">Utiliza mascarilla</p>
                </div>

                 <div class="list-item bounceLeft-two">
                    <span class="check__container">
                        <img src="../../../assets/images/check-circle.svg" alt="checked">
                    </span>
                    <p class="description__check">Lávate las manos con frecuencia</p>
                </div>

                 <div class="list-item bounceLeft-three">
                    <span class="check__container">
                        <img src="../../../assets/images/check-circle.svg" alt="checked">
                    </span>
                    <p class="description__check">Mantén una distancia con otras personas</p>
                </div>

                 <div class="list-item bounceLeft-four">
                    <span class="check__container">
                        <img src="../../../assets/images/check-circle.svg" alt="checked">
                    </span>
                    <p class="description__check">Vacúnate cuando sea tu turno</p>
                </div>


                 <div class="list-item bounceLeft-five">
                    <span class="check__container">
                        <img src="../../../assets/images/check-circle.svg" alt="checked">
                    </span>
                    <p class="description__check">En caso de que tengas fiebre busca atención médica</p>
                </div>

                <button  v-if="!isLoading" v-on:click="topanel" class="button__to__home animate">Explorar</button>
               <i v-if="isLoading" class="fas fa-circle-notch circle animate"></i>
            </article>
</template>
<script>
 import "./ListItemsComponents.css"
export default {
 
    data(){
        return{
            isLoading:false
        }
    },

    methods: {
        topanel(){
            this.isLoading=true;

            setTimeout(()=>{
                this.isLoading=false
                this.$router.push("/panel")
            },2000)
           
        }
    }
}
</script>
<style scoped> </style>