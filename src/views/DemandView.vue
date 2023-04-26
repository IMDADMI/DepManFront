<template>
    <div class="demander">
       <div class="outDemander">
            <OutComp/>
        </div>
            <div class="h1E">
                <h1>Demandes</h1>
             
            </div>    
        

        <div class="search_tableFR1">
            <div class="searchFR1">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" v-model="valeur_chercheM">
                <button><img src="@/assets/chercher.png" width="40px"/></button>
                
            </div>  
            <section class="intro">
                <h5>List des materiel</h5>
                <div class="container">
                    <div class="row justify-content-center">
                    <div class="col-12">
                        <div class="card bg-dark shadow-2-strong">
                        <div class="card-body">
                            <div class="table-responsive">
                            <table class="table table-dark table-borderless mb-0">
                                <thead>
                                <tr>
                                    <th></th>
                                    <th scope="col">N Demande</th>
                                    <th scope="col">Ensg</th>
                                    <th scope="col" >N Inventaire</th>
                                    <th scope="col">type</th>
                                    <th scope="col">Date Affectation</th>
                                    
                                    
                                    <th scope="col">Accepte</th>
                                    <th scope="col">Refuse</th>
                                    
                                </tr>
                                </thead>
                                <tbody v-for="i in chercheM" :key="i.numeroInventaire">
                                <tr>
                                    
                                   <td>
                                        <section v-if="i.isAccepted==true"><img src="../assets/verifier (1).png" width="20px"/></section>
                                        <section v-else-if="i.isAccepted==false"><img src="../assets/cross.png" width="20px"/></section>
                                    </td> 
                                    <th>{{ i.materielOrderId }}</th>
                                    <td>{{ i.person.nom }}</td>
                                    <td>{{ i.material.numeroInventaire }}</td>
                                    <td>{{ i.material.type }}</td>
                                    <td>{{ i.material.dateAffectation }}</td>
                                   
                                      <td><section v-if="i.isAccepted==null"> <button @click="accepte(i.materielOrderId)"><img src="../assets/jaccepte.png" width="40px" /></button></section></td>
                                       <td><section v-if="i.isAccepted==null"><button @click="refuse(i.materielOrderId)"><img src="../assets/ne-pas-aimer.png" width="40px" /></button></section></td>
                                        <td>
                                            <button type="button" data-bs-toggle="modal" :data-bs-target="'#consulter'+i.materielOrderId"><img src="../assets/affiche.png" width="50px" /></button>
                                            <div class="modal fade" :id="'consulter'+i.materielOrderId" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                            <div class="modal-dialog">
                                                <div class="modal-content">
                                                    <div class="modal-header">
                                                        <h1 class="modal-title fs-5  text-dark" >Consulter un Enseignant</h1>
                                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                    </div>

                                                <div class="modal-body"> 
                                                        <table border="0">
                                                            <tr>
                                                                <td width="200px">Nom:</td>
                                                                <td>{{ i.person.nom }}</td>
                                                            </tr>
                                                            <tr>
                                                                <td width="200px">Prenom:</td>
                                                                <td>{{ i.person.prenom }}</td>
                                                            </tr>
                                                            <tr>
                                                                <td width="200px">Email:</td>
                                                                <td>{{ i.person.email }}</td>
                                                            </tr>
                                                            <tr>
                                                                <td width="200px">CIN:</td>
                                                                <td>{{ i.person.cin }}</td>
                                                            </tr>
                                                            <tr>
                                                                <td width="200px">Prenom:</td>
                                                                <td>{{ i.person.prenom }}</td>
                                                            </tr>
                                                            <tr>
                                                                <td width="200px">Telephone:</td>
                                                                <td>{{ i.person.telephone }}</td>
                                                            </tr>
                                                            <tr>
                                                                <td width="200px">N Bureau:</td>
                                                                <td>{{ i.person.numeroBureau }}</td>
                                                            </tr>
                                                            <tr>
                                                                <td width="200px">Grade:</td>
                                                                <td>{{ i.person.grade }}</td>
                                                            </tr>
                                                            

                                                        </table>
                                                        
                                                        
                                                </div>
                                                
                                                <div class="modal-footer">
                                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Annuler</button>                   
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
        <div class="importer">
            <button type="button" @click="exportToPDF()"><img src="../assets/pdf.png" width="50px"></button>
            <button @click="downloadCSV()"><img src="../assets/csv.png" width="50px"></button>
        </div>
       
       

        <div class="search_tableFR">
            <div class="searchFR">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" v-model="valeur_chercheF">
                <button><img src="@/assets/chercher.png" width="40px"/></button>
                
            </div>  
            <section class="introFourni">
                <h5>Lise des fournitures</h5>
                <div class="containerFourni">
                    <div class="row justify-content-center">
                    <div class="col-12">
                        <div class="card bg-dark shadow-2-strong">
                        <div class="card-body">
                            <div class="table-responsive">
                            <table class="table table-dark table-borderless mb-0">
                                <thead>
                                <tr>
                                    <th></th>
                                    <th scope="col">N Demande</th>
                                    <th scope="col">Type</th>
                                    <th scope="col" >Nombre</th>
                                    <th scope="col" >Ensg</th>                                    
                                    <th scope="col">Accepte</th>
                                    <th scope="col">Refuse</th>
                                    
                                </tr>
                                </thead>
                                <tbody v-for="i in chercheF" :key="i.NumeroDem">
                                <tr>
                                    
                                   <td>
                                    <section v-if="i.isAccepted==true"><img src="../assets/verifier (1).png" width="20px"/></section>
                                        <section v-else-if="i.isAccepted==false"><img src="../assets/cross.png" width="20px"/></section>
                                    </td> 
                                    <th>{{ i.fournitureOrderId }}</th>
                                    <td>{{ i.fourniture.type }}</td>
                                    <td>{{ i.number }}</td>
                                    <td>{{ i.person.cin }}</td>

                                   
                                      <td><section v-if="i.isAccepted==null"> <button @click="accepteFourn(i.fournitureOrderId)"><img src="../assets/jaccepte.png" width="40px" /></button></section></td>
                                       <td><section v-if="i.isAccepted==null"><button @click="refuseFourn(i.fournitureOrderId)"><img src="../assets/ne-pas-aimer.png" width="40px" /></button></section></td>
                                        <td>
                                            
                                        
                                            <button type="button" data-bs-toggle="modal" :data-bs-target="'#consulter'+i.fournitureOrderId"><img src="../assets/affiche.png" width="50px" /></button>
                                            <div class="modal fade" :id="'consulter'+i.fournitureOrderId" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                            <div class="modal-dialog">
                                                <div class="modal-content">
                                                    <div class="modal-header">
                                                        <h1 class="modal-title fs-5  text-dark" >Consulter un Enseignant</h1>
                                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                    </div>

                                                <div class="modal-body"> 
                                                        <table border="0">
                                                            <tr>
                                                                <td width="200px">Nom:</td>
                                                                <td>{{ i.person.nom }}</td>
                                                            </tr>
                                                            <tr>
                                                                <td width="200px">Prenom:</td>
                                                                <td>{{ i.person.prenom }}</td>
                                                            </tr>
                                                            <tr>
                                                                <td width="200px">Email:</td>
                                                                <td>{{ i.person.email }}</td>
                                                            </tr>
                                                            <tr>
                                                                <td width="200px">CIN:</td>
                                                                <td>{{ i.person.cin }}</td>
                                                            </tr>
                                                            <tr>
                                                                <td width="200px">Prenom:</td>
                                                                <td>{{ i.person.prenom }}</td>
                                                            </tr>
                                                            <tr>
                                                                <td width="200px">Telephone:</td>
                                                                <td>{{ i.person.telephone }}</td>
                                                            </tr>
                                                            <tr>
                                                                <td width="200px">N Bureau:</td>
                                                                <td>{{ i.person.numeroBureau }}</td>
                                                            </tr>
                                                            <tr>
                                                                <td width="200px">Grade:</td>
                                                                <td>{{ i.person.grade }}</td>
                                                            </tr>
                                                            

                                                        </table>
                                                        
                                                        
                                                </div>
                                                
                                                <div class="modal-footer">
                                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Annuler</button>                   
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

        <br><br>

    </div>
