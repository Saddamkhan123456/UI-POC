

export interface TabPaneProps {
  children?: any;
  className?: any;
  active?: boolean;
  onClick?: any;
  tabIndex?: number;
}

const TabPane = ({ children, active, className }: TabPaneProps) => {
  return (
    <div className={`${className} ${active ? "block" : "hidden"}`}>
      {children}
    </div>
  );
};

export default TabPane;