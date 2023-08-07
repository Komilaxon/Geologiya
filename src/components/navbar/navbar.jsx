import { categories } from "../../data/category";
import "./navbar.css";
export const Navbar = () => {
  return (
    <ul className="navbar_list">
      {categories.map((item,index) => <li key={index} className="navbar_item"><a href="#" className="navbar_link">{item.name}</a></li>)}
    </ul>
  );
};
