<template>
  <div class="home">




    <div class="tous">
      <img id="img1" src="@/assets/Universite-Mohammed-Premier-Oujda-Concours-Emploi-Recrutement-750x393-removebg-preview.png" width="400px" height="150px" />
      <img id="img2" src="@/assets/logo_lafac-removebg-preview.png" width="480px" height="120px" />
      
    </div>    
      <div class="input">
        <div class="txt">
          <h1>Departement Informatique</h1>
        </div>
      <div class="log">
          
          <div class="form-floating mb-3">
            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" v-model="user">
            <label for="floatingInput">Email address</label>
          </div>
          <div class="form-floating">
            <input type="password" class="form-control" id="floatingPassword" placeholder="Password" v-model="mdp">
            <label for="floatingPassword">Password</label>  <br>
          </div>
          <section v-if="this.user!='' && this.mdp!=''">
          <div class="d-grid gap-2"> 
            
              <button class="btn btn-primary" type="button" @click="verifier()">Log in</button>
            
          </div>   
        </section>                
      </div>
    </div>
      
    
  </div>
</template>

<script>

import axios from 'axios'
import router from '../router'


export default {
  name: 'LoginView',
  data(){
    return{
          Admin:{},
         user:'',
          mdp:'',
          obj:null,
          fourn:[],
          fourniture:null,
          fournType:[],
          fournNombre:[]
    }
  },methods:{
    
     verifier :function(){ 
        this.Admin={
          user:this.user,
          mdp:this.mdp

        }      
      if(this.user=='admin' && this.mdp=='admin'){
        localStorage.setItem('Admin', JSON.stringify(this.Admin)); 
         
        try {
            
            axios.get(
                    'http://localhost:8080/fourniture/A',                
                ).then((res)=>{
                    this.fourn=res.data;
                  console.log(this.fourn)
                  localStorage.setItem('Founr', JSON.stringify(this.fourn));
           
          
          
           
           
                })
           } catch (error) {
            console.log(error);
           }                                           
              router.push({
                path:'/'
              })    
          console.log('ss');
      }
      
     
    
      axios.post(        
            'http://localhost:8080/enseignant/login',
            { email:this.user ,password:this.mdp }
          ).then((res)=>{
            console.log(res.data); 
            this.obj=res.data; 
            localStorage.setItem('User', JSON.stringify(this.obj));                                     
              router.push({
                name:'Informations'
              })    
                   
          })   


       
          

           
             
          
         
     }
  }

  
}
</script>
<style>
    body{
      background-color:white;
      border: 1px;
      width: 1100px;
      
      
    }
    
    .tous {
      height: 100px;
      display: flex;
    }
    
    .tous #img1 {
      margin-top: 20px;
      margin-left: 90px;
    }    

    .tous #img2{
      margin-top: 45px;
      margin-left:900px;
    }


 
    .input{
      margin-top:20px ;
      display: flex;
      width: 1500px;
      border: solid 0px;
      
    }
    .input .txt{
      border: solid 0px;
      width: 600px;
      margin-top: 200px;
      margin-left: 120px;

    }
    
    .input .log{      
      padding: 20px 20px 20px 20px;
      margin-top: 180px;
      margin-left:320px ;
      width:400px ;
      border: solid 0.5px;
      border-style: outset;
      background-color: white;
      border-radius: 15px;
    }

    .log .form-control{
      background-color:white ;
    }  
</style>
