import { reducer } from "./reducer";
import {  createStore} from 'redux'


    let store=createStore(reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )

export {store};