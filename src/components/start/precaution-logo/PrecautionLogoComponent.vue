<template>
             <article class="precaution__image">       
                <img v-if="saveActive.id==1" class="animate"  src="../../../assets/images/precaution.svg" alt="precaution">
                <img v-if="saveActive.id==2" class="animate"  src="../../../assets/images/distance.svg" alt="distance">
                <img v-if="saveActive.id==3" class="animate"  src="../../../assets/images/wash_hand.svg" alt="wash hand">
               
            </article>
      
            <article class="pagination__logo">
                <div  v-if="saveActive.id == 1"  class="one bounceRight-one" v-on:click="saveActive.id = 1"></div>
                <div  v-if="saveActive.id != 1" class=" bounceLeft-two"  v-on:click="saveActive.id=1"></div>

                <div class="one bounceRight-one" v-if="saveActive.id == 2"  v-on:click="saveActive.id = 2"></div>
                <div v-if="saveActive.id != 2"  class=" bounceLeft-one" v-on:click="saveActive.id=2"></div>
            
                <div class="one bounceRight-one" v-if="saveActive.id == 3 "  v-on:click="saveActive.id = 3"></div>
                <div v-if="saveActive.id != 3"  class=" bounceLeft-one" v-on:click="saveActive.id = 3"></div>
            </article>
             
             
</template>

<script>
export default {
    data(){
        return {  
            saveActive:{
                id:1
            } 
        } 
    } 
}
</script>






<style scope>
       .precaution__image{
        width:210px; 
        height:135px;
        display: flex;
        justify-content: space-between;
        margin-left:20%;
        align-items: center;
        margin-bottom:40px;
    }


   
  
    .precaution__image img {
        width:inherit;
        height:inherit;
    }

    .pagination__logo {
        display:flex;
        justify-content: center;
        align-items: center;
    }
     .pagination__logo div {
         width:13px;
         height:13px;
         border:1px solid grey;
         margin:5px 3px 10px 3px;
         cursor:pointer;
         border-radius: 50%;
        transition:.3s;
       
    
     }
    
     .pagination__logo div:hover {
        background:rgba(98, 0, 255, 0.315);
        border: 1px solid white;
       
     }

    .one{
        background-color:rgb(98, 0, 255);
     }
    
      
</style>