import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Players from "./components/Players"
import { render, getByTestId } from "@testing-library/react";

test("Does react testing library work?", () => {
  expect(true).toBeTruthy();
  //expect(falue).toBeTruthy();
})

test("Does it render App?", () => {
  render(<App />)
});

test("Is the title rendering?", () => {
  const {getByText} = render(<App />);
  getByText(/women's world cup players google search rankings/i);
});

test("Is the toggle dark mode option and text render?", () => {
  const {getByText, queryByTestId} = render(<App />);
  getByText(/toggle dark mode/i);
  queryByTestId("isRendered");
})

test("Is Daniëlle van de Donk's card rendering?", () => {
  const {queryByText} = render(<App />)
  queryByText(/danielle van de donk/i)
});

test("Are the player cards rendering?", () => {
  const {queryAllByTestId} = render(<App />);
  queryAllByTestId("isRendering")
});