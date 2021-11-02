<template>
<article>
                
                <div class="list-item">
                    <span class="check__container">
                        <img src="../../../assets/images/check-circle.svg" alt="checked">
                    </span>
                    <p class="description__check">Utiliza mascarilla</p>
                </div>

                 <div class="list-item">
                    <span class="check__container">
                        <img src="../../../assets/images/check-circle.svg" alt="checked">
                    </span>
                    <p class="description__check">Lávate las manos con frecuencia</p>
                </div>

                 <div class="list-item">
                    <span class="check__container">
                        <img src="../../../assets/images/check-circle.svg" alt="checked">
                    </span>
                    <p class="description__check">Mantén una distancia con otras personas</p>
                </div>

                 <div class="list-item">
                    <span class="check__container">
                        <img src="../../../assets/images/check-circle.svg" alt="checked">
                    </span>
                    <p class="description__check">Vacúnate cuando sea tu turno</p>
                </div>


                 <div class="list-item">
                    <span class="check__container">
                        <img src="../../../assets/images/check-circle.svg" alt="checked">
                    </span>
                    <p class="description__check">En caso de que tengas fiebre busca atención médica</p>
                </div>

                <button class="button__to__home">Explorar</button>
                 
            </article>
</template>
<script>

export default {
    
}
</script>
<style scoped>
/* list precautions */

    .button__to__home{
        width:300px;
        margin-top:30px;
        padding:8px;
        border-radius:8px;
        border:none;
        cursor:pointer;
        font-family: "ubuntu";
        color:white;
        font-size:17px;
        font-weight:500;
        background-color: rgb(128, 61, 236);;
    }
    .list-item{
        display:flex;
    
        justify-content: flex-start;
        align-items: center;
        margin-top:0px;
        padding:0;
        padding-left:10px;
        padding-right:10px;
    }
    .description__check{
        font-family:"ubuntu";
        font-size:15px;
    }
    .check__container{
        border-radius:50%;
        width:25px;
        margin-right: 12px;
        padding: .7px .6px 1px .8px;
        text-align: center;
        height:24.2px;
        background-color:rgb(128, 61, 236);
        display: flex;
        flex-wrap:wrap; 
        flex-direction: column;
        align-content: center;
        justify-content: center;
    }


</style>