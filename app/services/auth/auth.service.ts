import axios from 'axios'

import {
  IAuthSignIn,
  IAuthSignUp,
  IChangePassword,
  ITokens,
} from '@/shared/types/auth.types'

import {
  getAccessTokenFromStorage,
  getRefreshTokenFromStorage,
  removeTokensFromStorage,
  saveTokensToStorage,
} from './auth.helper'

import { API_URL, getAuthUrl } from '@/configs/api.config'

export const AuthService = {
  async signin(data: IAuthSignIn): Promise<ITokens> {
    const response = await axios.post<ITokens>(
      `${API_URL}${getAuthUrl('/signin')}`,
      data,
    )

    if (response.data.accessToken && response.data.refreshToken) {
      saveTokensToStorage(response.data)
    }

    return response.data
  },

  async signup(data: IAuthSignUp): Promise<ITokens> {
    const response = await axios.post<ITokens>(
      `${API_URL}${getAuthUrl('/signup')}`,
      data,
    )

    if (response.data.accessToken && response.data.refreshToken) {
      saveTokensToStorage(response.data)
    }

    return response.data
  },

  async changePassword(data: IChangePassword) {
    const accessToken = getAccessTokenFromStorage()

    const response = await axios.post(
      `${API_URL}${getAuthUrl('/change-password')}`,
      data,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    )

    return response.data
  },

  logout() {
    removeTokensFromStorage()
  },

  async refreshTokens(): Promise<ITokens> {
    const refreshToken = getRefreshTokenFromStorage()
    const response = await axios.post<ITokens>(
      `${API_URL}${getAuthUrl('/refresh')}`,
      null,
      {
        headers: {
          Authorization: `Bearer ${refreshToken}`,
        },
      },
    )

    if (response.data.accessToken && response.data.refreshToken) {
      saveTokensToStorage(response.data)
    }

    return response.data
  },
}
