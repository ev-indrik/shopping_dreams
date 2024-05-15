import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./components/routes/home/home.component";

export type CategoryItemType = {
  id: number;
  title: string;
  imageUrl: string;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default App;
