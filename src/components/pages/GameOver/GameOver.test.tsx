import { render, screen, fireEvent } from "../../../test/test-utils";
import GameOver from "./GameOver";
import { ScoreContextType, ScoreContext } from "../../../context/scoreContext";

describe("GameOver", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });
  const initValue: ScoreContextType = {
    result: {
      score: 5,
      seconds: 10,
    },
    results: [
      {
        name: "test1",
        score: 4,
        seconds: 8,
      },
      {
        name: "test2",
        score: 3,
        seconds: 6,
      },
    ],
    pushResult: jest.fn(),
    saveResult: jest.fn(),
  };

  it("should render Titles", () => {
    render(
      <ScoreContext.Provider value={initValue}>
        <GameOver />
      </ScoreContext.Provider>
    );
    expect(screen.getByText("Game over")).toBeTruthy();
    expect(screen.getByText("Highscore")).toBeTruthy();
  });

  it("should render time spent and score", () => {
    render(
      <ScoreContext.Provider value={initValue}>
        <GameOver />
      </ScoreContext.Provider>
    );
    expect(screen.getByTestId("over-seconds").textContent).toBe(
      `${initValue.result?.seconds} s`
    );
    expect(screen.getByTestId("over-score").textContent).toBe(
      `${initValue.result?.score} good answer(s)`
    );
  });

  it("should render Try Again button", () => {
    render(
      <ScoreContext.Provider value={initValue}>
        <GameOver />
      </ScoreContext.Provider>
    );
    const button = screen.getByTestId("over-tryagain");
    expect(button.textContent).toBe("Try again");
  });

  it("should render scores", () => {
    render(
      <ScoreContext.Provider value={initValue}>
        <GameOver />
      </ScoreContext.Provider>
    );
    expect(screen.getByText("test1")).toBeTruthy();
    expect(screen.getByText("test2")).toBeTruthy();
    expect(screen.getByText(`${initValue.results[0].seconds} s`)).toBeTruthy();
    expect(screen.getByText(`${initValue.results[1].seconds} s`)).toBeTruthy();
    expect(
      screen.getByText(`${initValue.results[0].score} good answer(s)`)
    ).toBeTruthy();
    expect(
      screen.getByText(`${initValue.results[1].score} good answer(s)`)
    ).toBeTruthy();
  });

  it("should render input", () => {
    render(
      <ScoreContext.Provider value={initValue}>
        <GameOver />
      </ScoreContext.Provider>
    );
    const textbox = screen.getByRole("textbox");
    expect(textbox).toBeTruthy();
  });

  it("should render Add button", () => {
    render(
      <ScoreContext.Provider value={initValue}>
        <GameOver />
      </ScoreContext.Provider>
    );
    const button = screen.getByTestId("over-add");
    expect(button.textContent).toBe("Add");
    const textbox = screen.getByRole("textbox");
    fireEvent.change(textbox, { target: { value: "name" } });
    fireEvent.click(button);
    expect(initValue.saveResult).toHaveBeenCalledWith({
      ...initValue.result,
      name: "name",
    });
  });
});
