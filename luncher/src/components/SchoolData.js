import React, { useState } from 'react';
import { connect,  } from 'react-redux';
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { useHistory } from 'react-router-dom';
import { addSchool } from '../actions';


////// This is the schoolform data that admin creates
const SchoolData = props => {
    const history = useHistory();

    const [schoolInfo, setSchoolInfo] = useState({
        school_name: '',
        address: '',
        city: '',
        state: '',
        zipcode: '',
        funds_needed: 0,
        funds_raised: 0

    })

    const handleSubmit = e => {
        e.preventDefault();
        const adminID = props.adminID;
        props.addSchool(schoolInfo, adminID, history);
    }

    const handleChange = e => {
        setSchoolInfo({ ...schoolInfo, [e.target.name]: e.target.value })
    }

    return (
        <div className='school-information'>
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

export default connect(mapStateToProps, { addSchool })(SchoolData);

/*
const SchoolData = ({ values, touched, errors, status }) => {

    const [schoolInfo, setSchoolInfo] = useState([])

    useEffect(() => {
        status && setSchoolInfo(schoolInfo => [...schoolInfo, status])
    }, [status])

    return (
        <div className='school-information'>
            <Form>
                //schoolName
                <Field type='text' name='school_name' placeholder='School Name' />
                {touched.school_name && errors.school_name && (
                    <p className='error'>{errors.school_name}</p>
                )}
                //address
                <Field type='text' name='address' placeholder='Address' />
                {touched.address && errors.address && (
                    <p className='error'>{errors.address}</p>
                )}
                //city
                <Field type='text' name='city' placeholder='City' />
                {touched.city && errors.city && (
                    <p className='error'>{errors.city}</p>
                )}
                //state
                <Field component='select' className='state-select' name='state'>
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
                </Field>
                {touched.state && errors.state && (
                    <p className='error'>{errors.state}</p>
                )}
                ///zipcode
                <Field type='text' name='zipcode' placeholder='Zip Code' />
                {touched.zipcode && errors.zipcode && (
                    <p className='error'>{errors.zipcode}</p>
                )}
                ////funds needed
                <Field type='text' name='funds_needed' placeholder='Fund Goal' />
                {touched.funds_needed && errors.funds_needed && (
                    <p className='error'>{errors.funds_needed}</p>
                )}
                <br />
                <button type='submit'>Submit</button>
            </Form>
        </div >
    );
};

const FormikSchoolData = withFormik({
    mapPropsToValues({ school_name, address, city, state, zipcode, funds_needed, funds_raised }) {
        return {
            school_name: school_name || '',
            address: address || '',
            city: city || '',
            state: state || '',
            zipcode: zipcode || '',
            funds_needed: funds_needed || '',
            funds_raised: funds_raised || ''
        };

    },
    validationSchema: Yup.object().shape({
        school_name: Yup.string().required(),
        address: Yup.string().required(),
        city: Yup.string().required(),
        state: Yup.string().required('Please Select One'),
        zipcode: Yup.string().required(),
        funds_needed: Yup.string().required(),
        funds_raised: Yup.string().required(),
    }),
    handleSubmit(values, { setStatus }) {
        axios.post(`https://luncher-bw.herokuapp.com/api/admins/:id/school`, values)
            .then(res => { setStatus(res.data); })
            .catch(err => console.log(err.response));
    }

})(SchoolData);

//////////////uncomment the line below!!!!

export default FormikSchoolData;
console.log('this better work', FormikSchoolData);

*/
