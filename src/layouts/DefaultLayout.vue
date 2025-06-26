<template>
    <div class="flex h-screen bg-gray-100 overflow-hidden">
        <Sidebar />
        <div class="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main class="flex-1 overflow-x-hidden overflow-y-auto p-6">
            <router-view />
        </main>
        </div>
    </div>
</template>

<script setup>
import Sidebar from '@/components/layout/Sidebar.vue';
import Header from '@/components/layout/Header.vue';
</script>
