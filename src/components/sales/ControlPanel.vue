<template>
    <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div class="mb-4">
            <h2 class="text-lg font-semibold text-gray-900 mb-1">Control Panel</h2>
            <p class="text-gray-600 text-sm">
                Enter details to create or search customer requests in seconds.
            </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" placeholder="Model" class="px-3 py-3 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
            <input type="text" placeholder="Repair Type" class="px-3 py-3 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />

            <div class="md:col-span-2">
                <div class="flex border border-gray-300 rounded-xl overflow-hidden">
                <div class="flex items-center px-3 py-2 bg-gray-50 border-r border-gray-300 space-x-1">
                    <img src="https://flagcdn.com/16x12/ca.png" alt="Canada" class="w-4 h-3 object-cover" />
                    <span class="text-sm">+1</span>
                </div>
                <input type="tel" placeholder="Phone number" class="flex-1 px-3 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
            </div>

            <div class="md:col-span-2">
                <input type="text" placeholder="Name" class="w-full px-3 py-3 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
            </div>

            <input type="text" placeholder="Company" class="px-3 py-3 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
            <input type="email" placeholder="Email" class="px-3 py-3 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />

            <div class="md:col-span-2">
                <input type="text" placeholder="Work order" class="w-full px-3 py-3 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
            </div>

            <div class="md:col-span-2 flex flex-col sm:flex-row gap-4">
                <input type="text" placeholder="IMEI" class="flex-1 px-2 py-2 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                <button class="flex items-center justify-center px-4 py-2 bg-white border border-red-500 text-red-500 rounded-xl hover:bg-red-50 transition-colors text-sm whitespace-nowrap">
                <i class="mdi mdi-delete-outline text-lg mr-1"></i>
                Clear
                </button>
            </div>
        </div>
    </div>
</template>