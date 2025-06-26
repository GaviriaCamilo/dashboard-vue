<template>
    <div> 
        <div class="p-6 flex flex-col items-center gap-6 md:flex-row md:flex-wrap md:justify-center md:items-start md:gap-x-10 md:gap-y-6 lg:flex-nowrap lg:justify-between lg:items-start lg:gap-x-6 lg:gap-y-0">
            <div class="flex flex-col items-center text-center gap-4 w-full md:flex-row md:items-start md:text-left md:space-x-6 md:w-auto md:flex-shrink-0 lg:pr-6 lg:border-r lg:border-gray-300">
                <div class="w-20 h-20 bg-black rounded-lg flex items-center justify-center flex-shrink-0">
                    <i class="mdi mdi-account text-white text-5xl"></i> 
                </div>
                <div>
                    <h2 class="text-xl font-bold text-gray-900">Robbin Williams</h2>
                    <p class="text-gray-600">+15197092904</p>
                    <div class="w-full border-t border-gray-800 my-2"></div>
                    <span class="inline-block bg-white text-gray-600 text-sm px-3 py-1 font-bold rounded-full">
                        Customer
                    </span>
                </div>
            </div>

            <div class="grid grid-cols-2 gap-4 w-full md:grid-cols-3 md:gap-4 md:w-auto md:flex-grow lg:flex-grow-0 lg:w-auto">
                <div class="bg-white p-4 rounded-lg shadow-sm flex justify-between items-center border border-gray-200">
                    <span class="text-sm font-bold text-gray-800 mr-2 lg:mr-8">Tickets</span>
                    <span class="text-sm text-gray-900">2</span>
                </div>
                <div class="bg-white p-4 rounded-lg shadow-sm flex justify-between items-center border border-gray-200">
                    <span class="text-sm font-bold text-gray-800 mr-2 lg:mr-8">Calls</span>
                    <span class="text-sm text-gray-900">6</span>
                </div>
                <div class="bg-white p-4 rounded-lg shadow-sm flex justify-between items-center border border-gray-200">
                    <span class="text-sm font-bold text-gray-800 mr-2 lg:mr-8">Warranties</span>
                    <span class="text-sm text-gray-900">N/A</span>
                </div>
                <div class="bg-white p-4 rounded-lg shadow-sm flex justify-between items-center border border-gray-200">
                    <span class="text-sm font-bold text-gray-800 mr-2 lg:mr-8">Quotes</span>
                    <span class="text-sm text-gray-900">$123.42</span>
                </div>
                <div class="bg-white p-4 rounded-lg shadow-sm flex justify-between items-center border border-gray-200">
                    <span class="text-sm font-bold text-gray-800 mr-2 lg:mr-8">Emails</span>
                    <span class="text-sm text-gray-900">2</span>
                </div>
                <div class="bg-white p-4 rounded-lg shadow-sm flex justify-between items-center border border-gray-200">
                    <span class="text-sm font-bold text-gray-800 mr-2 lg:mr-8">Sales</span>
                    <span class="text-sm text-gray-900">$123.42</span>
                </div>
            </div>

            <div class="flex flex-col space-y-3 w-full md:flex-row md:space-y-0 md:space-x-4 md:justify-center md:flex-wrap md:w-full lg:flex-col lg:space-x-0 lg:space-y-3 lg:w-auto lg:flex-shrink-0">
                <button class="bg-blue-950 text-white px-4 py-3 rounded-full font-medium hover:bg-blue-900 flex items-center justify-center space-x-3 w-full md:flex-grow">
                    <i class="mdi mdi-tools text-xl"></i>
                    <span>Quote, booking or repair</span>
                </button>

                <button class="bg-white text-blue-700 px-4 py-3 rounded-full font-medium border border-blue-700 hover:bg-blue-50 flex items-center justify-center space-x-3 w-full md:flex-grow">
                    <i class="mdi mdi-swap-horizontal text-xl"></i>
                    <span>Transfer Call</span>
                </button>
            </div>
        </div>

        <div class="p-4 md:p-6 lg:p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            <div v-for="(card, index) in cards" :key="index">
                <h4 class="font-bold text-gray-800 mb-2 ml-1">{{ card.title }}:</h4>
                <div class="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                <p class="text-gray-500 text-sm mb-1">N/A</p>
                <p class="text-500 text-xs">{{ card.date }}</p>
                <p class="text-gray-500 text-xs mb-2">{{ card.time }}</p>
                <p class="text-gray-500 text-xs font-medium mb-2">{{ card.status }}</p>
                <p class="text-gray-700 text-xs mb-2">{{ card.note }}</p>
                <p class="text-gray-600 text-xs">Employee: {{ card.employee }}</p>
            </div>
        </div>
        </div>
    </div>
</template>

<script setup>
const cards = [
    {
        title: 'Last Quote Status',
        date: 'Thursday 2017, Aug 24',
        time: '01:23 pm',
        status: 'Done & Paid',
        note:
        'Note: Satinder said they called back yesterday that they wanted black instead, will proceed with the repair',
        employee: 'Kenneth Jasper Alcaraz',
    },
    {
        title: 'Last Ticket',
        date: 'Thursday 2017, Aug 24',
        time: '01:23 pm',
        status: 'Done & Paid',
        note:
        'Note: Satinder said they called back yesterday that they wanted black instead, will proceed with the repair',
        employee: 'Kenneth Jasper Alcaraz',
    },
    {
        title: 'Last Activity',
        date: 'Thursday 2017, Aug 24',
        time: '01:23 pm',
        status: 'Done & Paid',
        note:
        'Note: Satinder said they called back yesterday that they wanted black instead, will proceed with the repair',
        employee: 'Kenneth Jasper Alcaraz',
    },
    {
        title: 'Last External Note',
        date: 'Thursday 2017, Aug 24',
        time: '01:23 pm',
        status: 'Done & Paid',
        note:
        'Note: Satinder said they called back yesterday that they wanted black instead, will proceed with the repair',
        employee: 'Kenneth Jasper Alcaraz',
    },
    {
        title: 'Last Internal Note',
        date: 'Thursday 2017, Aug 24',
        time: '01:23 pm',
        status: 'Done & Paid',
        note:
        'Note: Satinder said they called back yesterday that they wanted black instead, will proceed with the repair',
        employee: 'Kenneth Jasper Alcaraz',
    },
]
</script>