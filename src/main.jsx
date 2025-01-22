import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MAinLayout from './Layout/MAinLayout'
import HomePage from './routes/HomePage'
import SinglePostPage from './routes/SinglePostPage'
import Write from './routes/Write'
import LoginPage from './routes/LoginPage'
import RegisterPage from './routes/RegisterPage'
import { ClerkProvider } from '@clerk/clerk-react'
import PostListPage from './routes/PostListPage'

// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

 const router = createBrowserRouter([
  {
    element:<MAinLayout />,
    children:[
        {
          path:"/",
          element:<HomePage />
        },
        {
          path:"/posts",
          element:<PostListPage />
          
        },
        
        {
          path:"/:slug",
          element:<SinglePostPage />
          
        },
        {
          path:"/write",
          element:<Write />
          
        },
        {
          path:"/login",
          element:<LoginPage />
          
        },
        {
          path:"/register",
          element:<RegisterPage />
          
        },

    ]
  }
 ]) 


createRoot(document.getElementById('root')).render(
  <StrictMode>
     <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
    <RouterProvider router={router} />
    </ClerkProvider>
  </StrictMode>,
)
