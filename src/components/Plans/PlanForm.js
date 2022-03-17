import React from 'react'
import { Form, Button } from 'react-bootstrap'

const PlanForm = ({ handleSubmit, title, description, date, setTitle, setDescription, setDate }) => (
  <Form onSubmit={handleSubmit}>
    <Form.Group controlId='title'>
      <Form.Label>Title</Form.Label>
      <Form.Control
        placeholder='Plan an event'
        name='title'
        value={title}
        onChange={event => setTitle(event.target.value)}
      />
    </Form.Group>

    <Form.Group controlId='description'>
      <Form.Label>Description</Form.Label>
      <Form.Control
        placeholder='What exactly do you want to plan?'
        name='description'
        value={description}
        onChange={event => setDescription(event.target.value)}
      />
      <Form.Group controlId='date'>
        <Form.Label>Date</Form.Label>
        <Form.Control
          placeholder='Pick a Date'
          type='date'
          name='date'
          value={date}
          onChange={event => setDate(event.target.value)}
        />
      </Form.Group>
    </Form.Group>
    <Button className='mt-2' variant='primary' type='submit'>Submit</Button>
  </Form>
)

export default PlanForm
