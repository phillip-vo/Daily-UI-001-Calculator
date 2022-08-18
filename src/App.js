import { ThemeProvider } from "styled-components";
import { Button } from "./components/styles/Button.styled";
import { Calculator } from "./components/styles/Calculator.styled";
import { Container } from "./components/styles/Container.styled";
import GlobalStyles from "./components/styles/Global";
import { Row } from "./components/styles/Row.styled";

export const theme = {
  colors: {
    primary: "#6B7AA1",
    secondary: "#C1CFC0",
    light: "#E7E0C9",
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="app">
        <GlobalStyles />
        <Calculator>
          <Container height="194px" borderRadius="50px 50px 0 0"></Container>
          <Container
            height="473px"
            borderRadius="0 0 50px 50px"
            backgroundColor={theme.colors.light}
          >
            <Row>
              <Button>C</Button>
              <Button>+/-</Button>
              <Button>%</Button>
              <Button backgroundColor={theme.colors.primary} color="#ffffff">
                /
              </Button>
            </Row>
            <Row>
              <Button>7</Button>
              <Button>8</Button>
              <Button>9</Button>
              <Button backgroundColor={theme.colors.primary} color="#ffffff">
                *
              </Button>
            </Row>
            <Row>
              <Button>4</Button>
              <Button>5</Button>
              <Button>6</Button>
              <Button backgroundColor={theme.colors.primary} color="#ffffff">
                -
              </Button>
            </Row>
            <Row>
              <Button>1</Button>
              <Button>2</Button>
              <Button>3</Button>
              <Button backgroundColor={theme.colors.primary} color="#ffffff">
                +
              </Button>
            </Row>
            <Row>
              <Button>0</Button>
              <Button>.</Button>
              <Button
                width="163px"
                borderRadius="50px"
                backgroundColor={theme.colors.primary}
                color="#ffffff"
              >
                =
              </Button>
            </Row>
          </Container>
        </Calculator>
      </div>
    </ThemeProvider>
  );
}

export default App;
