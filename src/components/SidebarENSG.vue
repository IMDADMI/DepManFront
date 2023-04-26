<template>
    
    <div class="sidebarE">
        <div class="titleE">
            <p> </p>
        </div>
        <div class="menu-itemsE">
            <router-link to="/infos" active-class="active" tag="button" exact class="side-btn">
                <div class="link-container">
                    Informations
                </div>
            </router-link>           
            <router-link to="/demandeFourn" active-class="active" tag="button" exact class="side-btn">
                <div class="link-container">
                    Fourniture
                </div>
            </router-link>                   
            <router-link to="/demandeMatr" active-class="active" tag="button" exact class="side-btn">
                <div class="link-container">
                    Materiel
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name:'SidebarENSG'
    }
</script>





















<style scoped>
.sidebarE{
    background-color: black;
    position: fixed;
    width: 250px;
    height: 100%;
    
    
}
.titleE {
    color: white;
    font-size: 24px;
    margin-top: 10px;
}
.menu-itemsE {
    display: flex;
    flex-direction: column;
    margin-top: 170px;
    margin-left: 6px;
}
.menu-itemsE > * {
    margin-top: 50px;
}
.side-btn {
    border: none;
    padding: 16px 0px;
    cursor: pointer;
    font-size: 16px;
    font-weight: 500;
    color: white;
    background-color: transparent;
}
.side-btn:focus {
    outline: none;
}
.side-btn.active {
    position: relative;
    background-color: white;
    color: black;
    font-weight: 600;
    margin-left: 10px;
    border-radius: 30px 0 0 30px;
}
.side-btn.active::before {
    top: -30px;
}
.side-btn.active::after {
    bottom: -30px;
}
.side-btn.active::before, .side-btn.active::after {
    position: absolute;
    content: "";
    right: 0;
    height: 30px;
    width: 30px;
    background-color: white;
}
.side-btn.active .link-container::before {
    top: -60px;
}
.side-btn.active .link-container::after {
    bottom: -60px;
    z-index: 99;
}
.side-btn.active .link-container::before, .side-btn.active .link-container::after {
    position: absolute;
    content: "";
    right: 0px;
    height: 60px;
    width: 60px;
    border-radius: 50%;
    background-color: black;
}
</style>