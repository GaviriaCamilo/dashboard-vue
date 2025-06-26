<template>
    <div class="min-h-screen flex flex-col">
        <div class="mb-4">
            <h1 class="text-2xl font-bold text-gray-900">Hi Billy Joe!</h1>
            <p class="text-gray-600 text-sm">Logged in as an employee</p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6 items-start">
            <div class="lg:col-span-2">
                <ControlPanel />
            </div>
            <div class="lg:col-span-1">
                <RequestAndSearch />
            </div>
        </div>

        <div class="bg-white rounded-lg shadow-sm overflow-hidden flex-grow flex flex-col">
            <RecentCallsTable />
            <CustomerDetail class="min-h-0" />
        </div>
    </div>
</template>


<script setup>
import ControlPanel from '@/components/sales/ControlPanel.vue';
import RecentCallsTable from '@/components/sales/RecentCallsTable.vue';
import RequestAndSearch from '@/components/sales/RequestAndSearch.vue';
import CustomerDetail from '@/components/sales/CustomerDetail.vue';
</script>