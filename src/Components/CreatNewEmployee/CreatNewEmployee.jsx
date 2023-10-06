import React, {useRef, useState, useEffect} from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./CreatNewEmployee.scss";
import { useDispatch } from "react-redux";
import { setEmployee } from "../../Actions/employee.action";
import Calandar from "../Calandar/Calendar";
import Department from "./Department";
import { states } from "../../Data/Data.Country";
import ModalMaster from "../ModalMaster/ModalMaster";

function CreatNewEmployee() {
    const dispatch = useDispatch();
    const [errorBirthDay, setErrorBirthDay] = useState(false)
    const [startDateError, setStartDateError] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            dateOfBirth: null,
            startDate: null,
            street: "",
            city: "",
            zipCode: "",
            state: "",
            department: "",
        },
        validationSchema: Yup.object({
            firstName: Yup.string().required(),
            lastName: Yup.string().required(),
            dateOfBirth: Yup.date().nullable().required(),
            startDate: Yup.date().nullable().required(),
            street: Yup.string().required(),
            city: Yup.string().required(),
            zipCode: Yup.string().required(),
            state: Yup.string().required(),
            department: Yup.string().required(),
        }),

        onSubmit: (values) => {
            const formattedStartDate = values.startDate ? values.startDate.slice(0, 10) : "";
            const formattedDateOfBirth = values.dateOfBirth ? values.dateOfBirth.slice(0, 10) : "";
            const employeeData = {
                firstName: values.firstName,
                lastName: values.lastName,
                dateOfBirth: formattedDateOfBirth,
                startDate: formattedStartDate,
                street: values.street,
                city: values.city,
                zipCode: values.zipCode,
                state: values.state,
                department: values.department,
            };
            dispatch(setEmployee(employeeData));
            setIsModalOpen(true)
        },
    });
    function handleTestErrors() {
        if (!formik.values.dateOfBirth) {
            setErrorBirthDay(true);
        } else {
            setErrorBirthDay(false);
        }
        if (!formik.values.startDate) {
            setStartDateError(true);
        } else {
            setStartDateError(false);
        }
    }
    const closeModal = () => {
    };
    return (
        <div className="creat-new-employee-contenaire">
            <form
                id="create-employee"
                className="form-create-employee"
                onSubmit={formik.handleSubmit}>
                <label htmlFor="firstName">First Name</label>
                <input type="text" name="firstName" id="firstName"
                    className={formik.touched.firstName && formik.errors.firstName
                            ? "input-invalid"
                            : formik.touched.firstName && !formik.errors.firstName
                                ? "input-valid"
                                : ""
                    }
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.firstName}
                />

                <label htmlFor="lastName">Last Name</label>
                <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    className={
                        formik.touched.lastName && formik.errors.lastName
                            ? "input-invalid"
                            : formik.touched.lastName && !formik.errors.lastName
                                ? "input-valid"
                                : ""
                    }
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.lastName}
                />

                <label htmlFor="dateOfBirth">Date of Birth</label>
                <Calandar
                    onDateChange={(date) => {
                        formik.setFieldValue("dateOfBirth", date);

                    }}
                    errorCalendar={errorBirthDay}
                />

                <label htmlFor="startDate">Start Date</label>
                <Calandar
                    onDateChange={(date) => formik.setFieldValue("startDate", date)}
                    errorCalendar={startDateError}
                />

                <div className="address">
                    <legend className="title-legend-adress">Address</legend>

                    <label htmlFor="street">Street</label>
                    <input
                        id="street"
                        type="text"
                        name="street"
                        className={
                            formik.touched.street && formik.errors.street
                                ? "input-invalid"
                                : formik.touched.street && !formik.errors.street
                                    ? "input-valid"
                                    : ""
                        }
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.street}
                    />

                    <label htmlFor="city">City</label>
                    <input
                        id="city"
                        type="text"
                        name="city"
                        className={
                            formik.touched.city && formik.errors.city
                                ? "input-invalid"
                                : formik.touched.city && !formik.errors.city
                                    ? "input-valid"
                                    : ""
                        }
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.city}
                    />

                    <label htmlFor="zipCode">Zip Code</label>
                    <input
                        id="zipCode"
                        type="number"
                        name="zipCode"
                        className={
                            formik.touched.zipCode && formik.errors.zipCode
                                ? "input-invalid"
                                : formik.touched.zipCode && !formik.errors.zipCode
                                    ? "input-valid"
                                    : ""
                        }
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.zipCode}
                    />
                </div>

                <label htmlFor="state" className={
                    formik.touched.state && formik.errors.state
                        ? "label-error"
                        : formik.touched.state && !formik.errors.state
                            ? "label-valid"
                            : ""
                }
                       onChange={formik.handleChange}
                       onBlur={formik.handleBlur}>
                    State
                </label>
                <select
                    name="state"
                    id="state"
                    className={
                        formik.touched.state && formik.errors.state
                            ? "select-invalid"
                            : formik.touched.state && !formik.errors.state
                                ? "select-valid"
                                : ""
                    }
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.state}
                >
                    <option value="" label="Select a state" />
                    {states.map((state) => (
                        <option key={state.abbreviation} value={state.abbreviation}>
                            {state.name}
                        </option>
                    ))}
                </select>

                <label htmlFor="department" className={
                    formik.touched.department && formik.errors.department
                        ? "label-error"
                        : formik.touched.department && !formik.errors.department
                            ? "label-valid"
                            : ""
                }
                       onChange={formik.handleChange}
                       onBlur={formik.handleBlur}>
                    Department
                </label>
                <Department selectedDepartment={(value) => formik.setFieldValue("department", value)} />

                <button type="submit" className="button-form" onClick={handleTestErrors}>
                    Save
                </button>
            </form>
            {isModalOpen && <ModalMaster closeModal={closeModal}/>}
        </div>
    );
}

export default CreatNewEmployee;
