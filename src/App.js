/* eslint-disable no-tabs */
import React, { useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import { v4 as uuid } from 'uuid'

import AutoDismissAlert from './components/AutoDismissAlert/AutoDismissAlert'
import Header from './components/Header/Header'
import SignUp from './components/auth/SignUp'
import SignIn from './components/auth/SignIn'
import SignOut from './components/auth/SignOut'
import ChangePassword from './components/auth/ChangePassword'

import { connect } from 'react-redux'
import Modal from 'react-modal'
import styled from 'styled-components'
import Sidebar from './components/Sidebar/Sidebar'
import Calendar from './components/Calendar/calendar'
import Countdown from './components/Countdown/Countdown'
import EventPopup from './components/Calendar/EventPopup/EventPopup'

Modal.setAppElement('#root')

const Wrapper = styled.div`
    height: 100%;
`

const MainWrapper = styled.main`
    min-height: 100%;
    margin-left: 260px;
`

const App = () => {
  const [user, setUser] = useState(null)
  const [msgAlerts, setMsgAlerts] = useState([])

  const clearUser = () => setUser(null)

  const msgAlert = ({ heading, message, variant }) => {
    const id = uuid()
    setMsgAlerts(msgAlerts => ([...msgAlerts, { heading, message, variant, id }]))
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
        />
      ))}
      <main className='container'>
        <Switch>
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
        </Switch>
        <Wrapper>
          <Sidebar />
          <MainWrapper>
            <Header />
            <Calendar />
            <Countdown />
          </MainWrapper>
          <Modal isOpen={popup.status}>
            <EventPopup />
          </Modal>
        </Wrapper>
      </main>
    </>
  )
}

const mapStateToProps = state => ({
  events: state.events,
  popup: state.popup
})

export default connect(mapStateToProps)(App)
