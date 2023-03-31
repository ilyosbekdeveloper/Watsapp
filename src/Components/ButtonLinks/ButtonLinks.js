import React, { useContext } from 'react'
import Context from '../../context/watsap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faContactBook, faMessage, faPhone } from '@fortawesome/free-solid-svg-icons'
import './ButtonLinks.css'

export default function ButtonLinks() {

    const Theme = useContext(Context)

    return (
        <div className={`buttonSection main ${Theme} d-flex container`}>
            <div className="btn">
                <FontAwesomeIcon className='message' icon={faMessage} />
                <span>Message</span>
            </div>
            <div className="btn">
                <FontAwesomeIcon className='phone b' icon={faPhone} />
                <span>Message</span>
            </div>
            <div className="btn">
                <FontAwesomeIcon className='contacts b' icon={faContactBook} />
                <span>Message</span>
            </div>
        </div>
    )
}
