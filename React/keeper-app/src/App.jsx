// jshint esversion:6
import React, { Fragment } from "react";

import Header from "./components/Header";
import Note from "./components/Note";
import Footer from "./components/Footer";

import notes from "./notes";

function createNote(noteEntry) {
    return (
        <Note
        key = {noteEntry.key}
        title = {noteEntry.title}
        content = {noteEntry.content}
        />
    )
}

function App() {
    return (
        <Fragment>
        <Header />
        { notes.map(createNote)}
        <Footer />
        </Fragment>
    );
}

export default App;