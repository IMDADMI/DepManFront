<template>
    
    <div class="dashboard">   
             
        <SidebarCom/>
        <div class="content">
            
            <router-view/>
        </div>
    </div>
</template>

<script>
import SidebarCom from '../components/SidebarCom.vue'

export default {
    name: 'DashboardView',
    components: {
        SidebarCom,
        
    }
}
</script>

<style>
.dashboard {
    display: grid;
    grid-template-columns: 1fr 5fr;
    background-color:white;
    height: 100vh;
    width: 100%;
    
}
.content {
    background-color: white;
    border-radius: 10px;
    margin: 6px 6px 6px 0px;
    width: 70%;
    
}
</style>