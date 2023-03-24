import { FC } from 'react';
// @ts-ignore
import { ReactComponent as PowerIcon } from '../../assets/images/power.svg';

import { navLinks } from './mock';
import './styles.scss';

const Header: FC = () => {
    return (
        <header className="header">
            <div className="header__search">
                <input type="text" placeholder="ЛС:" />
            </div>

            <nav className="header__nav">
                {navLinks.map(({ id, link, title }) => (
                    <a className="header__nav-item" href={link} key={id}>
                        {title}
                    </a>
                ))}
            </nav>

            <div className="header__user">
                <p className="header__user-name">Иванов И. И.</p>
                <button className="header__user-control">
                    <PowerIcon className="header__user-control-icon" />
                </button>
            </div>
        </header>
    );
};

export default Header;
