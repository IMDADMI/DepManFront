<template>
    <div class="Demandefour">
       <div class="outDemandeFour">
            <OutComp/>
        </div>
        <div class="h1DF">
           <h1>Fourniture</h1>
        </div>
         
                
            
                <div class="search_tableDM">
                    <div class="searchDM">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" v-model="valeur_cherche">
                        <button><img src="@/assets/chercher.png" width="40px"/></button>
                        
                    </div>  
                      
                    <section class="introDM">
                        <h5>Liste Des fourniture</h5>  
                        <div class="containerDM">
                            <div class="row justify-content">
                            <div class="col-22">
                                <div class="card bg-dark shadow-2-strong">
                                <div class="card-body">
                                    <div class="table-responsive">
                                    <table class="table table-dark table-borderless mb-0">
                                        <thead>
                                        <tr>
                                            
                                            <th scope="col" width="800px">Type</th>
                                            <th scope="col" width="700px">Nombre</th> 
                                                                                                                 

                                            <th scope="col" width="200px"> Demander</th>
                                                                                                                    

                                            
                                        </tr>
                                        </thead>
                                        <tbody v-for="i in cherche" :key="i.fournitureId">
                                        <tr>
                                            
                                            <td>{{ i.type }}</td> 
                                            <td>{{ i.nombre }}</td>    
                                                                                                                                                                                                                                                                                                                                      
                                            <td>
                                                &nbsp; &nbsp;<button type="button" data-bs-toggle="modal" :data-bs-target="'#demandefourn'+i.fournitureId"><img src="@/assets/demande-de-citation.png" width="40px"/></button>
                                                <div class="modal fade" :id="'demandefourn'+i.fournitureId" tabindex="-1" :aria-labelledby="'#exampleModalLabel'+i.fournitureId" aria-hidden="true">
                                                <div class="modal-dialog">
                                                    <div class="modal-content">
                                                        <div class="modal-header">
                                                            <h1 class="modal-title fs-5 text-dark">Demande un fourniture</h1>
                                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                        </div>
                                                        <div class="modal-body">
                                                            <div class="mb-3">
                                                                    <label for="nombre" class="form-label">Nombre</label>
                                                                    <input type="number" class="form-control" id="nombre" v-model="nombre">
                                                                </div>
                                                        </div>
                                                        <div class="modal-footer">
                                                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Annuler</button>
                                                            <button type="button" class="btn btn-primary" @click="demande(i.fournitureId)">Demande</button>
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
                    <section class="introL">
                       <div class="h5L">
                            <h5>Liste Des Demandes</h5>
                        </div> 
                        <div class="containerL">
                            <div class="row justify-content">
                            <div class="col-22">
                                <div class="card bg-dark shadow-2-strong">
                                <div class="card-body">
                                    <div class="table-responsive">
                                    <table class="table table-dark table-borderless mb-0">
                                        <thead>
                                        <tr>
                                            
                                            <th scope="col" width="800px">Type</th>
                                            <th scope="col" width="800px">Quantité</th>                                                                        
                                            <th scope="col" width="200px" >Accepte</th>
                                            
                                            
                                        </tr>
                                        </thead>
                                        <tbody v-for="i in EnFou" :key="i.fourniture.fournitureId">
                                        <tr>
                                            
                                            <td>{{ i.fourniture.type }}</td> 
                                            <td>{{ i.number }}</td>                                   
                                            
                                                                                                                
                                            
                                                <section v-if="i.isAccepted==null">                                            
                                                    <td><img src="@/assets/attendre.png" width="40px"/></td>
                                                </section>    
                                                <section v-else-if="i.isAccepted==true">
                                                <td>  <img src="@/assets/jaccepte.png" width="40px"/></td>
                                                </section>
                                                <section v-else-if="i.isAccepted==false">
                                                <td> <img src="@/assets/ne-pas-aimer.png" width="40px"/></td>
                                                </section>
                                            
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
                          
            
            <br><br>

    </div>
