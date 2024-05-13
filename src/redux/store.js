// import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from './slices/counterSlice';
// const store = configureStore({
// reducer: {
// counter: counterReducer
// }
// });
// export default store;

import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counterSlice';
import userReducer from './slices/userSlice';
const store = configureStore({
reducer: {
counter: counterReducer,
user: userReducer,
}
});
export default store;