<template>
    
    <div class="dashboardE">   
             
        <SidebarENSG/>
        <div class="content">
            
            <router-view/>
        </div>
    </div>
</template>

<script>
import SidebarENSG from '@/components/SidebarENSG.vue'

export default {
    name: 'DashboardViewENSG',
    components: {
        SidebarENSG,
        
    }
}
</script>

<style>
.dashboardE {
    display: grid;
    grid-template-columns: 1fr 5fr;
    background-color:white;
    height: 100vh;
    width: 1500px;
}
.content {
    background-color: white;
    border-radius: 10px;
    margin: 6px 6px 6px 0px;
}
</style>