interface CardHeaderProps {
    className?: string
    title: any
    subTitle: string
}

export const CardHeader = ({
    className="",
    title,
    subTitle,
}: CardHeaderProps) => {
    return (
        <div className={`card-header px-4 pb-4 ${className}`}>
            <span className="text-base font-semibold block">{title}</span>
            <span className="text-xs py-1 block">{ subTitle }</span>
        </div>
    )
}