import { lazy } from 'react'

const routes = [
    {
        path: '',
        element: lazy(() => import('../pages/AllItems'))
    }
]

export default routes