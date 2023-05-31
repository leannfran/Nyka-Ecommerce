import { ContextAuthProvider } from "../context/authContext";
import "../styles/globals.css";
import { ThemeProvider } from "@material-tailwind/react";

export default function App({ Component, pageProps }) {
    return (
        <ContextAuthProvider>
            <ThemeProvider>
                <Component {...pageProps} />
            </ThemeProvider>
        </ContextAuthProvider>
    );
}
