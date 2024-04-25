import { applyMiddleware, combineReducers, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import Saga from './saga/Saga';
import dataReducer from './reducers/dataReducer';
import loadingReducer from './reducers/loadingReducer';
import selectedItemsReducer from './reducers/selectedItemsReducer';

const rootReducer = combineReducers({
  dataReducer,
  loadingReducer,
  selectedItemsReducer,
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(Saga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
