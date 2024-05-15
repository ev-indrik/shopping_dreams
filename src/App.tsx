import "./App.scss";
import { Routes, Route, Outlet } from "react-router-dom";
import Home from "./components/routes/home/home.component";

export type CategoryItemType = {
  id: number;
  title: string;
  imageUrl: string;
};

const Navigation = () => {
  return (
    <div>
      <div>
        <h1>Navigation Bar</h1>
      </div>
      <Outlet />
    </div>
  );
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route path="home" element={<Home />} />
      </Route>
    </Routes>
  );
};

export default App;
