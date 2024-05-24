export default function Icon({src, alt, ...props}){
    return(
        <img 
            src={src} 
            alt={alt} 
            width={20}
            height={20}
            {...props}
        />
    )
}