import './App.css';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';
import Home from './pages/Home'
import Products from './pages/Products';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import Customization from './pages/Customization';
import About from './pages/About';
import Bar from './components/Bar/Bar';
import NavBar from './components/navbar/NavBar';
import Footer from './components/footer/Footer';
import ProductDetails from './pages/ProductDetails';
import PlaceOrder from './pages/PlaceOrder';
import Checkout from './pages/Checkout';
import OrderSucces from './pages/OrderSucces';
import Error from './pages/Error';

function App() {
    return ( 
    <>
        <Router>
        <Bar />
        <Footer />
        </Router>
    </>
    );
}

export default App;