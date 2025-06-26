<template>
    <div class="min-h-screen bg-gray-50 flex">
        <Sidebar :isOpen="sidebarOpen" @close-sidebar="closeSidebar"/>
        <div class="flex-1 flex flex-col min-w-0">
            <Header @toggle-sidebar="toggleSidebar" />
            <main class="flex-1">
                <div class="h-full">
                    <div class="mb-2 sm:mb-4 mt-5 ml-12">
                        <h1 class="text-xl sm:text-2xl font-bold text-gray-900">Hi Billy Joe!</h1>
                        <p class="text-gray-600 text-sm">Logged in as an employee</p>
                    </div>
                    <router-view />
                </div>
            </main>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import Header from '@/components/layout/Header.vue'
import Sidebar from '@/components/layout/Sidebar.vue'

const sidebarOpen = ref(false)

const toggleSidebar = () => {
    sidebarOpen.value = !sidebarOpen.value
}

const closeSidebar = () => {
    sidebarOpen.value = false
}

const handleResize = () => {
    if (window.innerWidth >= 1024) {
        sidebarOpen.value = false
    }
}

onMounted(() => {
    window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
    window.removeEventListener('resize', handleResize)
})
</script>