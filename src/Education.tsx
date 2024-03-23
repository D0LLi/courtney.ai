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
                />

                <ExperienceItem
                    date={"Transferred From"}
                    position={"Georgia State University"}
                    employer={"4.0 GPA"}
                    description={""}
                    url={""}
                />

                <ExperienceItem
                    date={"Graduated"}
                    position={"Harrison High School"}
                    employer={"Diploma"}
                    description={""}
                    url={""}
                />
            </ol>
        </div>
    );
}