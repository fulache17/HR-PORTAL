import React, { useState } from 'react';
import { GrFormPreviousLink } from "react-icons/gr";
import { GrFormNextLink } from "react-icons/gr";
import { FaCloudDownloadAlt } from "react-icons/fa";


const SelfieOut = () => {
    const [formData, setFormData] = useState({
        employeename: '',
        fromDate: '',
        toDate: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <div className="hr-bg">
            <div>
                <h2>Employee Selfie - Out Record</h2>

                <h3 style={{ textAlign: 'left', color: 'white', margin: '3%', fontStyle: 'italic' }}>Filter by:</h3>

                <div className="form-container">

                    <select
                        id="employee-name"
                        name="employee-name"
                        value={formData.firstName}
                        onChange={handleChange}
                    >
                        <option value="">Select Employee</option>
                        <option value="Bryan Odiña">Bryan Odiña</option>
                        <option value="Akira Siena">Akira Siena</option>
                        <option value="Merjery Halasan">Merjery Halasan</option>
                        <option value="Jhasmin Fulache">Jhasmin Fulache</option>
                    </select>
                    <input
                        type="Date"
                        id="fromDate"
                        name="fromDate"
                        value={formData.Date}
                        onChange={handleChange}
                    />
                    <input
                        type="Date"
                        id="toDate"
                        name="toDate"
                        value={formData.Date}
                        onChange={handleChange}
                    />
                    <button type="Filter">Filter</button>

                </div>
                <div>
                    <div className="selfie-record">
                        <table>
                            <thead>
                                <tr>
                                    <th>User ID</th>
                                    <th>Name</th>
                                    <th>Date</th>
                                    <th>Time</th>
                                    <th>Required Time</th>
                                    <th>SelfieOut</th>
                                    <th>CSR</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>20-00706</td>
                                    <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis provident dicta libero tempora similique harum rem esse nulla quidem odio!</td>
                                    <td>February 19, 2024</td>
                                    <td>7:00 am</td>
                                    <td>7:00 am</td>
                                    <td>http://fvgbtbt.com</td>
                                    <td>www.facebook.com</td>
                                </tr>
                                <tr>
                                    <td>20667706</td>
                                    <td>Bryan Odeng</td>
                                    <td>April 19, 2024</td>
                                    <td>7:00 am</td>
                                    <td>6:30 am</td>
                                    <td>http://fvgbtbt.com</td>
                                    <td>www.facebook.com</td>
                                </tr>
                                <tr>
                                    <td>20667706</td>
                                    <td>Louie AP</td>
                                    <td>April 19, 2024</td>
                                    <td>7:00 am</td>
                                    <td>6:30 am</td>
                                    <td>http://fvgbtbt.com</td>
                                    <td>www.facebook.com</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className='downloadss'>
                            <button type="download" onClick={handleSubmit}>
                                <FaCloudDownloadAlt className="icon" /></button>
                            <button type="previous" onClick={handleSubmit}>
                                <GrFormPreviousLink className="icon" /></button>
                            <button type="previous" onClick={handleSubmit}>
                                <GrFormNextLink className="icon" /> </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SelfieOut;