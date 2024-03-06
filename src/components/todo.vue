<template>
   <ul>
    <li><span class="index">{{ index + 1 }}</span> {{  item }}</li>
   </ul>
</template>
<script>
  export default {
    props:{
        item:{
            type:String
        },
        index:{
            type:String
        }
    }
  }
</script>
<style>
.index{
    display: flexbox;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: rgb(0, 219, 0);
    color: white;
    padding: 5px 5px;
    clip-path: circle(at 50%);
}
</style>