import { useRoutes, Link } from "react-router-dom"
import ViewCreator from './pages/ViewCreator/ViewCreator.jsx'
import ShowCreators from './pages/ShowCreators/ShowCreators.jsx'
import EditCreator from './pages/EditCreator/EditCreator.jsx'
import AddCreator from './pages/AddCreator/AddCreator.jsx'
import Vite from './pages/Vite/Vite.jsx'
import './App.css'

function App() {
  const routes = useRoutes([
    { path: "/", element: <ShowCreators/> },
    { path: "/creator/:id", element: <ViewCreator /> },
    { path: "/creator/:id/edit", element: <EditCreator /> },
    { path: "/new", element: <AddCreator /> },
    { path: "/vite", element: <Vite /> }
  ]);

  return (
    <>
    <nav>
      <Link to="/">Home</Link> | <Link to="/new">Add</Link> | <Link to="/vite">Vite</Link>
    </nav>

    {routes}
    </>
    
  )
}

export default App
