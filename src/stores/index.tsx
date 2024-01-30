import {combineReducers, configureStore} from '@reduxjs/toolkit';
import logger from 'redux-logger';

import tabReducer from './slices/tabSlice';

const rootReducer = combineReducers({
  tab: tabReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware({
      serializableCheck: false,
    }).concat(logger);
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;

// import createSagaMiddleware from 'redux-saga';
// import AsyncStorage from '@react-native-community/async-storage';
// import logger from 'redux-logger';

// const sagaMiddleware = createSagaMiddleware();

// import {configureStore} from '@reduxjs/toolkit';
// import {persistStore, persistReducer} from 'redux-persist';
// import rootReducer from './slice';
// import rootSaga from './sagas';

// const persistConfig = {
//   key: 'root',
//   storage: AsyncStorage,
//   blacklist: ['app', 'listing'],
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// const store = configureStore({
//   reducer: persistedReducer,
//   devTools: process.env.NODE_ENV !== 'production',
//   middleware: [sagaMiddleware, logger],
// });
// const persistor = persistStore(store);
// sagaMiddleware.run(rootSaga);

// export {persistor};
// export default store;
