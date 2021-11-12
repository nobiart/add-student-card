import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { getStorageData, setStorageData } from '../utils/storage';
import validator from '../utils/validator';
import TextField from '../components/textField';
import Modal from '../components/modal';

const Form = () => {
    const initialState = {
        firstName: '',
        lastName: '',
        year: '',
        portfolio: ''
    };
    const [data, setData] = useState(getStorageData('student') || initialState);
    const [errors, setErrors] = useState({});
    const [showModal, setShowModal] = useState(false);
    const history = useHistory();
    const validatorConfig = {
        firstName: {
            isRequired: { message: 'Имя обязательно для заполнения' }
        },
        lastName: {
            isRequired: { message: 'Фамилия обязательно для заполнения' }
        },
        year: {
            isRequired: { message: 'Год рождения обязательно для заполнения' },
            isValidYear: { message: 'Поле "Год Рождения" не корректно' }
        },
        portfolio: {
            isRequired: { message: 'Портфолио обязательно для заполнения' },
            isUrl: { message: 'Портфолио должно быть ссылкой' }
        }
    };
    useEffect(() => {
        validate();
    }, [data]);
    const validate = () => {
        const errors = validator(data, validatorConfig);
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };
    const isValid = Object.keys(errors).length === 0;
    const handleChange = ({ target }) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };
    const handleSetStorage = (data) => {
        setStorageData('student', data);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validate();
        if (!isValid) return;
        setShowModal(true);
    };
    const handleGoHome = () => {
        history.replace('/');
    };
    const handleModalDismiss = () => {
        setShowModal((prevState) => !prevState);
        handleSetStorage(data);
        handleGoHome();
    };
    return (
        <>
            <Modal modalShow={showModal} modalDismiss={handleModalDismiss} />
            <div className="container">
                <h1 className="mt-3">
                    {getStorageData('student') ? 'Редактировать' : 'Создать'}
                </h1>
                <form onSubmit={handleSubmit}>
                    <TextField
                        label="Имя"
                        id="firstName"
                        name="firstName"
                        onChange={handleChange}
                        value={data.firstName}
                        error={errors.firstName}
                    />
                    <TextField
                        label="Фамилия"
                        id="lastName"
                        name="lastName"
                        onChange={handleChange}
                        value={data.lastName}
                        error={errors.lastName}
                    />
                    <TextField
                        label="Год рождения"
                        type="number"
                        min={1900}
                        max={new Date().getFullYear()}
                        id="year"
                        name="year"
                        onChange={handleChange}
                        value={data.year}
                        error={errors.year}
                    />
                    <TextField
                        label="Портфолио"
                        type="url"
                        id="portfolio"
                        name="portfolio"
                        onChange={handleChange}
                        value={data.portfolio}
                        error={errors.portfolio}
                    />
                    <div className="mt-4">
                        {getStorageData('student') && (
                            <button
                                className="btn btn-secondary me-3"
                                onClick={handleGoHome}
                            >
                                Назад
                            </button>
                        )}
                        <button
                            type="submit"
                            className="btn btn-primary"
                            disabled={!isValid}
                        >
                            {getStorageData('student') ? 'Обновить' : 'Создать'}
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Form;
