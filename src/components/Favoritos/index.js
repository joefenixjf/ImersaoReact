import styled from "styled-components";

const StyledFavoritos = styled.div`
  flex: 1;
  width: 100%;
  padding: 16px;
  overflow: hidden;
  h2 {
    font-size: 24px;
    margin-bottom: 16px;
    text-transform: capitalize;
  }
  img {
    border-radius: 100%;
    font-weight: 500;
    object-fit: cover;
    width: 100%;
    max-width: 210px;
    height: auto;
    transform: scale(0.9);
  }
  section {
    width: 100%;
    padding: 0;
    overflow: hidden;
    padding: 16px;
    div {
      width: calc(100vw - 16px * 4);
      display: grid;
      grid-gap: 16px;
      grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
      grid-auto-flow: column;
      grid-auto-columns: minmax(200px, 1fr);
      overflow-x: scroll;
      scroll-snap-type: x mandatory;
      a {
        scroll-snap-align: start;
        span {
          text-align: center;
          font-size: 18px;
          display: block;
          color: ${({ theme }) => theme.textColorBase || "#222222"};
        }
      }
    }
  }
`;

// componente que renderiza o objeto com os canais favoritos
export default function Favoritos(props) {
  const listaCanais = props.canais;

  return (
    <StyledFavoritos>
      <section>
        <h2>Favoritos</h2>
        <div>
          {listaCanais.map((canal) => {
            return (
              <a key={canal.url} href={canal.url}>
                <img src={canal.thumb} />
                <span>{canal.title}</span>
              </a>
            );
          })}
        </div>
      </section>
    </StyledFavoritos>
  );
}
