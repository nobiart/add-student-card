import React from 'react';
import { Link } from 'react-router-dom';
import { getStorageData } from '../utils/storage';
import Card from '../components/card';

const Main = () => {
    const data = getStorageData('student');
    return (
        <div className="container">
            {data
                ? (
                    <Card student={data} />
                )
                : (
                    <>
                        <h1 className="my-3">Карточка студента</h1>
                        <h5 className="my-3">Нет данных</h5>
                    </>
                )}
            <Link to="/student">
                <button className="btn btn-primary" type="button">
                    {data ? 'Редактировать' : 'Добавить'}
                </button>
            </Link>
        </div>
    );
};

export default Main;
