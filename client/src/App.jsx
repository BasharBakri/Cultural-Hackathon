import { createContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import {RouterProvider,createBrowserRouter}from 'react-router-dom'
import Root from './pages/Root'
import Home from './pages/Home'
import Admin from './pages/admin'
import Loading from './components/loading/Loading'

export const AppContext=createContext()
function App() {
  const [playLoading,setPlayLoading]=useState(false)
  const router=new createBrowserRouter([
    {
      path:'/',
      element:<Root/>,
      children:[
        {
          path:'/',
          element:<Home/>
        },
        {
          path:'/admin',
          element:<Admin/>
        }
      ]
    }
  ])  
  return (
    <div className="App">
        <AppContext.Provider value={{
          loading:{
            play:()=>setPlayLoading(true),
            pause:()=>setPlayLoading(false)
          }
        }}>
          {playLoading&&<Loading/>}
        <RouterProvider router={router}/>
        </AppContext.Provider>
    </div>
  )
}

export default App
