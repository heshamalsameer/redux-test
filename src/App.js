import './App.css';
import Header from './Component/Header';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import store from "./Redux/Store";
import ProductList from "./Pages/ProductList";
import ProductDetails from "./Pages/ProductDetails";

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <div className='container'>
        <Routes>
          <Route path="/" exact element={<ProductList/>}/>
          <Route path='/product/:productId' exact element={<ProductDetails/>}/>
          <Route>404 Not Found</Route>
        </Routes>
    </div>
    </BrowserRouter>
)}

function AppWithStore() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

export default AppWithStore;


