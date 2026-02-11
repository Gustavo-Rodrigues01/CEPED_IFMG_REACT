const styled = window.styled;
const { ThemeProvider } = window.styled;
const { useState } = React;

const lightTheme = {
  background: "#ffffff",
  card: "#e0e0e0",
  cardHover: "#d5d5d5",
  text: "#000000",
  boxshadow: "#000000"
};

const darkTheme = {
  background: "#121212",
  card: "#2c2c2c",
  cardHover: "#3a3a3a",
  text: "#ffffff",
  boxshadow:  "#ffffff"
};

const Body = styled.div`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  text-align: center;
  padding-top: 40px;
  transition: 0.3s;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 400px;
  justify-content: center;
  background-color: ${({ theme }) => theme.card};
  border-radius: 10px;
  box-shadow: 5px 5px 10px  ${({ theme }) => theme.boxshadow};
  transition: 0.3s ease-out;
  cursor: pointer;
  margin: 0 auto;

  &:hover {
    background-color: ${({ theme }) => theme.cardHover};
    transform: scale(1.02);
  }
`;

const Imagem = styled.img`
  border-radius: 5px;
  margin: 25px;
`;

const Texto = styled.p`
  color: ${({ theme }) => theme.text};
  text-align: justify;
  margin: 25px;
  font-weight: 300;
  font-size: medium;
`;

const Botao = styled.button`
  margin: 20px auto;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  background: ${({ theme }) => theme.card};
  color: ${({ theme }) => theme.text};
  transition: 0.3s;

  &:hover {
    opacity: 0.8;
  }
`;

function Card({ titulo, imagem, nome, descricao }) {
  return (
    <>
      <h1>{titulo}</h1>
      <Container>
        <Imagem src={imagem} alt={nome} />
        <h2>{nome}</h2>
        <Texto>{descricao}</Texto>
      </Container>
    </>
  );
}

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <Body>
        <Card
          titulo="Card de produto"
          nome="YouTube"
          imagem="youtube.jpg"
          descricao="O YouTube é a maior plataforma de compartilhamento de vídeos do mundo."
        />
        <Botao onClick={toggleTheme}>
          {theme === "light" ? "Dark Mode" : "Light Mode"}
        </Botao>
      </Body>
    </ThemeProvider>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);