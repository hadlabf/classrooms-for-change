import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button as ButtonUI } from "./Common";

type BlobButtonProps = {
  text: string;
  navigateTo: string;
  fontSize?: number;
  secondary?: boolean;
  py?: number;
  px?: number;
};
export const BlobButton = ({
  text,
  navigateTo,
  fontSize,
  py,
  px,
  secondary,
}: BlobButtonProps): JSX.Element => {
  return (
    <Link to={navigateTo}>
      <ButtonWrapper>
        <Button
          fontSize={fontSize ? fontSize : 2}
          py={py ? py : 1}
          px={px ? px : 3}
          secondary={secondary ? true : false}
          className="blob-btn"
        >
          {text}
          <span className="blob-btn__inner">
            <span className="blob-btn__blobs">
              <span className="blob-btn__blob"></span>
              <span className="blob-btn__blob"></span>
              <span className="blob-btn__blob"></span>
              <span className="blob-btn__blob"></span>
            </span>
          </span>
        </Button>
        <br />

        <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
          <defs>
            <filter id="goo">
              <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10"></feGaussianBlur>
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 21 -7"
                result="goo"
              ></feColorMatrix>
              <feBlend in2="goo" in="SourceGraphic" result="mix"></feBlend>
            </filter>
          </defs>
        </svg>
      </ButtonWrapper>
    </Link>
  );
};
const Button = styled(ButtonUI)<{
  secondary?: boolean;
}>`
  & .blob-btn__blob {
    background-color: ${(props) =>
      props.secondary ? props.theme.colors.yellowHover : props.theme.colors.yellow} !important;
  }
  & .blob-btn__inner {
    background: ${(props) =>
      props.secondary ? props.theme.colors.yellow : props.theme.colors.black} !important;
    border-radius: ${(props) => props.theme.borderRadius.small};
  }
  &:hover {
    color: ${(props) => props.theme.colors.black} !important;
    &:before {
      border: 2px solid ${(props) => props.theme.colors.black};
    }
  }
  &:before {
    border-radius: ${(props) => props.theme.borderRadius.small} !important;
    border: 2px solid
      ${(props) => (props.secondary ? props.theme.colors.yellow : props.theme.colors.black)};
  }
`;

const ButtonWrapper = styled.div`
  max-height: 50px;
  & svg {
    max-width: 20px;
  }
`;
