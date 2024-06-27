import { createContext,useContext,useState,useEffect} from "react";
import { JWT_LOGIN_POST } from "@/config/api-path";

const AuthContext=createContext();
const storageKey="Healthier-auth";

// 未登入時資料的預設值
const emptyAuth={
    id:0,
    email:"",
    nickname:"",
    token:"",
};

export function AuthContextProvider({children}){
    // 還沒登入，使用未登入的預設值
    const [auth,setAuth]=useState(emptyAuth);
    const login=async(email,password)=>{
        try{
            const r=await fetch(JWT_LOGIN_POST,{
                method:"POST",
                body:JSON.stringify({email,password}),
                headers:{"Content-Type":"application/json",},
            });
            const result=await r.json();
            if(result.success){
                // 如果登入成功，token 和用戶的相關資料存到 localStorage
                localStorage.setItem(storageKey,JSON.stringify(result.data));
                // **** 變更狀態
                setAuth(result.data);
            }
            return result.success;
        }catch(ex){
            console.log(ex);
            return false;
        }
    };

    // 如果登出了，把未登入的預設資料重新設定進來
    const logout=()=>{
        localStorage.removeItem(storageKey);
        setAuth(emptyAuth);
    };

    const getAuthHeader =()=>{
        if(auth.token){
            return{
                Authorization:`Bearer ${auth.token}`,
            };
        }else{
            return{}
        }
    };


    // 用戶即使重刷頁面，登入狀態也會保留
    useEffect(()=>{
        const str=localStorage.getItem(storageKey);
        if(!str)return;
        try{
            const data=JSON.parse(str);
            if(data?.id && data?.token){
                setAuth(data);
            }
        }catch(ex){}
    },[])

    return <AuthContext.Provider value={{ login, logout , auth,getAuthHeader}}>{children}</AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext);
export default AuthContext;