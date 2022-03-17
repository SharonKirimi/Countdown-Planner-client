/* eslint-disable no-tabs */
import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { v4 as uuid } from 'uuid'

import AutoDismissAlert from './components/AutoDismissAlert/AutoDismissAlert'
import Header from './components/Header/Header'
import SignUp from './components/auth/SignUp'
import SignIn from './components/auth/SignIn'
import SignOut from './components/auth/SignOut'
import ChangePassword from './components/auth/ChangePassword'

import Home from './components/Plans/Home'
import Plan from './components/Plans/Plan'
import PlanCreate from './components/Plans/PlanCreate'
import PlanEdit from './components/Plans/PlanEdit'
import Plans from './components/Plans/Plans'

const App = () => {
  const [user, setUser] = useState(null)
  const [msgAlerts, setMsgAlerts] = useState([])

  const clearUser = () => setUser(null)

  const msgAlert = ({ heading, message, variant }) => {
    const id = uuid()
    setMsgAlerts(msgAlerts => ([...msgAlerts, { heading, message, variant, id }]))
  }

  const deleteAlert = id => {
    setMsgAlerts(msgAlerts => msgAlerts.filter(msg => msg.id !== id))
  }

  return (
    <>
      <Header user={user} />
      {msgAlerts.map(msgAlert => (
        <AutoDismissAlert
          key={msgAlert.id}
          heading={msgAlert.heading}
          variant={msgAlert.variant}
          message={msgAlert.message}
          id={msgAlert.id}
          deleteAlert={deleteAlert}
        />
      ))}
      <main className='container'>
        <Routes>
          <Route
            path='/sign-up'
            element={<SignUp msgAlert={msgAlert} setUser={setUser} /> }
          />
          <Route
            path='/sign-in'
            element={<SignIn msgAlert={msgAlert} setUser={setUser} /> }
          />
          <Route
            path='/sign-out'
            element={<SignOut msgAlert={msgAlert} clearUser={clearUser} user={user} /> }
          />
          <Route
            path='/change-password'
            element={<ChangePassword msgAlert={msgAlert} user={user} /> }
          />

          <Route path='/'
            element={<Home />} />
          <Route path='/plans' element={<Plans msgAlert={msgAlert} user={user} />} />
          <Route path='/plans/:id' element={<Plan msgAlert={msgAlert} user={user} />} />
          <Route path='/plans/create' element={<PlanCreate msgAlert={msgAlert} user={user} />} />
          <Route path='/plans/:id/edit' element={<PlanEdit msgAlert={msgAlert} user={user} />} />
        </Routes>
      </main>
    </>
  )
}

export default App
