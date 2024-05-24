import './MyInputComponent.css';

export default function MyInputComponent({type, name, isHeadingTxt, isDateHolder, ...props}){
    let inputCSS;
    if (isHeadingTxt) {
        inputCSS = "heading-txt"
    }
    if (isDateHolder) {
        inputCSS = 'date'
    }

    return(
        <div className="my-input-field">
            <input 
                type={type ? type : 'text'}
                name={name ? name : ''}
                className={inputCSS}
                {...props}
            />
        </div>
    )
}