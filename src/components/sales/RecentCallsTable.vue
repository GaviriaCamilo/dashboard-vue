<template>
    <div class="bg-gray-800 text-white rounded-t-xl">
        <div class="flex items-center px-4 py-2 border-b border-gray-700">
            <i class="mdi mdi-phone-outline text-lg mr-2"></i>
            <span class="font-medium text-sm sm:text-base">Recent and Active Calls</span>
        </div>

        <div class="hidden lg:block overflow-x-auto">
            <table class="w-full text-sm">
                <thead class="bg-stone-50 font-bold">
                    <tr>
                        <th class="px-3 py-3 text-left text-gray-800 font-semibold">Contact</th>
                        <th class="px-3 py-3 text-left text-gray-800 font-semibold">Matches</th>
                        <th class="px-3 py-3 text-left text-gray-800 font-semibold">Extension</th>
                        <th class="px-3 py-3 text-left text-gray-800 font-semibold">Phone</th>
                        <th class="px-3 py-3 text-left text-gray-800 font-semibold">Calling</th>
                        <th class="px-3 py-3 text-left text-gray-800 font-semibold">Last Activity</th>
                        <th class="px-3 py-3 text-left text-gray-800 font-semibold">Last Ticket</th>
                        <th class="px-3 py-3 text-left text-gray-800 font-semibold">Device</th>
                        <th class="px-3 py-3 text-left text-gray-800 font-semibold">Details</th>
                        <th class="px-3 py-3 text-left text-gray-800 font-semibold">Repair Items</th>
                        <th class="px-3 py-3 text-left text-gray-800 font-semibold">Status</th>
                        <th class="px-3 py-3 text-left text-gray-800 font-semibold">Time</th>
                    </tr>
                </thead>
                <tbody class="bg-white text-gray-800">
                    <tr v-for="(call, index) in calls" :key="index" class="border-b border-black hover:bg-gray-50 cursor-pointer">
                        <td class="px-3 py-3">{{ call.contact }}</td>
                        <td class="px-3 py-3">{{ call.matches }}</td>
                        <td class="px-3 py-3">{{ call.extension }}</td>
                        <td class="px-3 py-3">{{ call.phone }}</td>
                        <td class="px-3 py-3">{{ call.calling }}</td>
                        <td class="px-3 py-3">{{ call.lastActivity }}</td>
                        <td class="px-3 py-3">{{ call.lastTicket }}</td>
                        <td class="px-3 py-3">{{ call.device }}</td>
                        <td class="px-3 py-3">{{ call.details }}</td>
                        <td class="px-3 py-3">{{ call.repairItems }}</td>
                        <td class="px-3 py-3">{{ call.status }}</td>
                        <td class="px-3 py-3 text-teal-600 font-mono">{{ call.time }}</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="block lg:hidden">
            <div class="p-4 space-y-4">
                <div v-for="(call, index) in calls" :key="index" class="bg-white rounded-lg p-4 text-gray-800 shadow-sm">
                    <div class="flex justify-between items-start mb-3">
                        <div>
                            <h3 class="font-semibold text-gray-900">{{ call.contact }}</h3>
                            <p class="text-sm text-gray-600">{{ call.phone }}</p>
                        </div>
                        <span class="text-teal-600 font-mono text-sm font-semibold">{{ call.time }}</span>
                    </div>

                    <div class="grid grid-cols-2 gap-3 text-sm mb-3">
                        <div>
                            <span class="text-gray-500 block">Matches:</span>
                            <span class="font-medium">{{ call.matches }}</span>
                        </div>
                        <div>
                            <span class="text-gray-500 block">Extension:</span>
                            <span class="font-medium">{{ call.extension }}</span>
                        </div>
                        <div>
                            <span class="text-gray-500 block">Calling:</span>
                            <span class="font-medium">{{ call.calling }}</span>
                        </div>
                        <div>
                            <span class="text-gray-500 block">Last Activity:</span>
                            <span class="font-medium">{{ call.lastActivity }}</span>
                        </div>
                        <div>
                            <span class="text-gray-500 block">Last Ticket:</span>
                            <span class="font-medium">{{ call.lastTicket }}</span>
                        </div>
                        <div>
                            <span class="text-gray-500 block">Device:</span>
                            <span class="font-medium">{{ call.device }}</span>
                        </div>
                        <div>
                            <span class="text-gray-500 block">Details:</span>
                            <span class="font-medium">{{ call.details }}</span>
                        </div>
                        <div>
                            <span class="text-gray-500 block">Repair Items:</span>
                            <span class="font-medium">{{ call.repairItems }}</span>
                        </div>
                    </div>

                    <div class="pt-3 border-t border-gray-200">
                        <div class="flex justify-between items-center text-sm">
                            <span class="text-gray-500">Status: <span class="font-medium text-gray-700">{{ call.status }}</span></span>
                            <span class="bg-gray-100 px-2 py-1 rounded text-xs">{{ call.matches }} match{{ call.matches !== 1 ? 'es' : '' }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const calls = [
    {
        contact: "New Customer",
        matches: 1,
        extension: "Main Greeting",
        phone: "+15197092904",
        calling: "Dundas",
        lastActivity: "N/A",
        lastTicket: "iPhone 12",
        device: "iPhone 13",
        details: "Repair",
        repairItems: "-",
        status: "-",
        time: "0:00:04"
    },
    {
        contact: "John Smith",
        matches: 2,
        extension: "Sales Dept",
        phone: "+15197092905",
        calling: "Toronto",
        lastActivity: "Yesterday",
        lastTicket: "Samsung S21",
        device: "Samsung S22",
        details: "Quote",
        repairItems: "Screen",
        status: "Pending",
        time: "0:02:15"
    },
    {
        contact: "Mary Johnson",
        matches: 1,
        extension: "Support",
        phone: "+15197092906",
        calling: "Ottawa",
        lastActivity: "2 days ago",
        lastTicket: "iPad Pro",
        device: "iPad Air",
        details: "Service",
        repairItems: "Battery",
        status: "Complete",
        time: "0:01:32"
    }
]
</script>