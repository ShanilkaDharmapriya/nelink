import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'


import './App.css'
import HomePage from './pages/HomePage'
import About from './pages/About';
import ArticlePage from './pages/ArticlePage';
import LayerOut from './pages/LayerOut';
import ArticleListPage from './pages/ArticleListPage';

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
    element:<ArticlePage />
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
