import { useState } from 'react'
import Button from './Button/Button.jsx'
export default function FeedbackSection(){
    const [name,setName] = useState('')
    const [hasError,setHasError] = useState(true)
    const [reason,setReason] = useState('help')
    function handleNameChange(event){
        setName(event.target.value)
        setHasError(event.target.value.trim().length === 0 )
    }
    function toggleError(){
        setHasError(!hasError)
    }
    return(
        <section>
            <h3>Обратная связь</h3>

            <Button  onClick={toggleError}>Toggle Erroe</Button>
            <form action="">
                <label htmlFor="name" id="name">Ваше имя</label>
                <input className="control" type="text" value={name} onChange={handleNameChange} style={{border: hasError ? '1px solid red' : null}}/>
                
                <label htmlFor="reason">Причина обращения</label>
                <select  id="reason" className="control" value={reason} onChange={event => setReason(event.target.value)}>
                    <option value="error">Ошибка</option>
                    <option value="help">Нужна помощь</option>
                    <option value="suggest">Предложение</option>
                </select>

                <pre>
                    Name: {name}
                    <br />
                    Reason: {reason}
                </pre>

                <Button isActive={!hasError} disabled={hasError}>Отправить</Button>
            </form>
        </section>
    )
}