import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { NextUIProvider } from '@nextui-org/react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import WebsiteLayout from './layout/WebsiteLayout.jsx'
import HomePage from './pages/HomePage.jsx'
import GuestLayout from './layout/GuestLayout.jsx'
import LoginPage from './pages/LoginPage.jsx'
import ThemeProvider from './providers/ThemeProvider'
import Shop from './pages/Shop'
import PageSolsticeborsasechiello from './pagesBorseSecchiello/PageSolsticeborsasechiello'
import PageLuminaborsasechiello from './pagesBorseSecchiello/PageLuminaborsasechiello'
import PageCelestiaborsasechiello from './pagesBorseSecchiello/PageCelestiaborsasechiello'
import PageArcadiaborsasechiello from './pagesBorseSecchiello/PageArcadiaborsasechiello'
import PageVelloraborsasechiello from './pagesBorseSecchiello/PageVelloraborsasechiello'
import ChiSiamo from './pages/ChiSiamo'
import Contatti from './pages/Contatti'
import CheckoutPage from './pages/CheckoutPage'
import CarelloPage from './pages/CarelloPage.jsx'
import ShopProvider from './providers/ShopProvider.jsx'




const router = createBrowserRouter([
  {
    path: '/',
    element: <WebsiteLayout />,
    children:[
      {
        index: true,
        element: <HomePage />
      },  
      {
        path: 'shop',
        element: <Shop />
      },
      {
        path: 'chisiamo',
        element: <ChiSiamo />
      },
      {
        path: 'contatti',
        element: <Contatti />
      },
      {
        path: 'checkout',
        element: <CheckoutPage/>
      },
      {
        path: 'carrello',
        element: <CarelloPage/>
      },
      {
        path: 'PageSolsticeborsasechiello',
        element: <PageSolsticeborsasechiello />
      },
      {
        path: 'PageLuminaborsasechiello',
        element: <PageLuminaborsasechiello />
      },
      {
        path: 'PageCelestiaborsasechiello',
        element: <PageCelestiaborsasechiello />
      },
      {
        path: 'PageArcadiaborsasechiello',
        element: <PageArcadiaborsasechiello />
      },
      {
        path: 'PageVelloraborsasechiello',
        element: <PageVelloraborsasechiello />
      }
      
      
    ]
  },
  {
    path: '/',
    element: <GuestLayout />,
    children:[
      {
        path: 'login',
        element: <LoginPage />
      }
    ]
  }
  

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <ThemeProvider>
    <ShopProvider>
     <NextUIProvider>
      <RouterProvider  router={router}  />
     </NextUIProvider>
    </ShopProvider>
   </ThemeProvider>
  </React.StrictMode>,
)
