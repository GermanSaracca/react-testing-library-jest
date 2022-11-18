import { render, screen, fireEvent } from '@testing-library/react';
import AddInput from '../AddInput';

const mockedSetTodos = jest.fn()

describe("AddInput", () => {

    
    it("should render input element", () => {
        render(
            <AddInput 
                todos={[]} 
                setTodos={mockedSetTodos}
            />
        );
        
        const inputElement = screen.getByPlaceholderText("Add a new task here...")
        expect(inputElement).toBeInTheDocument()
    })

    it("should be able to type in input", () => {
        render(
            <AddInput 
                todos={[]} 
                setTodos={mockedSetTodos}
            />
        );

        const inputElement = screen.getByPlaceholderText("Add a new task here...")

        fireEvent.change(inputElement, {
            target: { value: 'Go Grocery shopping'}
        })
        expect(inputElement.value).toBe('Go Grocery shopping')
    })

    it("should reset input when add button is clicked", () => {
        render(
            <AddInput 
                todos={[]} 
                setTodos={mockedSetTodos}
            />
        );

        const inputElement = screen.getByPlaceholderText("Add a new task here...")
        const buttonElement = screen.getByText("Add")
        
        // Efectuamos un evento de change en el input y asignamos lo que sea "tipeo"
        fireEvent.change(inputElement, {
            target: { value: 'Go Grocery shopping'}
        })
        
        // Efectuamos un click en el boton de agregar ToDo
        fireEvent.click(buttonElement);

        // Luego de añadido el ToDo el input se limpia
        expect(inputElement.value).toBe('')
    })
})
