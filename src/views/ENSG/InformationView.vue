<template>
    <div class="infos">
        <div class="outInf">
            <OutComp/>
        </div>    
        <div class="image">
            <img src='@/assets/editer.png' width="90px"/>            
        </div>
        <div class="trois1">
            <div class="mb-3_Nom">
                <label for="exampleInputNom" class="form-label_nom"> Nom :</label>
                <input type="text" class="form-control" id="exampleNom" v-model="nom">
            </div>
            <div class="mb-3_Nom">
                <label for="exampleInputNom" class="form-label_nom"> Prenom :</label>
                <input type="text" class="form-control" id="exampleNom" v-model="prenom">
            </div>
            
            <div class="mb-3_Nom">
                <label for="exampleInputNom" class="form-label_nom"> CIN :</label>
                <input type="text" class="form-control" id="exampleNom" v-model="cin">
            </div>
            
        </div>    

        <div class="trois2">
            <div class="mb-3_Nom">
                <label for="exampleInputNom" class="form-label_nom"> Telephone :</label>
                <input type="text" class="form-control" id="exampleNom" v-model="tele">
            </div>
            <div class="mb-3_Bureau">
                <label for="exampleInputNom" class="form-label_nom"> N Bureau :</label>
                <p>{{ this.user.numeroBureau }}</p>
            </div>
            
            <div class="mb-3_Grad">
                <label for="exampleInputNom" class="form-label_nom"> Grade :</label>
                 <p>{{ this.user.grade }}</p>
            </div>
            
        </div>   
        <div class="trois3">
            <div class="mb-3_Nom">
                <label for="exampleInputNom" class="form-label_nom"> Password :</label>
                <input type="text" class="form-control" id="exampleNom"   v-model="cin" />
            </div>
            <div class="mb-3_Email">
                <label for="exampleInputNom" class="form-label_nom"> Email :</label>
                <input type="text" class="form-control" id="exampleNom1" v-model="email">
            </div>
            
            <div class="mb-3_Nom1">
                <label for="exampleInputNom" class="form-label_nom"> Fonction :</label>
                <p>{{ this.user.type }}</p>
            </div>
            
        </div>    

        <div class="botton">
            <section v-if="(this.nom!=this.user.nom || this.prenom!=this.user.prenom || this.email!=this.user.email || this.cin!=this.user.cin ||this.tele!=this.user.telephone ) && ( this.nom!='' && this.prenom!='' && this.email!='' && this.cin!='' && this.tele!='' && this.password!='' )">
                 <button type="button" class="btn btn-success" @click="modifer()">Modifier</button>
            </section>     
        </div>
    </div>
</template>

<script>
    import OutComp from '@/components/OutComp.vue';
    import router from '@/router'
    import axios from 'axios'
    export default{        
        components:{
            OutComp
        },
        data(){
            return{
                nom:'',
                prenom:'',
                email:'',
                cin:'',
                tele:'',                
                password:'',
                bureau:'',
                grade:'',
                user:null
            }
            
        },mounted(){

            
        }
        
        
        ,created(){   
            if (localStorage.getItem('User')) {
                try {
                    this.user = JSON.parse(localStorage.getItem('User'));
                    this.nom=this.user.nom;
                    this.prenom=this.user.prenom;
                    this.email=this.user.email;
                    this.cin=this.user.cin;
                    this.tele=this.user.telephone;            
                    this.bureau=this.user.numeroBureau;
                    this.grade=this.user.grade;
                    this.password=this.user.cin;
                } catch(e) {
                    localStorage.removeItem('User');

                    router.push({
                     name:'login'
                })

                }
            }else{
                router.push({
                     name:'login'
                })
            }         
          
        },methods:{
            modifer:function(){

                axios.put(
                    'http://localhost:8080/enseignant',
                    {personId:this.user.personId,nom:this.nom,prenom:this.prenom,cin:this.cin,email:this.email,telephone:this.tele}
                    ).then((res)=>{
                        console.log(res.data); 
                        this.user.nom=this.nom;
                        this.user.prenom=this.prenom;
                        this.user.email=this.email;
                        this.user.cin=this.cin;
                        this.user.telephone=this.tele;                                                    
                        this.user.password=this.user.cin;
                        localStorage.setItem('User', JSON.stringify(this.user)); 
                                                         
                     
                   
                    })   

                    

            }
        }
    }

</script>

<style>
    .infos{
        border: solid 0px;
        margin-left: 250px;
        width :1260px;
        

    }
    .image{
        margin-left: 600px;
        margin-top: 20px;
    }
    .mb-3_Nom{
        margin-left: 80px;
        margin-top: 0px;
        display: flex;
    }   
    .mb-3_Nom1{
        margin-left: 50px;
        margin-top: 0px;
        display: flex;
    }
    .mb-3_Email{
        margin-left: 40px;
        margin-top: 0px;
        display: flex;
    }
    
    .mb-3_Nom p{
        margin-left: 40px;
        margin-top: 5px;
    } 
    .mb-3_Nom1 p{
        margin-left: 40px;
        margin-top: 5px;
    }   
    .mb-3_Bureau{
        margin-left: 100px;
        margin-top: 0px;
        display: flex;
    }
    .mb-3_Bureau p{
        margin-left: 40px;
        margin-top: 5px;
    }
    .mb-3_Grad{
        margin-left: 170px;
        margin-top: 5px;
        display: flex;
    }
    .mb-3_Grad p{
        margin-left: 40px;
        margin-top: 5px;
    }   
    #exampleNom{
        width: 220px;  
        margin-left: 20px;      
    }
    #exampleNom1{
        width: 320px;  
        margin-left: 20px;  
    }
    .form-label_nom{
        margin-top: 8px;
    }

    .trois1{
        margin-top: 70px;
        margin-left: 40px;
        display: flex;

    }
    .trois2{
        margin-top: 70px;
        margin-left: 30px;
        display: flex;

    }
    .trois3{
        margin-top: 70px;
        margin-left: 30px;
        display: flex;

    }
    .botton{
        margin-top: 70px;
        margin-left: 600px;        
    }
    .outInf{
        margin-left: 50px;
    }
    
</style>
