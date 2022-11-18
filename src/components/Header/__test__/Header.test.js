import { render, screen } from '@testing-library/react';
import Header from '../Header';

describe("Header", () => {
    /* Encontrar elemento por texto */
    it("Should render text pass by title prop", () => {
        render(<Header title="Lorem" />);
        const titleElement = screen.getByText(/Lorem/i);
        expect(titleElement).toBeInTheDocument()
    })

    // /* Encontrar elemento con rol de heading */
    // it("Should have 2 heading role", () => {
    //     render(<Header title="Lorem" />);
    //     const titleElement = screen.getAllByRole("heading");
    //     expect(titleElement.length).toBe(2)
    // })

    // /* Encontrar elemento de rol heading con texto especifico */
    // it("Should have a heading role and text Lorem", () => {
    //     render(<Header title="Lorem" />);
    //     const titleElement = screen.getByRole("heading", { name: "Lorem"});
    //     expect(titleElement).toBeInTheDocument()
    // })

    // /* Encontrar un texto de manera asincrona */
    // it("Should render text pass by title prop async", async () => {
    //     render(<Header title="Lorem" />);
    //     const titleElement = await screen.findByText(/Lorem/i);
    //     expect(titleElement).toBeInTheDocument()
    // })

    // /* Agregams el .not para asertar que NO se cumpla la condicion y utilizamos queryBy que devuelve null si no encuentra   */
    // it("Should not render title with text", async () => {
    //     render(<Header title="Lorenzo" />);
    //     const titleElement = screen.queryByText(/dogs/i);
    //     expect(titleElement).not.toBeInTheDocument()
    // })
})
