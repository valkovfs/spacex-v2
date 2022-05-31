import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
    loading: false,
    hasErrors: false,
    launches: []
}

const launchesSlice = createSlice({
    name: 'launches',
    initialState,
    reducers: {
        getLaunches: (state) => {
            state.loading = true
        },
        getLaunchesSuccess: (state, { payload }) => {
            state.launches = payload
            state.loading = false
            state.hasErrors = false
        },
        getLaunchesFailure: (state) => {
            state.loading = false
            state.hasErrors = true
        },
    },
})

export const { getLaunches, getLaunchesSuccess, getLaunchesFailure} = launchesSlice.actions

export const selectLaunches = state => state.launches

export const fetchLaunches = () => {
    return async dispatch => {
        dispatch(getLaunches())
        try {
            const response = await fetch('https://api.spacexdata.com/v4/launches')
            const data = await response.json()

            dispatch(getLaunchesSuccess(data))
        } catch (error) {
            dispatch(getLaunchesFailure())
        }
    }
}

export default launchesSlice.reducer

