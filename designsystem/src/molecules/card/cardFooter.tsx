interface CardFooterProps {
    className?: string
    children: any
}

export const CardFooter = ({
    className="",
    children
}: CardFooterProps) => {
    return (
        <div className={`card-footer px-4 pb-3 ${className}`}>
            {children}
        </div>
    )
}
