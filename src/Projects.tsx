import React from "react";
import './App.css';
import dungeon from "_/media/dungeon-crawler.png";

function ProjectItem(props) {
    const {name, description, img, alt, url, technologies} = props;
    return (
        <li className={"group-item"}>
            <div className={"group-block"}>
                <div className={"group-background absolute z-0"}>
                </div>
                <div className={"project-info z-10"}>
                    <h3 className={"project-name font-medium"}>
                        <div>
                            <a className={"group-link"} href={url} target={"_blank"} rel={"noreferrer noopener"}
                               aria-label={`${name} (opens in a new tab)`}>
                                <span className={"group-span"}>
                                </span>
                                <span className={"inline-block"}>
                                    {name}
                                </span>
                            </a>
                        </div>
                    </h3>
                </div>
            </div>
        </li>
    );
};
        </li>
    );
};
        </li>
    );
};
        </li>
    );
};
                                </span>
                            </a>
                        </div>
                                </span>
                            </a>
                        </div>
                        <div className={"project-description"}>
                            {description}
                        </div>
                        <div className={"project-technologies"}>
                            {technologies.map((technology, index) => (
                                <span key={index} className={"project-technology"}>
                                    {technology}
                                </span>
                            ))}
                        </div>
                    </h3>
                </div>
                <div className="project-image">
                    <img src={img} alt={alt} />
                </div>
            </div>
```jsx
        </li>
    );
}
```
                        </div>
                                    {technology}
                                </span>
                            ))}
                        </div>
                    </h3>
                </div>
                <div className={"project-image"}>
                    <img src={img} alt={alt} />
                </div>
            </div>
        </li>
    );
};

export default ProjectItem;
                                    {name}
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
                        {description}
                    </p>
                    <ul className={"technologies-list"} aria-label={"Technologies Used"}>
                        {technologies.map((technology, index) => (
                            <li className={"technologies-item"}>
                                <div className={"technologies-div font-xs font-medium"}>
                                    {technology}
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <img className={"project-img z-10"} alt={alt}
                     loading={"lazy"} width={"200"} height={"48"} decoding={"async"}
                     src={img.replace('../', '_')}>
                </img>
            </div>
        </li>
    );
}

export function Projects() {
    return (
        <ul className={"group"}>
            <ProjectItem
                name={"courtney.ai"}
                description={"A React.js and TypeScript based personal website."}
                img={dungeon}
                alt={"courtney.ai"}
                url={"https://www.github.com"}
                technologies={["HTML", "CSS", "React.js", "TypeScript", "WebStorm"]}
            />
            <ProjectItem
                name={"Drone Delivery Database"}
                description={"A MySQL database developed for a Georgia Tech CS4400 group project. I led a team of 4 people."}
                img={dungeon}
                alt={"Drone Delivery Database"}
                url={"https://www.github.com"}
                technologies={["MySQL", "MySQL Workbench", "EERD", "Database Constraints", "Excel"]}
            />
            <ProjectItem
                name={"Android Dungeon Crawler"}
                description={"A simple dungeon crawler game developed for a Georgia Tech CS2340 group project. I led a team of 5 people."}
                img={dungeon}
                alt={"Dungeon Crawler Image"}
                url={"https://www.github.com"}
                technologies={["Java", "Android Studio", "Android SDK", "Android Emulator", "Git"]}
            />
                technologies={["Java", "Android Studio", "Android SDK", "XML", "SQLite"]}
            />
        </ul>
    );
}
            />
        </ul>
    );
}
                technologies={["Java", "Android Studio", "SQLite", "XML", "Git"]}
            />
        </ul>
    );
}
                technologies={["Java", "LibGDX", ""]}
            />
        </ul>
    )
}
