import { all, spawn } from 'redux-saga/effects'
import { watchDynamicLabelsFetchDataRequest } from '@pages/common/DynamicLabels/dynamicLabels.effects'
import { doctorFormSaga } from '@pages/doctor/DoctorForm/DoctorForm.effects'

export default function* rootSaga() {
    yield all([
        spawn(watchDynamicLabelsFetchDataRequest),
        spawn(doctorFormSaga),

    ])
}