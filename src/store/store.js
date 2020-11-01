import {applyMiddleware, compose, createStore} from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './rootReducer';
import {composeWithDevTools} from 'redux-devtools-extension';
import loggerMiddleware  from './middleware/logger';
import monitorReducerEnhancer from './enhancers/monitorReducer';

export default function configureStore(preloadedState) {
    const middleware = [loggerMiddleware, thunkMiddleware]
    const middlewareEnhancer = applyMiddleware(...middleware)

    const enhancers = [middlewareEnhancer, monitorReducerEnhancer]
    const composedEnhancers = composeWithDevTools(...enhancers)

    return createStore(rootReducer, preloadedState, composedEnhancers)
}
