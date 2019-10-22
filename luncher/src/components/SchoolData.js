import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';

////These are the test objects before we use an api.
export default [
    {
        schoolName: "Johnston Elementary School",
        address: "1256 Franklin Ave",
        city: "Pittsburgh",
        state: "PA",
        zip: "15221",
        fundsNeeded: "$5,000.00",
        fundsRaised: "$1,325.00"
    },

    {
        schoolName: "Schenley High School",
        address: "4101 Bigelow Blvd",
        city: "Pittsburgh",
        state: "PA",
        zip: "15213",
        fundsNeeded: "$8,000.00",
        fundsRaised: "295.00"
    }

];

////// This is the schoolform data that admin creates
const SchoolData = ({ values, touched, errors, status }) => {

    const [schoolData, setSchoolData] = useState([])

    useEffect(() => {
        status && setSchoolData(schoolData => [...schoolData, status])
    }, [status])

    return (
        <div className='school-data'>
            <Form>
                //schoolName
                <Field type='text' name='schoolName' placeholder='School Name' />
                {touched.schooName && errors.schoolName && (
                    <p className='error'>{errors.schoolName}</p>
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
                <Field component='select' className='state-select' name='state' />
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
                {touched.state && errors.state && (
                    <p className='error'>{errors.state}</p>
                )}
                ///zipcode
                <Field type='text' name='zip' placeholder='Zip Code' />
                {touched.zip && errors.zip && (
                    <p className='error'>{errors.zip}</p>
                )}
                ////funds needed
                <Field type='text' name='fundsNeeded' placeholder='Fund Goal' />
                {touched.fundsNeeded && errors.fundsNeeded && (
                    <p className='error'>{errors.fundsNeeded}</p>
                )}
                ////funds fundsraised    
                <Field type='text' name='fundsRaised' placeholder='Funds Raised' />
                {touched.fundsRaised && errors.fundsRaised && (
                    <p className='error'>{errors.fundsRaised}</p>
                )}
            </Form>
        </div >
    );
};

const FormikSchoolData = withFormik({
    mapPropsToValues({ schoolName, address, city, state, zip, fundsNeeded, fundsRaised }) {
        return {
            schoolName: schoolName || '',
            address: address || '',
            city: city || '',
            state: state || '',
            zip: zip || '',
            fundsNeeded: fundsNeeded || '',
            fundsRaised: fundsRaised || ''
        };
    },
    validationSchema: Yup.object().shape({
        schoolName: Yup.string().required(),
        address: Yup.string().required(),
        city: Yup.string().required(),
        state: Yup.string().required('Please Select One'),
        zip: Yup.string().required(),
        fundsNeeded: Yup.string().required(),
        fundsRaised: Yup.string().required(),
    }),
    handleSubmit(values, { setStatus }) {
        axios.post('', values)
            .then(res => { setStatus(res.data); })
            .catch(err => console.log(err.response));
    }

})(SchoolData);

//////////////uncomment the line below!!!!

// export default FormikSchoolData;
// console.log('this better work', FormikSchoolData);

