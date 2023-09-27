import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import DatePicker from 'react-datepicker';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseChimney } from '@fortawesome/free-solid-svg-icons';
import 'react-datepicker/dist/react-datepicker.css';

function Calandar() {
    const [startDate, setStartDate] = useState(null);
    const {
        register,
    } = useForm();

    const handleTodayClick = () => {
        setStartDate(new Date());
    };

    const CustomInput = ({ value, onClick }) => (
        <div>
            <FontAwesomeIcon icon={faHouseChimney} onClick={handleTodayClick} />
            <input
                type="text"
                value={value}
                onClick={onClick}
                {...register("dateOfBirth")}
            />
        </div>
    );

    const CustomCalendarContainer = ({ children }) => (
        <div>
            <FontAwesomeIcon
                icon={faHouseChimney}
                onClick={handleTodayClick}
                style={{ cursor: 'pointer', marginRight: '10px' }}
            />
            {children}
        </div>
    );

    return (
        <>
            <DatePicker
                selected={startDate}
                onChange={date => setStartDate(date)}
                customInput={<CustomInput />}
                calendarContainer={CustomCalendarContainer}
            />
        </>
    );
}

export default Calandar;