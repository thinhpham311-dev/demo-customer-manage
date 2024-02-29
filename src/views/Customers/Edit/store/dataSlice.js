import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { apiGetCustomer, apiPutCustomer, apiDeleteCustomer } from 'services/CustomersService'

export const getCustomer = createAsyncThunk('customerEdit/data/getCustomer', async (data) => {
    const response = await apiGetCustomer(data)
    return response.data
})

export const updateCustomer = async (data) => {
    const response = await apiPutCustomer(data)
    return response.data
}

export const deleteCustomer = async (data) => {
    const response = await apiDeleteCustomer(data)
    return response.data
}

const dataSlice = createSlice({
    name: 'customerEdit/data',
    initialState: {
        loading: false,
        customerData: [],

    },
    reducers: {
    },
    extraReducers: {
        [getCustomer.fulfilled]: (state, action) => {
            state.customerData = action.payload
            state.loading = false
        },
        [getCustomer.pending]: (state) => {
            state.loading = true
        },
    }
})

export default dataSlice.reducer
