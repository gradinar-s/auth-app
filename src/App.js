import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/application/Layout/Layout";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import Home from "./pages/Home/Home";
import routePaths from "./routes/routePaths";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routePaths.base} element={<Layout />}>
          <Route path={routePaths.base} element={<Home />} />
          <Route path={routePaths.signIn} element={<SignIn />} />
          <Route path={routePaths.signUp} element={<SignUp />} />
          <Route path={routePaths.notExist} element={<h1>404</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
