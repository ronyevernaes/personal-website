import { FC, ReactNode } from "react";

type Props = {
  children?: ReactNode;
}

export const Header: FC<Props> = ({ children }) => (
  <header
    className="flex justify-center md:justify-center py-2 md:py-4 w-full"
  >
    <h1>
      {children}
    </h1>
  </header>
);
