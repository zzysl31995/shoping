import {createStore} from 'redux';
import reducers from '../reducers';
export function configCreateStore(initState){
    return createStore(reducers,initState,window.devToolsExtension?window.devToolsExtension():undefined)
}