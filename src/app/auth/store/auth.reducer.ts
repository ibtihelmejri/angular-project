import { Auth } from "src/app/communComponents/auth.model";
import * as AuthActions from "./auth.actions";



// export interface ShoppingListState{
//   ingredients: Ingredient[];
// }

// const initialState: ShoppingListState = {
//   ingredients: [
//       new Ingredient('Apples', 5),
//       new Ingredient("Tomatoes", 4),
//   ]
// };

// export function shoppingListReducer(state: ShoppingListState = initialState, 
//   action: shoppingListActions.AddIngredient): ShoppingListState {
//   switch(action.type){

export interface authState{
  auth: Auth;
}

const initialState: authState = {
  auth: {email:'', password:''}
};


// const initialState = {
//     auth:null,

// }


export function authReducer (state : authState = initialState, action: AuthActions.OnLogin): authState {
    switch (action.type) {
      case AuthActions.LOGIN:
        return {
          ...state,
          auth: action.payload
          };}
    }
   