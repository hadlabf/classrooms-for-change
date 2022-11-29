import styled from "styled-components";
import { Box, Button as ButtonUI } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

type ChildProp = {
  children: JSX.Element;
};

export const Col = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const Row = styled.div<{ gap?: number }>`
  display: flex;
  flex-direction: row;
  gap: ${(props) => (props.gap ? props.theme.spacer * props.gap : 0)}px;
`;

// ******* CARD *******
export const Card = styled.div<{ secondary?: boolean; width?: string }>`
  ${(props) => props.width && "width: " + props.width + ";"}
  padding: ${(props) => props.theme.spacer * 3}px;
  border-radius: ${(props) => props.theme.borderRadius.medium};
  background-color: ${(props) =>
    props.secondary ? props.theme.colors.grey07 : props.theme.colors.white} !important;
  * {
    color: ${(props) => props.theme.colors.black};
  }
  box-shadow: 10px 10px 30px 0px rgba(0, 0, 0, 0.5);
  -webkit-box-shadow: 10px 10px 30px 0px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 10px 10px 30px 0px rgba(0, 0, 0, 0.5);
`;

export const Button = styled(ButtonUI)<{
  secondary?: boolean;
  py?: number;
  px?: number;
  fontSize?: number;
}>`
  border-radius: ${(props) => props.theme.borderRadius.small} !important;
  font-family: ${(props) => props.theme.font.family} !important;
  font-size: ${(props) =>
    props.fontSize ? props.theme.spacer * props.fontSize : props.theme.spacer * 2.25}px !important;
  text-transform: inherit !important;
  padding: ${(props) =>
      props.py !== undefined ? props.py * props.theme.spacer : props.theme.spacer * 1}px
    ${(props) =>
      props.px !== undefined ? props.px * props.theme.spacer : props.theme.spacer * 3}px !important;
  background-color: ${(props) =>
    props.secondary ? props.theme.colors.yellow : props.theme.colors.black} !important;
  color: ${(props) =>
    props.secondary ? props.theme.colors.black : props.theme.colors.white} !important;
`;

export const BuildingRequirements = ({ children }: ChildProp): JSX.Element => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid mb={10} container spacing={{ xs: 2, md: 3 }} columns={{ xs: 12 }}>
        <Grid xs={12} md={5}>
          {children}
        </Grid>
      </Grid>
    </Box>
  );
};
