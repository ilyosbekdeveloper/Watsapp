import React, { useContext } from 'react'
import './Chatlist.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckDouble, faCheck } from '@fortawesome/free-solid-svg-icons'

//imgs 
import Context from '../../context/watsap'
import Ellipse1 from '../Navbar/imgs/Group 14 (1).png'
import Ellipse2 from '../Navbar/imgs/Ellipse 7.png'
import Ellipse3 from '../Navbar/imgs/Ellipse 8.png'
import Ellipse4 from '../Navbar/imgs/Ellipse 9.png'
import Ellipse5 from '../Navbar/imgs/Ellipse 10.png'
import Ellipse6 from '../Navbar/imgs/Ellipse 11.png'
import Ellipse7 from '../Navbar/imgs/Ellipse 12.png'
import Ellipse8 from '../Navbar/imgs/Ellipse 13.png'
import Ellipse9 from '../Navbar/imgs/Ellipse 14.png'
import Ellipse10 from '../Navbar/imgs/Vector (3).svg'

export default function Chatlist() {

    const Theme = useContext(Context);

    const chats = [
        {
            chatImg: Ellipse4,
            chatTitle: 'Abishek broooo',
            visabledStatus: faCheckDouble,
            time: '3:20 pm',
            chatPar: 'Ma dami 👌caption ma post garchu vai...',
            isVisabled: true,
            id: 1,
        },
        {
            chatImg: Ellipse5,
            chatTitle: 'Sugar broooo',
            visabledStatus: faCheck,
            time: '10:03 pm',
            chatPar: 'euta ticket ma 18 flim tyo pani barsae vari v...',
            isVisabled: false,
            id: 2,
        },
        {
            chatImg: Ellipse6,
            chatTitle: 'Niranjan vai UX Designer',
            visabledStatus: faCheckDouble,
            time: 'Yesterday',
            chatPar: 'Like colombia, ko fox movies haru metro g...',
            isVisabled: true,
            id: 3,
        },
        {
            chatImg: Ellipse7,
            chatTitle: 'Balram vai',
            visabledStatus: faCheckDouble,
            time: '29/04/2022',
            chatPar: 'Yeso freelancing haniyo bhane sajilo hunch...',
            isVisabled: true,
            id: 4,
        },
        {
            chatImg: Ellipse8,
            chatTitle: 'clickEAT Project',
            visabledStatus: faCheckDouble,
            time: '28/04/2021',
            chatPar: 'Order now lai download now rakhdaa k hol...',
            isVisabled: false,
            id: 5,
        },
        {
            chatImg: Ellipse9,
            chatTitle: 'Jeeven vai',
            visabledStatus: faCheckDouble,
            time: '28/04/2021',
            chatPar: 'Design by maa tpai lai tag garxu 😂 ni ki ka...',
            isVisabled: true,
            id: 6,
        },
        {
            chatImg: Ellipse3,
            chatTitle: 'Cinemaghar App Project',
            visabledStatus: faCheckDouble,
            time: '27/04/2021',
            photo: Ellipse10,
            chatPar: 'Photo',
            isVisabled: true,
            id: 7,
        },
        {
            chatImg: Ellipse2,
            chatTitle: 'Digital Ghumti Team vai',
            visabledStatus: faCheckDouble,
            time: '28/04/2021',
            chatPar: 'https://drive.google.com/file/d/1z5w01j15...',
            isVisabled: true,
            id: 8,
        },
        
    ]

    return (
        <div className={`main ${Theme}`}>
            <div className="chats ">
                <div className="container">

                    {
                        chats.map((v)=>{
                            return(
                                <div className="chat" key={v.id}>
                                    <div className="chatImg">
                                        <img src={v.chatImg} className='bordered' alt="" />
                                    </div>
                                    <div className="chatDatas">
                                        <div className="chatTitle">
                                            <h4>{v.chatTitle}</h4>
                                            <p>{v.time}</p>
                                        </div>
                                        <div className="chatDescription">
                                            <div className={v.isVisabled && 'icon' || 'notVisabled'}>
                                                <span><FontAwesomeIcon icon={v.visabledStatus} /></span>
                                            </div>
                                            <p> <img src={v.photo} alt="" />{v.chatPar}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                    
                </div>
            </div>
        </div>
    )
}
