import React from 'react';
import PropTypes from 'prop-types';

const TextField = ({ label, type, name, value, onChange, error }) => {
    const getInputClasses = () => {
        return 'form-control' + (error ? ' is-invalid' : '');
    };
    return (
        <div className="mb-3">
            <label htmlFor={name} className="form-label">
                {label}
            </label>
            <input
                type={type}
                id={name}
                name={name}
                value={value}
                onChange={onChange}
                className={getInputClasses()}
            />
            {error && <div className="invalid-feedback">{error}</div>}
        </div>
    );
};

TextField.defaultProps = {
    type: 'text'
};

TextField.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    error: PropTypes.string,
    onChange: PropTypes.func
};

export default TextField;
