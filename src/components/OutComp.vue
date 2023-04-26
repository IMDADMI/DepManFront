
<template>
<div class="out">
    <button @click="out()"><img src="@/assets/puissance-removebg-preview.png" width="30px" /><span> logout </span></button>
    
</div>
</template>
<script>
    import router from '@/router'
    export default{
        name:'OutComp',
        methods:{
            out:function(){
                window.location.href='/login'

                localStorage.removeItem('User');
                localStorage.removeItem('Admin');
                    router.push({
                     name:'login',
                     
                })

            }
           
            
        }
    }
</script>
<style scoped>
    
    button{
        background: none;
        border: solid 0px;
        margin-top: 10px;
        margin-left: 1070px;
        
        
    }
    span{
        display:inline-block ;
        margin-left:10px ;
    }
</style>
