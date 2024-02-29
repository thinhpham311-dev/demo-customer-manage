import React, { useEffect } from 'react'
import { Loading } from 'components/shared'
import Statistic from './Statistic'
import CustomersReport from './CustomersReport'
// import CustomersByCategories from './CustomersByCategories'
// import LatestOrder from './LatestOrder'
// import TopProduct from './TopProduct'
import { getCustomersDashboardData } from '../store/dataSlice'
import { useDispatch, useSelector } from 'react-redux'

const SalesDashboardBody = () => {

	const dispatch = useDispatch()

	const {
		statisticData,
		customersReportData,
		// topcustomersData,
		// latestOrderData,
		// salesByCategoriesData
	} = useSelector((state) => state.customerDashboard.data.dashboardData)
	const loading = useSelector((state) => state.customerDashboard.data.loading)

	useEffect(() => {
		fetchData()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	const fetchData = () => {
		dispatch(getCustomersDashboardData())
	}

	return (
		<Loading loading={loading}>
			<Statistic data={statisticData} />
			{/* <div className="grid"> */}
			<CustomersReport data={customersReportData} />
			{/* <CustomersByCategories data={salesByCategoriesData} /> */}
			{/* </div> */}
			{/* <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
				<LatestOrder data={latestOrderData} className="lg:col-span-2" />
				<TopProduct data={topcustomersData} />
			</div> */}
		</Loading>
	)
}

export default SalesDashboardBody