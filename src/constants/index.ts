export interface ButtonType {
    NEW: string;
    DEL: string;
    1: string;
    2: string;
    3: string;
    4: string;
    5: string;
    6: string;
    "+": string;
    7: string;
    8: string;
    9: string;
    "-": string;
    0: string;
    ENTER: string;
}
export type ButtonName =
    | "NEW"
    | "DEL"
    | "1"
    | "2"
    | "3"
    | "4"
    | "5"
    | "6"
    | "+"
    | "7"
    | "8"
    | "9"
    | "-"
    | "0"
    | "ENTER";

export const listButtons: ButtonName[] = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "+",
    "0",
    "-",
    "NEW",
    "ENTER",
    "DEL",
];

export const buttonNames: ButtonType = {
    NEW: "N",
    DEL: "D",
    1: "1",
    2: "2",
    3: "3",
    4: "4",
    5: "5",
    6: "6",
    "+": "+",
    7: "7",
    8: "8",
    9: "9",
    "-": "-",
    0: "0",
    ENTER: "=",
};
