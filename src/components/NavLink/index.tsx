import { FC } from 'react';
import { INavLink } from '../../models/nav-link.model';
import './styles.scss';

const NavLink: FC<INavLink> = ({ image, link, mix, title }) => {
    return (
        <button className={`nav-link ${mix}`} type="button">
            <img src={image} alt={title} />
            <span>{title}</span>
        </button>
    );
};

export default NavLink;
