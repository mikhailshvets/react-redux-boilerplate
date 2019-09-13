export const API_URL = ''

let refreshToken = null
let accessToken = null

const getHeaders = (headers = {}) => {
  const allHeaders = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    token: accessToken,
    ...headers
  }

  if (accessToken) {
    allHeaders.Authorization = accessToken
  }

  return allHeaders
}

const fetchAsync = async (url, { method = 'GET', body, headers }) => {
  // await response of fetch call
  const params = {}

  params.headers = getHeaders(headers)
  params.method = method

  if (body && (method !== 'GET' && method !== 'HEAD')) {
    params.body = JSON.stringify(body)
  }

  let response = await fetch(url, params)

  if (response && response.status === 403) {
    params.headers.token = refreshToken
    response = await fetch(url, params)
  }

  // only proceed once promise is resolved
  const data = await response.json()
  // only proceed once second promise is resolved
  return data
}

export const setAuthToken = token => {
  accessToken = token
}

export const resetAuthToken = () => {
  accessToken = null
}

export const setRefreshToken = token => {
  refreshToken = token
}

export const resetRefreshToken = () => {
  refreshToken = null
}

const parseQuery = query => {
  let queryString = ''

  if (query && typeof query === 'object') {
    const entries = Object.entries(query)

    queryString += entries.reduce((acc, [ key, val ]) => {
      return `${acc}&${encodeURI(key)}=${encodeURI(val)}`
    }, '?')
  }

  return queryString
}

export const get = async (endpoint, query) => {
  let url = `${API_URL}/${endpoint}`

  url += parseQuery(query)

  const data = await fetchAsync(url, { method: 'GET' })

  return data
}

export const post = async (endpoint, data) => {
  const url = `${API_URL}/${endpoint}`
  const res = await fetchAsync(url, { method: 'POST', body: data })

  return res
}

export const put = async (endpoint, data) => {
  const url = `${API_URL}/${endpoint}`
  const res = await fetchAsync(url, { method: 'PUT', body: data })

  return res
}

export const deleteRequest = async (endpoint, query) => {
  let url = `${API_URL}/${endpoint}`

  url += parseQuery(query)

  const res = await fetchAsync(url, { method: 'DELETE' })

  return res
}
