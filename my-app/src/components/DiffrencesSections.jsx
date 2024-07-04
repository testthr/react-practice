import { useState } from "react";
import { diffrences } from "../data.js";
import Button from "./Button/Button.jsx"


export default function DiffrencesSections(){
    const [contentType,setContentType] = useState(null);
    function handleClick(params) {
        setContentType(params)
    }
    return(
        <section className="diffrences-between">
            <h3>Чем мы отличаемся от других</h3>
            <div className="button-wrapper">
                <Button isActive={contentType === 'way'} onClick={()=>handleClick('way')}>Подход</Button>
                <Button isActive={contentType === 'easy'} onClick={()=>handleClick('easy')}>Доступность</Button>
                <Button isActive={contentType === 'program'} onClick={()=>handleClick('program')}>Концентрация</Button>
            </div>
            {contentType ? <p className="diffrences-text">{diffrences[contentType]}</p> : <p className="diffrences-text">Нажми на кнопку</p>}
        </section>
    )
}