<!-- template -->

<template>
  <div class="content">
   <div class="title">
    <h1>ToDo List</h1>
    <img src="../public/favicon.ico">
   </div>
   <div class="control">
    <input autofocus @keydown.enter="add" v-model="value0" class="input" type="text" placeholder="enter your todo list">
    <button @click="add">add to list</button>
  </div>
    <todo-item @click="this.list.splice(index,1)" class="com-1" style="list-style-type: none" v-for="(i,index) in list" key="i" :item="i" :index="index"></todo-item>
    <p v-show="checkAlert">{{ alertShow }}</p>
  </div>
</template>
<!-- script -->

<script>
export default {
   data(){
    return {
      list:[],
      value0:'',
      alertShow:"Error already element in here",
      checkAlert:false
    }
   }
   ,
   methods:{
    rm(e){
      console.log(e.target)

    },
    add(){
      if(this.list.includes(this.value0)){
        this.checkAlert = true
      }else if(this.list.length == 1000){
        alert("ooh this is max length")
      }
      else{
        this.list.push(this.value0)
        this.checkAlert = false
      }
      this.value0 = ""
      
    }
   }
}
</script>
<!-- stylesheet -->

<style>
.content{
  padding: 15px;
  box-sizing: border-box;
  box-shadow: 0 0 15px ;
  margin: 15px;
  border-radius: 10px;
  position: relative;
  overflow: auto;
  overflow-wrap: break-word;
  width: 500px;
  height: 70vh;
  
}
.control{
  display: flex;
  margin: 5px;
  justify-content:center;
  gap: 150px, 0px;
  

}
.input{
  margin-right: 4px;
  padding: 6px;
  border: 0;
  outline: none;
  position: relative;
  overflow-wrap: break-word;
  border: 2px solid rgb(0, 236, 106);
  border-radius: 5px;
  transition: all 0.3s;
  width:60%;

}
.input:focus{
  width:80%;
  
}
.title{
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: white;
  justify-content: center;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
button{
  background: transparent;
  padding: 6px;
  border-radius: 5px;
  outline: none;
  transition: all 0.3s;
  cursor: pointer;
}
button:hover{
  background-color: black;
  color: white;
}
.com-1
{
  margin-left: 15px;
  padding: 10px;
  box-shadow: 0 0 10px rgb(207, 206, 206);
  margin: 5px;

}
.com-1:hover{
  background-color: beige;
  color: white;
  border-radius: 5px;
  padding: 10px;
}
::-webkit-scrollbar{
  background-color: rgb(235, 231, 231);
}
::-webkit-scrollbar-thumb{
  background-color: rgb(0, 214, 96);
}
</style>
