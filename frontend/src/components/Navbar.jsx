import "./Navbar.css";
import { Link } from "react-router-dom";
import {
  FiSearch,
  FiShoppingCart,
  FiHeart,
  FiUser
} from "react-icons/fi";

const Navbar = () => {
  return (
    <nav className="navbar">

      <div className="navbar-container">

        <Link to="/" className="logo">
          ShopSmart
        </Link>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/wishlist">Wishlist</Link>
          <Link to="/orders">Orders</Link>
        </div>

        <div className="search-box">
          <input
            type="text"
            placeholder="Search products..."
          />

          <button>
            <FiSearch />
          </button>
        </div>

        <div className="nav-icons">

          <Link to="/wishlist">
            <FiHeart />
          </Link>

          <Link to="/cart">
            <FiShoppingCart />
          </Link>

          <Link to="/profile">
            <FiUser />
          </Link>

        </div>

      </div>

    </nav>
  );
};

export default Navbar;