import { FC } from 'react';
import NavFilter from '../NavFilter';
import NavLink from '../NavLink';
import NavDropdown from '../NavDropdown';
// @ts-ignore
import { ReactComponent as SidebarIcon } from '../../assets/images/sidebar.svg';

import { links } from './mock';
import './styles.scss';

const NavSidebar: FC = () => {
    return (
        <aside className="nav-sidebar">
            <header>
                <a className="nav-sidebar__logo" href="/">
                    <img
                        src={require('../../assets/images/logo.png')}
                        alt="logo"
                    />
                </a>

                <button className="nav-sidebar__control">
                    <SidebarIcon className="nav-sidebar__control-icon" />
                </button>
            </header>

            <NavDropdown />

            <NavFilter mix="nav-sidebar__filter" />

            <nav>
                {links.map((link) => (
                    <NavLink {...link} mix="nav-sidebar__link" key={link.id} />
                ))}
            </nav>
        </aside>
    );
};

export default NavSidebar;
