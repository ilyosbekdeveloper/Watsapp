import React, { useContext } from 'react'
import Context from '../../context/watsap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignal, faWifi, faBatteryFull } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css'
const Navbar = () => {

  const Theme = useContext(Context)

  return (
    <div className={`main ${Theme}`}>
        <div className="navbar">
          <div className="container navbar">
            <div className="hour">9:41</div>
            <div className="navBarIcons">
              <span><FontAwesomeIcon icon={faSignal} /></span>
              <span><FontAwesomeIcon icon={faWifi}/></span>
              <span><FontAwesomeIcon icon={faBatteryFull} /></span>
            </div>
          </div>
        </div>
    </div>
  )
}
export default Navbar