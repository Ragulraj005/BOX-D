import React from 'react'

const SocialListItem = ({social}) => {
  return (
    <div>
      <li>
        <a href="#">
          <i className={`bi ${social.icon}`}></i>
          <span className="socialName">{social.name}</span>

        </a>
      </li>
      
    </div>
  )
}

export default SocialListItem
