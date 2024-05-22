import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Likes from "./pages/Likes";
import Musics from "./pages/Musics";
import Layouts from "./layouts/Layouts";
import { useEffect } from "react";
import { getToken } from "./components/utilits";
import { useDispatch } from "react-redux";
import { create } from "./redux/authSlicer";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    getToken()
      .then((res) => {
        dispatch(create(res));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <Layouts>
              <Home></Home>
            </Layouts>
          }
        ></Route>
        <Route
          path="/likes"
          element={
            <Layouts>
              <Likes></Likes>
            </Layouts>
          }
        ></Route>
        <Route
          path="/playlist/:id"
          element={
            <Layouts>
              <Musics></Musics>
            </Layouts>
          }
        ></Route>
      </Routes>
    </div>
  );
}
export default App;
