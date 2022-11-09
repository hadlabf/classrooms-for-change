import { Box } from "./Box";
import styled from "@emotion/styled";

export const NavItem = styled.div`
  padding-inline: 1rem;
`;
export const Header = (): JSX.Element => {
  return (
    <Box flexDirection="row" justify="space-between" width="100%">
      <NavItem>Home</NavItem>
      <NavItem>About us</NavItem>
      <NavItem>Contact us</NavItem>
      <NavItem>Donate</NavItem>
    </Box>
  );
};
