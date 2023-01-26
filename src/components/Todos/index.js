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
	return (
		<div>
			<h1 className="title">Yapılacaklar Listesi</h1>
			<form>
				<div className="search-btn">
					<input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="İdeal düzenini inşa et..." className="inputText" />
					<button onClick={() => addTodo(input)}>
						<FaPencilAlt />
					</button>
					<ul>
						{list.map((todo) => (
							<li key={todo.id}>
								{todo.todo}
								<button>&times;</button>
							</li>
						))}
					</ul>
				</div>
			</form>
		</div>
	);
}

export default Todos;
