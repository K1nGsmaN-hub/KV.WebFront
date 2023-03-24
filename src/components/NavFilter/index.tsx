import { FC } from 'react';
import ToggleButton from '../ToggleButton';
import { INavFilterModel } from '../../models/nav-filter.model';
import { controls } from './mock';
import './styles.scss';

const NavFilter: FC<INavFilterModel> = ({ mix }) => {
    return (
        <div className={`nav-filter ${mix}`}>
            <div className="nav-filter__item">
                <h3 className="nav-filter__item-title">
                    Управляющая компания:
                </h3>
                <p className="nav-filter__item-text">
                    ООО “Южное управление жилищно коммунальными системами”
                </p>
            </div>
            <div className="nav-filter__item">
                <h3 className="nav-filter__item-title">Подрядчик</h3>
                <p className="nav-filter__item-text">ООО “Байкальский 1”</p>
            </div>
            <div className="nav-filter__item">
                <h3 className="nav-filter__item-title">Подрядчик ТКО:</h3>
                <p className="nav-filter__item-text">ООО “Южное УЖКС”</p>

                <div className="nav-filter__item-controls">
                    {controls.map(({ id, title }) => (
                        <label
                            className="nav-filter__item-controls-item"
                            key={id}
                        >
                            <ToggleButton />
                            <span>{title}</span>
                        </label>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default NavFilter;
