import React from "react";
import { Notes } from "../Notes";
import "./styles.css";

export const ListNotes = () => {
    return (
        <div>
            <h3>Estas son las notas que tienes</h3>
            <Notes />
            <Notes />
            <Notes />
        </div>
    );
};
