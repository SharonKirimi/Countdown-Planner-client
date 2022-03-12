import React, { useState, useEffect } from 'react'
import { Navigate, useParams } from 'react-router-dom'

import PlanForm from './PlanForm'
import { showPlan, updatePlan } from '../../api/plans'

const PlanEdit = ({ user, msgAlert }) => {
  const [title, setTitle] = useState('')
  const [director, setDirector] = useState('')
  const [updated, setUpdated] = useState(false)
  const { id } = useParams()

  // if user is null, redirect to home page
  // Note: Must check before useEffect, since it needs user
  if (!user) {
    return <Navigate to='/' />
  }

  useEffect(() => {
    // When using async & await in a `useEffect` function
    // We have to wrap our `async` code in a function:
    // https://stackoverflow.com/a/53572588
    const fetchData = async () => {
      try {
        const res = await showPlan(id, user)
        setTitle(res.data.plan.title)
        setDirector(res.data.plan.director)
      } catch (error) {
        msgAlert({
          heading: 'Failed to load plan',
          message: error.message,
          variant: 'danger'
        })
      }
    }
    fetchData()
  }, [])

  const handleSubmit = async event => {
    event.preventDefault()

    try {
      await updatePlan(id, title, director, user)
      setUpdated(true)
    } catch (error) {
      msgAlert({
        heading: 'Failed to update plan',
        message: error.message,
        variant: 'danger'
      })
    }
  }

  if (updated) {
    // Navigate to the 'show' page
    return <Navigate to={`/plans/${id}`} />
  }

  return (
    <div className='row'>
      <div className='col-sm-10 col-md-8 mx-auto mt-5'>
        <h3>Edit Plan</h3>
        <PlanForm
          handleSubmit={handleSubmit}
          title={title}
          director={director}
          setTitle={setTitle}
          setDirector={setDirector}
        />
      </div>
    </div>
  )
}

export default PlanEdit
