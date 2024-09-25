import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './Components/Navbar'
import Products from './Pages/Products'
import CarouselPage from './Components/CarouselPage'
import Footer from './Components/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cart from './Pages/Cart'
import { useLocation } from 'react-router-dom';


function App() {

  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );

  function Layout(){
    const location = useLocation();

    return (
      <>
        <Navbar />
        
        {location.pathname === '/' && <CarouselPage />}
        
        <Routes>
          <Route path='/' element={<Products />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>

        {location.pathname === '/' && <Footer />}
      </>

      // <BrowserRouter>
      // <Navbar/>
      // <CarouselPage/>
      //   <Routes>
      //     <Route path='/' element={<Products></Products>}></Route>
      //     <Route path='/cart' element={<Cart></Cart>}></Route>
      //   </Routes>
      // <Footer/>
      // </BrowserRouter>
    )
    }
}


export default App
