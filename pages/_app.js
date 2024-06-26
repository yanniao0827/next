// import "@/styles/globals.css";
import AuthContext, { AuthContextProvider } from "@/contexts/auth-context";

export default function App({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <Component {...pageProps} />
    </AuthContextProvider>
  );
}
