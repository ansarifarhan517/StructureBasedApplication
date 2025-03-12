import { call, fork, put, takeLatest } from "redux-saga/effects"
import { IDoctorFormActions } from "./DoctorForm.model"
import axios from "@utils/axios"
import apiMappings from "@utils/apiMapping"

function* fetchStructure() {
    yield put<IDoctorFormActions>({ type: '@@doctorForm/SET_LOADING', payload: true })
    const { data: payload } = yield call(axios.post, apiMappings.doctor.form.structure)

    // const dynamicLabels:IDriverDynamicLabel = yield select((state: AppState) => state.dynamicLabels)

    // const transformedPayload: IMongoFormStructure = prepareFormStructure(payload)
    // transformedPayload['Driver Details'].salary.decimalPlaces = 2
    // transformedPayload['Driver Details'].salary.label += ` (${dynamicLabels[`cur_symbol_${getBaseCurrency()}`]})`

    yield put<IDoctorFormActions>({ type: '@@doctorForm/SET_STRUCTURE', payload: payload[0]?.structure })
    yield put<IDoctorFormActions>({ type: '@@doctorForm/SET_LOADING', payload: false })
}

export function* watchFetchStructureRequest() {
    yield takeLatest<IDoctorFormActions>('@@doctorForm/FETCH_STRUCTURE', fetchStructure)
}

export function* doctorFormSaga() {
    yield fork(watchFetchStructureRequest)
}