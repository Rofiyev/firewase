import { FC, ReactNode } from "react";
import { Navbar } from "../components";

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
