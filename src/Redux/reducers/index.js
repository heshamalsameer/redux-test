import { combineReducers} from 'redux';
import { productReducer,selectedProduct,productCart} from './ProductReducer';

const reducers = combineReducers({
    allProducts : productReducer,
    product: selectedProduct,
    productCart: productCart
})

export default reducers;