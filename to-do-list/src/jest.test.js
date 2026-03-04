import { todoReducer, initialState } from "./reducer/toDoReducer";

describe("todoReducer", () => {

  test("should return initial state by default", () => {
    const state = todoReducer(undefined, { type: "UNKNOWN" });
    expect(state).toEqual(initialState);
  });

  test("should add a task", () => {
    const action = { type: "ADD_TASK", payload: "Gym" };

    const newState = todoReducer(initialState, action);

    expect(newState.length).toBe(1);
    expect(newState[0].text).toBe("Gym");
    expect(newState[0].completed).toBe(false);
  });

  test("should toggle a task", () => {
    const state = [{ id: 1, text: "Gym", completed: false }];
    const action = { type: "TOGGLE_TASK", payload: 1 };

    const newState = todoReducer(state, action);

    expect(newState[0].completed).toBe(true);
  });

  test("should delete a task", () => {
    const state = [{ id: 1, text: "Gym", completed: false }];
    const action = { type: "DELETE_TASK", payload: 1 };

    const newState = todoReducer(state, action);

    expect(newState).toHaveLength(0);
  });

  test("should edit a task", () => {
    const state = [{ id: 1, text: "Gym", completed: false }];
    const action = {
      type: "EDIT_TASK",
      payload: { id: 1, text: "Workout" }
    };

    const newState = todoReducer(state, action);

    expect(newState[0].text).toBe("Workout");
  });

});