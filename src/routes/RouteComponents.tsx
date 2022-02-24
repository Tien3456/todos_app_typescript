import React, { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import routes from './routes'
import Layout from '../components/Layout'

const RouteComponents = () => {
  return (
    <Routes>
        <Route path="/" element={<Layout />}>
            {
                routes.map(route => {
                    const Element = route.element
                    return (
                        <Route
                            key={`/${route.path}`}
                            path={ route.path }
                            element={
                                <Suspense fallback={<div></div>}>
                                    <Element />
                                </Suspense>
                            }
                        />
                    )
                })
            }
        </Route>
    </Routes>
  )
}

export default RouteComponents