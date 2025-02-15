import { useOptimistic, useState } from "react";
import { Container, Form, Button, ListGroup } from "react-bootstrap";

export default function UseOptimisticExample() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Build something cool", completed: false },
  ]);

  const [optimisticTodos, addOptimisticTodo] = useOptimistic(
    todos,
    (state, newTodo) => [...state, newTodo]
  );
  async function addTodo(formData) {
    const text = formData.get("todo");
    if (!text) return;

    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
    };

    // Optimistically add the todo
    addOptimisticTodo({ ...newTodo, sending: true });

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Actually update the state
    setTodos((prev) => [...prev, newTodo]);
  }

  return (
    <Container className="py-4">
      <h2>useOptimistic Example</h2>

      <Form action={addTodo} className="mb-4">
        <Form.Group className="mb-3">
          <Form.Control type="text" name="todo" placeholder="Add new todo" />
        </Form.Group>
        <Button type="submit">Add Todo</Button>
      </Form>

      <ListGroup>
        {optimisticTodos.map((todo) => (
          <ListGroup.Item
            key={todo.id}
            className="d-flex justify-content-between align-items-center"
          >
            {todo.text}
            <span className="text-muted">
              {todo.sending ? "(Adding...)" : ""}
            </span>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
}
