import { FC, ReactNode } from "react";

type Props = {
  children?: ReactNode;
}

export const Header: FC<Props> = ({ children }) => (
  <header
    className="flex justify-center md:justify-center py-4 md:py-8 w-full"
  >
    <h1>
      {children}
    </h1>
  </header>
);
