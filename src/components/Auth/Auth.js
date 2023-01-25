import {useState, createContext, useContext, useEffect} from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({children})=>{
    const [email, setEmail] = useState(null)
    const [role, setRole] = useState(null)

    const getUser = async () => {
        const data = await fetch("http://localhost:8080/api/auth/current", {
            credentials: "include"
        })
        try {
            return await data.json()
        } catch (e) {
            return data
        }
    }
    useEffect(() => {
        getUser()
            .then(user => {
                if (user?.id) {
                    setEmail(user.email)
                    setRole(user.role)
                }
            })
    }, [])

    const login = (email, role) =>{
        setEmail(email);
        setRole(role)
    }
    const logout = () =>{
        setEmail(null);
        setRole(null)
    }
    return(
        <AuthContext.Provider value={{email,role, login,logout}}>
            {children}
        </AuthContext.Provider>
    )

}

export const useAuth = ()=>{
    return useContext(AuthContext)
}
