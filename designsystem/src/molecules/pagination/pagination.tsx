/* This example requires Tailwind CSS v2.0+ */
import { HTMLAttributes, useState } from "react";
import { ChevronDoubleLeftIcon, ChevronDoubleRightIcon } from "@heroicons/react/solid";
import { Button } from "../../atoms/button/index";
import { ButtonGroup } from "../buttonGroups";
import classNames from "classnames";

export interface PaginationProps extends HTMLAttributes<HTMLElement> {
  size?: string;
  variant?: string;
  records: number;
  recordsPerPage: number;
  className?: string;
}

export const Pagination = ({
  size = "medium",
  variant = "secondary",
  records,
  recordsPerPage,
  className,
  ...props
}: PaginationProps) => {
  const [active, setActive] = useState(1);
  const [offset] = useState(1);
  let pageCount = records / recordsPerPage;
  const next = () => {
    active < pageCount && setActive(active + 1);
  };
  const previous = () => {
    active > 1 && setActive(active - 1);
  };
  const selectPage = (e: number) => {
    setActive(e);
  };

  const getPages = () => {
    let pages = [];
    for (let i = offset; i <= pageCount; i++) {
      pages.push(
        <Button
          variant={variant}
          size={size}
          isActive={i === active && true}
          onClick={() => selectPage(i)}
          isRounded={false}
        >
          <div>{i}</div>
        </Button>,
      );
    }
    return pages;
  };

  return (
    <div className="bg-white flex items-center justify-between">
      <div className=" flex-1 flex items-center justify-between">
        <div>
          <ButtonGroup>
            {pageCount >= 3 && (
              <Button
                variant={variant}
                size={size}
                onClick={previous}
                isRounded={false}
              >
                <span className="sr-only">onPrevious</span>
                <ChevronDoubleLeftIcon 
                  className={classNames(
                    size ==="small" && "h-4",
                    size ==="medium" && "h-3.5",
                    size ==="large" && "h-3.5"
                    )} 
                  aria-hidden="true"
                />
              </Button>
            )}

            {getPages().map((d) => {
              return d;
            })}

            {pageCount >= 3 && (
              <Button
                variant={variant}
                size={size}
                onClick={next}
                isRounded={false}
              >
                <span className="sr-only">onNext</span>
                <ChevronDoubleRightIcon 
                  className={classNames(
                    size ==="small" && "h-4",
                    size ==="medium" && "h-3.5",
                    size ==="large" && "h-3.5"
                    )} 
                  aria-hidden="true"
                />
              </Button>
            )}
          </ButtonGroup>
        </div>
      </div>
    </div>
  );
};
