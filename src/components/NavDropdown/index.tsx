import { FC } from 'react';
import './styles.scss';

const NavDropdown: FC = () => {
    return (
        <select className="nav-dropdown" name="select">
            <option value="value1">Значение 1</option>
            <option value="value2">Значение 2</option>
            <option value="value3">Значение 3</option>
        </select>
    );
};

export default NavDropdown;
