import { FC, ReactNode } from "react";
import { Footer, Navbar } from "../components";

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
