import axios from 'axios'

import { getContentType } from './api.helper'
import {
  getAccessTokenFromStorage,
  removeTokensFromStorage,
} from '@/services/auth/auth.helper'

import { API_URL } from '@/configs/api.config'
import { AuthService } from '@/services/auth/auth.service'

const instance = axios.create({
  baseURL: API_URL,
  headers: getContentType(),
})

instance.interceptors.request.use((config) => {
  const accessToken = getAccessTokenFromStorage()
  if (config.headers && accessToken)
    config.headers.Authorization = `Bearer ${accessToken}`

  return config
})

instance.interceptors.response.use(
  (config) => config,
  async (error) => {
    const originalRequest = error.config

    if (
      error.response.status === 401 &&
      error.config &&
      !error.config._isRetry
    ) {
      originalRequest._isRetry = true

      try {
        await AuthService.refreshTokens()

        return instance.request(originalRequest)
      } catch (e) {
        removeTokensFromStorage()
      }
    }

    throw error
  },
)

export default instance
