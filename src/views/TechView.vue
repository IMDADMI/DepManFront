<template>
    <div class="Tech">
       <div class="outEns">
            <OutComp/>
        </div>
            <div class="h1T">
                <h1>Technicien</h1>
            </div>    
        

        <div class="search_table">
            <div class="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" v-model="valeur_cherche">
                <button><img src="@/assets/chercher.png" width="40px"/></button>
                
            </div>  
            <section class="intro">
                <div class="container">
                    <div class="row justify-content-center">
                    <div class="col-12">
                        <div class="card bg-dark shadow-2-strong">
                        <div class="card-body">
                            <div class="table-responsive">
                            <table class="table table-dark table-borderless mb-0">
                                <thead>
                                <tr>
                                    <th scope="col">Nom</th>
                                    <th scope="col">Prenom</th>
                                    <th scope="col" >Email</th>
                                    <th scope="col">CIN</th>
                                    
                                    <th scope="col">Telephone</th>
                                    <th scope="col">N Bureau</th>
                                    <th scope="col">Grade</th>
                                </tr>
                                </thead>
                                <tbody v-for="i in cherche" :key="i.CIN">
                                <tr>
                                    <th>{{ i.nom }}</th>
                                    <td>{{ i.prenom }}</td>
                                    <td>{{ i.email }}</td>
                                    <td>{{ i.cin }}</td>
                                    <td>{{ i.telephone }}</td>
                                    <td>  {{ i.numeroBureau }}</td>
                                    <td>{{ i.grade }}</td>
                                    
                                    <td>  
                                        <button type="button" data-bs-toggle="modal" :data-bs-target="'#supprimer'+i.cin"><img src="@/assets/trash.png" width="40px"/></button>
                                            <!-- supprimer-->
                                            <div class="modal fade" :id="'supprimer'+i.cin" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog">
                                                    <div class="modal-content">
                                                        <div class="modal-header">
                                                            <h1 class="modal-title fs-5 text-danger">Supprimer les données</h1>
                                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                        </div>
                                                        <div class="modal-body text-dark">
                                                            Si vous suppimez un Technicien ,il sera définitivement perdu
                                                        </div>
                                                        <div class="modal-footer">
                                                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Annuler</button>
                                                            <button type="button" class="btn btn-danger"  @click="supprimer(i.personId)">Supprimer</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>    
                                    </td>
                                </tr>                               
                                </tbody>
                            </table>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>      
                </div>
  
        </section>
        </div> 
        
 



    <div class="ajoute">         
            <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">
                <img src="@/assets/add.png" width="60px" />  <span>Ajoute</span>
            </button>
        </div>

        <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Ajouter un Technicien</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>

                <div class="modal-body">   
                        <div class="mb-3">
                            <label for="exampleInputNom" class="form-label"> Nom</label>
                            <input type="email" class="form-control" id="exampleNom" v-model="nom">
                            <div id="Nom" class="form-text"></div>
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPrenom" class="form-label">Prenom</label>
                            <input type="text" class="form-control" id="exampleInputPrenom" v-model="prenom">
                        </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="email">
                        <!--<div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>-->
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputCNE" class="form-label">CNE</label>
                        <input type="text" class="form-control" id="exampleInputCNE" v-model="cne">
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPhone" class="form-label">Numero Telephone</label>
                        <input type="text" class="form-control" id="exampleInputPhone" v-model="tele">
                        
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputBureua" class="form-label">Numero Bureau</label>
                        <input type="text" class="form-control" id="exampleInputPhone" v-model="bureau">
                        
                    </div>
                    <label for="Grade" class="form-label">Grade :</label>
                    <select class="form-select" aria-label="Default select example" v-model="grade">                    
                        <option selected></option>
                        <option value="premiere">premier</option><!--Erreur-->
                        <option value="deuxieme">deuxieme</option>
                        <option value="troisieme">troisième</option><!--Erreur-->
                    </select>
                        
                </div>
                
                <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" @click="annuler()" data-bs-dismiss="modal">Annuler</button>
                    <section v-if="this.nom!='' &  this.prenom!='' & this.email!='' & this.cne!='' & this.grade!='' & this.tele!='' ">                                                                        
                            <button type="submit" class="btn btn-primary" @click="ajoute()" data-bs-dismiss="modal"> Ajoute</button>                            
                    </section> 
                </div>
                </div>
            </div>
        </div>

        
       <br><br>
    
    </div>
</template>
<script>
import OutComp from '../components/OutComp.vue';
import router from '../router'
import axios from 'axios'
    export default{
        name:'EnsgView',
        components:{
            OutComp
        },
        data(){
            return{
                nom:'',
                prenom:'',
                email:'',
                cne:'',
                tele:'',
                grade:'',                
                bureau:'',
                valeur_cherche:'',
                Tech:[]
            }
        },methods:{
            ajoute:function(){
                axios.post(
                    'http://localhost:8080/technicien',
                    { nom:this.nom ,prenom:this.prenom,email:this.email,cin:this.cne,telephone:this.tele,grade:this.grade ,numeroBureau:this.bureau}
                ).then((res)=>{
                    console.log(res);  
                    window.location.href='/tech'

                })                                   
                this.nom=''
                this.prenom=''
                this.cne=''
                this.tele=''
                this.grade=''
                this.email=''
                this.bureau=''
            },
            async supprimer(id){
                const res = await axios.delete(
                    'http://localhost:8080/technicien/'+id,
                    )
                    window.location.href='/tech'
                    console.log(res.data)
                    }
            ,annuler:function(){

                this.nom=''
                this.prenom=''
                this.cne=''
                this.tele=''
                this.grade=''
                this.email=''
                this.bureau=''

            }

        },beforeCreate(){
            console.log()
            if(localStorage.getItem('Admin')){
                this.user = JSON.parse(localStorage.getItem('Admin'));
                console.log('------->',this.user)
            }else{
                    router.push({
                    name:'login'
                    })
            }
        },created(){
           
           try {
            axios.get(
                    'http://localhost:8080/technicien',                
                ).then((res)=>{
                    this.Tech=res.data;
                  console.log(res.data)


                })
           } catch (error) {
            console.log(error);
           }



        }
        
        ,computed:{
            cherche(){
                return this.Tech.filter(i=>{
                return i.nom.match(this.valeur_cherche)
                 })
            }
            }   
    }

</script>
<style>
    .Tech{
        border: solid 0px;
        margin-left: 250px;
        width :1240px;
        
    }
    .search_table{
        width:1120px ;
        margin-left: 90px;
        margin-top:80px ;
        border: solid 0px;

    }
    .search{
        display: flex;
        width:400px ;
        margin-left: 330px  ;
        
    }
    
    .tab{
        border-radius: 15px;
        border: solid 1px;      
        
    }
    table td,
table th {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

thead th,
tbody th {
  color: #fff;
}
.intro{
    margin-top: 50px;
    
}

tbody td {
  font-weight: 500;
  color: rgba(255,255,255,.65);
}

.card {
  border-radius: .5rem;
}
button{
    background: none;
    border: solid 0px;
}
.outEns{
    margin-left: 50px;
}
.ajoute{
    margin-top:50px ;
    margin-left: 100px;
   
}
  
.h1T{
    margin-left: 500px;
}
.Tech{
    border: solid 0px;
    
}

#supprimer .modal-header h1{
    color: red;
}

#supprimer .modal-footer .btn-primary  {
    background-color: red;
    border: solid 0px;
}
#supprimer.modal-footer .btn-secondary  {
    background-color: white;
    color: black;
    border: solid 0px;
}



    
</style>