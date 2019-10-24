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

export const fetchSchools = () => dispatch => {
    console.log('app GET request fired')
    dispatch({ type: LOADING_SCHOOLS })
    axiosWithAuth()
        .get("/schools")
        .then(res => {
            console.log('app.js retrieval', res);
            dispatch({ type: SCHOOLS_LOADED, payload: res.data})
        })
}