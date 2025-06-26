<template>
    <div class="h-full bg-white rounded-lg shadow-sm border border-gray-200 p-6 flex flex-col justify-between">
        <div>
            <h2 class="text-lg font-medium text-gray-600 mb-3">Create Request</h2>
            <div class="space-y-3">
                <button class="w-full bg-blue-900 text-white px-6 py-4 rounded-full font-medium hover:bg-blue-800 transition-colors duration-200 flex items-center justify-center gap-3">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"/>
                    </svg>
                    <span>Quote, booking or repair</span>
                </button>

                <button class="w-full bg-teal-600 text-white px-6 py-4 rounded-full font-medium hover:bg-teal-700 transition-colors duration-200 flex items-center justify-center gap-3">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"/>
                    <path fill-rule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clip-rule="evenodd"/>
                    </svg>
                <span>Buy or trade</span>
                </button>
            </div>
        </div>

        <div class="border-b border-gray-300 my-6"></div> <div>
            <h2 class="text-lg font-medium text-gray-600 mb-4">Search Records</h2>
            <div class="space-y-3">
                <button class="w-full bg-white border-2 border-gray-300 text-blue-900 px-6 py-4 rounded-full font-medium hover:bg-gray-50 transition-colors duration-200 flex items-center justify-center gap-3">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                    </svg>
                    <span>Inbox</span>
                </button>

                <button class="w-full bg-white border-2 border-gray-300 text-blue-900 px-6 py-4 rounded-full font-medium hover:bg-gray-50 transition-colors duration-200 flex items-center justify-center gap-3">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
                        <path fill-rule="evenodd" d="M4 5a2 2 0 012-2v1a2 2 0 002 2h6a2 2 0 002-2V3a2 2 0 012 2v6.5l-3.777 1.947a1 1 0 01-.972-.043L10 13.347l-1.251.907a1 1 0 01-.972.043L4 12.5V5z" clip-rule="evenodd"/>
                    </svg>
                    <span>Quotes</span>
                </button>

                <button class="w-full bg-white border-2 border-gray-300 text-blue-900 px-6 py-4 rounded-full font-medium hover:bg-gray-50 transition-colors duration-200 flex items-center justify-center gap-3">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"/>
                    </svg>
                    <span>Bookings</span>
                </button>
            </div>
        </div>
    </div>
</template>