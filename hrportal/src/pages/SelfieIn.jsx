import React, { useState } from 'react';
import { GrFormPreviousLink } from "react-icons/gr";
import { GrFormNextLink } from "react-icons/gr";
import { FaCloudDownloadAlt } from "react-icons/fa";

const SelfieIn = () => {
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
                <h2>Employee Selfie - In Record</h2>
                <div>

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

                    <div className="selfie-record">
                        <table>
                            <thead>
                                <tr>
                                    <th>User ID</th>
                                    <th>Name</th>
                                    <th>Date</th>
                                    <th>Time</th>
                                    <th>Required Time</th>
                                    <th>SelfieIn</th>
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
                                </tr>
                                <tr>
                                    <td>20160906</td>
                                    <td>Luoie AP</td>
                                    <td>May 2, 2024</td>
                                    <td>7:00 am</td>
                                    <td>6:45 am</td>
                                    <td>http://fvgbtbt.com</td>
                                </tr>
                                <tr>
                                    <td>2019876</td>
                                    <td>Bryan Odeng</td>
                                    <td>May 3, 2024</td>
                                    <td>7:00 am</td>
                                    <td>6:55 am</td>
                                    <td>http://instagram.com</td>
                                </tr>
                                <tr>
                                    <td>20160906</td>
                                    <td>Luoie AP</td>
                                    <td>May 2, 2024</td>
                                    <td>7:00 am</td>
                                    <td>6:45 am</td>
                                    <td>http://fvgbtbt.com</td>
                                </tr>
                                <tr>
                                    <td>23906</td>
                                    <td>Merjery Halasan</td>
                                    <td>May 2, 2024</td>
                                    <td>7:00 am</td>
                                    <td>6:45 am</td>
                                    <td>http://fvgbtbt.com</td>
                                </tr>
                            </tbody><br></br>
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

export default SelfieIn;
