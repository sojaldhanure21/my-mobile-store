import { Routes, Route } from "react-router"
import LandingPage from "../pages/LandingPage"

export const MainRoutes = () => {
    return (<Routes>
        <Route path="/" element={<LandingPage />} />
    </Routes>)
}