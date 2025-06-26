<template>
    <div class="min-h-screen">
        <div class="p-6">
        <div class="bg-white rounded-lg shadow-sm overflow-hidden">
            <div class=" p-6 flex items-center justify-between">
                <div class="flex items-center space-x-6">
                    <div class="w-20 h-20 bg-black rounded-lg flex items-center justify-center">
                        <svg class="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path>
                        </svg>
                    </div>
                    <div class="border-r border-gray-300 pr-6">
                        <h2 class="text-xl font-bold text-gray-900">Robbin Williams</h2>
                        <p class="text-gray-600">+15197092904</p>
                    <div class="w-full border-t border-gray-300 my-2"></div>
                    <span class="inline-block bg-white text-gray-600 text-sm px-3 py-1 rounded-full border border-gray-400">
                    Customer
                    </span>
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    <div class="bg-white p-4 rounded-lg shadow-sm flex justify-between items-center">
                        <span class="text-sm font-bold text-gray-800 mr-8">Tickets</span>
                        <span class="text-sm text-gray-900">2</span>
                    </div>
                    <div class="bg-white p-4 rounded-lg shadow-sm flex justify-between items-center">
                        <span class="text-sm font-bold text-gray-800 mr-8">Calls</span>
                        <span class="text-sm text-gray-900">6</span>
                    </div>
                    <div class="bg-white p-4 rounded-lg shadow-sm flex justify-between items-center">
                        <span class="text-sm font-bold text-gray-800 mr-8">Warranties</span>
                        <span class="text-sm text-gray-900">N/A</span>
                    </div>
                    <div class="bg-white p-4 rounded-lg shadow-sm flex justify-between items-center">
                        <span class="text-sm font-bold text-gray-800 mr-8">Quotes</span>
                        <span class="text-sm text-gray-900">$123.42</span>
                    </div>
                    <div class="bg-white p-4 rounded-lg shadow-sm flex justify-between items-center">
                        <span class="text-sm font-bold text-gray-800 mr-8">Emails</span>
                        <span class="text-sm text-gray-900">2</span>
                    </div>
                    <div class="bg-white p-4 rounded-lg shadow-sm flex justify-between items-center">
                        <span class="text-sm font-bold text-gray-800 mr-8">Sales</span>
                        <span class="text-sm text-gray-900">$123.42</span>
                    </div>
                </div>
            </div>

            <div class="flex flex-col space-y-3">
                <button class="bg-blue-950 text-white px-6 py-4 rounded-lg font-medium hover:bg-blue-900 flex items-center space-x-2">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path>
                </svg>
                <span>Quote, booking or repair</span>
                </button>
                <button class="bg-white text-blue-700 px-6 py-4 rounded-lg font-medium border border-blue-700 hover:bg-blue-50 flex items-center space-x-2">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                </svg>
                <span>Transfer Call</span>
                </button>
            </div>
            </div>

            <div class=" p-6 grid grid-cols-5 gap-6">
            <div class="bg-white p-4 rounded-lg border border-gray-200">
                <h4 class="font-bold text-gray-800 mb-3">Last Quote Status:</h4>
                <p class="text-gray-500 text-sm mb-1">N/A</p>
                <p class="text-gray-500 text-xs">Thursday 2017, Aug 24</p>
                <p class="text-gray-500 text-xs mb-2">01:23 pm</p>
                <p class="text-green-600 text-xs font-medium mb-2">Done & Paid</p>
                <p class="text-gray-700 text-xs mb-2">
                Note: Satinder said they called back yesterday that they wanted black instead, will proceed with the repair
                </p>
                <p class="text-gray-600 text-xs">Employee: Kenneth Jasper Alcaraz</p>
            </div>

            <div class="bg-white p-4 rounded-lg border border-gray-200">
                <h4 class="font-bold text-gray-800 mb-3">Last Ticket:</h4>
                <p class="text-gray-500 text-sm mb-1">N/A</p>
                <p class="text-gray-500 text-xs">Thursday 2017, Aug 24</p>
                <p class="text-gray-500 text-xs mb-2">01:23 pm</p>
                <p class="text-green-600 text-xs font-medium mb-2">Done & Paid</p>
                <p class="text-gray-700 text-xs mb-2">
                Note: Satinder said they called back yesterday that they wanted black instead, will proceed with the repair
                </p>
                <p class="text-gray-600 text-xs">Employee: Kenneth Jasper Alcaraz</p>
            </div>

            <div class="bg-white p-4 rounded-lg border border-gray-200">
                <h4 class="font-bold text-gray-800 mb-3">Last Activity:</h4>
                <p class="text-gray-500 text-sm mb-1">N/A</p>
                <p class="text-gray-500 text-xs">Thursday 2017, Aug 24</p>
                <p class="text-gray-500 text-xs mb-2">01:23 pm</p>
                <p class="text-green-600 text-xs font-medium mb-2">Done & Paid</p>
                <p class="text-gray-700 text-xs mb-2">
                Note: Satinder said they called back yesterday that they wanted black instead, will proceed with the repair
                </p>
                <p class="text-gray-600 text-xs">Employee: Kenneth Jasper Alcaraz</p>
            </div>

            <div class="bg-white p-4 rounded-lg border border-gray-200">
                <h4 class="font-bold text-gray-800 mb-3">Last External Note:</h4>
                <p class="text-gray-500 text-sm mb-1">N/A</p>
                <p class="text-gray-500 text-xs">Thursday 2017, Aug 24</p>
                <p class="text-gray-500 text-xs mb-2">01:23 pm</p>
                <p class="text-green-600 text-xs font-medium mb-2">Done & Paid</p>
                <p class="text-gray-700 text-xs mb-2">
                Note: Satinder said they called back yesterday that they wanted black instead, will proceed with the repair
                </p>
                <p class="text-gray-600 text-xs">Employee: Kenneth Jasper Alcaraz</p>
            </div>

            <div class="bg-white p-4 rounded-lg border border-gray-200">
                <h4 class="font-bold text-gray-800 mb-3">Last Internal Note:</h4>
                <p class="text-gray-500 text-sm mb-1">N/A</p>
                <p class="text-gray-500 text-xs">Thursday 2017, Aug 24</p>
                <p class="text-gray-500 text-xs mb-2">01:23 pm</p>
                <p class="text-green-600 text-xs font-medium mb-2">Done & Paid</p>
                <p class="text-gray-700 text-xs mb-2">
                Note: Satinder said they called back yesterday that they wanted black instead, will proceed with the repair
                </p>
                <p class="text-gray-600 text-xs">Employee: Kenneth Jasper Alcaraz</p>
            </div>
            </div>
        </div>
        </div>
    </div>
</template>
