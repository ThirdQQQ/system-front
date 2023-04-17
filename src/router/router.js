import React from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import { lazy, Suspense } from 'react'
const Login = lazy(() => import('../page/Login/index'))
const Loading = lazy(() => import('../comp/Loading'))
const Home = lazy(() => import('../page/Home/index'))

export default function Router() {

    const RequireAuth = ({ children }) => {
        const token = localStorage.getItem('username');
        console.log(1);
        if (token) {
            return <>{children}</>;
        } else {
            return <Navigate to="/" replace />;
        }
    }

    return (
        <Suspense fallback={<Loading />}>
            <BrowserRouter>
                <Routes>
                    <Route index path='/' element={<Login />}></Route>
                    <Route path='/home' element={<RequireAuth><Home /></RequireAuth>}></Route>
                </Routes>
            </BrowserRouter>
        </Suspense>
    )
}
