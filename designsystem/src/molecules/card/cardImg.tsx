interface CardImageProps {
    className?: string
    imgSrc: any
}

export const CardImage = ({
    className = "",
    imgSrc,
}: CardImageProps) => {
    return (
        <div className={`card-image ${className}`}>
            <img src={imgSrc} alt="placeholder" className="max-w-full h-44 w-full" />
        </div>
    )
}