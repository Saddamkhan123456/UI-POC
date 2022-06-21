import classNames from "classnames"

export interface CollapseProps {
    className?: string
    children: any
    shadow?: boolean
    onClick?: any
}

export interface CollapseHeaderProps {
    className?: string
    children: any
    onClick?: any
    id?:any
}

export interface CollapseBodyProps {
    className?: string
    children: any,
    collapsed?:any
}

export const Collapse = ({
    className = '',
    children,
    shadow,
    onClick
}: CollapseProps) => {
    return (
        <div>
            {children}
        </div>
    )
}

export const CollapseHeader=({
    className,
    children,
    onClick,
    id
}:CollapseHeaderProps)=>{
    return (
        <div id={id} onClick={onClick} className={`${className}`}>
            {children}
        </div>
    )
    
}

export const CollapseBody=({
    className,
    children,
    collapsed
}:CollapseBodyProps)=>{
    return (
        <div className={classNames(
            className,
            collapsed ? 'block':'hidden')}>
            {children}
        </div>
    )
}