export const API_URL = `${process.env.APP_URL}`

export const getAuthUrl = (string: string) => `/auth${string}`
export const getGenreUrl = (string: string) => `/genres${string}`
export const getMovieUrl = (string: string) => `/movies${string}`
export const getUserUrl = (string: string) => `/user${string}`
