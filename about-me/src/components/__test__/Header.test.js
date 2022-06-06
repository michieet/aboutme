import { render, screen } from '@testing-library/react';
import Header from '../header';

//Attempting to do tests

//This test is failing but cant' seem to figure out why, seems to be the href element in header.js?
test('should render same text passed into title prop', async () => {
  render(<Header title='header'/>);
//Change getByText to getByRole and test passed. Need to revise more on how each works
  const headingElement = screen.getByRole(/heading/i);
  expect(headingElement).toBeInTheDocument();
});
