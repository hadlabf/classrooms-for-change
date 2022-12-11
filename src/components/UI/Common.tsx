import styled from "styled-components";
import { Box, Button as ButtonUI, Container } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { ReactNode } from "react";
import { Size } from "../../config/theme.config";

type ChildProp = {
  children: JSX.Element | ReactNode;
};

export const Col = styled.div<{
  py?: number;
  px?: number;
}>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: ${(props) =>
      props.py !== undefined ? props.py * props.theme.spacer : props.theme.spacer * 0}px
    ${(props) =>
      props.px !== undefined ? props.px * props.theme.spacer : props.theme.spacer * 0}px !important;
  @media only screen and (max-width: ${Size.md}px) {
    padding: ${(props) =>
        props.py !== undefined ? (props.py / 2) * props.theme.spacer : props.theme.spacer * 0}px
      ${(props) =>
        props.px !== undefined
          ? (props.px / 2) * props.theme.spacer
          : props.theme.spacer * 0}px !important;
  }
  @media only screen and (max-width: ${Size.sm}px) {
    padding: ${(props) =>
        props.py !== undefined ? (props.py / 4) * props.theme.spacer : props.theme.spacer * 0}px
      ${(props) =>
        props.px !== undefined
          ? (props.px / 4) * props.theme.spacer
          : props.theme.spacer * 0}px !important;
  }
`;
export const Row = styled.div<{ gap?: number }>`
  display: flex;
  flex-direction: row;
  gap: ${(props) => (props.gap ? props.theme.spacer * props.gap : 0)}px;
`;

// ******* CARD *******
export const Card = styled.div<{
  reverse?: boolean;
  secondary?: boolean;
  width?: string;
  padding?: number;
}>`
  ${(props) => props.width && "width: " + props.width + ";"}
  padding: ${(props) =>
    props.padding !== undefined ? props.theme.spacer * props.padding : props.theme.spacer * 3}px;
  border-radius: ${(props) => props.theme.borderRadius.medium};
  background-color: ${(props) =>
    props.secondary
      ? props.theme.colors.grey07
      : props.reverse
      ? props.theme.colors.black
      : props.theme.colors.white} !important;
  * {
    color: ${(props) => (props.reverse ? props.theme.colors.white : props.theme.colors.black)};
  }
  box-shadow: 10px 10px 30px 0px rgba(0, 0, 0, 0.5);
  -webkit-box-shadow: 10px 10px 30px 0px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 10px 10px 30px 0px rgba(0, 0, 0, 0.5);
`;
export const LinkButton = styled.button`
  cursor: pointer;
  border: none;
  background-color: transparent;
  outline: none;
  text-decoration: none;
  transition: all 0.3s ease-in-out;
  padding-inline: 2px;
  opacity: 1;
  font-weight: 700;
  &:hover {
    opacity: 0.7;
  }
  &:disabled {
    opacity: 0.6;
  }
`;

export const Button = styled(ButtonUI)<{
  secondary?: boolean;
  reverse?: boolean;
  py?: number;
  px?: number;
  fontSize?: number;
}>`
  font-weight: ${(props) => props.theme.font.weight.bold} !important;
  border-radius: ${(props) => props.theme.borderRadius.small} !important;
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
    props.secondary || props.reverse
      ? props.theme.colors.black
      : props.theme.colors.white} !important;
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
type LayoutProp = {
  children: JSX.Element | ReactNode;
  direction?: "row" | "column";
  background?: string;
};
export const Layout = ({ children, direction, background }: LayoutProp): JSX.Element => {
  return (
    <Background>
      <YellowBottom />
      <Grey />
      <GreyBottom />
      <Black />
      <BlackBottom />
      <Container
        maxWidth="xl"
        sx={{ minHeight: "100vh", position: "relative", zIndex: 10, paddingTop: 8 }}
      >
        <Box
          display="flex"
          flexDirection={direction ? direction : "row"}
          justifyContent="flex-start"
          alignItems="flex-start"
        >
          {children}
        </Box>
      </Container>
    </Background>
  );
};

const Background = styled.div`
  position: relative;
  overflow-y: clip;
`;
export const BottomTriangle = styled.div`
  z-index: 5;
  position: absolute;
  width: 0;
  height: 0;
  border-left: 50vw solid transparent;
  border-right: 50vw solid transparent;
`;
export const YellowBottom = styled(BottomTriangle)`
  top: 100px;
  border-top: 20vw solid ${(props) => props.theme.colors.yellow};
  border-left: none;
  border-right: 100vw solid transparent;
`;

export const Grey = styled.div`
  z-index: 2;
  position: absolute;
  width: 100vw;
  background: ${(props) => props.theme.colors.grey};
  height: 100vh;
  top: 100px;
`;
export const GreyBottom = styled(BottomTriangle)`
  top: 900px;
  left: -55vw;
  border-top: 300px solid ${(props) => props.theme.colors.grey};
  border-right: 90vw solid transparent;
  border-left: 90vw solid transparent;
`;

export const Black = styled.div`
  z-index: 3;
  position: absolute;
  width: 100vw;
  background: ${(props) => props.theme.colors.black};
  height: 600px;
  top: 900px;
`;
export const BlackBottom = styled(BottomTriangle)`
  top: 1500px;
  left: -55vw;
  border-top: 300px solid ${(props) => props.theme.colors.black};
  border-right: 90vw solid transparent;
  border-left: 90vw solid transparent;
`;
export const Yellow = styled.div`
  z-index: 3;
  width: 100vw;
  background: ${(props) => props.theme.colors.yellow};
  position: absolute;
  height: 100vh;
  top: 1100px;
`;

export const Fixed = styled.div`
  width: 0;
  height: 0;
  position: absolute;
  top: 100px;
  left: 0;
  z-index: 3;
  border-right: 200px solid transparent;
  border-top: 500px solid red;
`;
