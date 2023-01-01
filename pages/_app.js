import "../styles/globals.css";
import {NumberContextProvider} from "../context/test-context";

export default function App({ Component, pageProps }) {
  return (<NumberContextProvider>
        <Component {...pageProps} />;
    </NumberContextProvider>)
}
