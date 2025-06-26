<template>
    <aside class="w-60 bg-gray-900 text-white flex flex-col p-4 shadow-lg z-20">
        <div class="flex items-center justify-start mb-8 mt-2">
            <div class="flex flex-col">
                <span class="text-xl font-extrabold text-white leading-none">LOGO</span>
                <span class="text-3xl font-extrabold text-teal-500 leading-none">LOGO</span>
            </div>
        </div>
        <nav class="flex-1">
            <h3 class="text-xs uppercase font-semibold text-teal-500 mb-3 px-2 tracking-wider">MENU</h3>

            <router-link to="/" class="flex items-center py-2.5 px-2 rounded-md text-sm text-gray-300 font-medium hover:bg-gray-700 hover:text-white mb-1 transition-colors duration-200" exact-active-class="bg-gray-700 text-teal-500 font-semibold border-l-4 border-teal-500 pl-2">
                <i class="material-icons mr-2 text-lg">home</i>
                Home
            </router-link>

            <router-link to="/sales" class="flex items-center py-2.5 px-2 rounded-md text-sm text-gray-300 font-medium hover:bg-gray-700 hover:text-white mb-1 transition-colors duration-200" active-class="bg-gray-700 text-teal-500 font-semibold border-l-4 border-teal-500 pl-2">
                <i class="material-icons mr-2 text-lg">person</i>
                Sales
            </router-link>

            <router-link to="/service" class="flex items-center py-2.5 px-2 rounded-md text-sm text-gray-300 font-medium hover:bg-gray-700 hover:text-white mb-1 transition-colors duration-200" active-class="bg-gray-700 text-teal-500 font-semibold border-l-4 border-teal-500 pl-2">
                <i class="material-icons mr-2 text-lg">business_center</i>
                Service
            </router-link>

            <router-link to="/customers" class="flex items-center py-2.5 px-2 rounded-md text-sm text-gray-300 font-medium hover:bg-gray-700 hover:text-white mb-1 transition-colors duration-200" active-class="bg-gray-700 text-teal-500 font-semibold border-l-4 border-teal-500 pl-2">
                <i class="material-icons mr-2 text-lg">group</i>
                Customers
            </router-link>

            <router-link to="/reports" class="flex items-center py-2.5 px-2 rounded-md text-sm text-gray-300 font-medium hover:bg-gray-700 hover:text-white mb-1 transition-colors duration-200" active-class="bg-gray-700 text-teal-500 font-semibold border-l-4 border-teal-500 pl-2">
                <i class="material-icons mr-2 text-lg">assessment</i>
                Reports
            </router-link>

            <router-link to="/booking-calendar" class="flex items-center py-2.5 px-2 rounded-md text-sm text-gray-300 font-medium hover:bg-gray-700 hover:text-white mb-1 transition-colors duration-200" active-class="bg-gray-700 text-teal-500 font-semibold border-l-4 border-teal-500 pl-2">
                <i class="material-icons mr-2 text-lg">calendar_today</i>
                Booking Calendar
            </router-link>

            <router-link to="/inventory" class="flex items-center py-2.5 px-2 rounded-md text-sm text-gray-300 font-medium hover:bg-gray-700 hover:text-white mb-1 transition-colors duration-200" active-class="bg-gray-700 text-teal-500 font-semibold border-l-4 border-teal-500 pl-2">
                <i class="material-icons mr-2 text-lg">inventory_2</i>
                Inventory
            </router-link>

            <router-link to="/marketing" class="flex items-center py-2.5 px-2 rounded-md text-sm text-gray-300 font-medium hover:bg-gray-700 hover:text-white mb-1 transition-colors duration-200" active-class="bg-gray-700 text-teal-500 font-semibold border-l-4 border-teal-500 pl-2">
                <i class="material-icons mr-2 text-lg">campaign</i>
                Marketing
            </router-link>

            <router-link to="/shopify" class="flex items-center py-2.5 px-2 rounded-md text-sm text-gray-300 font-medium hover:bg-gray-700 hover:text-white mb-1 transition-colors duration-200" active-class="bg-gray-700 text-teal-500 font-semibold border-l-4 border-teal-500 pl-2">
                <i class="material-icons mr-2 text-lg">storefront</i>
                Shopify
            </router-link>

            <hr class="mt-8 pt-6 border-t border-gray-700" />
            <h3 class="text-xs uppercase font-semibold text-teal-500 mb-3 px-2 tracking-wider">
                GENERAL
            </h3>

            <router-link to="/settings" class="flex items-center py-2.5 px-2 rounded-md text-sm text-gray-300 font-medium hover:bg-gray-700 hover:text-white mb-1 transition-colors duration-200" active-class="bg-gray-700 text-teal-500 font-semibold border-l-4 border-teal-500 pl-2">
                <i class="material-icons mr-2 text-lg">settings</i>
                Settings
            </router-link>

            <router-link to="/configure-apis" class="flex items-center py-2.5 px-2 rounded-md text-sm text-gray-300 font-medium hover:bg-gray-700 hover:text-white mb-1 transition-colors duration-200" active-class="bg-gray-700 text-teal-500 font-semibold border-l-4 border-teal-500 pl-2">
                <i class="material-icons mr-2 text-lg">code</i>
                Configure APIs
            </router-link>
        </nav>
    </aside>
</template>