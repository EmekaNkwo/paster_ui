import { createSlice } from '@reduxjs/toolkit';
import _ from 'lodash';
import { RootState } from '../store';


export type authState = {
    user: Record<string, any>;
    token: string;
    loading: boolean;

};

export const initialState = {
    authStates: {
        user: {},
        token: '',
        loading: false,
    },
} as {
    authStates: authState;
};

const authItems = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuthState: (state, action) => {
            state.authStates = _.mergeWith(
                state.authStates,
                action.payload,
                // eslint-disable-next-line consistent-return
                (objValue, srcValue) => {
                    if (_.isArray(objValue)) {
                        return srcValue;
                    }
                }
            );
        },
    },
});

export const { setAuthState } = authItems.actions;

export const selectAuthState = (
    state: RootState
): authState => {
    return state.authData.authStates;
};

export default authItems.reducer;