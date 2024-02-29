
import { createServer } from 'miragejs'
import appConfig from 'configs/app.config'
import { customersData, customersDashboardData } from './data/customersData'
import { signInUserData } from './data/authData'

import {
    customersFakeApi,
    authFakeApi,
} from './fakeApi'

const { apiPrefix } = appConfig

export default function mockServer({ environment = 'test' }) {
    return createServer({
        environment,
        seeds(server) {
            server.db.loadData({
                customersData,
                signInUserData,
                customersDashboardData,
            })
        },
        routes() {
            this.urlPrefix = ''
            this.namespace = ''
            this.passthrough(request => {
                let isExternal = request.url.startsWith('http')
                return isExternal
            })
            this.passthrough()
            customersFakeApi(this, apiPrefix)
            authFakeApi(this, apiPrefix)
        },
    })
}