import { Input } from "../../atoms/input"
import { Button } from "../../atoms/button"
import Icon from "../../atoms/icons/icon"
import classNames from "classnames";

export interface SearchBoxProps {
    outerClass?: string
    searchButtonOnRight?: boolean
    variant: "small" | "medium" | "large";
}

export const SearchBox = ({
    searchButtonOnRight,
    variant = "small",
    ...props
}: SearchBoxProps) => {
      const variantClass = classNames(
        variant === "small" && "top-2.5", 
        variant === "medium" && "top-3.5",
        variant === "large" && "top-1.2",
    )
    return (
       <div className={classNames(
        "search-box flex relative"
        )}>
            <span className={classNames(
                "absolute left-4 text-theme-neutral65 z-10", variantClass
            )}>
                <Icon kind="search" size={14}></Icon>
            </span>
            <Input variant={variant} type={'text'} className="pl-10" placeholder="Search..." />
            <span className="cross-icon absolute top-3.5 right-4 text-theme-neutral65 opacity-0">
                <Icon kind="close" size={14}></Icon>
            </span>
       </div>
    )
}