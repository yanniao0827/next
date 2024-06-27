import { createContext,useContext} from "react";

const AuthContext=createContext();
const storageKey="Healthier-auth";

export function AuthContextProvider({children}){
    const login=async(email,password)=>{
        try{
            const r=await fetch(JWT_LOGIN_POST,{
                method:"POST",
                body:JSON.stringify({email,password}),
                headers:{"Content-Type":"application/json",},
            });
            const result=await r.json();
            if(result.success){
                localStorage.setItem(storageKey,JSON.stringify(result.data));
            }
            return result.successl;
        }catch(ex){
            console.log(ex);
            return false;
        }
    };

    return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext);
export default AuthContext;