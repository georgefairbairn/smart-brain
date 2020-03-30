import React, { useState } from 'react'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import './ProfileIcon.css'

const ProfileIcon = ({ onRouteChange, toggleModal }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  
  return (
    <div className="pa4 tc">
      <Dropdown
        isOpen={dropdownOpen}
        toggle={() => setDropdownOpen(!dropdownOpen)}
      >
        <DropdownToggle
          tag="span"
          data-toggle="dropdown"
          aria-expanded={dropdownOpen}
        >
          <img src="http://tachyons.io/img/logo.jpg" className="br-100 h3 w3 dib" alt="avatar" />
        </DropdownToggle>
        <DropdownMenu
          right
          className="b--transparent shadow-5 menu"
        >
          <DropdownItem onClick={toggleModal}>View Profile</DropdownItem>
          <DropdownItem onClick={() => onRouteChange('signout')}>Sign Out</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  )
}

export default ProfileIcon
