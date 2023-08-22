<template>
    <div>
        <el-aside :width="$store.state.isCollapsed?'64px':'200px'">
            <el-menu :collapse = "$store.state.isCollapsed"
            :collapse-transition = "false">
                <el-menu-item index="/index">
                    <el-icon>
                        <HomeFilled />
                    </el-icon>
                    <span>Main</span>
                </el-menu-item>

                <el-menu-item index="/center">
                    <el-icon><avatar/></el-icon>
                    <span>Profile</span>
                </el-menu-item>

                <el-sub-menu index="/user_manage">
                    <template #title>
                        <el-icon>
                            <user-filled />
                        </el-icon>
                        <span>User Manage</span>
                    </template>
                    <el-menu-item index="/user_manage/UserAdd"><el-icon><DocumentAdd/></el-icon>Add New User</el-menu-item>
                    <el-menu-item index="/user_manage/UserList"><el-icon><List /></el-icon>User List</el-menu-item>
                </el-sub-menu>

                <el-sub-menu index="/new_manage">
                    <template #title>
                        <el-icon>
                            <message-box />
                        </el-icon>
                        <span>News Manage</span>
                    </template>
                    <el-menu-item index="/new_manage/NewsAdd"><el-icon><DocumentAdd/></el-icon>Add New News</el-menu-item>
                    <el-menu-item index="/new_manage/NewsList"><el-icon><List /></el-icon>News List</el-menu-item>
                </el-sub-menu>

                <el-sub-menu index="/product_manage">
                    <template #title>
                        <el-icon>
                            <reading />
                        </el-icon>
                        <span>Product Manage</span>
                    </template>
                    <el-menu-item index="/product_manage/productAdd"><el-icon><DocumentAdd/></el-icon>Add New Product</el-menu-item>
                    <el-menu-item index="/product_manage/productList"><el-icon><List /></el-icon>Product List</el-menu-item>
                </el-sub-menu>


            </el-menu>
        </el-aside>
    </div>
</template>
<script setup>
import { HomeFilled, Avatar, UserFilled, MessageBox, Reading, Pointer, DocumentAdd, List} from '@element-plus/icons-vue' 
</script>

<style lang="scss" scoped>
.el-aside {
    height: 100vh;

}
</style>