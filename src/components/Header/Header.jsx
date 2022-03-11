import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Header = () => {
  const authenticatedOptions = (
    <>
      <Link to='/change-password' className='nav-link'>Change Password</Link>
      <Link to='/sign-out' className='nav-link'>Sign Out</Link>
    </>
  )

  const unauthenticatedOptions = (
    <>
      <Link to='/sign-up' className='nav-link'>Sign Up</Link>
      <Link to='/sign-in' className='nav-link'>Sign In</Link>
    </>
  )

  const alwaysOptions = (
    <>
      <Link to='/' className='nav-link'>Home</Link>
    </>
  )

  const styledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 17px 1.492%;
  margin-bottom: 32px;
  background-color: #fff;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.04);
  height: 70px;
`

  const HeaderSearchLabel = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 17px 1.492%;
  background-color: #fff;
`

  const SearchImgWrapper = styled.div`
  width: 16px;
  margin-right: 10px;
  cursor: pointer;
`

  const HeaderInput = styled.input`
  width: 210px;
  padding: 5px;
  border: none;
  outline: none;
  &::-webkit-input-placeholder {
    font-size: 12px;
    line-height: 20px;
    font-style: normal;
    color: #B4CFB0;
  }
  &::-moz-placeholder {
    font-size: 12px;
    line-height: 20px;
    font-style: normal;
    color: #B4CFB0;
  }
  &:-ms-input-placeholder {
    font-size: 12px;
    line-height: 20px;
    font-style: normal;
    color: #B4CFB0;
  }
  &:-moz-placeholder {
    font-size: 12px;
    line-height: 20px;
    font-style: normal;
    color: #B4CFB0;
  }
`

  const HeaderRightWrapper = styled.div`
  display: flex;
  align-items: center;
`

  const HeaderRightDivider = styled.div`
  width: 1px;
  height: 28px;
  margin: 0 17px;
  background-color: #ebebf2;
`
  const UserWrapper = styled.div`
  display: flex;
  align-items: center;
`

  const UserName = styled.span`
  margin-right: 15px;
  font-size: 13px;
  line-height: 20px;
  color: #B4CFB0;
`
  return (
    <styledHeader>
      <HeaderSearchLabel>
        <SearchImgWrapper>
          <img src="images/icon_search.svg" className="header__search-img" alt="search-icon" />
        </SearchImgWrapper>
        <HeaderInput
          type="text"
          className="header__input"
          placeholder="Search plans"
        />
      </HeaderSearchLabel>

      <HeaderRightWrapper>


        <HeaderRightDivider />

        <UserWrapper>
          <UserName>Sharon</UserName>
        </UserWrapper>
      </HeaderRightWrapper>
    </styledHeader>
  )
}

export default Header
