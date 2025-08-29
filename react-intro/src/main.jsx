import React from 'react' 
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
    return(
        <div>
            <h1>Custom App!</h1>
        </div>
    )
}
// const reactElement = {
//     type:'a',
//     props:{
//         href:'https://www.google.com',
//         target:'_blank'
//     },
//     children:'Click me to visit google'
// }
const anotherElement=(
    <a href="https://google.com" target='_blank'>Visit google</a>
)
const another="Harshal"
const reactElement=React.createElement(
    'a',
    {href:'https://google.com',target:'_blank'},
    'Click me to visit google',
    another
)
//Variables are injected in the end of the tree 
createRoot(document.getElementById('root')).render(
    <App/>
    // reactElement
    // <MyApp />
    //MyApp()
)
