/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor() {
    this.todos = [];
  }

  add(todo) {
    this.todos.push(todo);
  }

  remove(indexOfTodo) {
    this.todos = this.todos.filter((todo, index) => {
      if (indexOfTodo !== index) return todo;
    });
  }
  update(indexOfTodo, updatedTodo) {
    this.todos = this.todos.map((todo, index) => {
      if (indexOfTodo !== index) {
        return todo;
      } else {
        return updatedTodo;
      }
    });
  }

  getAll() {
    return this.todos;
  }
  get(indexOfTodo) {
    if (indexOfTodo >= this.todos.length) return null;
    return this.todos[indexOfTodo];
  }

  clear() {
    this.todos = [];
  }

}

let myTodo = new Todo();
myTodo.add('Task 1');
myTodo.add('Task 2');
myTodo.add('Task 3');
console.log(myTodo.get(0));
console.log(myTodo.get(2));
console.log(myTodo.get(3));

module.exports = Todo;
