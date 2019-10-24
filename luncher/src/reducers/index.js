import { LOADING_SCHOOLS, FORM_SENT, ADMIN_REGISTERED, LOGGED_IN, SCHOOL_ADDED, SCHOOL_EDITED, SCHOOL_DELETED, DONATION_RECEIVED, API_ERROR} from '../actions'

const initialState = {
    schools: [],
    dataLoading: false,
    formSent: false,
    error: ''
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        default:
            return state;
    }
}

export default reducer