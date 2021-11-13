<template>
             <article class="precaution__image">

                 <!-- back image -->
                 <button class="back__image"> back</button>
                 
                <img  class="animate" src="../../../assets/images/precaution.svg" alt="precaution">
                
                <!-- next image -->
                <button class="next__image">next</button>
            </article>
 
</template>


<style scope>
       .precaution__image{
        width:220px; 
        display: flex;
        justify-content: space-between;
        margin-left:11%;
        align-items: center;
        margin-bottom:40px;
    }


    .back__image{
        height: 40px;
        width:70px;
        position: relative;
        left:-50px;
        background-color: #eee;
        color:#888;
        border-radius:50%;
        border:none;
    }
    .next__image{
        position: relative;
        left:50px;
        height: 40px;
        width:70px;
        background-color: #eee;
        color:#888;
         border:none;
        border-radius:50%;
    }
    .precaution__image img {
        width:inherit;
    }
</style>