<script setup lang="ts">
  import SignIn from '@/components/SignIn.vue';
</script>

<template>
  <main>
      <div class="sign-in-form-container">
        <form class="sign-in-form"> 
          <SignIn>

          </SignIn>
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
        width: 350px;
        height: 450px;
        background-color: #292424;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>