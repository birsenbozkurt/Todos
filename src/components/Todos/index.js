import React from "react";
import "./index.css";
import { FaPencilAlt } from "react-icons/fa";
function Todos() {
	return (
		<div>
			<h1 className="title">Yapılacaklar Listesi</h1>
			<form>
				<div className="search-btn">
					<input type="text" placeholder="İdeal düzenini inşa et..." className="inputText" />
					<button>
						<FaPencilAlt />
					</button>
				</div>
			</form>
		</div>
	);
}

export default Todos;
