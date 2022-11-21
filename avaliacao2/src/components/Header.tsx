import styled from "styled-components";

type Props = {};

const Wrapper = styled.header`
  padding-left: 3rem;
  background-color: #16213e;
  height: 100px;
  display: flex;
  align-items: center;
  .logo {
    width: 125px;
    height: 70px;
  }
`;
const Header = (props: Props) => {
  return (
    <Wrapper>
      <a href="https://ultralims.com.br/" target="_blank">
        <img
          src="https://ultralims.com.br/front/images/logo.svg"
          className="logo"
          alt="Ultra logo"
        />
      </a>
    </Wrapper>
  );
};

export default Header;
