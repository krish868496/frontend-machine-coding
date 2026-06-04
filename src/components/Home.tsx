import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import type { AppDispatch } from "../redux-toolkit/store";
import { useEffect } from "react";
import { fetchUsers } from "../redux-toolkit/fetchUserSlice";

const Home = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { data, loading, error } = useSelector((state: any) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  console.log(data);
  return (
    <div className="flex flex-col gap-4 ">
      <div className="flex justify-between items-center gap-4 px-5 py-3">
        <Link to={"/"} className="text-2xl leading-8 font-semibold  ">Home</Link>
        <div className="flex items-center gap-3">
          <Link
            to="/machine-coding"
            className="text-lg leading-6 font-semibold text-amber-500"
          >
            Machine Coding
          </Link>
          <Link
            to="/grid"
            className="text-lg leading-6 font-semibold text-amber-500"
          >
            Grid
          </Link>
          <Link
            to="/position"
            className="text-lg leading-6 font-semibold text-amber-500"
          >
            Position
          </Link>
          <Link
            to="/animation"
            className="text-lg leading-6 font-semibold text-amber-500"
          >
            Animation
          </Link>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Home;
