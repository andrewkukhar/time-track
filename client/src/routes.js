import { Routes, Route, Navigate } from 'react-router-dom'
import { AuthPage } from './pages/AuthPage.js'
import { TimesPage } from './pages/TimesPage.js'
import { CreatePage } from './pages/CreatePage.js'
import { DetailPage } from './pages/DetailPage.js'
import 'materialize-css'

export const useRoutes = isAuthenticated => {
    if (isAuthenticated) {
        return (
            <div>
                <Routes>
                    <Route path="/create" element={<CreatePage />} />
                    <Route path="/times" element={<TimesPage />} />
                    <Route path="/detail/:id" element={<DetailPage />} />
                    <Route path="/" element={<Navigate replace to="/create" />} />
                </Routes>
            </div>
        )
    }
    return (
        <div>
            <Routes>
                <Route path="/" element={<AuthPage />} />
                <Route path="/" element={<Navigate replace to="/" />} />
            </Routes>
        </div>
    )
}