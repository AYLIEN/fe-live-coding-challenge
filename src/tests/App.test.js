import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { Search } from 'react-feather';

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders search field correctly", () => {
  act(() => {
    render(<Search value="Find Me!" className="main-search" onChange={() => null} />, container);
  });

  const input = container.querySelector('.main-search');

  expect(input.getAttribute('value')).toBe("Find Me!");
})
