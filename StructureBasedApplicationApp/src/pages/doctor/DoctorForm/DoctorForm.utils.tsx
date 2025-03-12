import React from 'react'

export const useBreadCrumbs = () => {
  // const dynamicLabels = useTypedSelector(state => state.dynamicLabels)
  // // const pageLabels = useTypedSelector(state => state.pageLabels.driver)
  // const isEditMode = useTypedSelector(state => state.driver.form.isEditMode)
  // const globalPopupDispatch = useDispatch<Dispatch<tGlobalPopupAction>>()

  // const breadCrumbOptions = React.useMemo(() => [
  //     { id: 'home', label: dynamicLabels.Resources, disabled: true },
  //     { id: 'doctor', label: dynamicLabels.drivers, disabled: false },
  //     { id: 'doctor-Listview', label: `${isEditMode ? dynamicLabels.update : dynamicLabels.add} ${dynamicLabels?.driver}`, disabled: true },
  // ], [dynamicLabels, isEditMode])

  const breadCrumbOptions = React.useMemo(() => [
    {
      id: 'home',
      label: 'Home',
      disabled: true,
    },
    {
      id: 'doctor',
      label: 'Doctor',
      disabled: false,
    },
    {
      id: 'doctor-form',
      label: 'Doctor-Form',
      disabled: true,
    },
  ], [])

  const handleBreadCrumbClick = (id: string) => {
    switch (id) {
    case 'doctor':
      // if (!formInstance.formState.isDirty) {
      //     hybridRouteTo('doctor/')
      // } else {
      //     globalPopupDispatch({
      //         type: '@@globalPopup/SET_PROPS',
      //         payload: {
      //             isOpen: true,
      //             title: dynamicLabels.navigationConfirmation,
      //             content: dynamicLabels.dataLostWarningMsg,
      //             footer: (
      //                 <>
      //                     <IconButton iconVariant='icomoon-tick-circled' primary onClick={() => {
      //                         globalPopupDispatch({ type: '@@globalPopup/CLOSE_POPUP' })
      //                         hybridRouteTo('driver/')
      //                     }}>{dynamicLabels.ok}</IconButton>
      //                     <IconButton iconVariant='icomoon-close' onClick={() => globalPopupDispatch({ type: '@@globalPopup/CLOSE_POPUP' })}>{dynamicLabels.cancel}</IconButton>
      //                 </>
      //             )
      //         }
      //     })
      // }
      alert('hello Clicked')
      break
    }
  }

  return {
    breadCrumbOptions,
    handleBreadCrumbClick,
  }
}