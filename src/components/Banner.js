import styled from "styled-components";

const StyledBanner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 100%;
    max-height: 450px;
    object-fit: cover;
  }
`;

export default function Banner(props) {
  return (
    <StyledBanner>
      <img src={props.cover} alt="Banner" />
    </StyledBanner>
  );
}
