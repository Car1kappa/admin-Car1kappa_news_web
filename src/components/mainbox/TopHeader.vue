<template>
    <el-header>
        <div class="left">
            <el-icon @click="handleCollapsed">
                <Menu />
            </el-icon>
            <span style="margin-left: 10px;">Customized Newspage System</span>
        </div>
        <div class="right">
            <span id="welcome">Welcome back admin</span>
            <el-dropdown>
                <span class="el-dropdown-link">
                    <el-icon :size="30" color = "white">
                        <User />
                    </el-icon>
                </span>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item @click="handleCenter">Profile</el-dropdown-item>
                        <el-dropdown-item @click="handleLogout">Exit</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </div>
    </el-header>
</template>

<script setup>
import { Menu, User } from '@element-plus/icons-vue'
import { useStore } from "vuex"
import { useRouter } from "vue-router"

const router = useRouter()
const store = useStore()

const handleCollapsed = () => {
    store.commit("changeCollapsed")
};

const handleCenter = () =>{
    router.push("/center")
}

const handleLogout = () =>{
    localStorage.removeItem("token")
    router.push("/login")
}
</script>

<style lang="scss" scoped>

.el-header{
    background-color: #2d3a4b;
    color:white;
    width: 100%;
    height: 60px;
    line-height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.left,.right{
    display: flex;
}

.left{
    i{
        margin:auto;
        cursor: pointer;
    }
}

.right{
    .el-dropdown{
        margin:auto;
    }
}

</style>