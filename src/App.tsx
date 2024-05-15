import "./App.scss";
import Directory from "./components/directory/directory.component";
import Home from "./components/routes/home/home.component";

export type CategoryItemType = {
  id: number;
  title: string;
  imageUrl: string;
};

const App = () => {
  return <Home />;
};

export default App;
