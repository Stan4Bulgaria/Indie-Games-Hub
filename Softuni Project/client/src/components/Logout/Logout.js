import { Navigate } from "react-router-dom"
import { useContext, useEffect } from "react"
import { AuthContext } from "../../contexts/AuthContext"
export const Logout = () => {
    const { setLogout } = useContext(AuthContext);
    useEffect(() => {
        setLogout();

    }, [setLogout])
    return (
        <Navigate to={'/'}></Navigate>
    )
}