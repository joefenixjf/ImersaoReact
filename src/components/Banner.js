import styled from "styled-components";

export const StyledBanner = styled.div`
  background-color: blue;
  background-image: url(${({ bg }) => bg});
  background-size: cover;
  background-position: center;
  object-fit: cover;
  height: 230px;
`;
