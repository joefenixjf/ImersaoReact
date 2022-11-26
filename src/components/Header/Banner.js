import styled from "styled-components";

// Componente com estilos para o banner da header
const StyledBanner = styled.div`
  background-color: blue;
  background-image: url(${({ bg }) => bg});
  background-size: cover;
  background-position: center;
  object-fit: cover;
  height: 230px;
`;
export default StyledBanner;
