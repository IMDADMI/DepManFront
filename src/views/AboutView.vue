<template>
  <div class="about">
    <nav class="navbar navbar-expand-lg ">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><img src="../assets/logo_lafac-removebg-preview.png" alt="Logo" width="80" height="90" class="d-inline-block align-text-top"/></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active" aria-current="page" href="#">Home</a>
        <a class="nav-link" href="#">Features</a>
        <a class="nav-link" href="#">Pricing</a>
        <a class="nav-link disabled">Disabled</a>
      </div>
    </div>
    <div class="logout"> <button type="button" class="btn btn-danger">Logout</button></div>
  </div>
</nav>
<div class="Search-Table">
    <div class="search">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success" type="submit">Search</button>
    </div>
    <div class="table">
    <table class="table ">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col"> name </th>
      <th scope="col"> salary</th>
      <th scope="col">Age</th>
    </tr>
  </thead>
  <tbody v-for="item in emp" :key="item.userId">
    <tr>
      <th scope="row">{{item.id}}</th>    
    <td>  {{item.userId}}  </td>   
    <td>  {{item.title}} </td>   
    <td>12</td>
    
  </tr>
  </tbody>
</table>
</div>
</div>
  </div>
</template>
<script>
import axios from 'axios'
  export default{
    name:'AboutView',
    data(){
      return{
        emp:undefined
      }
      
    },created(){
        axios.get('https://jsonplaceholder.typicode.com/posts').then(res=>{
          this.emp = res.data

        }).catch(er=>{
          console.log(er);
        })


    }

  }

</script>
<style>

 nav{
  width : 1515px;
  
 }
 
 .logout{
    margin-right:100px ;
 }
 
 .Search-Table .table{
  width:1500px;
  margin-top: 30px;
  margin-left: 00px;
  
  
 }
 .search{
  display: flex;
  width: 500px;
  margin-left: 500px;
  margin-top: 20px;
     
 }

</style>