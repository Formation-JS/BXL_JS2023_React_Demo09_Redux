import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './containers/header/header.jsx'

// Le composant « App » sera utilisé en tant que Layout
function App() {

  return (
    <>
      <Header />
      <main>
        {/* ↓ Les pages via le routing */}
        <Outlet />
      </main>
    </>
  )
}

export default App
