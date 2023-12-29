import React from "react";

export type SquareProps = {
    content: string | null,
    onSquareClick: () => void
}

export default function Square({ content, onSquareClick } : SquareProps) {
    return <button
        className="square" onClick={onSquareClick}>
        {content}
    </button>;
}