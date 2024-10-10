import React from 'react'
import ReactDOM from 'react-dom/client'

import { RouterProvider } from 'react-router-dom'

import GlobalStyles from './styles/globalStyles'
import { ToastContainer } from 'react-toastify'


import { router } from './routes'
import AppProvider from './hooks'
import { Elements } from '@stripe/react-stripe-js'
import stripePromise from './config/stripeConfig'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppProvider>
      <Elements stripe={stripePromise}>
        <RouterProvider router={router} />
      </Elements>
      <GlobalStyles />
      <ToastContainer autoClose={2000} theme='dark' />
    </AppProvider>
  </React.StrictMode>,
);
