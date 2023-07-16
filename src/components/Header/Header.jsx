import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectBaseName } from '../../redux/selectors';

const Header = () => {
  const baseName = useSelector(selectBaseName)
  return (
    <><header>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/rates">Rates</NavLink>
      </nav>
      <p>Your base currency: { baseName }</p>
    </header>
    </>
  )
};

export default Header
