import { createContext,useContext} from "react";

const AuthContext=createContext();

export function AuthContextProvider({children}){
    return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext);
export default AuthContext;