<template>
    <div class="h-full bg-white rounded-lg shadow-sm border border-gray-200 p-6 flex flex-col justify-between">
        <div>
        <h2 class="text-lg font-medium text-gray-600 mb-3">Create Request</h2>
        <div class="space-y-3">
            <button class="w-full bg-blue-950 text-white px-4 py-2 rounded-xl font-medium hover:bg-blue-800 transition-colors duration-200 flex items-center justify-center gap-3">
            <i class="mdi mdi-tools w-5 h-5 text-xl mb-2"></i>
            <span>Quote, booking or repair</span>
            </button>

            <button class="w-full bg-[#02c39a] text-white px-4 py-2 rounded-xl font-medium hover:bg-teal-700 transition-colors duration-200 flex items-center justify-center gap-3">
            <i class="mdi mdi-cart-arrow-down w-5 h-5 mb-2 text-xl"></i>
            <span>Buy or trade</span>
            </button>
        </div>
        </div>

        <div class="border-b border-gray-300 my-6"></div>
        <div>
        <h2 class="text-lg font-medium text-gray-600 mb-4">Search Records</h2>
        <div class="space-y-3">
            <button class="w-full bg-[#e3f2fd] border-2 border-gray-300 text-blue-900 px-4 py-3 rounded-xl font-medium hover:bg-gray-50 transition-colors duration-200 flex items-center justify-center gap-3">
            <i class="mdi mdi-inbox w-5 h-5 text-xl mb-2"></i>
            <span>Inbox</span>
            </button>

            <button class="w-full bg-[#e3f2fd] border-2 border-gray-300 text-blue-900 px-4 py-3 rounded-xl font-medium hover:bg-gray-50 transition-colors duration-200 flex items-center justify-center gap-3">
            <i class="mdi mdi-file-document-edit w-5 h-5 text-xl mb-2"></i>
            <span>Quotes</span>
            </button>

            <button class="w-full bg-[#e3f2fd] border-2 border-gray-300 text-blue-900 px-4 py-3 rounded-xl font-medium hover:bg-gray-50 transition-colors duration-200 flex items-center justify-center gap-3">
            <i class="mdi mdi-calendar-check w-5 h-5 text-xl mb-2"></i>
            <span>Bookings</span>
            </button>
        </div>
        </div>
    </div>
</template>
