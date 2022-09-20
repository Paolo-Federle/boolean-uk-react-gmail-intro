import './styles/app.css'


import Header from './Header'
import NavLeftMenu from './NavLeftMenu'
import MainEmailView from './MainEmailView'


function App() {
  return (
    <div className="app">
      <Header />
      <NavLeftMenu/>
      <MainEmailView />
    </div>
  )
}

export default App
