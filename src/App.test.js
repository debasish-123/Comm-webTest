import { render, screen } from '@testing-library/react';
import App from './App';
import Header from './Components/Header';


test("Categories",()=>{
  const {getByText}=render (<App/>);
  const categoriesValue=getByText('Categories - Search')
  expect(categoriesValue).toBeTruthy();

})


// test("Submit",()=>{
//   render(<App />)

// const buttonElem =screen.getBy("button",{name :'Food',exact:false})
// expect(buttonElem).toBeInTheDocument()
 
// })

test("Search Bar",()=>{
  const components=render (<App/>);
 const searchBar=components.getByPlaceholderText("Enter Food Name...")
  expect(searchBar).toBeInTheDocument();
 

})
test("Button Test",()=>{
  render(<Header/>)
  expect (screen.getByTestId('buttonTest')).toBeInTheDocument();
  
})
describe("Test the header component", () => {
  test("render the comm web with 4 button", async () => {
    render(<Header/>);
    const buttonList = await screen.findAllByRole("button");
    expect(buttonList).toHaveLength(4);
  });
  })
