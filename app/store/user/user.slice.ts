import { createSlice } from '@reduxjs/toolkit'
import { getStoreLocal } from '@/utils/local-storage/localStorage'

import { logout, signin, signup } from './user.actions'

import { IUserInitialState } from '@/shared/types/user.types'

const initialState: IUserInitialState = {
  user: getStoreLocal('user'),
  isLoading: false,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signup.pending, (state) => {
        state.isLoading = true
      })
      .addCase(signup.fulfilled, (state, { payload }) => {
        state.isLoading = false
        state.user = payload.user
      })
      .addCase(signup.rejected, (state) => {
        state.isLoading = false
        state.user = null
      })
      .addCase(signin.pending, (state) => {
        state.isLoading = true
      })
      .addCase(signin.fulfilled, (state, { payload }) => {
        state.isLoading = false
        state.user = payload.user
      })
      .addCase(signin.rejected, (state) => {
        state.isLoading = false
        state.user = null
      })
      .addCase(logout.fulfilled, (state) => {
        state.isLoading = false
        state.user = null
      })
  },
})

export const { reducer } = userSlice
