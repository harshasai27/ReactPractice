import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  expect(screen.getByText(/To Do List/i)).toBeInTheDocument();
});

// Adding a new task to the list
test("add a new task to the list", () => {
  render(<App />);
  const input = screen.getByPlaceholderText("Enter a task");
  const addButton = screen.getByText("Add Task");

  fireEvent.change(input, { target: { value: "Create New Test" } });
  fireEvent.click(addButton);
  expect(screen.getByText("Create New Test")).toBeInTheDocument();
});

// Markking a task complete when checkbox is clicked
test("Mark a task as completed when checkbox is checked", () =>{
  render(<App />);
  const input = screen.getByPlaceholderText("Enter a task");
  const addButton = screen.getByText("Add Task");

  fireEvent.change(input, { target: { value: "Submit Myte" } });
  fireEvent.click(addButton);

  const checkbox = screen.getByRole("checkbox");
  fireEvent.click(checkbox);
  expect(checkbox).toBeChecked();

  const taskText = screen.getByText("Submit Myte");
  expect(taskText).toHaveStyle("text-decoration: line-through");

})

//deleting task using delete button
test("Delete a task from the list", () => {
  render(<App />);
  const input = screen.getByPlaceholderText("Enter a task");
  const addButton = screen.getByText("Add Task");
  
  fireEvent.change(input, { target: { value: "React Practice" } });
  fireEvent.click(addButton);

  const deleteButton = screen.getByText("Delete");
  fireEvent.click(deleteButton);

  expect(screen.queryByText("React Practice")).not.toBeInTheDocument();
})


//Editing task using the edit button
test("Edit a task in the list", () => {
  render(<App />);
  const input = screen.getByPlaceholderText("Enter a task");
  const addButton = screen.getByText("Add Task");
  
  fireEvent.change(input, { target: { value: "Learn Testing" } });
  fireEvent.click(addButton);

  const editButton = screen.getByText("Edit");
  fireEvent.click(editButton);

  const editInput = screen.getByDisplayValue("Learn Testing");
  fireEvent.change(editInput, { target: { value: "Learn React Testing" } });
  
  const saveButton = screen.getByText("Save");
  fireEvent.click(saveButton);

  expect(screen.getByText("Learn React Testing")).toBeInTheDocument();
})

test("filters tasks based on search input", () => {
  render(<App />);

  const input = screen.getByPlaceholderText("Enter a task");
  const button = screen.getByText("Add Task");

  fireEvent.change(input, { target: { value: "Gym" } });
  fireEvent.click(button);

  fireEvent.change(input, { target: { value: "Study" } });
  fireEvent.click(button);

  const searchInput = screen.getByPlaceholderText("Search");
  fireEvent.change(searchInput, { target: { value: "Gym" } });

  expect(screen.getByText("Gym")).toBeInTheDocument();
  expect(screen.queryByText("Study")).not.toBeInTheDocument();
});
