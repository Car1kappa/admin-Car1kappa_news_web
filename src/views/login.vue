<template>
    <div>
        <vue-particles id="tsparticles" :particlesInit="particlesInit" :particlesLoaded="particlesLoaded" :options="{
            background: {
                color: {
                    value: '#0d47a1'
                }
            },
            fpsLimit: 120,
            interactivity: {
                events: {
                    onClick: {
                        enable: true,
                        mode: 'push'
                    },
                    onHover: {
                        enable: true,
                        mode: 'repulse'
                    },
                    resize: true
                },
                modes: {
                    bubble: {
                        distance: 400,
                        duration: 2,
                        opacity: 0.8,
                        size: 40
                    },
                    push: {
                        quantity: 4
                    },
                    repulse: {
                        distance: 200,
                        duration: 0.4
                    }
                }
            },
            particles: {
                color: {
                    value: '#ffffff'
                },
                links: {
                    color: '#ffffff',
                    distance: 150,
                    enable: true,
                    opacity: 0.5,
                    width: 1
                },
                collisions: {
                    enable: true
                },
                move: {
                    direction: 'none',
                    enable: true,
                    outModes: {
                        default: 'bounce'
                    },
                    random: false,
                    speed: 6,
                    straight: false
                },
                number: {
                    density: {
                        enable: true,
                        area: 800
                    },
                    value: 80
                },
                opacity: {
                    value: 0.5
                },
                shape: {
                    type: 'circle'
                },
                size: {
                    value: { min: 1, max: 5 },
                }
            },
            detectRetina: true
        }" />
    </div>

    <div class="formContainer">
        <h3>Enterprise Portal Management</h3>
        <el-form ref="loginFormRef" :model="LoginForm" status-icon :rules="LoginRules" label-width="80px" class="loginForm">
            <el-form-item label="UserName" prop="username">
                <el-input v-model="LoginForm.username" type="username" autocomplete="off" />
            </el-form-item>
            <el-form-item label="Password" prop="password">
                <el-input v-model="LoginForm.password" type="password" autocomplete="off" />
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm()">Login</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script setup>
import { reactive, ref} from 'vue'
import { loadSlim } from "tsparticles-slim";
import {useRouter} from 'vue-router'
import axios from 'axios'
const LoginForm = reactive({
    username: "",
    password: "",
})

const loginFormRef = ref()

const LoginRules = reactive({
    username:[
        {
           message:"Enter your username", required:true
        }
    ],
    password:[
        {
            message:"Enter your password",required:true
        }
    ]
})


const particlesInit = async engine => {
    //await loadFull(engine);
    await loadSlim(engine);
};

const particlesLoaded = async container => {
    console.log("Particles container loaded", container);
};

const router = useRouter()
const submitForm = () =>{
    //1. Verifty
    loginFormRef.value.validate((valid) =>{
        console.log(valid)
        if(valid){
            console.log(LoginForm)
            localStorage.setItem("token","kerwin");
            axios.get("/users/").then(res=>{
                console.log(res.data)
            })
            router.push("/index")
        }else{
            console.log('Error Submit')
            return false
        }
    })
    //2. Receive form and pass on to backend
    //3. set value to token
}
</script>

<style lang="scss" scoped>
.formContainer{
    width: 500px;
    height: 200px;
    position: fixed;
    left:50%;
    top:50%;
    transform: translate(-50%, -50%);
    background: rgb($color: #000000, $alpha: 0.5);
    color: white;
    text-align: center;
    padding: 40px;
    h3{
        font-size: 30px;
    }
    .loginForm{
        margin-top: 20px;
    }
}
::v-deep .el-form-item__label{
    color:white;
}

</style>