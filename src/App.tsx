import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.component";
import Navigation from "./routes/home/navigation.component";

export type CategoryItemType = {
  id: number;
  title: string;
  imageUrl: string;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<h1>Shop</h1>} />
      </Route>
    </Routes>
  );
};

export default App;
