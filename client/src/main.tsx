import ReactDOM from "react-dom/client"
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App.tsx"
import "./index.css"
import { BrowserRouter } from "react-router-dom"
import ErrorBoundary from "./Providers/ErrorBoundary/ErrorBoundary.tsx";
import { Provider } from "react-redux";

import { store } from "./store/index.ts"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <BrowserRouter>
        <Provider store={store}>
            <ErrorBoundary>
                <ChakraProvider>
                    <App />
                </ChakraProvider>
            </ErrorBoundary>
        </Provider>
    </BrowserRouter>
)
