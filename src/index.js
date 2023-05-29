import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import {ChakraProvider} from '@chakra-ui/react'
import App from "./App";
import '@fontsource/raleway/400.css'
import '@fontsource/open-sans/700.css'
import modernTheme from "./theme/modern";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ChakraProvider theme={modernTheme}>

  <BrowserRouter>
    <App/>
  </BrowserRouter>

  </ChakraProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
