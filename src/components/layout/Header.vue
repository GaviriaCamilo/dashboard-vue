<template>
    <header class="bg-white shadow-sm px-4 py-1 flex items-center justify-between z-10 relative md:px-6">
        <div class="flex items-center space-x-4">
            <button  @click="$emit('toggle-sidebar')" class="lg:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                <i class="mdi mdi-menu text-gray-600 text-2xl"></i>
            </button>
        </div>

        <div class="flex items-center space-x-4 sm:space-x-6">
            <div class="flex items-center space-x-3 sm:space-x-4">
                <i class="mdi mdi-phone text-xl text-orange-500 cursor-pointer"></i>
                <i class="mdi mdi-slack text-xl text-[#E01E5B] cursor-pointer"></i>
                <i class="mdi mdi-bell text-xl text-gray-500 cursor-pointer"></i>
            </div>

            <div class="flex items-center cursor-pointer p-2 rounded-full hover:bg-gray-100 transition-colors">
                <img src="/src/assets/images/perfilheader.jpg" alt="User Avatar" class="h-10 w-10 rounded-full mr-3 border-2 border-teal-500">
                <div class=" flex-col text-sm hidden sm:flex"> <span class="font-semibold text-gray-800">Billy Joe</span>
                <span class="text-gray-500">Employee</span>
                </div>
                <i class="mdi mdi-menu-down text-gray-500 ml-2 text-xl"></i>
            </div>
        </div>
    </header>
</template>

<script setup>
    defineEmits(['toggle-sidebar'])
</script>