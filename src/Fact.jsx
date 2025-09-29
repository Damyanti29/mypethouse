import React from "react";
import "./Fact.css";

const facts = [
    {
        title: "Dogs have unique nose prints",
        detail: "Just like human fingerprints, each dog's nose print is unique and can be used to identify them."
    },
    {
        title: "Cats sleep a lot",
        detail: "On average, cats sleep for 12-16 hours a day to conserve energy for hunting."
    },
    {
        title: "Goldfish have a memory span",
        detail: "Contrary to popular belief, goldfish can remember things for months, not just a few seconds."
    },
    {
        title: "Rabbits communicate with body language",
        detail: "Rabbits thump their hind legs to warn others of danger."
    }
];

function Fact() {
    return (
        <div className="fact-page">
            <h1 className="fact-title">Pet Facts</h1>
            <ul className="fact-list">
                {facts.map((fact, idx) => (
                    <li key={idx} className="fact-item">
                        <h2 className="fact-item-title">{fact.title}</h2>
                        <p className="fact-item-detail">{fact.detail}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Fact;