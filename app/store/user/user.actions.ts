import { createAsyncThunk } from '@reduxjs/toolkit'
import { AuthService } from '@/services/auth/auth.service'
import { getUserFromToken } from '@/services/auth/auth.helper'

import { IAuthSignIn, IAuthSignUp } from '@/shared/types/auth.types'
import { IUserState } from '@/shared/types/user.types'

export const signup = createAsyncThunk<{ user: IUserState }, IAuthSignUp>(
  'auth/signup',
  async (data, thunkAPI) => {
    try {
      const response = await AuthService.signup(data)
      return { user: getUserFromToken(response.accessToken) }
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  },
)

export const signin = createAsyncThunk<{ user: IUserState }, IAuthSignIn>(
  'auth/signin',
  async ({ email, password }, thunkAPI) => {
    try {
      const response = await AuthService.signin({ email, password })
      return { user: getUserFromToken(response.accessToken) }
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  },
)

export const logout = createAsyncThunk('auth/logout', async () => {
  AuthService.logout()
})
