import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
import './index.css'
import Header from './Components/Header/Header.tsx'
import './Components/Header/Header.css'
import Top from './Components/Top/Top.tsx'
import './Components/Top/top.css'
import Items from './Components/Items/Items.tsx'
import './Components/Items/Items.css'
import Text from './Components/Text/Text.tsx'
import './Components/Text/Text.css'
import Image from './Components/Images/Image.tsx'
import './Components/Images/Image.css'



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
   <Header />
   <Top />
   <Items />
   <Text />
   <Image />
  </React.StrictMode>,
)
