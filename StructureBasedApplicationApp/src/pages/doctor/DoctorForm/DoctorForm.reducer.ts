import { IDoctorFormReducerState, IDoctorFormActions } from './DoctorForm.model';
export const initialState = {
    structure: {},
    loading: false,
    isEditMode: false,
    //   resetData: {
    /** This key corresponds to the key defined in getAPIModuleData() */
    // moduleKey: 'driver',
    // cur_country: {
    //   id: JSON.parse(localStorage.getItem('userAccessInfo') || '{}').baseCountryId,
    //   name: JSON.parse(localStorage.getItem('userAccessInfo') || '{}').baseCountry
    // },
    // per_country: {
    //   id: JSON.parse(localStorage.getItem('userAccessInfo') || '{}').baseCountryId,
    //   name: JSON.parse(localStorage.getItem('userAccessInfo') || '{}').baseCountry
    // },
    // driverName: 'Ajay',
    // phoneNumber: '9833016343',
    // licenseNumber: '1231231231',
    // cur_city: 'Mumbai',
    // per_city: 'Mumbai',
    // maritalStatus: 'Married',
    // gender: 'Male',
    // licenseType: ''
    //   }
}

export const DoctorFormReducer = (
    state: IDoctorFormReducerState = initialState,
    action: IDoctorFormActions): IDoctorFormReducerState => {

    switch (action.type) {
        case '@@doctorForm/SET_STRUCTURE':
            return {
                ...state,
                structure: action.payload
            }

        case '@@doctorForm/SET_LOADING':
            return {
                ...state,
                loading: action.payload
            }

        case '@@doctorForm/SET_EDIT_MODE':
            return {
                ...state,
                isEditMode: action.payload
            }

        // case '@@doctorForm/SET_DOCTOR_DATA':
        //     return {
        //         ...state,
        //         driverData: action.payload
        //     }

        case '@@doctorForm/SET_FORM_RESET_DATA':
            return {
                ...state,
                resetData: action.payload
            }

        case '@@doctorForm/RESET_INITIAL_STATE':
            return initialState

        default:
            return state
    }
}