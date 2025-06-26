<template>
    <div  v-if="isOpen" class="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" @click="$emit('close-sidebar')"></div>
    <aside :class="['fixed lg:static inset-y-0 left-0 z-50 w-64 bg-[#212529] text-white flex flex-col shadow-lg transform transition-transform duration-300 ease-in-out lg:transform-none', isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0']">
        <div class="flex items-center justify-between p-4 border-b border-gray-700 lg:border-none">
            <div class="flex flex-col">
                <span class="text-xl font-extrabold text-white leading-none">LOGO</span>
                <span class="text-3xl font-extrabold text-teal-500 leading-none">LOGO</span>
            </div>
            
            <button @click="$emit('close-sidebar')" class="lg:hidden p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700">
                <i class="mdi mdi-close h-6 w-6 text-2xl flex items-center justify-center"></i> 
            </button>
        </div>

        <nav class="flex-1 px-4 py-6">
            <h3 class="text-sm uppercase font-semibold text-teal-500 mb-3 px-2 tracking-wider">MENU</h3>
            <div class="space-y-1">
                <router-link to="/" exact-active-class="activo" class="nav-link" @click="handleNavClick">
                    <i class="mdi mdi-home-outline mr-3 text-lg"></i>
                    <span>Home</span>
                </router-link>

                <router-link to="/sales" active-class="activo" class="nav-link" @click="handleNavClick">
                    <i class="mdi mdi-cash-register mr-3 text-lg"></i>
                    <span>Sales</span>
                </router-link>

                <router-link to="/service" active-class="activo" class="nav-link" @click="handleNavClick">
                    <i class="mdi mdi-briefcase-outline mr-3 text-lg"></i>
                    <span>Service</span>
                </router-link>

                <router-link to="/customers" active-class="activo" class="nav-link" @click="handleNavClick">
                    <i class="mdi mdi-account-group-outline mr-3 text-lg"></i>
                    <span>Customers</span>
                </router-link>

                <router-link to="/reports" active-class="activo" class="nav-link" @click="handleNavClick">
                    <i class="mdi mdi-chart-bar mr-3 text-lg"></i>
                    <span>Reports</span>
                </router-link>

                <router-link to="/booking-calendar" active-class="activo" class="nav-link" @click="handleNavClick">
                    <i class="mdi mdi-calendar-check-outline mr-3 text-lg"></i>
                    <span>Booking Calendar</span>
                </router-link>

                <router-link to="/inventory" active-class="activo" class="nav-link" @click="handleNavClick">
                    <i class="mdi mdi-warehouse mr-3 text-lg"></i>
                    <span>Inventory</span>
                </router-link>

                <router-link to="/marketing" active-class="activo" class="nav-link"@click="handleNavClick">
                    <i class="mdi mdi-bullhorn-outline mr-3 text-lg"></i>
                    <span>Marketing</span>
                </router-link>

                <router-link to="/shopify" active-class="activo" class="nav-link" @click="handleNavClick">
                    <i class="mdi mdi-storefront-outline mr-3 text-lg"></i>
                    <span>Shopify</span>
                </router-link>
            </div>

            <hr class="my-6 border-gray-700" />
            <h3 class="text-sm uppercase font-semibold text-teal-500 mb-3 px-2 tracking-wider">GENERAL</h3>
            
            <div class="space-y-1">
                <router-link to="/settings" active-class="activo" class="nav-link" @click="handleNavClick">
                    <i class="mdi mdi-cog-outline mr-3 text-lg"></i>
                    <span>Settings</span>
                </router-link>

                <router-link to="/configure-apis" active-class="activo" class="nav-link" @click="handleNavClick">
                    <i class="mdi mdi-code-tags mr-3 text-lg"></i>
                    <span>Configure APIs</span>
                </router-link>
            </div>
        </nav>
    </aside>
</template>

<style scoped src="@/styles/sidebar.css"></style>

<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
    isOpen: {
        type: Boolean,
        default: false
    }
})

const handleNavClick = () => {
    if (props.isOpen && window.innerWidth < 1024) {
        emit('close-sidebar');
    }
}

const emit = defineEmits(['close-sidebar'])
</script>