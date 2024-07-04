import Button from "./Button/Button"
export default function TabsSection({active, onChange}){
    return(
        <section style={{margin:'2rem 0', justifyContent:'center', display:'flex'}}>
            <Button isActive={active === 'main'} onClick={()=> onChange('main')} >Главная</Button>
            <Button isActive={active === 'feedback'} onClick={()=> onChange('feedback')}>Обратная связь</Button>
        </section>
    )
}

