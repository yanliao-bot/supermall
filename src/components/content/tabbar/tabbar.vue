<template>
   <div id="tab-bar">
        <slot></slot>
   </div>
   
</template>

<script>
export default {
   name:'TabBar'
}
</script>

<style>
 #tab-bar {
      display: flex;
     /* justify-content: space-around; */
        /* height: 49px; */
        background-color:#D1CFCF;
        position:fixed;
        left:0;
        right:0;
        bottom: 0;
        box-shadow: 0 -3px 1px rgba(100,100,100,0.2);
   }

  

</style>