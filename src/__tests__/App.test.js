import {render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import App from "../App";
// Your tests here
test("displays a top-level heading with the text `Hi, I'm _______`", () => {
    // Arrange
    render(<App/>);
    // Act
    const topLevelHeading = screen.getByRole("heading", {
      name: /hi, i'm/i,
      exact: false,
      level: 1,
    });
  
    // Assert
    expect(topLevelHeading).toBeInTheDocument();
  });
  
//Testing for an img
test("displays an image of myself with an alt text identiying the content of the image",()=>{
//Arrange
    render(<App/>)
    //Act
    const imageElement=screen.getByAltText(/this is an image/i)
    //Assert
    expect(imageElement).toBeInTheDocument()
})
//Testing for a h2 element
test("displays a second-level heading with the text About Me",()=>{
    //Arrange
    render(<App/>)
//Act
const secondLevelHeading=  screen.getByRole("heading", {
    name: /About Me/i,
    exact: false,
    level: 2,
  });
  
 //Assert
 expect(secondLevelHeading).toBeInTheDocument() 
})
//Testing a <p> with a biography
test("displays a paragraph with my biography",()=>{
    //Arrange
    render(<App/>)
   //Act
   const paragraph=screen.getByText("KLKLKLKLk")
   
 //Assert
 expect(paragraph).toBeInTheDocument()  
})
//Testing a GitHub link
test("displays a GitHub link",()=>{
//Arrange
render(<App/>)
//Act
const github=screen.getByText("GitHub")
//Assert
expect(github).toHaveAttribute("href")
}) 
//Testing a LinkedIn link
test("displays a LinkedIn link",()=>{
    //Arrange
    render(<App/>)
    //Act
    const github=screen.getByText("LinkedIn")
    //Assert
    expect(github).toHaveAttribute("href")
    }) 
