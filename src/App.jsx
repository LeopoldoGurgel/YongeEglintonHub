
import 'bootstrap/dist/css/bootstrap.css';
import HeaderComponent from "./components/HeaderComponent"
import ContainerComponent from './components/ContainerComponent'
import './App.css'


function App() {

  return (
    <>
      <div className='bg-light'>
        <HeaderComponent />
        <ContainerComponent />
      </div>
    </>
  )
}

export default App
