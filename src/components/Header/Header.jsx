import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <><header>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/rates">Rates</NavLink>
      </nav>
      <p>Your base currency: UAH</p>
    </header>
    </>
  )
};

export default Header
