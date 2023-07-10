import axios from 'axios'

import { getContentType } from './api.helper'
import { API_URL } from '@/configs/api.config'

const instance = axios.create({
  baseURL: API_URL,
  headers: getContentType(),
})

export default instance
