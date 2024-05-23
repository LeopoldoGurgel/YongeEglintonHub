import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import App from './App.jsx'
import './index.css'

import ContainerComponent from './components/ContainerComponent/index.jsx';
import CategoryComponent from './components/CategoryComponent/index.jsx'

const router = createBrowserRouter([
  {
    path: '/YongeEglintonHub',
    element: <App />,
    children: [
      {
        index: true,
        element: <ContainerComponent/>
      },
      // {
      //   path: '/breaking',
      //   element: <CategoryComponent category={'breaking'}/>
      // },
      // {
      //   path: '/sports',
      //   element: <CategoryComponent category={'sports'}/>
      // },
      // {
      //   path: '/entertainment',
      //   element: <CategoryComponent category={'entertainment'}/>
      // }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)


    // create main group and side group components
    // create article search engine. 
    // figure out a way to develop an AI chatbot to discuss about articles.