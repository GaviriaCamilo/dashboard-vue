<template>
    <div class="min-h-screen flex flex-col p-4 sm:p-6">
        <div class="flex-1 space-y-6">
            <div class="grid grid-cols-1 xl:grid-cols-3 gap-4 sm:gap-6">
                <div class="xl:col-span-2">
                    <ControlPanel />
                </div>
                <div class="xl:col-span-1">
                    <RequestAndSearch />
                </div>
            </div>

            <div class="bg-white rounded-lg shadow-sm overflow-hidden flex-1 flex flex-col min-h-0">
                <RecentCallsTable />
                <div class="flex-1 min-h-0 overflow-hidden">
                    <CustomerDetail />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import ControlPanel from '@/components/sales/ControlPanel.vue'
import RecentCallsTable from '@/components/sales/RecentCallsTable.vue'
import RequestAndSearch from '@/components/sales/RequestAndSearch.vue'
import CustomerDetail from '@/components/sales/CustomerDetail.vue'
</script>