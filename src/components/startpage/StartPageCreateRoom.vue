<script setup lang="ts">
    import { ref } from 'vue';
    import type { IBacklogVisual } from '../../models/IBacklogVisual';

    const backlogVisual = ref<IBacklogVisual[]>([
        {square: ""},
        {square: ""},
        {square: ""},
        {square: ""},
        {square: ""},
        {square: ""},
        {square: ""},
        {square: ""},
        {square: ""},
        {square: ""},
        {square: ""},
        {square: ""},
        {square: ""},
    ])
    
</script>
<template>
    <div class="backlog-visual-container">
        <th v-for="square in backlogVisual"></th>
    </div>
    <form>
        <h1>Create a room for your team</h1>
        <input type="text" placeholder="Room name">
    </form>
</template>
<style scoped>
    .backlog-visual-container {
        display: grid;
        grid-template-columns: repeat(3, 150px);
        grid-template-rows: repeat(3, 150px);
        place-items: center;
        gap: 4px;
    }

    th {
        width: 150px;
        height: 150px;
        border: 1px solid #000;
    }
</style>