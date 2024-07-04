import React, {useState} from "react";

import Header from "./components/Header";
import './App.css'
import { ways, diffrences} from "./data.js";
import WayToTeach from './components/WayToTeach'
import Button from "./components/Button/Button.jsx";
export default function App(){
    
    const [contentType,setContentType] = useState(null);

    function handleClick(params) {
        setContentType(params)
    }
    const arr = [
        {
            title:'sdsifja idsjf ijadsi fiadsji ijads jiajsi djijdsa',
            description:'1342523 324 5324'
        },
        {
            title:'dsf idsjf ijadsi fiadsji ijads jiajsi djijdsa',
            descr:'dvs asj oidjoaj doiajsio nsaoin as'
        },
    
    ]
    return(
        <div>
            <Header/>
            <main>
                <section>
                    <h3>React принимает props в виде объектов</h3>
                    <ul>
                        {/* <WayToTeach title={ways[0].title} description={ways[0].description}/>
                        <WayToTeach {...ways[1]}/>
                        <WayToTeach {...ways[2]}/>   */}
                        {ways.map((way /*текущий элемент массива*/ )=>{
                            return <WayToTeach {...way} />
                        })}
                        <WayToTeach {...arr[0] }/>
                    </ul>
                </section>
                <section className="diffrences-between">
                    <h3>Чем мы отличаемся от других</h3>
                    <div className="button-wrapper">
                        <Button isActive={contentType === 'way'} parametrOnClick={()=>handleClick('way')}>Подход</Button>
                        <Button isActive={contentType === 'easy'} parametrOnClick={()=>handleClick('easy')}>Доступность</Button>
                        <Button isActive={contentType === 'program'} parametrOnClick={()=>handleClick('program')}>Концентрация</Button>
                    </div>
                    {contentType ? <p className="diffrences-text">{diffrences[contentType]}</p> : <p className="diffrences-text">Нажми на кнопку</p>}
                </section>
            </main>
        </div>
    )
}