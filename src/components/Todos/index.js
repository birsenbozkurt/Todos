import React, { useState } from "react";
import "./index.css";
import { FaPencilAlt } from "react-icons/fa";
function Todos() {
	const [list, setList] = useState([]);
	const [input, setInput] = useState("");

	const addTodo = (todo) => {
		const newTodo = {
			id: Math.random(),
			todo: todo,
		};

		setList([...list, newTodo]);
		setInput("");
	};

	function handleSubmit(e) {
		e.preventDefault();
	}

	const deleteTodo = (id) => {
		const newList = list.filter((todo) => todo.id !== id);

		setList(newList);
		// filter methodu diziyi tek tek gezer ve true olan değerleri yeni listeye atar
	};

	return (
		<div>
			<h1 className="title">Yapılacaklar Listesi</h1>
			<form onSubmit={handleSubmit}>
				<div className="search-btn">
					<input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="İdeal düzenini inşa et..." className="inputText" />
					<button className="add-btn" onClick={() => addTodo(input)}>
						<FaPencilAlt />
					</button>
				</div>
			</form>
			<div className="list">
				<ul className="todo-list">
					{list.map((todo) => (
						<li key={todo.id}>
							{todo.todo}
							<button className="delete-btn" onClick={() => deleteTodo(todo.id)}>
								&times;
							</button>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}

export default Todos;
