import About from "@/pages/about";
import { render } from "@testing-library/react";

describe("about page", () => {
    it("should render correctly", () => {
        expect(render(<About/>)).toMatchSnapshot();
    })
})