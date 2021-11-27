import React, { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'

const HomePage = lazy(() =>
  import('./Home').then((module) => ({
    default: module.default,
  }))
)

const AppRoutes: React.FC = () => (
  <div className="App">
    <Suspense fallback={<div>loading...</div>}>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Suspense>
  </div>
)
export default AppRoutes
