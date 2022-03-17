import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'

// Import PlanForm:
import PlanForm from './PlanForm'
import { createPlan } from '../../api/plans'

const PlanCreate = ({ user, msgAlert }) => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [date, setDate] = useState('')
  const [createdId, setCreatedId] = useState(null)

  const handleSubmit = async event => {
    event.preventDefault()

    try {
      const res = await createPlan(title, description, new Date(date), user)
      setCreatedId(res.data.plan._id)

      msgAlert({
        heading: 'Plan Created',
        message: `Created ${title} successfully.`,
        variant: 'success'
      })
    } catch (error) {
      msgAlert({
        heading: 'Failed to create plan',
        message: error.message,
        variant: 'danger'
      })
    }
  }

  // if user is null, redirect to home page
  if (!user) {
    return <Navigate to='/' />
  } else if (createdId) {
    // if plan has been created,Navigate to the 'show' page
    return <Navigate to={`/plans/${createdId}`} />
  }
  return (
    <div className='row'>
      <div className='col-sm-10 col-md-8 mx-auto mt-5'>
        <h3>Create Plan</h3>
        <PlanForm
          handleSubmit={handleSubmit}
          title={title}
          description={description}
          date={date}
          setTitle={setTitle}
          setDescription={setDescription}
          setDate={setDate}
        />
      </div>
    </div>
  )
}

export default PlanCreate
