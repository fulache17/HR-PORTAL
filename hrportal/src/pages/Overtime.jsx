import React, { useState } from 'react';
import { GrFormPreviousLink } from "react-icons/gr";
import { GrFormNextLink } from "react-icons/gr";
import { FaCloudDownloadAlt } from "react-icons/fa";

const Overtime = () => {
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
                <h2>Employee Overtime Record</h2>
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
                            value={formData.fromDate}
                            onChange={handleChange}
                        />
                        <input
                            type="Date"
                            id="toDate"
                            name="toDate"
                            value={formData.toDate}
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
                                    <th>Start Time</th>
                                    <th>End Time</th>
                                    <th>Staus</th>
                                    <th>Approved by</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>20-00706</td>
                                    <td> Merjery Halasan</td>
                                    <td>March 27, 2024</td>
                                    <td>5:00 pm</td>
                                    <td>7:00 pm</td>
                                    <td>Approved</td>
                                    <td>Dennise G. Soriano</td>
                                </tr>
                                <tr>
                                    <td>2045706</td>
                                    <td>Akira Siena</td>
                                    <td>March 28, 2024</td>
                                    <td>5:00 pm</td>
                                    <td>6:00 pm</td>
                                    <td>Denied</td>
                                    <td>Dennise G. Soriano</td>
                                </tr>
                                <tr>
                                    <td>2045706</td>
                                    <td>Jhasmin Fulache</td>
                                    <td>April 2, 2024</td>
                                    <td>5:00 pm</td>
                                    <td>11:00 pm</td>
                                    <td>Pending</td>
                                    <td>Dennise G. Soriano</td>
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
export default Overtime;