import { LOADING_SCHOOLS, SCHOOLS_LOADED, LOGGED_IN, SCHOOL_ADDED, SCHOOL_EDITED, SCHOOL_DELETED, DONATION_RECEIVED, API_ERROR} from '../actions'

const initialState = {
    adminID: '',
    schools: [],
    dataLoading: false,
    error: ''
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case API_ERROR:
            return {
                ...state,
                dataLoading: false,
                formSent: false,
                error: action.payload.response
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
                error: ''
            }
        case LOGGED_IN: 
            return {
                ...state,
                adminID: action.payload,
                formSent: false,
                error: ''
            }
        default:
            return state;
    }
}

export default reducer