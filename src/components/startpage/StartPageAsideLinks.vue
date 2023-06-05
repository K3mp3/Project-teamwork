<script setup lang="ts">
    const links: string[] = ["Create room", "About", "Contact", "FAQ"];

    function handleClick(link: string) {
        const trimmedLink = link.trim().replace(/\s/g, '');
        console.log("link", trimmedLink.toLowerCase());
    }
</script>
<template>
    <aside>
        <ul>
            <li v-for="link in links"><a @click="handleClick(link)">{{ link }}</a></li>
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