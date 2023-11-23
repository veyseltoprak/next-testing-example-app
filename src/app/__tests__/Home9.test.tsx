import { render, waitFor, screen } from '@testing-library/react'
import Home from '../page9'
import * as antd from "antd";

// jest.mock("antd", () => {
//     const originalModule = jest.requireActual("antd");
//     return {
//         ...originalModule,
        
//     };
// });
// jest.mock("antd");
// const mockWarning = antd.message.warning as jest.Mock;

it('should render correctly', async () => {
    const { container } = render(<Home />) // ARRANGE
    // await waitFor(()=>{
    //     expect(mockWarning).toHaveBeenCalled();
    // })
    expect(container).toMatchSnapshot();
})


it('should render correctly2', async () => {
    const { container } = render(<Home />) // ARRANGE
    expect(container).toMatchSnapshot();
})


it('should render correctly3', async () => {
    const { container } = render(<Home />) // ARRANGE
    expect(container).toMatchSnapshot();
})


it('should render correctly4', async () => {
    const { container } = render(<Home />) // ARRANGE
    expect(container).toMatchSnapshot();
})