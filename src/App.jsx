import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import './App.css'

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting="Bienvenidos a Prinie Store - Todo para tu mascota" />
    </div>
  )
}

export default App
