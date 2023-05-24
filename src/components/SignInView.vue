<script setup lang="ts">
    import SignInFormVue from './SignInForm.vue';

    function sendUserData(username: string, email: string, password: string) {
        console.log("username", username);
        console.log("email", email);
        console.log("password", password);
    } 
</script>
<template>
    <SignInFormVue @signIn="sendUserData"></SignInFormVue>
</template>
<style scoped>

</style>