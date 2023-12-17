import { createStore, combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import recipeReducer from "../reducers/recipeReducer";
const rootReducer = combineReducers({
  // other reducers
  recipes: recipeReducer, // Example other reducer
  form: formReducer,
});

const store = createStore(rootReducer);

export default store;
