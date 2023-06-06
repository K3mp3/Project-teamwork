<script setup lang="ts">
    const links: string[] = ["Create room", "About", "Contact", "FAQ"];

    function getRoute(link: string) {
        const trimmedLink = link.trim().replace(/\s/g, '').toLowerCase();
        return `/${trimmedLink}`;
    }
</script>
<template>
    <aside>
        <ul>
            <li v-for="link in links"><router-link :to="getRoute(link)" class="router-link">{{ link }}</router-link></li>
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