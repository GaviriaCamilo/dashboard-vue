import { createRouter, createWebHistory } from 'vue-router';
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import HomeView from '@/views/HomeView.vue';
import SalesView from '@/views/SalesView.vue';
import ServiceView from '@/views/ServiceView.vue';
import CustomersView from '@/views/CustomersView.vue';
import ReportsView from '@/views/ReportsView.vue';
import BookingCalendarView from '@/views/BookingCalendarView.vue';
import InventoryView from '@/views/InventoryView.vue';
import MarketingView from '@/views/MarketingView.vue';
import ShopifyView from '@/views/ShopifyView.vue';
import SettingsView from '@/views/SettingsView.vue';
import ConfigureApisView from '@/views/ConfigureApisView.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
        path: '/',
        component: DefaultLayout,
        children: [
            {
            path: '', 
            name: 'home',
            component: HomeView
            },
            {
            path: 'sales',
            name: 'sales',
            component: SalesView
            },
            {
            path: 'service',
            name: 'service',
            component: ServiceView
            },
            {
            path: 'customers',
            name: 'customers',
            component: CustomersView
            },
            {
            path: 'reports',
            name: 'reports',
            component: ReportsView
            },
            {
            path: 'booking-calendar',
            name: 'booking-calendar',
            component: BookingCalendarView
            },
            {
            path: 'inventory',
            name: 'inventory',
            component: InventoryView
            },
            {
            path: 'marketing',
            name: 'marketing',
            component: MarketingView
            },
            {
            path: 'shopify',
            name: 'shopify',
            component: ShopifyView
            },
            {
            path: 'settings',
            name: 'settings',
            component: SettingsView
            },
            {
            path: 'configure-apis',
            name: 'configure-apis',
            component: ConfigureApisView
            },
        ]
        },
    ]
})

export default router