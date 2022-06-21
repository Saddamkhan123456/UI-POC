interface CardBodyProps {
    className?: string
    children: any
}

export const CardBody = ({
    className = "px-4 pb-4",
    children
}: CardBodyProps) => {
    return (
        <div className={`card-body text-xs px-4 pb-4 ${className}`}>
            {children}
        </div>
    )
}