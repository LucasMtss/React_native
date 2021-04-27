import { createStore, applyMiddleware } from "redux";
import {
  offlineMiddleware, // Salavar requests na fila
  suspendSaga,       // Evitar que o saga execute offline
  consumeActionMiddleware  // Consome a fila quando houver conexão novamente
} from "redux-offline-queue";
import createSagaMiddleware from "redux-saga";

import rootReducer from "./ducks";
import rootSaga from "./sagas";

const middlewares = [];

const sagaMiddleware = createSagaMiddleware();

// Ordem importante
middlewares.push(offlineMiddleware());
middlewares.push(suspendSaga(sagaMiddleware));
middlewares.push(consumeActionMiddleware());

const createAppropriateStore = __DEV__ ? console.tron.createStore : createStore;

const store = createAppropriateStore(
  rootReducer,
  applyMiddleware(...middlewares)
);

sagaMiddleware.run(rootSaga);

export default store;
