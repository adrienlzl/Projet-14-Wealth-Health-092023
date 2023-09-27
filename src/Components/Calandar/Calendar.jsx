import React, { useState, useEffect} from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { getYear, getMonth } from 'date-fns';
import { months } from "../../Data/Data.mouths";
import "./Calendar.scss"
import HouseIcon from "./HouseIcon";
import { startOfDay } from 'date-fns';

function Calendar({ onDateChange, errorCalendar }) {
    const [selectedDate, setSelectedDate] = useState(null);
    const [isDateSelected, setIsDateSelected] = useState(false)
    const [inputId, setInputId] = useState(null);

    const date = selectedDate;
    const generateRange = (start, end, step) => {
        const range = [];
        for (let i = start; i <= end; i += step) {
            range.push(i);
        }
        return range;
    };
    const years = generateRange(1990, getYear(new Date()) + 1, 1);

    const handleDateChange = (date) => {
        setSelectedDate(date);
        const jsonDate = date ? date.toISOString() : null;
        onDateChange(jsonDate);
        setIsDateSelected(!!date)
    };

    const handleSelectToday = () => {
        const today = startOfDay(new Date());
        setSelectedDate(today);
    };

    return (
        <div className="datepicker-container">
            <DatePicker
                renderCustomHeader={({
                                         date,
                                         changeYear,
                                         changeMonth,
                                         decreaseMonth,
                                         increaseMonth,
                                         prevMonthButtonDisabled,
                                         nextMonthButtonDisabled,
                                     }) => (
                    <div className="calendar-header">
                        <button onClick={decreaseMonth} className="calendar-button" disabled={prevMonthButtonDisabled}>
                            {"<"}
                        </button>
                        <HouseIcon onClick={handleSelectToday}/>
                        <select
                            className="calendar-header-selection"
                            value={months[getMonth(date)]}
                            onChange={({ target: { value } }) =>
                                changeMonth(months.indexOf(value))}>
                            {months.map((option) => (
                                <option key={option} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select>
                        <select
                            className="calendar-header-selection"
                            value={getYear(date)}
                            onChange={({ target: { value } }) => changeYear(value)}>
                            {years.map((option) => (
                                <option key={option} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select>
                        <button onClick={increaseMonth} className="calendar-button" disabled={nextMonthButtonDisabled}>
                            {">"}
                        </button>
                    </div>
                )}
                selected={selectedDate}
                onChange={handleDateChange}
                dateFormat="yyyy-MM-dd"
                id={inputId}
                className={`input ${errorCalendar ? 'input-invalid' : ''} ${date ? 'input-valid' : ''}`}
            />
        </div>
    );
}

export default Calendar;
