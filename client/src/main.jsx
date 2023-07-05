import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ContextProvider } from './context/userContext/Context.jsx'
import { UIContextProvider } from './context/todoContext/Context.jsx'
import { Provider } from "react-redux";
import store from "./redux/store";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
      <UIContextProvider >
        <Provider store={store}>
        <App />
        </Provider>
      </UIContextProvider>
    </ContextProvider>
  </React.StrictMode>,
)
