import { render, screen } from "../../test/test-utils";
import { Survey } from "./Survey";
import { Survey as SurveyProps } from "../../utils/commonTypes";

describe("Survey", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });
  const props: SurveyProps = {
    loading: false,
    error: undefined,
    data: [
      {
        movie: { title: "No Time to Die", image: "image No Time to Die" },
        actor: { name: "Daniel Craig", image: "image Daniel Craig" },
        answer: "YES",
      },
      {
        movie: { title: "Deadpool", image: "image Deadpool" },
        actor: { name: "Tom Hardy", image: "image Tom Hardy" },
        answer: "NO",
      },
    ],
  };
  it("should render a Title", () => {
    render(<Survey {...props} />);
    expect(screen.getByText("Did this actor play in this movie?")).toBeTruthy();
  });
  it("should render images", () => {
    render(<Survey {...props} />);
    const actorImage = screen.getByTestId("survey-image-actor");
    expect(actorImage.getAttribute("src")).toBe("image Daniel Craig");
    expect(actorImage.getAttribute("alt")).toBe("Daniel Craig");
    const movieImage = screen.getByTestId("survey-image-movie");
    expect(movieImage.getAttribute("src")).toBe("image No Time to Die");
    expect(movieImage.getAttribute("alt")).toBe("No Time to Die");
  });
  it("should render buttons", () => {
    render(<Survey {...props} />);
    const buttons = screen.getAllByRole("button");
    expect(buttons).toHaveLength(2);
    expect(buttons[0].textContent).toBe("No");
    expect(buttons[1].textContent).toBe("Yes");
  });
});
