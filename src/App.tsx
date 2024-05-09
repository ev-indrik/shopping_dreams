import "./App.css";
import "./categories_style.scss";

type CategoryItem = {
  id: number;
  title: string;
  image: string;
};

const App = () => {
  const categories: CategoryItem[] = [
    {
      id: 1,
      title: "Hats",
      image: "",
    },
    {
      id: 2,
      title: "Jackets",
      image: "",
    },
    {
      id: 3,
      title: "Sneakers",
      image: "",
    },
    {
      id: 4,
      title: "Women's",
      image: "",
    },
    {
      id: 5,
      title: "Men's",
      image: "",
    },
  ];

  return (
    <div className="categories-container">
      {categories.map(({ id, title, image }) => (
        <div className="category-container" key={id}>
          <div className="background-image">
            <img src={image} alt="category_img" />
          </div>
          <div className="category-body-container">
            <h2>{title}</h2>
            <p>Shop now</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
