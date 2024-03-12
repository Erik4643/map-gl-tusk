import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { v4 as uuid } from 'uuid'

import { Layout } from 'components/layout'
import MapGl from 'components/mapGl'
import MapRoutes from 'components/mapRoutes'

import { appRoutes } from './routes'

export const AppRouter = () => {
  const [completedArr, setCompletedArr] = useState([])

  const appPages = [
    { path: appRoutes.home, component: <MapGl completedArr={completedArr} /> },
    { path: appRoutes.route, component: <MapRoutes completedArr={completedArr} setCompletedArr={setCompletedArr} /> }

  ]

  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          {appPages.map(({ path, component }) => (
            <Route path={path} element={component} key={uuid()} />
          ))}
        </Route>
      </Routes>
    </Router>
  )
}
