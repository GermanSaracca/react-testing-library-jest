import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import TodoFooter from "../TodoFooter"

// Envolvemos el footer en un BrowserRouter para que no falle por el link que utiliza el mismo.

const MockTodoFooter = ({numberOfIncompleteTasks}) => {
    return (
        <BrowserRouter >
            <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks}/>
        </BrowserRouter>
    )
}

describe("TodoFooter", () => {
    it("Should render the correct amount of incomplete tasks", async () => {
        render(<MockTodoFooter numberOfIncompleteTasks={5}/>);
        const pElement = screen.getByText(/5 tasks left/i)
    
        expect(pElement).toBeInTheDocument();
    })
    
    it("Should render 'task' when the number of incomplete tasks is one", async () => {
        render(<MockTodoFooter numberOfIncompleteTasks={1}/>);
        const pElement = screen.getByText(/task/i)
    
        expect(pElement).toBeInTheDocument();
    })
    
    it("Should render 'tasks' when the number of incomplete tasks is more than one", async () => {
        render(<MockTodoFooter numberOfIncompleteTasks={2}/>);
        const pElement = screen.getByText(/tasks/i)
    
        expect(pElement).toBeInTheDocument();
    })
})
