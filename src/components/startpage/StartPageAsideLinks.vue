<script setup lang="ts">
    const links: string[] = ["Create room", "About", "Contact", "FAQ"];
</script>
<template>
    <aside>
        <ul>
            <li v-for="link in links">{{ link }}</li>
        </ul>
    </aside>
</template>
<style scoped>
    li {
        list-style: none;
        margin: 40px 0;
        color: #fff;
    }
</style>