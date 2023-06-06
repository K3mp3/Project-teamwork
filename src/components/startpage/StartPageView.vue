<script setup lang="ts">
import StartPageAsideLinks from './StartPageAsideLinks.vue';
import StartPageCreateRoom from './StartPageCreateRoom.vue';

    
</script>
<template>
    <main>
        <aside>
        <StartPageAsideLinks></StartPageAsideLinks>
        </aside>
        
        <div class="room-container">
            <StartPageCreateRoom></StartPageCreateRoom>
        </div>
    </main>
</template>
<style scoped>
    main {
        display: flex;
    }

    aside {
        min-width: 250px;
        height: 100vh;
        padding: 20px;
        background-color: #292424;
        display: flex;
        justify-content: center;
    }

    .room-container {
        width: 100%;
        
        padding: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>