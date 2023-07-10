export interface IAuthSignIn {
  email: string
  password: string
}

export interface IAuthSignUp extends IAuthSignIn {
  firstName: string
  lastName: string
}

export interface IChangePassword {
  old: string
  new: string
}

export interface ITokens {
  accessToken: string
  refreshToken: string
}
