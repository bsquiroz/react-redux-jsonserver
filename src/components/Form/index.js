import React, { useState } from "react";
import "./styles.css";

const initial_state = {
    name: "",
    desc: "",
};

export const Form = () => {
    const [stateValues, setStateValues] = useState(initial_state);
    const { name, desc } = stateValues;

    const handleInputs = (e) => {
        setStateValues({
            ...stateValues,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (name.trim() === "" || desc.trim() === "")
            return alert("debes de llenar todos los campos");

        alert("todo bien");

        setStateValues(initial_state);
    };
    return (
        <form onSubmit={handleSubmit}>
            <h2>Agrega una nueva nota</h2>

            <div>
                <label>
                    nombre:
                    <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={handleInputs}
                    />
                </label>
                <br />
                <label>
                    descripción:
                    <input
                        type="text"
                        name="desc"
                        value={desc}
                        onChange={handleInputs}
                    />
                </label>
                <br />
                <input type="submit" />
            </div>
        </form>
    );
};
