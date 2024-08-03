import { ReactElement } from "react";
import { CartProvider } from "./cart-provider.context";

const ContextWrapper = ({ children }: { children: ReactElement }) => {
  return <CartProvider>{children}</CartProvider>;
};

export default ContextWrapper;
