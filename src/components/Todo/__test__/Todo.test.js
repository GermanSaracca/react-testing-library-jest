import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Todo from '../Todo';

const MockedTodo = () => {

    return (
        <BrowserRouter>
            <Todo/>
        </BrowserRouter>
    )
}

const addTodo = (tasks) => {
    const inputElement = screen.getByPlaceholderText("Add a new task here...")
    const buttonElement = screen.getByRole('button',{ name: "Add"})

    tasks.forEach((task) => {
        fireEvent.change(inputElement, {
            target: { value: task}
        })

        fireEvent.click(buttonElement)
    })
}

describe("Todo", () => {

    it("should add todo in todo list", () => {
        render(<MockedTodo/>);
        
        addTodo(["Buy shoes"])

        const todoInTodoList = screen.getByText("Buy shoes")

        expect(todoInTodoList).toBeInTheDocument()
    })

    it("should add three todos in todo list", () => {
        render(<MockedTodo/>);

        addTodo(["Buy shoes", "Buy shoes 2", "Buy shoes 3"])

        const todosInTodoList = screen.getAllByTestId("task-container")

        expect(todosInTodoList.length).toBe(3)
    })

    it("task should not have completed class when initially rendered", () => {
        render(<MockedTodo/>);

        addTodo(["Clean house"])

        const todoAdded = screen.getByText("Clean house")

        expect(todoAdded).not.toHaveClass("todo-item-active")
    })

    it("task should have completed class after clicked", () => {
        render(<MockedTodo/>);

        addTodo(["Clean house"])

        const todoAdded = screen.getByText("Clean house")

        fireEvent.click(todoAdded)

        expect(todoAdded).toHaveClass("todo-item-active")
    })

})
