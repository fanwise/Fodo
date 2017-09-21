import { createStore } from 'redux';
import { persistStore, autoRehydrate } from 'redux-persist';
import { AsyncStorage } from 'react-native';
import todoApp from '../reducer';

export default function configureStore(onComplete: ?() => void) {
  const store = autoRehydrate()(createStore)(todoApp);
  persistStore(store, { storage: AsyncStorage }, onComplete);
  return store;
}
