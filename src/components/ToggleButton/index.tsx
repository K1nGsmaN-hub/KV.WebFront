import { FC } from 'react';
import './styles.scss';

const ToggleButton: FC = () => {
    const id = Math.random().toString(36).substr(6);
    return (
        <div className="toggle-button">
            <input type="checkbox" id={id} />
            <label htmlFor={id}>Toggle</label>
        </div>
    );
};

export default ToggleButton;
