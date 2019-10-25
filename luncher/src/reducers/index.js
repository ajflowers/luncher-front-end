import { LOADING_SCHOOLS, SCHOOLS_LOADED, LOGGED_IN, SCHOOL_ADDED, SCHOOL_EDITED, SCHOOL_DELETED, API_ERROR} from '../actions'

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
            //payload: array of school objects
            return {
                ...state,
                schools: action.payload,
                dataLoading: false,
                error: ''
            }
        case LOGGED_IN:
            //payload = admin id as number 
            return {
                ...state,
                adminID: action.payload,
                mySchools: state.schools.filter(school => school.admin_id === action.payload),
                error: ''
            }
        case SCHOOL_ADDED:
            //payload: new school object
            return {
                ...state,
                schools: [...state.schools, action.payload],
                mySchools: [...state.mySchools, action.payload],
                error: ''
            }
        case SCHOOL_DELETED:
            //payload: admin id associated with deleted school
            return{
                ...state,
                schools: state.schools.filter(school => school.admin_id !== action.payload),
                mySchools: [],
                error: ''
            }
        case SCHOOL_EDITED:
            //payload: updated school info object
            return {
                ...state,
                mySchools: [action.payload],
                schools: state.schools.map(school => school.id === action.payload.id ? action.payload : school),
                error: ''
            }

        default:
            return state;
    }
}

export default reducer