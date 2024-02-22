import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface Calculator {
	value: number | null | string;
	// value2: number | null | string;
}

const initialState: Calculator = {
	value: null,
	// value2: null,
};

const calculatorReducer = createSlice({
	name: "calculator",
	initialState,
	reducers: {
		addpluse: (
			state,
			action: PayloadAction<{
				valueres: number | string;
				// valueres2: number | string;
			}>
		) => {
			state.value += +action.payload.valueres;
		},
		addminuse: (
			state,
			action: PayloadAction<{
				valueres: number | string;
				// valueres2: number | string;
			}>
		) => {
			state.value -= +action.payload.valueres;
		},
		dilResults: (
			state,
			action: PayloadAction<{
				valueres: number | string;
				// valueres2: number | string;
			}>
		) => {
			state.value /= +action.payload.valueres;
		},
		reset: (
			state,
			action: PayloadAction<{
				valueres: number | string;
				// valueres2: number | string;
			}>
		) => {
			state.value = +action.payload.valueres;
		},
	},
});

export const { addminuse, addpluse, dilResults, reset } =
	calculatorReducer.actions;
export const calculatorRes = calculatorReducer.reducer;
