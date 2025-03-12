import { combineReducers } from 'redux';
import { useSelector, TypedUseSelectorHook } from 'react-redux';
import DynamicLabelsReducer from '@pages/common/DynamicLabels/dynamicLabels.reducer';
import { DoctorFormReducer } from '@pages/doctor/DoctorForm/DoctorForm.reducer';

const rootReducer = combineReducers({
    dynamicLabels: DynamicLabelsReducer,
    doctor: combineReducers({
        form: DoctorFormReducer
    })
})

export type AppState = ReturnType<typeof rootReducer>;

export const useTypedSelector: TypedUseSelectorHook<AppState> = useSelector;
export default rootReducer;
