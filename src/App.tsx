import { useState } from "react";
import "./App.css";
import KeyBoard from "./components/ui/KeyBoard";
import Screen from "./components/ui/Screen";
import { Separator } from "./components/ui/separator";
import { Row } from "./types";

const initialState: Array<Row> = [
    {
        left: [
            {
                text: "",
                state: 0,
            },
            {
                text: "",
                state: 0,
            },
            {
                text: "",
                state: 0,
            },
            {
                text: "",
                state: 0,
            },
            {
                text: "",
                state: 0,
            },
        ],
        right: [
            {
                text: "",
                state: 0,
            },
            {
                text: "",
                state: 0,
            },
            {
                text: "",
                state: 0,
            },
        ],
    },
    {
        left: [
            {
                text: "",
                state: 0,
            },
            {
                text: "",
                state: 0,
            },
            {
                text: "",
                state: 0,
            },
            {
                text: "",
                state: 0,
            },
            {
                text: "",
                state: 0,
            },
        ],
        right: [
            {
                text: "",
                state: 0,
            },
            {
                text: "",
                state: 0,
            },
            {
                text: "",
                state: 0,
            },
        ],
    },
    {
        left: [
            {
                text: "",
                state: 0,
            },
            {
                text: "",
                state: 0,
            },
            {
                text: "",
                state: 0,
            },
            {
                text: "",
                state: 0,
            },
            {
                text: "",
                state: 0,
            },
        ],
        right: [
            {
                text: "",
                state: 0,
            },
            {
                text: "",
                state: 0,
            },
            {
                text: "",
                state: 0,
            },
        ],
    },
    {
        left: [
            {
                text: "",
                state: 0,
            },
            {
                text: "",
                state: 0,
            },
            {
                text: "",
                state: 0,
            },
            {
                text: "",
                state: 0,
            },
            {
                text: "",
                state: 0,
            },
        ],
        right: [
            {
                text: "",
                state: 0,
            },
            {
                text: "",
                state: 0,
            },
            {
                text: "",
                state: 0,
            },
        ],
    },
    {
        left: [
            {
                text: "",
                state: 0,
            },
            {
                text: "",
                state: 0,
            },
            {
                text: "",
                state: 0,
            },
            {
                text: "",
                state: 0,
            },
            {
                text: "",
                state: 0,
            },
        ],
        right: [
            {
                text: "",
                state: 0,
            },
            {
                text: "",
                state: 0,
            },
            {
                text: "",
                state: 0,
            },
        ],
    },
];

function App() {
    const [screenArray, setScreenArray] = useState<Array<Row>>(initialState);
    const [rowIndex, setRowIndex] = useState<number>(0);
    const [columnIndex, setColumnIndex] = useState<number>(0);

    return (
        <div className="flex justify-center h-screen">
            <div className="max-w-[400px] w-full flex items-center flex-col">
                <span className="text-3xl font-medium">MATHLE BY 2SG TIN</span>
                <Separator />
                <Screen screenArray={screenArray} />
                <KeyBoard
                    screenArray={screenArray}
                    setScreenArray={setScreenArray}
                    rowIndex={rowIndex}
                    setRowIndex={setRowIndex}
                    columnIndex={columnIndex}
                    setColumnIndex={setColumnIndex}
                />
            </div>
        </div>
    );
}

export default App;
