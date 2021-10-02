import { render, screen } from "../../../test/test-utils";
import Home from "./Home";

describe("Home", () => {
  it("should render without crashing", () => {
    render(<Home />);
    screen.debug();
  });
  it("should a Title", () => {
    render(<Home />);
    const title = screen.getByTestId("home-title");
    expect(title.textContent).toBe("Ready to play?");
  });
  it("should a Description", () => {
    render(<Home />);
    const description = screen.getByTestId("home-desc");
    expect(description.textContent).toBe(
      "Be the best in finding the perfect pairing between actors and movies. Press play and let’s have some fun!"
    );
  });
  it("should a Link", () => {
    render(<Home />);
    const link = screen.getByRole("link");
    expect(link.textContent).toBe("Press play and let’s go");
  });
});
