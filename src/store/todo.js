import { makeAutoObservable } from "mobx"

class Todo {

	todos = [
		{ id: 1, title: 'Сходи в магазин', completed: false },
		{ id: 2, title: 'Почитай книгу', completed: false },
		{ id: 3, title: 'Вынеси мусор', completed: false }
	]

	constructor() {
		makeAutoObservable(this)
	}

	addTodo(todo) {
		this.todos.push(todo)
	}
	
	removeTodo(id) {
		this.todos = this.todos.filter(todo => todo.id !== id)
	}
	
	completeTodo(id) {
		this.todos = this.todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed } : todo)
	}

	fetchTodos(id) {
		fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => response.json())
			.then(json =>
				this.todos = [...this.todos, ...json])
	}

}

export default new Todo()