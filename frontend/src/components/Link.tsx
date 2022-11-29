import styled from "@emotion/styled";
import { ReactNode } from "react";
import { Link as RouterLink } from "react-router-dom";

type LinkProps = {
  to: string;
  children: ReactNode;
};
const StyledLink = styled(RouterLink)`
  text-decoration: none;
`;

export const PrimaryLink = ({ to, children, ...props }: LinkProps): JSX.Element => {
  return (
    <StyledLink {...props} to={to}>
      {children}
    </StyledLink>
  );
};
