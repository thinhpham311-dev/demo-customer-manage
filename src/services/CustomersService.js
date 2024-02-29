import ApiService from "./ApiService"

export async function apiGetCustomerDashboardData(data) {
    return ApiService.fetchData({
        url: '/sales/dashboard',
        method: 'post',
        data
    })
}

export async function apiGetCustomerList(data) {
    return ApiService.fetchData({
        url: '/sales/products',
        method: 'post',
        data
    })
}

export async function apiDeleteCustomer(data) {
    return ApiService.fetchData({
        url: '/sales/products/delete',
        method: 'delete',
        data
    })
}

export async function apiGetCustomer(params) {
    return ApiService.fetchData({
        url: '/sales/product',
        method: 'get',
        params
    })
}

export async function apiPutCustomer(data) {
    return ApiService.fetchData({
        url: '/sales/products/update',
        method: 'put',
        data
    })
}

export async function apiCreateCustomer(data) {
    return ApiService.fetchData({
        url: '/sales/products/create',
        method: 'post',
        data
    })
}

export async function apiGetCustomersOrders(params) {
    return ApiService.fetchData({
        url: '/sales/orders',
        method: 'get',
        params
    })
}

export async function apiDeleteCustomersOrders(data) {
    return ApiService.fetchData({
        url: '/sales/orders/delete',
        method: 'delete',
        data
    })
}

export async function apiGetCustomersOrderDetails(params) {
    return ApiService.fetchData({
        url: '/sales/orders-details',
        method: 'get',
        params
    })
}