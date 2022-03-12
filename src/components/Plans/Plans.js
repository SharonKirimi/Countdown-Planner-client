import React, { useEffect, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'

import { Spinner } from 'react-bootstrap'
import { indexPlans } from '../../api/plans'

const Plans = ({ user, msgAlert }) => {
  const [plans, setPlans] = useState(null)

  // if user is null, redirect to home page
  // Note: Must check before useEffect, since it needs user
  if (!user) {
    return <Navigate to='/' />
  }

  // Run once, when the component mounts
  useEffect(() => {
    // When using async & await in a `useEffect` function
    // We have to wrap our `async` code in a function:
    // https://stackoverflow.com/a/53572588
    const fetchData = async () => {
      try {
        const res = await indexPlans(user)
        setPlans(res.data.plans)
      } catch (error) {
        msgAlert({
          heading: 'Plans List failed to load',
          message: error.message,
          variant: 'danger'
        })
      }
    }
    fetchData()
  }, [])

  // 3 states:
  if (!plans) {
    // If plan is `null`, we are loading
    return (
      <Spinner animation='border' role='status'>
        <span className='visually-hidden'>Loading...</span>
      </Spinner>
    )
  } else if (plans.length === 0) {
    // If the array of plans is empty, we have no plans to show
    return <h1>No plans yet, go make some!</h1>
  } else {
    // Otherwise, display the plans
    const plansList = plans.map(plan => (
      <li key={plan._id}>
        <Link to={`/plans/${plan._id}`}>{plan.title}</Link>
      </li>
    ))

    return (
      <div className='row'>
        <div className='col-sm-10 col-md-8 mx-auto mt-5'>
          <h3>Plans</h3>
          <ul>{plansList}</ul>
        </div>
      </div>
    )
  }
}

export default Plans
