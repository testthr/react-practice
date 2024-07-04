import './Button.css'
export default function Button  ({children, parametrOnClick, isActive}){
    return(
        <button className={isActive ? 'button active' : 'button'} onClick={parametrOnClick}>{children}</button>
    )
}