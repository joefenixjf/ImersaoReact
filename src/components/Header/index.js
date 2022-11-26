import styled from "styled-components";
import StyledBanner from "./Banner";
import config from "../../../config.json";

// Componente com os estilos do Header
const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.backgroundLevel1};
  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
  .user-info {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    padding: 16px 32px;
    gap: 16px;
  }
`;

// Componente Header onde engloba o Banner e tem as info do usuario
function Header() {
  return (
    <StyledHeader>
      <StyledBanner bg={config.banner} />
      <section className="user-info">
        <img src={`http://github.com/${config.github}.png`} />
        <div>
          <h2>{config.name}</h2>
          <p>{config.job}</p>
        </div>
      </section>
    </StyledHeader>
  );
}

export default Header;
