import { LOADING_SCHOOLS, SCHOOLS_LOADED, FORM_SENT, ADMIN_REGISTERED, LOGGED_IN, SCHOOL_ADDED, SCHOOL_EDITED, SCHOOL_DELETED, DONATION_RECEIVED, API_ERROR} from '../actions'

const initialState = {
    token: '',
    adminID: '',
    schools: [],
    dataLoading: false,
    formSent: false,
    error: ''
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case API_ERROR:
            return {
                ...state,
                dataLoading: false,
                formSent: false,
                error: action.payload
            }
        case LOADING_SCHOOLS:
            return {
                ...state,
                dataLoading: true,
                error: ''
            }
        case FORM_SENT:
            return {
                ...state,
                formSent: true,
                error: ''
            }
        case SCHOOLS_LOADED:
            return {
                ...state,
                schools: action.payload,
                dataLoading: false,
                error: '',
            }
        default:
            return state;
    }
}

export default reducer