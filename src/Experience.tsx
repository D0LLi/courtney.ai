import './App.css';
import React from "react";

interface Props {
    date: string;
    position: string;
    employer: string;
    description: string;
    url: string;
}

export function ExperienceItem(props: Props) {
    return (
        <li className={"group-item"}>
            <div className={"group-block"}>
                <header className={"experience-date"}>
                    {props.date}
                </header>
                <div className={"experience-info"}>
                    <h3 className={"experience-position font-medium"}>
                        <div>
                            <a className={"group-link"} href={props.url} target={"_blank"} rel={"noreferrer noopener"}
                               aria-label={`${props.position}, ${props.employer} (opens in a new tab)`}>
                                <span className={"group-span"}>
                                </span>
                                <span className={"inline-block"}>
                                    {props.position} · {props.employer}
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                         className="link-arrow transition-transform"
                                         aria-hidden="true">
                                        <path fillRule="evenodd"
                                              d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                              clipRule="evenodd">
                                        </path>
                                    </svg>
                                </span>
                            </a>

                        </div>
                    </h3>
                    <p className={"experience-description text-lightgrey"}>
                        {props.description}
                    </p>
                </div>
            </div>
        </li>
    );
}

function Experience() {
    return (
        <div>
            <ol className={"group"}>
                <ExperienceItem
                    date='2023 - Present'
                    position='Student'
                    employer='Georgia Tech'
                    description='Lots of text. Lots of text. Lots of text. Lots of text.
                Lots of text. Lots of text. Lots of text. Lots of text. Lots of text. Lots of text.
                Lots of text. Lots of text. Lots of text. Lots of text. Lots of text. Lots of text. '
                    url="https://www.gatech.edu"
                />
                <ExperienceItem
                    date='AUG - DEC 2023'
                    position='Android Studio'
                    employer='Georgia Tech'
                    description='Lots of text. Lots of text. Lots of text. Lots of text.
                Lots of text. Lots of text. Lots of text. Lots of text. Lots of text. Lots of text.
                Lots of text. Lots of text. Lots of text. Lots of text. Lots of text. Lots of text. '
                    url="https://developer.android.com/studio"
                />
                <ExperienceItem
                    date='AUG - DEC 2022'
                    position='STEM Tutor'
                    employer='Georgia State University'
                    description='Lots of text. Lots of text. Lots of text. Lots of text.
                Lots of text. Lots of text. Lots of text. Lots of text. Lots of text. Lots of text.
                Lots of text. Lots of text. Lots of text. Lots of text. Lots of text. Lots of text. '
                    url="https://cas.gsu.edu/academics-admissions/undergraduate-learning/stem-education-programs/stem-tutoring/"
                />
            </ol>
        </div>
    );
}

export default Experience;