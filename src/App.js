import React from "react";
import { Container } from "./components/Container";
import { Form } from "./components/Form";
import { ListNotes } from "./components/ListNotes";

export const App = () => {
    return (
        <Container>
            <Form />
            <ListNotes />
        </Container>
    );
};
