import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";

const NavItem = ({
  item,
  openMenu,
  isActive,
}) => {
  const handleMouseEnter = () => {
    if (item.hasDropdown) {
      openMenu(item.title);
    }
  };

  return (
    <li
      className={`nav-item ${
        isActive ? "nav-item-active" : ""
      }`}
      onMouseEnter={handleMouseEnter}
    >
      <Link to={item.path} className="nav-link">
        <span>{item.title}</span>

        {item.hasDropdown && (
          <ChevronDown
            className="nav-arrow"
            size={15}
            strokeWidth={1.8}
          />
        )}
      </Link>
    </li>
  );
};

export default NavItem;