import { useHistory } from 'react-router-dom';
import { axiosWithAuth } from '../utils/axiosWithAuth'

export const LOADING_SCHOOLS = 'LOADING_SCHOOLS'
export const SCHOOLS_LOADED = 'SCHOOLS_LOADED'
export const FORM_SENT = 'FORM_SENT'
export const ADMIN_REGISTERED = 'ADMIN_REGISTERED'
export const LOGGED_IN = 'LOGGED_IN'
export const SCHOOL_ADDED = 'SCHOOL_ADDED'
export const SCHOOL_EDITED = 'SCHOOL_EDITED'
export const SCHOOL_DELETED = 'SCHOOL_DELETED'
export const DONATION_RECEIVED = 'DONATION_RECEIVED'
export const API_ERROR = 'API_ERROR'

// const history = useHistory()

export const fetchSchools = () => dispatch => {
    dispatch({ type: LOADING_SCHOOLS })
    axiosWithAuth()
        .get("/schools")
        .then(res => {
            console.log('app.js retrieval', res);
            dispatch({ type: SCHOOLS_LOADED, payload: res.data})
        })
        .catch(err => dispatch({type: API_ERROR, payload: err}))
}

export const sendLogin = (credentials, history) => dispatch => {
    dispatch({ type: FORM_SENT })
    axiosWithAuth()
        .post("/admins/login", credentials)
        .then(res => {
            console.log('login response', res);
            localStorage.setItem('token', res.data.token);
            dispatch({ type: LOGGED_IN, payload: res.data.admin.id});
            history.push("/dashboard")
        })
        .catch(err => dispatch({type: API_ERROR, payload: err}))

}