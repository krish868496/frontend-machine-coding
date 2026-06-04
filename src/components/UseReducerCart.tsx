import React, { useReducer } from "react";

const products = [
  { id: 1, name: "product 1" },
  { id: 2, name: "product 2" },
  { id: 3, name: "product 3" },
  { id: 4, name: "product 4" },
  { id: 5, name: "product 5" },
];

const Cart = () => {
  function reducer(state, action) {
    switch (action.type) {
      case "ADD":
        return {
          ...state,
          cart: [...state.cart, action.payload]
        };
      case "REMOVE":
        return {
                ...state,
              cart:  state.cart.filter((c) => c.id !== action.payload.id)
        }
      default:
        state;
    }
  }
  const initialState = {
    cart: [],
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);
  return (
    <div>
      <div>
        {state.cart.length === 0
          ? "No item in the cart"
          : state.cart.map((c: any) => <p key={c.id}>cart: {c.name} <span onClick={() => dispatch({ type: "REMOVE", payload: c })}>remove</span> </p>)}
      </div>
      {products?.map((prod) => (
        <button key={prod.id} onClick={() => dispatch({ type: "ADD", payload: prod })}>
          {prod?.name}
        </button>
      ))}
    </div>
  );
};

export default Cart;
