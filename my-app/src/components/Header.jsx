
import { useState,useEffect } from 'react';
import logo from '../mercedes.jpg'
export default function Header() {
    const [now,setNow] = useState(new Date());
    useEffect(()=>{
        const interval = setInterval(()=>{
            setNow(new Date());
        },1000)
        return()=> clearInterval(interval);
    }, []);
    return(
        <header>
            <img src={logo} style={{ height: '55px' }} alt="" />
            {/* <span>Тут будет время: {now.getHours() +":"+ now.getMinutes()}</span> */}
            {/* объект приводим к строке */}
            <span>Тут будет время: {now.toLocaleTimeString()}</span>
        </header>
    )
}