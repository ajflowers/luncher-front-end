import { LOADING_SCHOOLS, SCHOOLS_LOADED, LOGGED_IN, SCHOOL_ADDED, SCHOOL_EDITED, SCHOOL_DELETED, DONATION_RECEIVED, API_ERROR} from '../actions'

const initialState = {
    adminID: '',
    schools: [],
    mySchools: [],
    dataLoading: false,
    error: ''
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case API_ERROR:
            return {
                ...state,
                dataLoading: false,
                error: action.payload.response
            }
        case LOADING_SCHOOLS:
            return {
                ...state,
                dataLoading: true,
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
                mySchools: state.schools.filter(school => school.admin_id === action.payload),
                error: ''
            }
        case SCHOOL_ADDED:
            return {
                ...state,
                schools: [...state.schools, action.payload],
                mySchools: [...state.mySchools, action.payload],
                error: ''
            }
        case SCHOOL_DELETED:
            return{
                ...state,
                schools: state.schools.filter(school => school.admin_id !== action.payload),
                mySchools: []
            }

        default:
            return state;
    }
}

export default reducer