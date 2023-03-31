import React, { useContext } from 'react'
import './Header.css'
import Context from '../../context/watsap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faEllipsisVertical, faCameraRetro } from '@fortawesome/free-solid-svg-icons';
import Ellipse1 from '../Navbar/imgs/Group 14 (1).png'
import Ellipse2 from '../Navbar/imgs/Ellipse 7.png'
import Ellipse3 from '../Navbar/imgs/Ellipse 8.png'
import Ellipse4 from '../Navbar/imgs/Ellipse 9.png'
import Ellipse5 from '../Navbar/imgs/Ellipse 10.png'

const Header = () => {

  const Theme = useContext(Context)

  const histories = [
    {
      img: Ellipse2,
      title: 'Digital Ghumti',
      id: 1
    },
    {
      img: Ellipse3,
      title: 'Cinemagaha',
      id: 2
    },
    {
      img: Ellipse4,
      title: 'Digital Ghumti',
      id: 3
    },
    {
      img: Ellipse5,
      title: 'Digital Ghumti',
      id: 4
    },
  ]

  return (
    <div className={`main ${Theme}`}>
        <div className="header container">
          <div className="headerTop">
            <div className="headerTitle">
              <h1>WhatsApp</h1>
            </div>
            <div className="headerIcons">
              <span><FontAwesomeIcon icon={faSearch}/></span>
              <span><FontAwesomeIcon icon={faEllipsisVertical}/></span>
            </div>
          </div>
          
          <div className="top">
            <div className="history">
                <img src={Ellipse1} alt="" />
                <div className="imgDiv">
                  <span><FontAwesomeIcon icon={faCameraRetro} /></span>
                </div>
            </div>

            {
              histories.map((v)=>{
                return (
                  <div className="history" key={v.id}>
                    <img src={v.img} alt="" />
                    <p>{v.title}</p>
                  </div>
                )
              })
            }
          </div>
        </div>
    </div>
  )
}
export default Header