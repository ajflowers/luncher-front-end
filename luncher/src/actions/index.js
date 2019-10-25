import { axiosWithAuth } from '../utils/axiosWithAuth'

export const LOADING_SCHOOLS = 'LOADING_SCHOOLS'
export const SCHOOLS_LOADED = 'SCHOOLS_LOADED'
export const LOGGED_IN = 'LOGGED_IN'
export const SCHOOL_ADDED = 'SCHOOL_ADDED'
export const SCHOOL_EDITED = 'SCHOOL_EDITED'
export const SCHOOL_DELETED = 'SCHOOL_DELETED'
export const DONATION_RECEIVED = 'DONATION_RECEIVED'
export const API_ERROR = 'API_ERROR'

export const fetchSchools = () => dispatch => {
    dispatch({ type: LOADING_SCHOOLS })
    axiosWithAuth()
        .get("/schools")
        .then(res => {
            console.log('app.js retrieved:', res);
            dispatch({ type: SCHOOLS_LOADED, payload: res.data})
        })
        .catch(err => dispatch({type: API_ERROR, payload: err}))
}

export const sendLogin = (credentials, history) => dispatch => {
    if(credentials.username === '' || credentials.password === '') {
        alert("username and/or password may not be blank")
    } else {
        axiosWithAuth()
            .post("/admins/login", credentials)
            .then(res => {
                console.log('login successful:', res);
                localStorage.setItem('token', res.data.token);
                dispatch({ type: LOGGED_IN, payload: res.data.admin.id});
                history.push("/dashboard")
            })
            .catch(err => dispatch({type: API_ERROR, payload: err}));
        }
}

export const addSchool = (schoolInfo, adminID, history) => dispatch => {
    axiosWithAuth()
        .post(`admins/${adminID}/school`, schoolInfo)
        .then(res => {
            console.log('school added:', res)
            dispatch({ type: SCHOOL_ADDED, payload: res.data })
            history.push("/")
        })
        .catch(err => console.log(err.response));
}

export const editSchool = () => dispatch => {
    
}

export const deleteSchool = adminID => dispatch => {
    axiosWithAuth()
        .delete(`/schools/${adminID}`)
        .then(res => {
            console.log(res);
            dispatch({ type: SCHOOL_DELETED, payload: adminID})
        })
    
}

export const filterSchools = (schools, adminID) => dispatch => {
    const filtered = schools.filter(school => school.admin_id === adminID);
    console.log(filtered);

}