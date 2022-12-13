import {useState, createContext, useContext} from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({children})=>{
    const [email, setEmail] = useState(null)
    const [role, setRole] = useState(null)
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
