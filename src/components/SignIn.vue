<script setup lang="ts">
    import { ref } from 'vue';

    const username = ref('');
    const password = ref('');
    const email = ref("");

    function handleSignInRequest() {
        console.log('Username:', username.value);
        console.log("email:", email.value);
        console.log('Password:', password.value)
}
</script>
<template>
    <form @submit.prevent="handleSignInRequest">
        <div class="account-container">
            <h1>Sign in</h1>
            <label for="uname" class="visually-hidden">Username </label>
            <input type="text" id="uname" name="uname" v-model="username" placeholder="Username" class="left-input">

            <label for="email" class="visually-hidden">Email </label>
            <input type="email" id="email" name="email" v-model="email" placeholder="Email" class="left-input">

            <label for="pword" class="visually-hidden">Password </label>
            <input type="password" id="pword" name="pword" v-model="password" placeholder="password" class="left-input">
            
            <button>Sing in</button>
        </div>
    </form>

    <form>
        <div class="profile-picture-container">
            <p>Upload a profile picture</p>
            <input type="file">
        </div>
    </form>
</template>
<style scoped>
form {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 40px;
    align-items: center;
}
.visually-hidden {
    position: absolute;
    position: absolute !important;
    width: 1px !important;
    height: 1px !important;
    padding: 0 !important;
    margin: -1px !important;
    overflow: hidden !important;
    clip: rect(0, 0, 0, 0) !important;
    white-space: nowrap !important;
    border: 0 !important;
}

.account-container {
    width: 70%;
    display: flex;
    flex-direction: column;
    gap: 40px;
}

.profile-picture-container {
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    border: 1px solid #bc6ff0;
    color: #eeeeee;
    border-radius: 20px;
}

h1 {
    color: #eeeeee;
}

.left-input {
    width: 100%;
    height: 40px;
    margin: auto;
    border: none;
    border-radius: 10px;
    box-sizing: border-box;
    padding-left: 10px;
    background-color: #363030;   
    color: #eeeeee;
}

.left-input:focus {
    outline: 1px solid #da5a56;
    transition: all 0.5s;
    background-color: #292424;
    /*linear-gradient(to right, #da5a56 0%, #bc6ff0 100%) */ 
}

.right-input:focus {
    outline: 1px solid #bc6ff0;
    transition: all 0.5s;
    background-color: #292424;
    /*linear-gradient(to right, #da5a56 0%, #bc6ff0 100%) */ 
}

button {
    width: 100%;
    height: 45px;
    border: none;
    border-radius: 30px;
    background-color: #ebebeb;
    font-size: 1.2rem;
}

button:hover {
    width: 100%;
    height: 45px;
    border: none;
    border-radius: 30px;
    background-color: #ebebeb;
    cursor: pointer;
}
</style>