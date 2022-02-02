import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  card: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "15px"
  },
  textUncompleted: {
    paddingLeft: "20px"
  },
  textCompleted: {
    textDecoration: "line-through",
    paddingLeft: "20px",
    color: "gray"
  },
  updateField: {
    width: "100%",
    border: "1px solid red"
  }
});

const Todo = () => {

  const classes = useStyles();
  const [todo, setTodo] = useState("");
  const [error, setError] = useState(false);
  const [editTodo, setEditTodo] = useState("");

  const dispatch = useDispatch();
  const allTodos = useSelector(state => state.todos);
  const { todos } = allTodos;

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      id: Math.floor(Math.random() * 1000000),
      description: todo,
      completed: false,
      isEditing: false
    }
    if (todo) {
      dispatch({ type: "ADD_TODO", payload: newTodo })
      setTodo("");
      setError(false);
    } else {
      setError(true);
    }
  }

  const handleDelete = (todo) => {
    dispatch({ type: "DELETE_TODO", payload: todo })
  }

  const handleComplete = (todo) => {
    dispatch({ type: "COMPLETE_TODO", payload: todo })
  }

  const handleEditing = (todo) => {
    dispatch({ type: "EDITING_TODO", payload: todo })
    setEditTodo(todo.description);
  }

  const handleUpdate = (e, todo) => {
    e.preventDefault();
    const updatedTodo = {
      ...todo,
      description: editTodo
    }
    dispatch({ type: "UPDATE_TODO", payload: updatedTodo })
    dispatch({ type: "EDITING_TODO", payload: updatedTodo })
  }

  return (
    <div className='todo'>
      <h2 className='todo_title'>My Todos</h2>
      <form className='form'>
        <Box component="form" noValidate autoComplete="off" style={{ margin: "20px 0px", textAlign: "center" }}>
          <TextField
            style={{ width: "80%", marginRight: "20px" }}
            id="outlined-name"
            label="Todo"
            placeholder='Add your todo...'
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <Button onClick={handleSubmit} variant='contained' color='primary' size="large" type='submit'>Create</Button>
        </Box>
        {error && <div className='error'>Your field is empty!</div>}
      </form>
      <div className='todos_wrapper'>
        {todos.length < 1 ? <div className='empty_todos'>Your todos are empty!</div> : todos.map((todo, index) => (
          <Card key={todo.id} className={classes.card}>
            <CardContent style={{ display: "flex" }}>
              <Typography color="text.secondary">
                #{index + 1}
              </Typography>
              {todo.isEditing ? (
                <form>
                  <TextField
                    id="standard-basic"
                    label="Update"
                    variant="standard"
                    value={editTodo}
                    style={{ width: "400px", marginLeft: "20px" }}
                    onChange={(e) => setEditTodo(e.target.value)}
                  />
                  <Button onClick={(e) => handleUpdate(e, todo)} style={{ backgroundColor: "orange", padding: "5px 10px", color: "white" }} size="small" type="submit">Submit</Button>
                </form>
              ) : (
                <Typography variant="body3" className={todo.completed ? classes.textCompleted : classes.textUncompleted}>
                  {todo.description}
                </Typography>
              )}
            </CardContent>
            <CardActions>
              <Button onClick={() => handleEditing(todo)} style={{ backgroundColor: "orange", padding: "5px 10px", color: "white" }} size="small">Update</Button>
              <Button onClick={() => handleDelete(todo)} style={{ backgroundColor: "red", padding: "5px 10px", color: "white" }} size="small">Delete</Button>
              <Button onClick={() => handleComplete(todo)} style={{ backgroundColor: "blue", padding: "5px 10px", color: "white" }} size="small">Complete</Button>
            </CardActions>
          </Card>
        ))}
      </div>
    </div>
  )
};

export default Todo;
