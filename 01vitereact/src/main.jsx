import { StrictMode } from 'react'
import React from 'react';
import ReactDom from 'react-dom/client';
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {jsx as _jsx} from 'react/jsx-runtime.js'

// function MyApp(){
//     return(
//         <div>
//             <h1>Custom App</h1>
//         </div>
//     )
// }

// const ReactElement = {
//     type : 'a',
//     props : {
//         href : 'https://google.com',
//         target : '_blank'
//     },
//     children : 'Click me to visit Google'
// }

// const anotherElement  = (
//     <a href="https://google.com" target='_blank'>Visit Google</a>
// )
const anotherUsername  = "Richa";
const ReactElement = React.createElement(
    'a',
    {href : "https://google.com",
        target : "_blank",
    },
    'click to visit google',
    anotherUsername
);



createRoot(document.getElementById('root')).render(

    <App />
    // <MyApp />
    // MyApp() not use but it will execute
    // anotherElement
    // ReactElement

)
