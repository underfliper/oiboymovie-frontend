import Cookies from 'js-cookie'
import jwtDecode from 'jwt-decode'

import { ITokens } from '@/shared/types/auth.types'

export interface IDecodedToken {
  id: number
  email: string
  iat: number
  exp: number
}

export const saveTokensToStorage = (data: ITokens) => {
  Cookies.set('accessToken', data.accessToken)
  Cookies.set('refreshToken', data.refreshToken)
}

export const getUserFromToken = (token: string) => {
  const { id, email } = jwtDecode<IDecodedToken>(token)

  return { id, email }
}

export const saveToStorage = (data: ITokens) => {
  const user = getUserFromToken(data.accessToken)

  saveTokensToStorage(data)
  localStorage.setItem('user', JSON.stringify(user))
}

export const removeFromStorage = () => {
  Cookies.remove('accessToken')
  Cookies.remove('refreshToken')
  localStorage.removeItem('user')
}

export const getAccessTokenFromStorage = () => {
  return Cookies.get('accessToken')
}

export const getRefreshTokenFromStorage = () => {
  return Cookies.get('refreshToken')
}
