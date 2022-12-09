import { Typography as TypographyMUI } from "@mui/material";
import styled from "styled-components";
import { Size } from "../../config/theme.config";

export const Typography = styled(TypographyMUI)<{ weight?: "bold" | "boldSlim"; mb?: number }>`
  // font-family: ${(props) => props.theme.font.family};
  font-weight: ${(props) =>
    props.weight === "bold"
      ? props.theme.font.weight.bold
      : props.weight === "boldSlim"
      ? props.theme.font.weight.boldSlim
      : props.theme.font.weight.normal} !important;
  margin: 0;
  margin-bottom: ${(props) =>
    props.mb !== undefined ? props.theme.spacer * props.mb : props.theme.spacer * 3}px !important;
`;

// 60px
export const Title1 = styled(Typography)`
  font-size: ${(props) => props.theme.spacer * 7.5}px !important;
  line-height: 1.15 !important;
  @media only screen and (max-width: ${Size.md}px) {
    line-height: 1 !important;
    font-size: ${(props) => props.theme.spacer * 5.5}px !important;
  }
  @media only screen and (max-width: ${Size.sm}px) {
    font-size: ${(props) => props.theme.spacer * 4}px !important;
  }
`;

// 48px
export const Title2 = styled(Typography)`
  font-size: ${(props) => props.theme.spacer * 6}px !important;
  @media only screen and (max-width: ${Size.md}px) {
    font-size: ${(props) => props.theme.spacer * 4}px !important;
  }
  @media only screen and (max-width: ${Size.sm}px) {
    font-size: ${(props) => props.theme.spacer * 3}px !important;
  }
`;

// 32px
export const Title3 = styled(Typography)`
  font-size: ${(props) => props.theme.spacer * 4}px !important;
  @media only screen and (max-width: ${Size.md}px) {
    font-size: ${(props) => props.theme.spacer * 2.75}px !important;
    line-height: 1.2 !important;
  }
  @media only screen and (max-width: ${Size.sm}px) {
    font-size: ${(props) => props.theme.spacer * 2.25}px !important;
  }
`;

// 24px
export const Title4 = styled(Typography)`
  font-size: ${(props) => props.theme.spacer * 3}px !important;
  @media only screen and (max-width: ${Size.md}px) {
    font-size: ${(props) => props.theme.spacer * 2.75}px !important;
    line-height: 1.2 !important;
  }
  @media only screen and (max-width: ${Size.sm}px) {
    font-size: ${(props) => props.theme.spacer * 2.25}px !important;
  }
`;

// ******* TEXT *******
// 18px
export const Text1 = styled(Typography)`
  font-size: ${(props) => props.theme.spacer * 2.25}px !important;
  @media only screen and (max-width: ${Size.md}px) {
    font-size: ${(props) => props.theme.spacer * 2.1}px !important;
  }
  @media only screen and (max-width: ${Size.sm}px) {
    font-size: ${(props) => props.theme.spacer * 2}px !important;
  }
`;

// 16px
export const Text2 = styled(Typography)`
  font-size: ${(props) => props.theme.spacer * 2}px !important;
  @media only screen and (max-width: ${Size.md}px) {
    font-size: ${(props) => props.theme.spacer * 1.875}px !important;
  }
  @media only screen and (max-width: ${Size.sm}px) {
    font-size: ${(props) => props.theme.spacer * 1.75}px !important;
  }
`;

// 14px
export const Text3 = styled(Typography)`
  font-size: ${(props) => props.theme.spacer * 1.75}px;
`;

// 12px
export const Text4 = styled(Typography)`
  font-size: ${(props) => props.theme.spacer * 1.5}px !important;
`;

export const Bold = styled.span`
  font-weight: ${(props) => props.theme.font.weight.bold} !important;
`;
