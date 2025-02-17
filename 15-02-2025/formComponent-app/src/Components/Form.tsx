// The form should contain:
// First Name (Text Input)
// Last Name (Text Input)
// Age (Number Input)
// Gender (Radio Buttons)
// Skills (Select Dropdown)
// Email (Text Input)
// Phone Number (Number Input)
// Address (Text Area)


import React from 'react'
import { useState } from 'react';

export const Form = () => {
    const [data, setData] = useState({ firstName: "", lastName: "", age: 0, gender: "", skills: "", email: "", phoneNumber: 0, address: "" });
    const setUserdata = (key, value) => {
        setData((prev) => ({ ...prev, [key]: value }))
    }

    const handleChangeFromUser = (e) => {
        const { name, value } = e.target;
        setUserdata(name, value);
    }

    const displayMessage = () => {
        alert("Form submitted successfully");
    }
    return (
        <>

            <form>
                {/* firstName */}
                <label>First Name: {data.firstName}
                    <div>
                        <input type="text" value={data.firstName} name='firstName' onChange={handleChangeFromUser} />
                    </div>
                </label>
                <br />

                {/* lastName */}
                <label>Last Name : {data.lastName}
                    <div>
                        <input type='text' value={data.lastName} name='lastName' onChange={handleChangeFromUser} />
                    </div>
                </label>
                <br />

                {/* Age */}
                <label>Age : {data.age}
                    <div>
                        <input type='number' value={data.age} name='age' onChange={handleChangeFromUser} />
                    </div>
                </label>
                <br />

                {/* gender */}
                <label>Gender : {data.gender}
                    <div>
                        <input type='radio' value='Male' name='gender' onChange={handleChangeFromUser} checked={data.gender === 'Male'} />Male
                        <input type='radio' value='Feale' name='gender' onChange={handleChangeFromUser} checked={data.gender === 'Female'} /> Female
                    </div>
                </label>
                <br />

                {/* skills */}
                <label>Skills : {data.skills}
                    <div>
                        <select value={data.skills} name='skills' onChange={handleChangeFromUser}>
                            <option value=''>Choose and Option</option>
                            <option value='Javascript'>Javascript</option>
                            <option value="React">React</option>
                            <option value="NodeJS">NodeJS</option>
                            <option value="Python">Python</option>
                            <option value="Database">Database</option>
                        </select>
                    </div>
                </label>
                <br />

                {/* email */}
                <label>Email:{data.email}
                    <div>
                        <input type='text' value={data.email} name='email' onChange={handleChangeFromUser} />
                    </div>
                </label>
                <br />

                {/* phone number */}
                <label>Phone Number:{data.phoneNumber}
                    <div>
                        <input type='number' value={data.phoneNumber} name='phoneNumber' onChange={handleChangeFromUser} />
                    </div>
                </label>
                <br />

                {/* address */}
                <label>Address : {data.address}
                    <div>
                        <textarea value={data.address} name='address' onChange={handleChangeFromUser} />
                    </div>
                </label>
                <br />

                <button type='submit' onClick={displayMessage}>Submit</button>
            </form >
        </>
    )
}


