import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'

import './App.css'
import HomePage from './pages/HomePage'
import About from './pages/About';
import ArticlePage, {loader as articleLoader} from './pages/ArticlePage';
import LayerOut from './pages/LayerOut';
import ArticleListPage from './pages/ArticleListPage';
import LoginPage from './pages/LoginPage'
import CreateAcountPage from './pages/CreateAcountPage'

const routes=[{
  path: "/",
  element:<LayerOut/>,
  errrorElement: <h1>Page not found!</h1>,
  children: [{
    path:'/',
    element:<HomePage/>
  }, {
    path:'/about',
    element:<About />
  }, {
    path:'/articles', 
    element:<ArticleListPage />
  }, {
    path:'/articles/:name',
    element:<ArticlePage />,
    loader:articleLoader,
  },{
    path:'/login',
    element:<LoginPage/>
  },{
    path:'/createacount',
    element:<CreateAcountPage/>
  }]
  
}]

const router=createBrowserRouter(routes);


function App() {
 

  return (
    <>
      <RouterProvider router={router}/>
      </>
  )
}

export default App
