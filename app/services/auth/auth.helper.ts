import Cookies from 'js-cookie'
import { ITokens } from '@/shared/types/auth.types'

export const saveTokensToStorage = (data: ITokens) => {
  Cookies.set('accessToken', data.accessToken)
  Cookies.set('refreshToken', data.refreshToken)
}

export const removeTokensFromStorage = () => {
  Cookies.remove('accessToken')
  Cookies.remove('refreshToken')
}

export const getAccessTokenFromStorage = () => {
  return Cookies.get('accessToken')
}

export const getRefreshTokenFromStorage = () => {
  return Cookies.get('refreshToken')
}
