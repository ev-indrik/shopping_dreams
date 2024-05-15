import { FC } from "react";
import { CategoryItemType } from "../../App";
import CategoryItem from "../category-item/Category-item.component";
import "./directory.component.styles.scss";

type Props = {
  data: CategoryItemType[];
};

const Directory: FC<Props> = ({ data }) => {
  return (
    <div className="directory-container">
      {data.map((category) => (
        <CategoryItem category={category} key={category.id} />
      ))}
    </div>
  );
};

export default Directory;
