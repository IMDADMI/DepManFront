<template>
    <div class="forn">
       <div class="outForn  ">
            <OutComp/>
        </div>
        <div class="h1F">
           <h1>Fourniture</h1>
        </div>

        <div class="search_table">
            <div class="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" v-model="valeur_cherche">
                <button><img src="@/assets/chercher.png" width="40px"/></button>
                
            </div>  
            <section class="introF">
                <div class="container">
                    <div class="row justify-content-center">
                    <div class="col-12">
                        <div class="card bg-dark shadow-2-strong">
                        <div class="card-body">
                            <div class="table-responsive">
                            <table class="table table-dark table-borderless mb-0">
                                <thead>
                                <tr>                                    
                                    <th scope="col" width="450px">Type</th>
                                    <th scope="col" width="350px">Nombre</th>                                                                                                           
                                </tr>
                                </thead>
                                <tbody v-for="i in cherche " :key="i.type">
                                <tr>
                                    <th>{{ i.type }}</th>
                                    <td>{{ i.nombre }}</td>                                    
                                    <td>  
                                        <button type="button" data-bs-toggle="modal" :data-bs-target="'#supprimer'+i.fournitureId"><img src="@/assets/trash.png" width="40px"/></button>
                                        <div class="modal fade" :id="'supprimer'+i.fournitureId" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div class="modal-dialog">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h1 class="modal-title fs-5 text-danger">Supprimer les données</h1>
                                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                                <div class="modal-body text-dark">
                                                    Si vous suppimez un fourniture ,il sera définitivement perdu
                                                </div>
                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Annuler</button>
                                                    <button type="button" class="btn btn-danger" @click="supprimer(i.fournitureId)">Supprimer</button>
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


        
       <div class="ajouteForn"> 
            <button type="button" data-bs-toggle="modal" data-bs-target="#ajoute">
                <img src="@/assets/add-file.png" width="60px" />  <span>Ajoute</span>
            </button>  


        </div> 

        <div class="modal fade" id="ajoute" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Ajouter un Fourniture</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>

                <div class="modal-body">   
                        <div class="mb-3">
                            <label for="TypeF" class="form-label"> Type</label>
                            <input type="text" class="form-control" id="typeF" v-model="typeF">
                            <div id="TypeF" class="form-text"></div>
                        </div>
                        <div class="mb-3">
                            <label for="nombre" class="form-label">Nombre</label>
                            <input type="number" class="form-control" id="nombre" v-model="nombre">
                        </div>
                    
                </div>
                
                <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" @click="annuler()" data-bs-dismiss="modal">Annuler</button>
                    <section v-if="this.typeF!='' && this.nombre>0 ">                                                                        
                            <button type="submit" class="btn btn-primary" @click="ajoute()" data-bs-dismiss="modal"> Ajoute</button>                            
                    </section> 
                </div>
                </div>
            </div>
        </div> 
        <div class="h1F">
           <h1>Statistique</h1>
        </div>
        <div class="pie">
            <Pie
            id="my-chart-id" 
            :data="chartData" :options="chartOptions" />
        </div>

        <br><br>
    </div>
</template>
<script>


import OutComp from '../components/OutComp.vue';
import router from '../router'
import axios from 'axios'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'vue-chartjs'
var Tab1 = [];



ChartJS.register(ArcElement, Tooltip, Legend)

    export default{    
        name: 'BarChart',    
        components:{
            OutComp,
            Pie
        },
        data(){
           
            return{
                fournLocal:[],
                typeF:'',
                nombre:0,
                valeur_cherche:'',
                a:0,
                b:'',
                
                fourn:[],
               
                y:[],
                z:[],
                fournType:[],
                fournNumber:[],
                chartData: {
                    labels:[],
                    datasets: [
                    {
                    backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#A01B16','#DD1B16','#FA1B16','FD1B16','#9370D8','#228B22','#20B2AA','#FF4500','#4169E1','#4169E1','#FF8C00','#FF8C00','#00FFFF','#F0E68C','#FF7F50','#00FF00'],
                    data:[]
                    }
                    ]
             },
      chartOptions: {
        responsive: true,

      }
            }
        },methods:{
            ajoute:function(){
                axios.post(
                    'http://localhost:8080/fourniture',
                    { type:this.typeF,nombre:this.nombre}
                ).then((res)=>{
                 console.log(res);           
                 axios.get(
                    'http://localhost:8080/fourniture/A',                
                ).then((res)=>{
                    this.fourn=res.data;
                    localStorage.setItem('Founr', JSON.stringify(res.data));  
                  console.log(this.fourn)
           
           
                })
                 window.location.href='/forn'
                })  
                
             
               
                this.typeF=''
                this.nombre=0    
                                 
            },async supprimer(id){
                const res = await axios.delete(
                    'http://localhost:8080/fourniture/'+id,
                    )
                    axios.get(
                    'http://localhost:8080/fourniture/A',                
                ).then((res)=>{
                    this.fourn=res.data;
                    localStorage.setItem('Founr', JSON.stringify(res.data));  
                  console.log(this.fourn)
           
           
                })
                    window.location.href='http://localhost:3030/forn'
                    
                    console.log(res.data)
                    
                    },
            annuler:function(){
                this.typeF=''
                this.nombre=0  
            },
            async  getType()  {
            let ar1 = [];
            try {
            const res = await axios.get("http://localhost:8080/fourniture/A");
            ar1 = res.data.map((e) => e.type);
            } catch (error) {
            console.log(error);
            }
            const arrat = ar1.toString().split(",");
           
            console.log("the desired one ", arrat);

             return arrat;
            }
        },
        beforeCreate(){
            
            console.log()
            if(localStorage.getItem('Admin')){
                this.user = JSON.parse(localStorage.getItem('Admin'));
                console.log('------->',this.user)
            }else{
                    router.push({
                    name:'login'
                    })

           
            }
        },
        created(){
            
            
            if(localStorage.getItem('Founr')){
                this.fournLocal = JSON.parse(localStorage.getItem('Founr'));
                console.log('FounrNombre',this.fournLocal)
            }
           
            try {
            
            axios.get(
                    'http://localhost:8080/fourniture/A',                
                ).then((res)=>{
                    this.fourn=res.data;
                    localStorage.setItem('Founr', JSON.stringify(res.data));  
                  console.log(this.fourn)
           
           
                })
           } catch (error) {
            console.log(error);
           }
           
          
           //this.chartData.datasets[0].data=this.fournNumber;
           for (let index = 0; index < this.fournLocal.length; index++) {
            this.y.push(this.fournLocal[index].nombre);
           this.z.push(this.fournLocal[index].type)            
           }
          
           
    
           console.log('y',this.y);
          
          this.chartData.datasets[0].data=this.y;
          this.chartData.labels=this.z;
           console.log('bbb',Tab1[0])

           console.log('Sas',this.b)
          
           

        }
        ,computed:{
            cherche(){
                return this.fourn.filter(i=>{
                return i.type.match(this.valeur_cherche)
                 })
            }
            }   
    }

</script>
<style>
    .forn{
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
.introF{
    margin-top: 50px;
    margin-right: 100px;
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
.outForn{
    margin-left: 50px;
}
.ajouteForn{
    margin-top:30px ;
    margin-left: 100px;
}

.h1F{
    margin-left: 500px;
}
.forn{
    border: solid 0px;
    
}
#analy{
    margin-left: 20px;
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
.pie{
    width: 350px;
    margin-left: 436px;
    margin-top: 60px;
}
</style>
