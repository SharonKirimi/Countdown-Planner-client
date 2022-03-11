/* eslint-disable react/display-name */
import React from 'react'
import {
  faHome,
  faCalendarAlt,
  faClock
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'

const MENU_ITEMS = [
  {
    name: 'Home',
    icon: faHome
  },
  {
    name: 'Calendar',
    icon: faCalendarAlt
  },
  {
    name: 'Timer',
    icon: faClock
  }
]

const Sidebar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  max-width: 260px;
  height: 100%;
  background-color: #94B49F;
`

const SidebarHeader = styled.div`
  padding: 26px 7.692% 25px;
  background-color: #789395;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.04);
`

const SidebarTitle = styled.h2`
  font-size: 15px;
  line-height: 21px;
  color: #fff;
  letter-spacing: 3px;
  text-transform: uppercase;
`

const SidebarLink = styled.a`
  display: flex;
  align-items: center;
  padding: 17px 3.846% 17px 9.615%;
  color: #B4CFB0;
`

const LinkName = styled.span`
  margin-left: 15px;
  font-size: 15px;
  line-height: 19px;
  color: #fff;
  transition: 0.2s;
`

const SidebarItem = styled.li`
  &:hover {
    background-color: #94B49F;
    ${LinkName},
    .svg-inline--fa {
      opacity: 0.6;
    }
  }
`

export default () => (
  <Sidebar>
    <SidebarHeader>
      <SidebarTitle>Countdown-Planner</SidebarTitle>
    </SidebarHeader>

    <ul>
      {MENU_ITEMS.map((item, index) => {
        return (
          <SidebarItem key={index}>
            <SidebarLink href="#">
              <FontAwesomeIcon icon={item.icon} />
              <LinkName>{item.name}</LinkName>
            </SidebarLink>
          </SidebarItem>
        )
      })}
    </ul>
  </Sidebar>
)
