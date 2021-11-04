<template>
   <div class="centered" v-if="isMounted">
        <h1 class="title__precautions animate">Precauciones</h1>
        
        <section class="container__precaution animate">
      
            <PrecautionLogoComponent />
          
            <ListItemsComponent />

    </section>
     
   </div>
</template>

<script>
import ListItemsComponent from "../../components/start/list-items/ListItemsComponents"
import PrecautionLogoComponent from "../../components/start/precaution-logo/PrecautionLogoComponent"
import "./StartPage.css"
export default {
    data(){
        return {
            isMounted: false
        }
    },
    components: {
        ListItemsComponent,
        PrecautionLogoComponent
    },
    mounted(){
        this.isMounted=true;
    },
    beforeUnmount(){
        this.isMounted=false;
    }
}
</script>
<style scoped> </style> 