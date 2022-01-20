import React, { useState } from 'react';

export default function ResService() {

  const [arrow, setArrow] = useState('fas fa-chevron-down')
  const commercialClick = () => {

  }

  return (
      <div className="center">
      <div id="res-service-table">
          <ul className='remove_list_style'>
              <li onClick={()=>commercialClick()}>Commercial Locksmith Services<i className={arrow}></i>
              </li>
              <li>Ressidential Locksmith Services<i className={arrow}></i></li>
              <li>Automotive Locksmith Services<i className={arrow}></i></li>
              <li>Emergency Locksmith Services<i className={arrow}></i></li>
          </ul>
      </div>
      </div>
  )
}
