import { useCallback, useEffect, useReducer, useRef } from "react";
import "../App.css";
import Cart from "./UseReducerCart";
import { useNavigate } from "react-router-dom";

const UserForm = () => {
  const initialState = {
    firstName: "",
    lastName: "",
    email: "",
  };

  const prevFnRef = useRef();

  const handleDelete = useCallback(() => {
    console.log("delete");
  }, []);

  useEffect(() => {
    if (prevFnRef.current) {
      console.log("Same function?", prevFnRef.current === handleDelete);
    }

    prevFnRef.current = handleDelete;
  });

  function reducer(state, action) {
    console.log(state, "state", action);
    switch (action.type) {
      case "change":
        return {
          ...state,
          [action.name]: action.value,
        };

      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);
  const navigate = useNavigate();


  return (
    <div id="center">
      <Cart />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          navigate("/timer");
          console.log(state);
        }}
      >
        <input
          type="text"
          name="firstName"
          placeholder="Enter your first name"
          onChange={(e) =>
            dispatch({
              type: "change",
              name: e.target.name,
              value: e.target.value,
            })
          }
        />{" "}
        <br />
        <input
          type="text"
          name="lastName"
          placeholder="Enter last name"
          onChange={(e) =>
            dispatch({
              type: "change",
              name: e.target.name,
              value: e.target.value,
            })
          }
        />{" "}
        <br />
        <input
          type="text"
          name="email"
          placeholder="Enter your email"
          onChange={(e) =>
            dispatch({
              type: "change",
              name: e.target.name,
              value: e.target.value,
            })
          }
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UserForm;
