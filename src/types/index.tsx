export interface Row {
    /**
     * state:
     * 0 -> nothing
     * 1 -> not appear in equation
     * 2 -> appear but wrong spot
     * 3 -> appear and correct position
     */
    left: Array<{
        text: string;
        state: 0 | 1 | 2 | 3;
    }>;
    right: Array<{
        text: string;
        state: 0 | 1 | 2 | 3;
    }>;
}
