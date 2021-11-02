<template>
   <div class="centered">
        <section class="container__precaution animate">
      
            <PrecautionLogoComponent />
            <ListItemsComponent />

    </section>
   </div>
</template>

<script>
import ListItemsComponent from "../../components/start/list-items/ListItemsComponents"
import PrecautionLogoComponent from "../../components/start/precaution-logo/PrecautionLogoComponent"
export default {
    components: {
        ListItemsComponent,
        PrecautionLogoComponent
    }
}
</script>
<style scoped>


    




    .centered{
        display: flex;
        flex-wrap:wrap; 
        flex-direction: column;
        align-content: center;
        justify-content: center;
    }
    .container__precaution{
        display: flex;
        
        flex-direction: column;
        align-content: center;
        overflow:hidden;
        justify-content: center;
        height:540px;
        width: 470px ;
        padding:10px;
        padding-top:10px;
        flex-wrap:wrap; 
        border-radius:8px;
        border:1px solid #eee;
    }   
 



 
</style> 