import { render } from '@testing-library/react'
import Home from '../page8'


it('should render correctly', async () => {
    const { container } = render(<Home />) // ARRANGE
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