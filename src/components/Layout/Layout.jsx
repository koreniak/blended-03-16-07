import { Suspense } from 'react'
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header'

const Layout = () => {
  return (
    <>
      <Header />
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  )
};

export default Layout
