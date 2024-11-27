import { FC, ReactNode } from "react";

type Props = {
  children?: ReactNode;
}

export const Footer: FC<Props> = ({ children }) => (
  <footer className="py-2 w-full text-center text-xs">
    {children}
  </footer>
);
