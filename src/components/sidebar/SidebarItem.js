import React from 'react'
import ArrowRightIcon from '@material-ui/icons/ArrowRight';


const SidebarItem = ({ arrow, icon, label }) => {
  return (
    <div className="SidebarItem">
      <div className="sidebarItem__arrow">
        {arrow && (<ArrowRightIcon />)}
      </div>

      <div className="sidebarItem__main">
        {icon}
        <p>{label}</p>
      </div>

    </div>
  )
}

export default SidebarItem
