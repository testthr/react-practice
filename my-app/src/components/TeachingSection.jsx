import WayToTeach from "./WayToTeach.jsx";
import { ways } from "../data.js";
export default function TeachingSection(){
  
    return(
        <section>
            <h3 style={{textAlign:'center'}}>React принимает props в виде объектов</h3>
            <ul>
                {/* <WayToTeach title={ways[0].title} description={ways[0].description}/>
                <WayToTeach {...ways[1]}/>
                <WayToTeach {...ways[2]}/>   */}
                {ways.map((way /*текущий элемент массива*/ )=>{
                    return <WayToTeach key={way.title } {...way} />
                })}
            </ul>
        </section>
    )
}