import { Link } from "react-router-dom";

const Header = () => {
  return (
    <ul>
      <li>
        <Link to="/" className="Home">Home</Link>
      </li>
      <br/>
      <li>
        <Link to="/test404page" className="Nullpage">404page</Link>
      </li>
      <br/>
      <li>
        <Link to='/testerror' className="Errorboundarypage">ErrorBoundaryPage</Link>
      </li>
    </ul>
  );
};
export default Header;
