<template>
    <div class="Demandematr">
       <div class="outDemandeMatr">
            <OutComp/>
        </div>
        <div class="h1DM">
           <h1>Materiel</h1>
        </div>

        <div class="search_table_Matr">
            <div class="search_Matr">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" v-model="valeur_cherche">
                <button><img src="@/assets/chercher.png" width="40px"/></button>
                
            </div>  
            
            <section class="introD">
                <h5>Liste Des Materiel</h5>
                <div class="containerMM">
                    <div class="row justify-content-center">
                    <div class="col-20">
                        <div class="card bg-dark shadow-2-strong">
                        <div class="card-body">
                            <div class="table-responsive">
                            <table class="table table-dark table-borderless mb-0">
                                <thead>
                                <tr>
                                    <th scope="col" width="800px" >N Inventaire</th>
                                    <th scope="col" width="800px">Type</th>
                                    <th scope="col" width="800px" >Date acquisition</th>
                                    <th scope="col" width="800px" >Date Affectation</th>
                                    <th scope="col" width="300px" >Demander</th>
                                    
                                    
                                </tr>
                                </thead>
                                <tbody v-for="i in chercher" :key="i.numeroInventaire">
                                <tr>
                                    <th>{{i.numeroInventaire}}</th>
                                    <td>{{ i.type }}</td>                                    
                                    <td>{{ i.dateAcquisition }}</td>
                                    <td>{{ i.dateAffectation }}</td>
                                                                                                        
                                     
                                        
                                            <td>&nbsp; &nbsp; &nbsp;<button @click="demande(i.numeroInventaire)"><img src="@/assets/demande-de-citation.png" width="30px"/></button></td>
                                        
                                        
                                    
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
    

        
        <section class="introMD">
            <div class="H5D">
                <h5>Liste Des Demandes</h5>
            </div>
                <div class="containerMD">
                    <div class="row justify-content-center">
                    <div class="col-20">
                        <div class="card bg-dark shadow-2-strong">
                        <div class="card-body">
                            <div class="table-responsive">
                            <table class="table table-dark table-borderless mb-0">
                                <thead>
                                <tr>
                                    <th scope="col" width="800px">N Inventaire</th>
                                    <th scope="col" width="800px">Type</th>
                                    <th scope="col" width="800px" >Date acquisition</th>
                                    <th scope="col" width="800px" >Date Affectation</th>
                                    <th scope="col" width="300px" >Demander</th>
                                    
                                    
                                </tr>
                                </thead>
                                <tbody v-for="i in EnMatr" :key="i.material.numeroInventaire">
                                <tr>
                                    <th>{{i.material.numeroInventaire}}</th>
                                    <td>{{ i.material.type }}</td>                                    
                                    <td>{{ i.material.dateAcquisition }}</td>
                                    <td>{{ i.material.dateAffectation }}</td>

                                                                                                                                            
                                     
                                        <section v-if="i.isAccepted==null">
                                            <td>&nbsp; &nbsp;<img src="@/assets/attendre.png" width="40px"/></td>
                                        </section>    
                                        <section v-else-if="i.isAccepted==true">
                                           <td> &nbsp; &nbsp; <img src="@/assets/jaccepte.png" width="40px"/></td>
                                        </section>
                                        <section v-else-if="i.isAccepted==false">
                                           <td>&nbsp; &nbsp; <img src="@/assets/ne-pas-aimer.png" width="40px"/></td>
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
                user:null,
                mater:null,
                matr1:[],
                EnMatr:[],
            }
        }  
        ,methods:{
            demande:function(idMaterial){
                axios.post(
                    'http://localhost:8080/order/material',
                    {materielId:idMaterial,personId:this.user.personId}
                ).then((res)=>{
                    this.user.materialOrders.push(res.data);
                localStorage.setItem('User', JSON.stringify(this.user));                                     

                  console.log(res.data)
                  window.location.href='/demandeMatr'

                }).catch(e=>console.log(e))          
            }
        }
        ,created(){
           
            if(localStorage.getItem('User')){
                try{
                    
                    this.user = JSON.parse(localStorage.getItem('User'));
                    this.mater=this.user.materialOrders;
                  
                    axios.get(
                        'http://localhost:8080/material'
                    ).then(res=>{
                        this.matr1=res.data;
                        console.log('---AAA-->' ,this.matr1)

                    }).catch(er=>{
                        console.log(er);
                    })
                    axios.get(
                        'http://localhost:8080/enseignant/'+this.user.personId
                    ).then(res=>{
                        this.EnMatr=res.data.materialOrders
                        console.log('----->',this.EnMatr)

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
        
        
        
       
        ,computed:{
            chercher(){
                return this.matr1.filter(j=>{
                return j.type.match(this.valeur_cherche)
                 })
            }

            }   
    }

</script>
<style>
    .Demandematr{
        margin-left: 250px;
        width:1250px ;  
        
    }

    .search_table_Matr{
        margin-left: 0px;
        margin-top:80px ;
        border: solid 0px;
    }
    .search_Matr{
        
        display: flex;
        width:400px ;
        margin-left: 460px  ;
        width:420px ;

        
    }
    .containerMD{
        margin-left: 50px;
        border: solid 0px;
    }
    .containerMM{
        margin-left: 50px;

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
.introD{
    margin-top: 50px;
    
}

.search_table_Matr h5{
    margin-left: 560px;
    margin-top: 50px;
}
.introMD{
    margin-top: 150px;
    
    border: solid 0px;
}
 .H5D{
    margin-left: 550px;
    margin-top: 70px;
    
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
.outDemandeMatr{
    margin-left: 50px;
}


.h1DM{
    margin-left: 530px;
}
.Demandematr{
    border: solid 0px;
    
}





    
</style>