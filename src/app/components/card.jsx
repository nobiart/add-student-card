import React from 'react';
import PropTypes from 'prop-types';
import getAge from '../utils/getAge';

const Card = ({ student }) => {
    const { firstName, lastName, year, portfolio } = student;
    return (
        <div className="mb-5">
            <h1 className="my-3">Карточка студента</h1>
            <p>
                <b>Имя: </b>
                {firstName}
            </p>
            <p>
                <b>Фамилия: </b>
                {lastName}
            </p>
            <p>
                <b>Год рождения: </b>
                {getAge(year)}
            </p>
            <p>
                <b>Портфолио: </b>
                <a href={portfolio} target="_blank" rel="noreferrer">
                    {portfolio}
                </a>
            </p>
        </div>
    );
};

Card.propTypes = {
    student: PropTypes.object
};

export default Card;
