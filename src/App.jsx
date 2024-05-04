
import 'bootstrap/dist/css/bootstrap.css';
import HeaderComponent from "./components/HeaderComponent"
import ContainerComponent from './components/ContainerComponent'
import Footer from './components/Footer';
import './App.css'


function App() {

  return (
    <>
      <div className='bg-light'>
        <HeaderComponent />
        <ContainerComponent />
        <Footer />
      </div>
    </>
  )
}

export default App
