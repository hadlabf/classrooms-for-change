import styled from "styled-components";
import { Button as ButtonUI } from "./Common";

type BlobButtonProps = {
  text: string;
  fontSize?: number;
  secondary?: boolean | undefined;
  py?: number;
  px?: number;
  disabled?: boolean;
  onClick?: () => void;
};
export const BlobButton = ({
  text,
  fontSize,
  py,
  px,
  secondary,
  disabled,
  onClick,
}: BlobButtonProps): JSX.Element => {
  return (
    <ButtonWrapper>
      {onClick ? (
        <Button
          disabled={disabled}
          onClick={onClick}
          fontSize={fontSize ? fontSize : 2}
          py={py ? py : 1}
          px={px ? px : 3}
          secondary={secondary ? true : false}
          className="blob-btn"
        >
          {text}
          <BlobSpan />
        </Button>
      ) : (
        <Button
          fontSize={fontSize ? fontSize : 2}
          py={py ? py : 1}
          px={px ? px : 3}
          secondary={secondary ? true : false}
          className="blob-btn"
          type="submit"
        >
          {text}
          <BlobSpan />
        </Button>
      )}
      <BlobSvg />
    </ButtonWrapper>
  );
};
const BlobSpan = (): JSX.Element => {
  return (
    <span className="blob-btn__inner">
      <span className="blob-btn__blobs">
        <span className="blob-btn__blob"></span>
        <span className="blob-btn__blob"></span>
        <span className="blob-btn__blob"></span>
        <span className="blob-btn__blob"></span>
      </span>
    </span>
  );
};
const BlobSvg = (): JSX.Element => {
  return (
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
  &:disabled {
    color: ${(props) => props.theme.colors.black} !important;
    .blob-btn__inner {
      background: ${(props) => props.theme.colors.white} !important;
    }
  }
`;

const ButtonWrapper = styled.div`
  max-height: 50px;
  & svg {
    max-width: 1px;
    max-height: 1px;
  }
`;
