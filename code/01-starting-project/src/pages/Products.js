import { Link } from "react-router-dom";
const Products = () => {
  return (
    <div>
      <h1>Welcome! To the Products page</h1>
      <ul>
        <li>
          <Link to="/Products/p1">Book</Link>
        </li>
        <li>
          <Link to="/Products/p2">Movie</Link>
        </li>
        <li>
          <Link to="/Products/p3">Carpet</Link>
        </li>
      </ul>
    </div>
  );
};

export default Products;
