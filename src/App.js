import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { Button } from "./components/styles/Button.styled";
import { Calculator } from "./components/styles/Calculator.styled";
import { Container } from "./components/styles/Container.styled";
import GlobalStyles from "./components/styles/Global";
import { Input } from "./components/styles/Input.styled";
import { Row } from "./components/styles/Row.styled";
import * as math from "mathjs";
import { Delete } from "./components/styles/Delete.styled";

export const theme = {
  colors: {
    primary: "#6B7AA1",
    secondary: "#C1CFC0",
    light: "#E7E0C9",
  },
};

function App() {
  const [input, setInput] = useState("");

  const addToInput = (val) => {
    setInput(input + val);
  };

  const handleEqual = () => {
    setInput(math.evaluate(input));
  };

  const handleDelete = () => {
    setInput(input.slice(0, -1));
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="app">
        <GlobalStyles />
        <h1>Daily UI :: 004 :: Calculator</h1>
        <Calculator>
          <Container
            height="194px"
            borderRadius="50px 50px 0 0"
            justifyContent="space-between"
          >
            <Delete src=".\images\delete.png" alt="" onClick={handleDelete} />
            <Input>{input}</Input>
          </Container>
          <Container
            height="473px"
            borderRadius="0 0 50px 50px"
            backgroundColor={theme.colors.light}
          >
            <Row>
              <Button onClick={() => setInput("")}>C</Button>
              <Button>+/-</Button>
              <Button onClick={() => addToInput("%")}>%</Button>
              <Button
                backgroundColor={theme.colors.primary}
                color="#ffffff"
                onClick={() => addToInput("/")}
              >
                /
              </Button>
            </Row>
            <Row>
              <Button onClick={() => addToInput("7")}>7</Button>
              <Button onClick={() => addToInput("8")}>8</Button>
              <Button onClick={() => addToInput("9")}>9</Button>
              <Button
                backgroundColor={theme.colors.primary}
                color="#ffffff"
                onClick={() => addToInput("*")}
              >
                *
              </Button>
            </Row>
            <Row>
              <Button onClick={() => addToInput("4")}>4</Button>
              <Button onClick={() => addToInput("5")}>5</Button>
              <Button onClick={() => addToInput("6")}>6</Button>
              <Button
                backgroundColor={theme.colors.primary}
                color="#ffffff"
                onClick={() => addToInput("-")}
              >
                -
              </Button>
            </Row>
            <Row>
              <Button onClick={() => addToInput("1")}>1</Button>
              <Button onClick={() => addToInput("2")}>2</Button>
              <Button onClick={() => addToInput("3")}>3</Button>
              <Button
                backgroundColor={theme.colors.primary}
                color="#ffffff"
                onClick={() => addToInput("+")}
              >
                +
              </Button>
            </Row>
            <Row>
              <Button onClick={() => addToInput("0")}>0</Button>
              <Button onClick={() => addToInput(".")}>.</Button>
              <Button
                width="163px"
                borderRadius="50px"
                backgroundColor={theme.colors.primary}
                color="#ffffff"
                onClick={handleEqual}
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
