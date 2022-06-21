export interface CardProps {
    className?: string
    children: any
    shadow?: boolean
}

export const Card = ({
    className = '',
    children,
    shadow
}: CardProps) => {
    return (
        <div className={`card ${className}`}>
            {children}
        </div>
    )
}