</template>
<script>
import OutComp from '../components/OutComp.vue';
import axios from 'axios'
import jsPDF from 'jspdf';
import 'jspdf-autotable'; 
import Papa from 'papaparse'; 



    export default{
        name:'EnsgView',
        components:{
            OutComp,
            
            
        },
        data(){
            return{
                valeur_chercheM:undefined,
                valeur_chercheF:undefined,
                demandeMatr:[],  
                demandeFounr:[],            }
        },methods:{
            accepte:function(Numerodem){
                console.log(Numerodem)
                axios.post(
                    'http://localhost:8080/admin/order/materialAccept/'+Numerodem,
                ).then((res)=>{
                    console.log(res);  
                    window.location.href='/demande'

                })

            },
            accepteFourn:function(Numerodem){
                console.log(Numerodem)
                axios.post(
                    'http://localhost:8080/admin/order/fournitureAccept/'+Numerodem,
                ).then((res)=>{
                    console.log(res);  
                    window.location.href='/demande'

                })

            }
            ,
            refuse:function(Numerodem){
                axios.post(
                    'http://localhost:8080/admin/order/materialRefuse/'+Numerodem,
                ).then((res)=>{
                    console.log(res);  
                    window.location.href='/demande'

                })

            },
            refuseFourn:function(Numerodem){
                axios.post(
                    'http://localhost:8080/admin/order/fournitureRefuse/'+Numerodem,
                ).then((res)=>{
                    console.log(res);  
                    window.location.href='/demande'

                })

            },
            exportToPDF:function() { 
                const doc = new jsPDF();
                doc.text('Liste du materiels affectés', 70, 10);
                doc.autoTable({
                head: [["N Demande", "Ensg", "N Inventaire	", "type", "Date d'affectation"]],
                body: this.listToExport,
                });
                doc.save('Demandes_Material.pdf');
                },
                downloadCSV:function() {
                const csv = Papa.unparse(this.listToExport, { delimiter: '  ,    ' });//Fonction pour importer la liste des matériels affectés en format PDF
                const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
                const link = document.createElement('a');
                link.href = window.URL.createObjectURL(blob);
                link.setAttribute('download', 'materiels_affectes.csv');
                document.body.appendChild(link);
                link.click();
                link.remove();
            
            },
        }
        ,  created(){
           
           try {
            axios.get(
                    'http://localhost:8080/order/fourniture',                
                ).then((res)=>{
                    this.demandeFounr=res.data;
                  console.log(this.demandeFounr)


                })
           } catch (error) {
            console.log(error);
           }

           try {
            axios.get(
                    'http://localhost:8080/order/material',                
                ).then((res)=>{
                    this. demandeMatr=res.data;
                  console.log(this.demandeMatr)

               
         
                
                })
           } catch (error) {
            console.log(error);
           }


        }
        
        ,computed:{
            listToExport() {           
                return this.demandeMatr.map(row =>[row.materielOrderId,row.person.cin, row.material.numeroInventaire, row.material.type, row.material.dateAffectation],
                      
                )
            },

            chercheM(){
                return this.demandeMatr.filter(i=> i.materielOrderId.toString().match(this.valeur_chercheM) )
            },
            chercheF(){
                return this.demandeFounr.filter(i=> i.fournitureOrderId.toString().match(this.valeur_chercheF) )
            }
            }  
             
    }

</script>
<style>
    .demander{
        border: solid 0px;
        margin-left: 250px;
        width :1240px;
    }
    .outDemander{
        margin-left: 50px;
    }
    .search_tableFR1{
        width:1120px ;
        margin-left: 70px;
        margin-top:100px ;
        border: solid 0px;
    }
     .search_tableFR{
        width:1120px ;
        margin-left: 70px;
        margin-top:150px ;
        border: solid 0px;
    }
    .searchFR1{
        display: flex;
        width:400px ;
        margin-left: 380px  ;
        
    }
    .searchFR{
        display: flex;
        width:400px ;
        margin-left: 380px  ;
        
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
.intro h5{
    margin-left: 480px;
}
.introFourni{
    margin-top: 50px;
}
.introFourni h5{
    margin-left: 460px;
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
.Teach{
    margin-left: 400px;
    display: flex;
}
.h1E{
    margin-left: 530px;
}
.Ensg{
    border: solid 0px;
    
}
.modal-body table {
    margin-left: 50px;

}

.modal-body table td{
    color: black;
}
.importer{
    margin-left: 80px;
    margin-top: 20px;
}


    
</style>