</template>
<script>
import router from '@/router'
import OutComp from '@/components/OutComp.vue';
import axios from 'axios'
    export default{        
        components:{
            OutComp
        },
        data(){
            return{
                attend:0,
                isAccepte:null,
                nInven:undefined,
                type:'',
                dateAcquisition:undefined,
                ensg:'',
                dateAffictation:undefined,
                valeur_cherche:'',
                nombre:0,
                user:null,
                fourn:[],
                fournD:[],
                EnFou:[]
            }
        },
        created(){
           
            if(localStorage.getItem('User')){
                try{
                    
                    this.user = JSON.parse(localStorage.getItem('User'));
                    this.fourn=this.user.fournitureOrders;
                    for(let i = 0 ; i<this.fourn.length;i++){
                        console.log(this.fourn[i] )
                    }
                    axios.get(
                        'http://localhost:8080/fourniture'
                    ).then(res=>{
                        this.fournD=res.data;
                        console.log('---AAA-->' ,this.fourn)

                    }).catch(er=>{
                        console.log(er);
                    })
                    axios.get(
                        'http://localhost:8080/enseignant/'+this.user.personId
                    ).then(res=>{
                        this.EnFou=res.data.fournitureOrders
                        console.log('----->',this.EnFou)

                    }).catch(er=>{
                        console.log(er);
                    })
                  
                }catch(e){
                    localStorage.removeItem('User');

                    router.push({
                     name:'login'
                })
                }
            }
        }
        ,methods:{
            async demande(fournId){
                const res = await axios.post(
                    'http://localhost:8080/order/fourniture',
                    {fournitureId:fournId,personId:this.user.personId,nombre:this.nombre}
                                                                    
                    )                    
                  
                    window.location.href='/demandeFourn'
                    console.log('Nombre :',this.res.data)
                    this.user.fournitureOrders.push(res.data);
                    localStorage.setItem('User', JSON.stringify(this.user)); 

                /*
                axios.post(
                    'http://localhost:8080/order/fourniture',
                    {fournitureId:fournId,personId:this.user.personId}
                ).then((res)=>{
                    this.user.fournitureOrders.push(res.data);
                localStorage.setItem('User', JSON.stringify(this.user));                                     
                    this.fourn=this.user.fournitureOrders;
                  console.log(res.data)


                }).catch(e=>console.log(e))  
                */
              
            }
        }
        ,computed:{
            cherche(){
                return this.fournD.filter(i=>{
                return i.type.match(this.valeur_cherche)
                 })
            }
            }   
    }

</script>
<style>
    .Demandefour{
        margin-left: 250px;
        width:1250px ;    
         
        
    }

    .lise_Fourniture{
        margin-top: 80px;
        margin-left: 480px;

    }

    .search_tableDM{
        
        margin-left: 170px;
        height: 500px;
        margin-top:100px ;
        border: solid 0px;
    }
    .search_tableDM h5{
        margin-left: 320px;
        margin-top: 40px;
        width:820px ;
    }
    .searchDM{
        display: flex;
        width:400px ;
        margin-left: 300px ;
        
    }
  
    
    .tab{
        border-radius: 15px;
        border: solid 0px;      
        
    }
    .containerDM{
        margin-left: 0px;
    }
    .containerL{
        margin-left: 85px;
        
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

.introL{
    margin-top: 10px;
    border: solid 0px;    
    margin-left: 160px;
    width:900px ;
}   
    .introL h5{
        margin-left: 380px;
        margin-top: 0px;
    }
.introDM{
    margin-top: 20px;
    border: solid 0px;
    margin-left: 80px;
    width:800px ;
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
.outDemandeFour{
    margin-left: 50px;
}


.h1DF{
    margin-left: 520px;
}
.Demandefour{
    border: solid 0px;
    
}





    
</style>