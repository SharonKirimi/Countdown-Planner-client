import apiUrl from '../apiConfig'
import axios from 'axios'

export const indexPlans = (user) => {
  return axios.get(apiUrl + '/plans', {
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}

export const showPlan = (id, user) => {
  return axios.get(`${apiUrl}/plans/${id}`, {
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}

export const deletePlan = (id, user) => {
  return axios.delete(`${apiUrl}/Plans/${id}`, {
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}

export const updatePlan = (id, title, description, date, completed, user) => {
  return axios.patch(
    `${apiUrl}/plans/${id}`,
    { plan: { title, description, date, completed } },
    {
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    }
  )
}

export const createPlan = (title, description, date, user) => {
  return axios.post(
    `${apiUrl}/plans`,
    { plan: { title, description, date } },
    {
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    }
  )
}
