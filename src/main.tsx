import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Provider } from "react-redux";
import { persistedStore, store } from "./Redux/store.ts";
import { PersistGate } from "redux-persist/integration/react";
import i18n from "./Utils/i18Config/i18.ts";
import { I18nextProvider } from "react-i18next";
import { ability, AbilityContext } from "./Utils/CAN/can.ts";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./Utils/ThemeProvider/ThemeProvider.tsx";
import ToastifyComp from "./Components/Alerts/SnackBar/ToastifyComp.tsx";
import ErrorBoundary from "./Components/ErrorBoundary/ErrorBoundary.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ErrorBoundary>
      <BrowserRouter>
        <Provider store={store}>
          <PersistGate persistor={persistedStore}>
            <I18nextProvider i18n={i18n}>
              <AbilityContext.Provider value={ability}>
                <ThemeProvider>
                  <App />
                  <ToastifyComp />
                </ThemeProvider>
              </AbilityContext.Provider>
            </I18nextProvider>
          </PersistGate>
        </Provider>
      </BrowserRouter>
    </ErrorBoundary>
  </StrictMode>,
);
