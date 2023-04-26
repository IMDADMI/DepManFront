<template>
    <div class="home">
        <div class="outHome">
            <OutComp/>
        </div>   
        <div class="ensTech">
           <div class="Ens">
                <a href="/ensg ">
                    <img src="@/assets/ecole.png" width="130px"/><br>            
                </a>    
                <h2>Ensingent</h2>
           </div>
           <div class="Tech">
                <a href="/tech">
                    <img src="@/assets/soutien-technique.png" width="130px"/><br>            
                </a>    
                <h2>Technicien</h2>
           </div>
        </div> 
        <div class="abc">
                <a href="/demande">
                    <img src="@/assets/conforme.png" width="130px"/><br>            
                </a>    
                <h2>Demande</h2>
           </div>

        <div class="MatFor">
           <div class="Ens">
                <a href="/matr">
                    <img src="@/assets/ordinateur.png" width="130px"/><br>            
                </a>    
                <h2>Materiel</h2>
           </div>
           <div class="Tech">
                <a href="/forn">
                    <img src="@/assets/materiel-scolaire.png" width="130px"/><br>            
                </a>    
                <h2>Fourniteur</h2>
           </div>
        </div> 
    </div>
</template>
<script>
import OutComp from '../components/OutComp.vue';
import router from '../router'
    export default{        
        components:{
            OutComp
        },
            data(){
                return{
                    user:{}
                }
            }
        ,beforeCreate(){
            console.log()
            if(localStorage.getItem('Admin')){
                this.user = JSON.parse(localStorage.getItem('Admin'));
                console.log('------->',this.user)
            }else{
                    router.push({
                    name:'login'
                    })
            }
        }
      
    }
</script>
<style>
.outHome{
    margin-left: 50px;
}
.home{
    border: solid 0px;    
    margin-left: 250px;
    width :1260px;
    
}
.home h2{
    color: black;
}
.home .Ens{
    margin-left: 200px;
    
    
    width: 300px;
}
.home .Tech{
    margin-left: 300px;
    
    width:300px;
    

}
.home .ensTech{

    margin-left: 70px;
    display: flex;
    margin-top: 60px;
    height: 200px;
    border: solid 0px;
    
}
.home .abc{
    margin-left:570px;
}
.home .MatFor{
    margin-left: 70px;
    display: flex;
    margin-top: 0px;
    height: 200px;
    border: solid 0px;
}


</style>
