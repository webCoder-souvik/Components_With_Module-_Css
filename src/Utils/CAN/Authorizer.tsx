import { ReactNode } from "react";
import { abilityFinder, Can } from "./can";

const Authorizer = ({ children, resource, not }: AuthorizerProps) => {
  return (
    <Can I={abilityFinder(resource)} a={`${resource}`} not={not}>
      {children}
    </Can>
  );
};

export default Authorizer;

interface AuthorizerProps {
  children: ReactNode;
  resource: string; // Assuming resource is a string
  not?: boolean;
}
