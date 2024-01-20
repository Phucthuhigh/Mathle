import { Row } from "@/types";
import Mexp from "math-expression-evaluator";
import { buttonNames } from "@/constants";

const mexp = new Mexp();

const handlePlayGame = (
    equationExpected: { left: string; right: string },
    input: string,
    screenArray: Row[],
    setScreenArray: React.Dispatch<React.SetStateAction<Row[]>>,
    rowIndex: number,
    setRowIndex: React.Dispatch<React.SetStateAction<number>>,
    columnIndex: number,
    setColumnIndex: React.Dispatch<React.SetStateAction<number>>,
    disabled: string[],
    setDisabled: React.Dispatch<React.SetStateAction<string[]>>
) => {
    const updatedScreenArray = [...screenArray];

    try {
        switch (input) {
            case "N":
                window.location.reload();
                break;
            case "D":
                if (columnIndex > 5) {
                    updatedScreenArray[rowIndex].right[columnIndex - 6].text =
                        "";
                } else
                    updatedScreenArray[rowIndex].left[columnIndex - 1].text =
                        "";
                setColumnIndex(columnIndex - 1);
                break;
            case "=":
                if (columnIndex > 7) {
                    const leftEquation = updatedScreenArray[rowIndex].left
                        .map((item) => item.text)
                        .join("");
                    const rightEquation = updatedScreenArray[rowIndex].right
                        .map((item) => item.text)
                        .join("");

                    const resultLeftEquation = mexp.eval(
                        leftEquation,
                        [mexp.tokens[39], mexp.tokens[40]],
                        { "+": 23, "-": 47 }
                    );
                    if (
                        resultLeftEquation !== Number(rightEquation) ||
                        (!leftEquation.includes("+") &&
                            !leftEquation.includes("-"))
                    ) {
                        alert("Phương trình không hợp lệ");
                        return;
                    }

                    const visit: boolean[] = [
                        false,
                        false,
                        false,
                        false,
                        false,
                        false,
                        false,
                        false,
                    ];

                    const rowResult: (0 | 1 | 2 | 3)[] = [
                        0, 0, 0, 0, 0, 0, 0, 0,
                    ];

                    const stringOutput = leftEquation + rightEquation;
                    const stringExpected =
                        equationExpected.left + equationExpected.right;

                    for (let i = 0; i < stringOutput.length; i++) {
                        if (stringOutput[i] === stringExpected[i]) {
                            rowResult[i] = 3;
                            visit[i] = true;
                        }
                    }

                    for (let i = 0; i < stringOutput.length; i++) {
                        if (rowResult[i] === 3 && visit[i]) continue;
                        for (let j = 0; j < stringExpected.length; j++) {
                            if (
                                !visit[j] &&
                                stringOutput[i] === stringExpected[j]
                            ) {
                                rowResult[i] = 2;
                                visit[j] = true;
                                break;
                            }
                        }
                        if (rowResult[i] === 0) {
                            rowResult[i] = 1;
                        }
                    }

                    for (let i = 0; i < rowResult.length; i++) {
                        if (i >= 5)
                            updatedScreenArray[rowIndex].right[i - 5].state =
                                rowResult[i];
                        else
                            updatedScreenArray[rowIndex].left[i].state =
                                rowResult[i];
                    }

                    let newDisabled = [...disabled];
                    for (let i = 0; i < rowResult.length; i++) {
                        let ok: boolean = true;
                        for (let j = 0; j < rowResult.length; j++) {
                            if (
                                stringOutput[i] === stringOutput[j] &&
                                rowResult[j] !== 1
                            ) {
                                ok = false;
                                break;
                            }
                        }
                        if (ok) newDisabled.push(stringOutput[i]);
                    }

                    let checkAccepted = true;
                    for (let i = 0; i < rowResult.length; i++) {
                        if (rowResult[i] !== 3) {
                            checkAccepted = false;
                            break;
                        }
                    }
                    if (checkAccepted)
                        newDisabled = Object.values(buttonNames).filter(
                            (item) => item !== "N"
                        );

                    setDisabled(newDisabled);
                    setRowIndex(rowIndex + 1);
                    setColumnIndex(0);
                }
                break;
            default:
                if (columnIndex >= 5) {
                    updatedScreenArray[rowIndex].right[columnIndex - 5].text =
                        input as string;
                } else
                    updatedScreenArray[rowIndex].left[columnIndex].text =
                        input as string;
                setColumnIndex(columnIndex + 1);
        }
    } catch (error) {
        alert("Không thể nhập");
    }
    setScreenArray(updatedScreenArray);
};

export default handlePlayGame;
