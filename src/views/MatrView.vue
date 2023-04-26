<template>
    <div class="matr">
       <div class="outMatr">
            <OutComp/>
        </div>
        <div class="h1M">
           <h1>Materiel</h1>
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
                                    <th scope="col" width="300px">N Inventaire</th>
                                    <th scope="col" width="300px">Type</th>
                                    <th scope="col" >Date acquisition</th>                                                                        
                                </tr>
                                </thead>
                                <tbody v-for="i in cherche" :key="i.numeroInventaire">
                                <tr>
                                    <th>{{i.numeroInventaire}}</th>
                                    <td>{{ i.type }}</td>                                    
                                    <td>{{ i.dateAcquisition }}</td>
                                                                                                            
                                    <td>  
                                        <button type="button" data-bs-toggle="modal" :data-bs-target="'#supprimer'+i.numeroInventaire"><img src="@/assets/trash.png" width="40px"/></button>
                                        <div class="modal fade" :id="'supprimer'+i.numeroInventaire" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div class="modal-dialog">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h1 class="modal-title fs-5 text-dark">Supprimer les données</h1>
                                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                                <div class="modal-body text-dark">
                                                    Si vous suppimez un materiel ,il sera définitivement perdu
                                                </div>
                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Annuler</button>
                                                    <button type="button" class="btn btn-danger" @click="supprimer(i.numeroInventaire)">Supprimer</button>
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
            <button type="button" data-bs-toggle="modal" data-bs-target="#ajoute">
                <img src="@/assets/add-file.png" width="60px" />  <span>Ajoute</span>
            </button>  </div>    
            
            <div class="modal fade" id="ajoute" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Ajouter un materiel</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>

                <div class="modal-body">   
                        <div class="mb-3">
                            <label for="N_invent" class="form-label"> N Inventaire</label>
                            <input type="number" class="form-control" id="nInvent" v-model="nInven">
                            <div id="Inven" class="form-text"></div>
                        </div>
                        <div class="mb-3">
                            <label for="Type" class="form-label">Type</label>
                            <input type="text" class="form-control" id="Type" v-model="type">
                        </div>
                    <div class="mb-3">
                        <label for="Dateacquisition" class="form-label">Date acquisition</label>
                        <input type="date" class="form-control" id="DateAcquisition"  v-model="dateAcquisition">
                        <!--<div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>-->
                    </div>
               

                </div>
                
                <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Annuler</button>
                    <section v-if="this.nInven!=undefined && this.type!='' && this.dateAcquisition!=''">                                                                        
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
//import router from '../router'
import axios from 'axios'
    export default{        
        components:{
            OutComp
        },
        data(){
            return{
                nInven:0,
                type:'',
                dateAcquisition:'',
                ensg:'',
                dateAffictation:undefined,
                valeur_cherche:'',
                matr:[],
                matrAjou:{}
            }
        },methods:{
            ajoute:function(){
              
                axios.post(
                    'http://localhost:8080/material',
                    {numeroInventaire:this.nInven,type:this.type,dateAcquisition:this.dateAcquisition},
                    console.log(this.nInven,this.dateAcquisition,this.type,this.dateAcquisition)                  

                ).then(()=>{  
                    window.location.href='/matr'

                })                                  
                this.nInven=undefined
                this.type=''
                this.dateAcquisition=undefined
                this.ensg=''
                this.dateAffictation=undefined
            }, async supprimer(id){
                const res = await axios.delete(
                    'http://localhost:8080/material/'+id,
                    )
                    window.location.href='/matr'
                    console.log(res.data)
                    }
        }, 
        created(){
           
           try {
            axios.get(
                    'http://localhost:8080/material/A',                
                ).then((res)=>{
                    this.matr=res.data;
                  console.log(res.data)
                })
           } catch (error) {
            console.log(error);
           }



        }
        ,computed:{
            cherche(){
                return this.matr.filter(i=>{
                return i.type.match(this.valeur_cherche)
                 })
            }
            }   
    }

</script>
<style>
    .matr{
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
.outMatr{
    margin-left: 50px;
}
.ajoute{
    margin-top:50px ;
    margin-left: 100px;
}

.h1M{
    margin-left: 500px;
}
.matr{
    border: solid 0px;
    
}
#supprimer .modal-header h1{
    color: red;
}

#supprimer .modal-footer .btn-primary  {
    background-color: red;
    border: solid 0px;
}
#supprimer .modal-footer .btn-secondary  {
    background-color: white;
    color: black;
    border: solid 0px;
}




    
</style>
