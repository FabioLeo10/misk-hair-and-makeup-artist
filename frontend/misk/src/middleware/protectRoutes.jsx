import Login from "../pages/login"

export const useAuth = () => {
    return JSON.parse(localStorage.getItem('auth'))
}

const ProtectRoutes = () => {
    const isAuth = useAuth()

    return isAuth ? <Outlet/> : <Login/>
}

export default ProtectRoutes