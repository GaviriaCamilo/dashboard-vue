<template>
    <header class="bg-white shadow-sm p- flex items-center justify-between z-10 relative">
        <div class="flex items-center space-x-4">
        </div>
        <div class="flex items-center space-x-6">
        <div class="flex items-center space-x-4 text-gray-500">
            <i class="material-icons text-xl cursor-pointer hover:text-gray-700">notifications</i>
            <i class="material-icons text-xl cursor-pointer hover:text-gray-700">message</i>
            <i class="material-icons text-xl cursor-pointer hover:text-gray-700">add_circle</i>
        </div>
        <div class="flex items-center cursor-pointer p-2 rounded-full hover:bg-gray-100 transition-colors">
            <img src="/src/assets/images/perfilheader.jpg" alt="User Avatar" class="h-10 w-10 rounded-full mr-3">
            <div class="flex flex-col text-sm">
            <span class="font-semibold text-gray-800">Billy Joe</span>
            <span class="text-gray-500">Employee</span>
            </div>
            <i class="material-icons text-gray-500 ml-2">arrow_drop_down</i>
        </div>
        </div>
    </header>
</template>