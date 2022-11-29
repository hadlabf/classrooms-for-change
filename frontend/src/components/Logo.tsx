import logoBlack from "../assets/logo-black.png";
import logoWhite from "../assets/logo-white.png";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  max-width: 100px;
  img {
    width: 100%;
    height: auto;
  }
`;
type LogoProps = {
  color?: "white" | "black";
};
export const Logo = ({ color }: LogoProps): JSX.Element => {
  return (
    <Wrapper>
      <img src={color === "black" ? logoBlack : logoWhite} alt="logo" />
    </Wrapper>
  );
};
