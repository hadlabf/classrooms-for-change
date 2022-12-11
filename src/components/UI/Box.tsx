import styled from "@emotion/styled";
import { ElementType } from "react";

type ContentDistribution =
  | "space-around"
  | "space-between"
  | "space-evenly"
  | "stretch"
  | "center"
  | "end";

type ContentPosition = "center" | "end" | "flex-end" | "flex-start" | "start" | "baseline";

type FlexDirection = "column" | "column-reverse" | "row" | "row-reverse";
type FlexFlow = "nowrap" | "wrap" | "wrap-reverse";

interface BoxProps {
  flexDirection?: FlexDirection;
  flexGrow?: string;
  justify?: ContentDistribution;
  align?: ContentPosition;
  wrap?: FlexFlow;
  height?: string;
  gap?: string;
  mr?: string;
  ml?: string;
  mb?: string;
  mt?: string;
  width?: string;
  as?: ElementType;
}

export const Box = styled.div(
  ({
    flexDirection,
    flexGrow,
    justify,
    align,
    wrap,
    height,
    gap,
    mr,
    ml,
    mb,
    mt,
    width,
  }: BoxProps) => ({
    // Flex & alignment
    display: "flex",
    flexDirection: flexDirection && flexDirection,
    flexGrow: flexGrow && flexGrow,
    justifyContent: justify && justify,
    alignItems: align && align,
    flexWrap: wrap && wrap,

    // Proportions
    height: height && height,

    // Gaps & Margins
    gap: gap && `${gap}px`, // @TODO This should use spacer from theme
    marginRight: mr && mr,
    marginLeft: ml && ml,
    marginBottom: mb && mb, // TODO: Should use theme measurements like tailwind
    marginTop: mt && mt,
    width: width && width,
  })
);

export const SpaceBetweenColumns = styled(Box)`
  justify-content: space-between;
  flex-direction: row;
`;
