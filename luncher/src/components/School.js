import React, { useState } from "react";
import axios from "axios";

const School = () => {

    const [donationInput, setDonationInput] = useState({
        first_name: '',
        last_name: '',
        email: '',
        address: '',
        city: '',
        state: '',
        donation: 2000
    })

    const handleSubmit = e => {
        e.preventDefault();
        axios
            .post(`/api/schools/:id`, donationInput)
            .then(res => console.log(res))
            .catch(err => console.log(err.response));

    }

    const handleChange = e => {
        setDonationInput({ ...donationInput, [e.target.name]: e.target.value })
    }

    return (
        <div className="school-page">
            <h1>School Name</h1>
            <h3>Thank you for donating to our school lunch program. Please enter your information below and be sure to submit!</h3>

            <div className='donation-information'>
                <form onSubmit={handleSubmit}>
                    <label>
                        First Name:
                    <input type='text' name='first_name' onChange={e => handleChange(e)} />
                    </label>
                    <br />
                    <label>
                        Last Name:
                    <input type='text' name='last_name' onChange={e => handleChange(e)} />
                    </label>
                    <br />
                    <label>
                        Email:
                    <input type='text' name='email' onChange={e => handleChange(e)} />
                    </label>
                    <br />
                    <label>
                        Address:
                    <input type='text' name='address' onChange={e => handleChange(e)} />
                    </label>
                    <br />
                    <label>
                        City:
                    <input type='text' name='city' onChange={e => handleChange(e)} />
                    </label>
                    <br />
                    <label>
                        State:
                    <select name='state' onChange={e => handleChange(e)}>
                            <option>Choose Your State</option>
                            <option value='AL'>Alabama</option>
                            <option value='AK'>Alaska</option>
                            <option value='AZ'>Arizona</option>
                            <option value='AR'>Arkansas</option>
                            <option value='CA'>California</option>
                            <option value='CO'>Colorado</option>
                            <option value='CT'>Connecticut</option>
                            <option value='DC'>District of Columbia</option>
                            <option value='DE'>Delaware</option>
                            <option value='FL'>Florida</option>
                            <option value='GA'>Georgia</option>
                            <option value='HI'>Hawaii</option>
                            <option value='ID'>Idaho</option>
                            <option value='IL'>Illinois</option>
                            <option value='IN'>Indiana</option>
                            <option value='IA'>Iowa</option>
                            <option value='KS'>Kansas</option>
                            <option value='KY'>Kentucky</option>
                            <option value='LA'>Louisiana</option>
                            <option value='ME'>Maine</option>
                            <option value='MD'>Maryland</option>
                            <option value='MA'>Massachusetts</option>
                            <option value='MI'>Michigan</option>
                            <option value='MN'>Minnesota</option>
                            <option value='MS'>Mississippi</option>
                            <option value='MO'>Missouri</option>
                            <option value='MT'>Montana</option>
                            <option value='NE'>Nebraska</option>>
                        <option value='NV'>Nevada</option>
                            <option value='NH'>New Hampshire</option>
                            <option value='NJ'>New Jersey</option>
                            <option value='NM'>New Mexico</option>
                            <option value='NY'>New York</option>
                            <option value='NC'>North Carolina</option>
                            <option value='ND'>North Dakota</option>
                            <option value='OH'>Ohio</option>
                            <option value='OK'>Oklahoma</option>
                            <option value='OR'>Oregon</option>
                            <option value='PA'>Pennsylvania</option>
                            <option value='RI'>Rhode Island</option>
                            <option value='SC'>South Carolina</option>
                            <option value='SD'>South Dakota</option>
                            <option value='TN'>Tennessee</option>
                            <option value='TX'>Texas</option>
                            <option value='UT'>Utah</option>
                            <option value='VT'>Vermont</option>
                            <option value='VA'>Virginia</option>
                            <option value='WA'>Washington</option>
                            <option value='WV'>West Virginia</option>
                            <option value='WI'>Wisconsin</option>
                            <option value='WY'>Wyoming</option>
                        </select>
                    </label>
                    <br />
                    <label>
                        ZIP Code:
                    <input type='text' name='zipcode' placeholder='Zip Code' onChange={e => handleChange(e)} />
                    </label>
                    <br />
                    <label>
                        Donation Amount:
                    <input type='number' name='donation_amount' placeholder='Donation Amount' onChange={e => handleChange(e)} />
                    </label>
                    <br />
                    <button type='submit'>Submit</button>
                </form>
            </div >
        </div>
    );
}

export default School;
