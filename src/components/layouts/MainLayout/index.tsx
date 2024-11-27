import { FC, ReactNode } from "react";

import { Header } from "./Header";
import { Footer } from "./Footer";

type Props = {
  title: ReactNode;
  children: ReactNode
};

export const MainLayout: FC<Props> = ({ title, children }) => (
  <div
    className="flex flex-col justify-between items-center h-screen gap-8 px-0 md:px-8"
  >
    <Header>{title}</Header>

    {children}

    <Footer>
      {new Date().getFullYear()} &copy; All rights reserved
    </Footer>
  </div>
);
