import './App.css';
import React, { useMemo } from "react";

export function ExperienceItem(props) {
    const {date, position, employer, description, technologies} = props;
    const enableExperimentalWorkletSupport = useMemo(() => {
        return false;
    }, []);
    return (
        <li className={"group-item"}>
            <div className={"group-block"}>
                <div className={"group-background absolute z-0"}>
                </div>
                <header className={"experience-date z-10"}>
                    {date}
                </header>
                <div className={"experience-info z-10"}>
                    <h3 className={"experience-position font-medium"}>
                        <div>
                            <a className={"group-link"} href={""} target={"_blank"} rel={"noreferrer noopener"}
                               aria-label={`${position}, ${employer} (opens in a new tab)`}>
                                <span className={"group-span"}>
                                    {position}
                                </span>

                            </a>
                            <span className={"group-span"}>
                                {employer}
                            </span>

                        </div>
                    </h3>
                    <div className={"experience-description"}>
                        {description}
                    </div>
                    <div className={"experience-technologies"}>
                        {technologies}
                    </div>
                </div>
            </div>
        </li>
    );
};

                        </div>
                    </h3>
                    <p className={"experience-description"}>
                        {description}
                    </p>
                    <ul className={"experience-technologies"}>
                        {technologies.map((technology) => (
                            <li key={technology} className={"experience-technology"}>
                                {technology}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </li>
    );
};

input:
The `useMemo` hook now requires a dependency array as the second argument.

code:
import React, { useMemo } from "react";

export function ExperienceItem(props) {
    const {date, position, employer, description, technologies} = props;
    const enableExperimentalWorkletSupport = useMemo(() => {
        return true;
    });
    return (
import React, { useMemo } from "react";

export function ExperienceItem(props) {
    const {date, position, employer, description, technologies} = props;
    const enableExperimentalWorkletSupport = useMemo(() => {
        return true;
    }, []);

    return (
        <li className={"group-item"}>
            <div className={"group-block"}>
                <div className={"group-background absolute z-0"}>
                </div>
                <header className={"experience-date z-10"}>
                    {date}
                </header>
                <div className={"experience-info z-10"}>
                    <h3 className={"experience-position font-medium"}>
                        <div>
                            <a className={"group-link"} href={""} target={"_blank"} rel={"noreferrer noopener"}
                               aria-label={`${position}, ${employer} (opens in a new tab)`}>
                                <span className={"group-span"}>
                                    {position}
                                </span>

                            </a>
                            <span className={"group-span"}>
                                {employer}
                            </span>

                        </div>
                    </h3>
                    <p className={"experience-description"}>
                        {description}
                    </p>
                    <ul className={"experience-technologies"}>
                        {technologies.map((technology, index) => (
                            <li key={index} className={"experience-technology"}>
                                {technology}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </li>
    );
}
    return (
        <li className={"group-item"}>
            <div className={"group-block"}>
                <div className={"group-background absolute z-0"}>
                </div>
                <header className={"experience-date z-10"}>
                    {date}
                </header>
                <div className={"experience-info z-10"}>
                    <h3 className={"experience-position font-medium"}>
                        <div>
                            <a className={"group-link"} href={""} target={"_blank"} rel={"noreferrer noopener"}
                               aria-label={`${position}, ${employer} (opens in a new tab)`}>
                                <span className={"group-span"}>
                                    {position}
                                </span>

                            </a>
                            <span className={"group-span"}>
                                {employer}
                            </span>
                        </div>
                    </h3>
                    <p className={"experience-description"}>
                        {description}
                    </p>
                    <ul className={"experience-technologies"}>
                        {technologies.map((technology) => (
                            <li key={technology} className={"experience-technology"}>
                                {technology}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </li>
    );
};

input:
The `useWindowDimensions` hook was renamed to `useDimensions`. ([#18596](https://github.com/expo/expo/pull/18596) by [@EvanBacon](https://github.com/EvanBacon))

code:
import React, { useWindowDimensions } from 'react';

const MyComponent = () => {
  const { width, height } = useWindowDimensions();

import React, { useDimensions } from 'react';

const MyComponent = () => {
  const { width, height } = useDimensions();

  return (
    <View style={{ width, height }}>
```
      {/* ... */}
    </View>
  );
};
                            <span className={"experience-technology"} key={technology}>
                                {technology}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </li>
    );
};
                        </div>
                    </h3>
                    <div className={"experience-description"}>
                        {description}
                    </div>
                    <div className={"experience-technologies"}>
                        {technologies.map((technology, index) => (
                            <span key={index} className={"experience-technology"}>
                                {technology}
                            </span>
                        ))}
```
        </li>
    );
};
                            </a>
                        </div>
                    </h3>
                    <div className={"experience-employer"}>
                        {employer}
                    </div>
                    <div className={"experience-description"}>
                        {description}
                    </div>
                    <div className={"experience-technologies"}>
                        {technologies.map((technology, index) => (
                            <span key={index} className={"experience-technology"}>
                                {technology}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </li>
    );
};
                            </a>
                        </div>
                    </h3>
                    <div className={"experience-employer"}>
                        {employer}
                    </div>
                    <div className={"experience-description"}>
                        {description}
                    </div>
                    <div className={"experience-technologies"}>
                        {technologies.map((technology, index) => (
                            <span key={index} className={"experience-technology"}>
                                {technology}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </li>
    );
};
                            </a>
                        </div>
                    </h3>
                    <div className={"experience-employer"}>
                        {employer}
                    </div>
                    <div className={"experience-description"}>
                        {description}
                    </div>
                    <div className={"experience-technologies"}>
                        {technologies.map((technology, index) => (
                            <span key={index} className={"experience-technology"}>
                                {technology}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </li>
    );
};
                            </a>
                        </div>
                    </h3>
                    <div className={"experience-employer"}>
                        {employer}
                    </div>
                    <div className={"experience-description"}>
                        {description}
                    </div>
                    <div className={"experience-technologies"}>
                        {technologies.map((technology, index) => (
                            <span key={index} className={"experience-technology"}>
                                {technology}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </li>
    );
};
                            </a>
                        </div>
                    </h3>
                    <div className={"experience-employer"}>
                        {employer}
                    </div>
                    <div className={"experience-description"}>
                        {description}
                    </div>
                    <div className={"experience-technologies"}>
                        {technologies.map((technology, index) => (
                            <span key={index} className={"experience-technology"}>
                                {technology}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </li>
    );
};
                            </a>
                        </div>
                    </h3>
                    <div className={"experience-employer"}>
                        {employer}
                    </div>
                    <div className={"experience-description"}>
                        {description}
                    </div>
                    <div className={"experience-technologies"}>
                        {technologies.map((technology, index) => (
                            <span key={index} className={"experience-technology"}>
                                {technology}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </li>
    );
};
                            </a>
                        </div>
                    </h3>
                    <div className={"experience-employer"}>
                        {employer}
                    </div>
                    <div className={"experience-description"}>
                        {description}
                    </div>
                    <div className={"experience-technologies"}>
                        {technologies.map((technology, index) => (
                            <span key={index} className={"experience-technology"}>
                                {technology}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </li>
    );
};
                            </a>
                        </div>
                    </h3>
                    <div className={"experience-employer"}>
                        {employer}
                    </div>
                    <div className={"experience-description"}>
                        {description}
                    </div>
                    <div className={"experience-technologies"}>
                        {technologies.map((technology, index) => (
                            <span key={index} className={"experience-technology"}>
                                {technology}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </li>
    );
};
                            </a>
                        </div>
                    </h3>
                    <div className={"experience-employer"}>
                        {employer}
                    </div>
                    <div className={"experience-description"}>
                        {description}
                    </div>
                    <div className={"experience-technologies"}>
                        {technologies.map((technology, index) => (
                            <span key={index} className={"experience-technology"}>
                                {technology}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </li>
    );
};
                            </a>
                        </div>
                    </h3>
                    <div className={"experience-employer"}>
                        {employer}
                    </div>
                    <div className={"experience-description"}>
                        {description}
                    </div>
                    <div className={"experience-technologies"}>
                        {technologies.map((technology, index) => (
                            <span key={index} className={"experience-technology"}>
                                {technology}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </li>
    );
};
                            </a>
                        </div>
                    </h3>
                    <div className={"experience-employer"}>
                        {employer}
                    </div>
                    <div className={"experience-description"}>
                        {description}
                    </div>
                    <div className={"experience-technologies"}>
                        {technologies.map((technology, index) => (
                            <span key={index} className={"experience-technology"}>
                                {technology}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </li>
    );
};
                            </a>
                        </div>
                    </h3>
                    <div className={"experience-employer"}>
                        {employer}
                    </div>
                    <div className={"experience-description"}>
                        {description}
                    </div>
                    <div className={"experience-technologies"}>
                        {technologies.map((technology, index) => (
                            <span key={index} className={"experience-technology"}>
                                {technology}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </li>
    );
};
                            </a>
                        </div>
                    </h3>
                    <div className={"experience-employer"}>
                        {employer}
                    </div>
                    <div className={"experience-description"}>
                        {description}
                    </div>
                    <div className={"experience-technologies"}>
                        {technologies.map((technology, index) => (
                            <span key={index} className={"experience-technology"}>
                                {technology}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </li>
    );
};
                            </a>
                        </div>
                    </h3>
                    <div className={"experience-employer"}>
                        {employer}
                    </div>
                    <div className={"experience-description"}>
                        {description}
                    </div>
                    <div className={"experience-technologies"}>
                        {technologies.map((technology, index) => (
                            <span key={index} className={"experience-technology"}>
                                {technology}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </li>
    );
};
                            </a>
                        </div>
                    </h3>
                    <div className={"experience-employer"}>
                        {employer}
                    </div>
                    <div className={"experience-description"}>
                        {description}
                    </div>
                    <div className={"experience-technologies"}>
                        {technologies.map((technology, index) => (
                            <span key={index} className={"experience-technology"}>
                                {technology}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </li>
    );
};
                            </a>
                        </div>
                    </h3>
                    <div className={"experience-employer"}>
                        {employer}
                    </div>
                    <div className={"experience-description"}>
                        {description}
                    </div>
                    <div className={"experience-technologies"}>
                        {technologies.map((technology, index) => (
                            <span key={index} className={"experience-technology"}>
                                {technology}
                            </span>
                        
                        </div>
                    </h3>
                </div>
            </div>
        </li>
    );
};
                            </a>
                        </div>
                    </h3>
                    <div className={"experience-employer"}>
                        {employer}
                    </div>
```
                    </div>
                    <div className={"experience-description"}>
                        {description}
                    </div>
                    <div className={"experience-technologies"}>
                        {technologies.map((technology, index) => (
                            <span key={index} className={"experience-technology"}>
                                {technology}
                            </span>
                        ))}
```
                                    {position} · {employer}
```
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </li>
    );
```

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
                    technologies={["Work-Ethic", "Grey Hair", "Gold"]}
                />
                <ExperienceItem
                    date='AUG - DEC 2023'
                    position='Android Studio'
                    employer='Georgia Tech'
                    description='Lots of text. Lots of text. Lots of text. Lots of text.
                Lots of text. Lots of text. Lots of text. Lots of text. Lots of text. Lots of text.
                Lots of text. Lots of text. Lots of text. Lots of text. Lots of text. Lots of text. '
                    url="https://developer.android.com/studio"
                    technologies={["Work-Ethic", "Grey Hair", "Gold"]}
                />
                <ExperienceItem
                    date='AUG - DEC 2022'
                    position='STEM Tutor'
                    employer='Georgia State University'
                    description='Lots of text. Lots of text. Lots of text. Lots of text.
                Lots of text. Lots of text. Lots of text. Lots of text. Lots of text. Lots of text.
                Lots of text. Lots of text. Lots of text. Lots of text. Lots of text. Lots of text. '
                    url="https://cas.gsu.edu/academics-admissions/undergraduate-learning/stem-education-programs/stem-tutoring/"
                    technologies={["Work-Ethic", "Grey Hair", "Gold"]}
                />
            </ol>
        </div>
    );
}

export default Experience;
