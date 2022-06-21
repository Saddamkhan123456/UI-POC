import { HTMLAttributes } from "react";
import React from "react";
import { ListItem } from "../listGroup/listItem";

export interface BreadcrumbProps extends HTMLAttributes<HTMLElement> {
  disabled?: boolean;
  separator?: string;
  data?: any;
  filterData?: Array<Object>;
}
export const Breadcrumb = ({
  disabled,
  className,
  separator,
  data,
  filterData,
  ...props
}: BreadcrumbProps) => {
  const length = data.length;
  const [dropdownState, setDropdownState] = React.useState(false);
  const handleDropdownState = () => {
    setDropdownState(!dropdownState);
  };
  return (
    <>
      <nav className="relative w-full navbar navbar-expand-lg navbar-light">
        <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
          <nav className="bg-grey-light rounded w-full" aria-label="breadcrumb">
            <ol className="list-reset flex relative">
              {length > 3 ? (
                <>
                  <li className="text-theme-primary hover:text-theme-primary active:text-theme-secondary text-capitalize">
                    <a href={data[0].url}>{data[0].item}</a>
                  </li>
                  <li className="text-gray-500 mx-2 ">{separator}</li>
                  <li className="text-theme-primary hover:text-theme-primary active:text-theme-secondary text-capitalize">
                    <a href="#" onClick={handleDropdownState}>
                      {"..."}
                    </a>
                  </li>
                  <li className="text-gray-500 mx-2 ">{separator}</li>
                  <li className="text-theme-primary hover:text-theme-primary active:text-theme-secondary text-capitalize">
                    <a href={data[length - 1].url}>{data[length - 1].item}</a>
                  </li>
                  {dropdownState && (
                    <>
                      <div className="absolute dropdown-list border">
                        <ol className="list-reset overflow-auto">
                          <ListItem>List item one</ListItem>
                          <ListItem>List item one</ListItem>
                          <ListItem>List item one</ListItem>
                          <ListItem>List item one</ListItem>
                        </ol>
                      </div>
                    </>
                  )}
                </>
              ) : (
                <>
                  {data.map((items: any, i: number) => {
                    return (
                      <>
                        <li
                          key={i}
                          className="text-theme-primary hover:text-theme-primary active:text-theme-secondary text-capitalize"
                        >
                          <a href={items.url}>{items.item}</a>
                        </li>
                        <li className="text-gray-500 mx-2 ">{separator}</li>
                      </>
                    );
                  })}
                </>
              )}
            </ol>
          </nav>
        </div>
      </nav>
    </>
  );
};
