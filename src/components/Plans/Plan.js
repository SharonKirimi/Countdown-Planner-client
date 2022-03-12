import React, { useState, useEffect } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { Spinner, Button } from 'react-bootstrap'

import { deletePlan, showPlan } from '../../api/plans'

const Plan = ({ user, msgAlert }) => {
  const [plan, setPlan] = useState(null)
  const [deleted, setDeleted] = useState(false)
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
        setPlan(res.data.plan)
      } catch (error) {
        msgAlert({
          heading: 'Plan failed to load',
          message: error.message,
          variant: 'danger'
        })
      }
    }
    fetchData()
  }, [])

  const handleDeleteClick = async () => {
    try {
      await deletePlan(id, user)
      setDeleted(true)
    } catch (error) {
      msgAlert({
        heading: 'Failed to delete plan',
        message: error.message,
        variant: 'danger'
      })
    }
  }

  // 3 states:
  // If plan is `null`, we are loading
  if (!plan) {
    return (
      <Spinner animation='border' role='status'>
        <span className='visually-hidden'>Loading...</span>
      </Spinner>
    )
  } else if (deleted) {
    return <Navigate to='/plans' />
  } else {
    // We have a plan, display it!
    return (
      <div className='row'>
        <div className='col-sm-10 col-md-8 mx-auto mt-5'>
          <h3>{plan.title}</h3>
          <p>Director: {plan.director}</p>
          <Button variant='danger' onClick={handleDeleteClick}>Delete Plan</Button>
          <Link to={`/plans/${id}/edit`}>
            <Button variant='primary' type='submit'>Update Plan</Button>
          </Link>
        </div>
      </div>
    )
  }
}

export default Plan
