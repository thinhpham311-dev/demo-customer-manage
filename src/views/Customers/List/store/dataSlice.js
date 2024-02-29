import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { apiGetCustomerList, apiDeleteCustomer } from 'services/CustomersService'

export const getCustomers = createAsyncThunk('customerListSlice/data/getCustomers', async (data) => {
    const response = await apiGetCustomerList()
    return response.data
})

export const deleteCustomer = async (data) => {
    const response = await apiDeleteCustomer(data)
    return response.data
}

export const initialTableData = {
    total: 0,
    pageIndex: 1,
    pageSize: 10,
    query: '',
    sort: {
        order: '',
        key: ''
    }
}

export const initialFilterData = {
    name: '',
    category: ['bags', 'cloths', 'devices', 'shoes', 'watches'],
    status: [0, 1, 2],
    customerStatus: 0,
}

const dataSlice = createSlice({
    name: 'customerListSlice/data',
    initialState: {
        loading: false,
        customerList: [],
        tableData: initialTableData,
        filterData: initialFilterData,
    },
    reducers: {
        updateCustomerList: (state, action) => {
            state.customerList = action.payload
        },
        setTableData: (state, action) => {
            state.tableData = action.payload
        },
        setFilterData: (state, action) => {
            state.filterData = action.payload
        },
    },
    extraReducers: {
        [getCustomers.fulfilled]: (state, action) => {
            state.customerList = action.payload.data
            state.tableData.total = action.payload.total
            state.loading = false
        },
        [getCustomers.pending]: (state) => {
            state.loading = true
        },
    }
})

export const { updateCustomerList, setTableData, setFilterData, setSortedColumn } = dataSlice.actions

export default dataSlice.reducer
