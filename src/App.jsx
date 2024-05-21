import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Likes from "./pages/Likes";
import Musics from "./pages/Musics";
import Layouts from "./layouts/Layouts";
import { useEffect } from "react";
import { getToken } from "./components/utilits";
function App() {
  useEffect(() => {
    getToken();
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
