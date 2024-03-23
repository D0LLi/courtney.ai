import React from "react";
import './App.css';
import dungeon from "./media/dungeon-crawler.png";


interface Props {
    name: string;
    description: string;
    img: string;
    alt: string;
    url: string;
}

function ProjectItem(props: Props) {
    return (
        <li className={"group-item"}>
            <div className={"group-block"}>
                <div className={"project-info"}>
                    <h3 className={"project-name font-medium"}>
                        <div>
                            <a className={"group-link"} href={props.url} target={"_blank"} rel={"noreferrer noopener"}
                               aria-label={`${props.name} (opens in a new tab)`}>
                                <span className={"group-span"}>
                                </span>
                                <span className={"inline-block"}>
                                    {props.name}
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
                    <p className={"project-description"}>
                        {props.description}
                    </p>
                </div>
                <img className={"project-img"} alt="Android Dungeon Crawler"
                     loading={"lazy"} width={"200"} height={"48"} decoding={"async"}
                     src={props.img}>
                </img>
            </div>
        </li>
    );
}

export function Projects() {
    return (
        <ul className={"group"}>
            <ProjectItem
                name={"Drone Delivery Database"}
                description={"A MySQL database developed for a Georgia Tech CS4400 group project. I led a team of 4 people."}
                img={dungeon}
                alt={"Drone Delivery Database"}
                url={"https://www.github.com"}
            />
            <ProjectItem
                name={"Android Dungeon Crawler"}
                description={"A simple dungeon crawler game developed for a Georgia Tech CS2340 group project. I led a team of 5 people."}
                img={dungeon}
                alt={"Dungeon Crawler Image"}
                url={"https://www.github.com"}
            />
        </ul>
    )
}