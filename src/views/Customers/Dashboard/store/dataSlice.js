import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { apiGetCustomerDashboardData } from 'services/CustomersService'

export const getCustomersDashboardData = createAsyncThunk('customersDashboard/data/getCustomersDashboardData', async (data) => {
    const response = await apiGetCustomerDashboardData(data)
    return response.data
})

export const initialFilterData = {
    status: '',
}

const dataSlice = createSlice({
    name: 'customerDashboard/data',
    initialState: {
        loading: true,
        dashboardData: {},
    },
    reducers: {
    },
    extraReducers: {
        [getCustomersDashboardData.fulfilled]: (state, action) => {
            state.dashboardData = action.payload
            state.loading = false
        },
        [getCustomersDashboardData.pending]: (state) => {
            state.loading = true
        }
    }
})

export default dataSlice.reducer
