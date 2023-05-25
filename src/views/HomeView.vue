<script setup lang="ts">
  import SignInView from '@/components/SignInView.vue';
  import type SignInFormUserInformationVue from '@/components/SignInFormUserInformation.vue';
import SignInForm from '@/components/SignInForm.vue';
</script>

<template>
  <main>
      <div class="sign-in-form-container">
        <form class="sign-in-form"> 
         <SignInView></SignInView>
        </form>
      </div>
  </main>
</template>

<style scoped>
  .sign-in-form-container {
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .sign-in-form {
        width: 800px;
        height: 450px;
        background-color: #292424;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-radius: 20px;
    }
</style>