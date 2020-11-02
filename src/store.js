/**
|--------------------------------------------------
| Import Redux core components
|--------------------------------------------------
*/
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

/**
|--------------------------------------------------
| Import Development tools to view store data
|--------------------------------------------------
*/
import { composeWithDevTools } from 'redux-devtools-extension';

/**
|--------------------------------------------------
| Import reducer components
|--------------------------------------------------
*/
import rootReducer from './Reducers';

/**
|--------------------------------------------------
| Configure redux components
|--------------------------------------------------
*/
export default function configureStore() {
 return createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
 );
}