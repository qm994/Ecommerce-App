import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import directoryReducer from './directory/directory.reducer';
// storage is local storage here
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';


const persistConfig = {
    'key': 'root',
    storage,
    // the reducer to persist
    whitelist: ['cart']
}

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer
})

export default persistReducer(persistConfig, rootReducer)