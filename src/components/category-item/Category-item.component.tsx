import { FC } from "react";
import "./category-item-component.styles.scss";
import { CategoryItemType } from "../../App";

type Props = {
  category: CategoryItemType;
};

const CategoryItem: FC<Props> = ({ category }) => {
  const { id, title, imageUrl } = category;

  return (
    <div className="category-container" key={id}>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>Shop now</p>
      </div>
    </div>
  );
};

export default CategoryItem;
