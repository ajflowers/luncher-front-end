import React, { useState } from 'react';
import { connect,  } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { editSchool } from '../actions';


////// This is the schoolform data that admin creates
const UpdateSchool = ({ adminID, editSchool }) => {
    const history = useHistory();

    const [newInfo, setNewInfo] = useState({
        school_name: '',
        address: '',
        city: '',
        state: '',
        zipcode: '',
        funds_needed: 0,
    })

    const handleSubmit = e => {
        e.preventDefault();
        console.log('sending updated school object:', newInfo)
        
        editSchool(newInfo, adminID, history);
    }

    const handleChange = e => {
        setNewInfo({ ...newInfo, [e.target.name]: e.target.value })
    }

    return (
        <div className='school-information'>
            <h2>Enter updated information below:</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    School Name:
                    <input type='text' name='school_name' onChange={e => handleChange(e)} />
                </label>
                <br/>
                <label>
                    Address:
                    <input type='text' name='address' onChange={e => handleChange(e)} />
                </label>
                <br/>
                <label>
                    City:
                    <input type='text' name='city'  onChange={e => handleChange(e)} />
                </label>
                <br/>
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
                <br/>
                <label>
                    ZIP Code:
                    <input type='text' name='zipcode' placeholder='Zip Code' onChange={e => handleChange(e)} />
                </label>
                <br/>
                <label>
                    Fundraising Goal:
                    <input type='number' name='funds_needed' placeholder='Fund Goal' onChange={e => handleChange(e)} />
                </label>                
                <br/>
                <button type='submit'>Submit</button>
            </form>
        </div >
    );
}

const mapStateToProps = state => {
    return {
        adminID: state.adminID
    }
}

export default connect(mapStateToProps, { editSchool })(UpdateSchool);