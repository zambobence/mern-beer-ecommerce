import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from './store/store'
import { Provider } from 'react-redux';
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react"

const root = ReactDOM.createRoot(document.getElementById('root'));
const theme = extendTheme({
  colors: {
    brand: {
      100: "#e99002",
      200: "#e99002",
      300: "#e99002",
      400: "#e99002",
      500: "#e99002",
      600: "#e99002",
    },
  },
})

root.render(
  <React.StrictMode>
      <Provider store={store}>
        <ChakraProvider theme={theme}>
          <App />
        </ChakraProvider>
      </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

