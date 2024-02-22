import { useDispatch } from "react-redux";
import { useAppSelector } from "./reducer/store";
import {
	addminuse,
	addpluse,
	dilResults,
	reset,
} from "./reducer/tools/calculator";
import { useState } from "react";
import scss from "./App.scss";

const App = () => {
	const calculator = useAppSelector((state) => state.calculatorRes.value);
	const [valueInput, setValueInput] = useState<number | null | string>("");
	const [valueInput2, setValueInput2] = useState<number | null | string>("");
	console.log(calculator);
	const dispatch = useDispatch();
	function plue() {
		dispatch(addpluse({ valueres: valueInput || valueInput2 }));
		setValueInput("");
		setValueInput2("");
	}
	const minuse = () => {
		dispatch(addminuse({ valueres: valueInput || valueInput2 }));
	};
	function delineResults() {
		dispatch(dilResults({ valueres: valueInput || valueInput2 }));
	}
	const resetResults = () => {
		dispatch(reset({ valueres: valueInput || valueInput2 }));
	};
	return (
		<div className={scss.app}>
			<div className={scss.div1}>
				<input
					type="namber"
					value={valueInput}
					onChange={(e) => setValueInput(e.target.value)}
				/>
				<input
					type="number"
					value={valueInput2}
					onChange={(e) => setValueInput2(e.target.value)}
				/>
			</div>
			<div className={scss.div2}>
				<button onClick={plue}>+</button>
				<button onClick={minuse}>-</button>
				<span>{calculator}</span>
				<button onClick={delineResults}>/</button>
				<button onClick={resetResults}>Reset</button>
			</div>
		</div>
	);
};

export default App;
