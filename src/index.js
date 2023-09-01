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
      100: "#FFF897",
      200: "#FAE96F",
      300: "#F6C101",
      400: "#EC9D00",
      500: "#DF8D03",
      600: "#C96E12",
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

