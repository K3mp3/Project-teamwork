<script setup lang="ts">

</script>
<template>
    <form>
        <label for="uname" class="visually-hidden">Username </label>
        <input type="text" id="uname" name="uname" placeholder="Username">

        <label for="email" class="visually-hidden">Email </label>
        <input type="email" id="email" name="email" placeholder="Email">

        <label for="pword" class="visually-hidden">Password </label>
        <input type="password" id="pword" name="pword" placeholder="password">
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

input {
    width: 70%;
    height: 40px;
    margin: auto;
    border: none;
    border-radius: 10px;
    box-sizing: border-box;
    padding-left: 10px;
    background-color: #ebebeb;
}
</style>