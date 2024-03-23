import {ExperienceItem} from "./Experience";
import './App.css'
import React from "react";

export function Education() {
    return (
        <div>
            <ol className={"group"}>
                <ExperienceItem
                    date={"Current Undergrad"}
                    position={"Georgia Tech"}
                    employer={"3.84 GPA"}
                    description={"I'm currently majoring in Computer Science."}
                    url={""}
                    technologies={["Work-Ethic", "Grey Hair", "Gold"]}
                />

                <ExperienceItem
                    date={"Transferred From"}
                    position={"Georgia State University"}
                    employer={"4.0 GPA"}
                    description={""}
                    url={""}
                    technologies={["Work-Ethic", "Grey Hair", "Gold"]}
                />

                <ExperienceItem
                    date={"Graduated"}
                    position={"Harrison High School"}
                    employer={"Diploma"}
                    description={""}
                    url={""}
                    technologies={["Work-Ethic", "Grey Hair", "Gold"]}
                />
            </ol>
        </div>
    );
}