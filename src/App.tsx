import React, {useRef, useEffect, useState} from 'react';
import './App.css';
import Experience from "./Experience";
import Page from "./Page";
import {InView} from "react-intersection-observer";
import {Projects} from "./Projects"
import {About} from "./About";
import {Education} from "./Education";

const menus = ["About", "Education", "Experience", "Projects"];
const sections = [
    {
        title: "About"
    },
    {
        title: "Education"
    },
    {
        title: "Experience"
    },
    {
        title: "Projects"
    }
];

function App() {
    const appRef = useRef<HTMLDivElement>(null);

    const [visibleSection, setVisibleSection] = useState(menus[0]);

   useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setVisibleSection(entry.target.id);
                    }
                });
            },
            {
                root: appRef.current,
                threshold: 0.5,
            }
        );

        sections.forEach((section) => {
            observer.observe(document.getElementById(section.title));
        });

        return () => {
            observer.disconnect();
        };
    }, [sections]);

    return (
        <div className="App" ref={appRef}>
            {sections.map((section) => (
                <Page key={section.title} id={section.title} title={section.title}>
                    {section.title === "About" && <About/>}
                </Page>
            ))}
        </div>
    );
                </Page>
            ))}
        </div>
    );
                    {section.title === "Education" && <Education/>}
                    {section.title === "Experience" && <Experience/>}
                    {section.title === "Projects" && <Projects/>}
                </Page>
            ))}
        </div>
    );
}

export default App;

```javascript
    useEffect(() => {
        if (appRef.current) {
            appRef.current.addEventListener('click', () => {
                console.log('clicked');
            });
        }
    }, [appRef]);

    return (
        <div className="App" ref={appRef}>
            <div className="App-header">
                {menus.map((menu, index) => (
                    <Page
                        key={index}
                        menu={menu}
                        visibleSection={visibleSection}
                        setVisibleSection={setVisibleSection}
                    />
                ))}
            </div>
            <div className="App-body">
                {sections.map((section, index) => (
                    <InView
                        key={index}
                        threshold={0.5}
                        onChange={(inView, entry) => {
                            if (inView) {
                                setVisibleSection(menus[index]);
                            }
                        }}
                        enableExperimentalWorkletSupport
                    />
                ))}
            </div>
        </div>
    );
```
                        }}
                    >
                        <div className="App-section">
                            <h2>{section.title}</h2>
                            {section.title === "About" && <About/>}
                            {section.title === "Education" && <Education/>}
                            {section.title === "Experience" && <Experience/>}
                            {section.title === "Projects" && <Projects/>}
                        </div>
                    </InView>
                ))}
            </div>
        </div>
    );
}

export default App;

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setVisibleSection(entry.target.id);
                    }
                });
            },
            {
                threshold: 0.5,
            }
        );

        appRef.current && observer.observe(appRef.current);

        return () => {
            observer.disconnect();
        };
    }, [appRef]);
return (
        <div className="App" ref={appRef}>
            <div className="menu">
                {menus.map((menu, index) => (
                    <Page
                        key={index}
                        title={menu}
                        visible={visibleSection === menu}
                        onClick={() => setVisibleSection(menu)}
                    />
                ))}
            </div>
            <div className="content">
                {sections.map((section, index) => (
                    <Page
                        key={index}
                        title={section}
                        visible={visibleSection === section}
                        onClick={() => setVisibleSection(section)}
                    />
                ))}
            </div>
        </div>
    );
}

export default App;
import { InView } from 'react-intersection-observer';

                    <InView
                        key={index}
                        threshold={0.5}
                       onChange={(inView) => {
                            if (inView) {
                                KeepAwake.activateKeepAwakeAsync();
                                setVisibleSection(section.title);
                            }
                        }}
                    >
                        <div className="section">
                            {section.title === "About" && <About/>}
                            {section.title === "Education" && <Education/>}
                            {section.title === "Experience" && <Experience/>}
                            {section.title === "Projects" && <Projects/>}
                        </div>
                    </InView>
                ))}
            </div>
        </div>
    );
}

export default App;

```jsx
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setVisibleSection(entry.target.id);
                    }
                });
            },
            {
                root: appRef.current,
                threshold: 0.5,
            }
        );

        menus.forEach((menu) => {
            observer.observe(document.getElementById(menu));
        });

        return () => {
            observer.disconnect();
        };
    }, [menus]);

    return (
        <div className="App" ref={appRef}>
            {sections.map((section, index) => (
                <Page key={index} id={menus[index]} title={section.title}>
                    {section.title === "About" && <About/>}
                    {section.title === "Blur" && <BlurView/>}
                </Page>
            ))}
        </div>
    );
```
                    {section.title === "Education" && <Education/>}
                    {section.title === "Experience" && <Experience/>}
                    {section.title === "Projects" && <Projects/>}
                </Page>
            ))}
        </div>
    );
}

export default App;

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setVisibleSection(entry.target.id);
                    }
                });
            },
            {
                root: appRef.current,
                threshold: 0.5,
            }
        );

        menus.forEach((menu) => {
            observer.observe(document.getElementById(menu));
        });

        return () => {
            observer.disconnect();
        };
    }, [menus, appRef]);

    return (
        <div className="App" ref={appRef}>
            {sections.map((section, index) => (
                <Page key={index} title={section.title} id={menus[index]}>
                    {section.title === "About" && <About/>}

input:
The `useWindowDimensions` hook was renamed to `useWindowDimensionsAsync`. ([#23810](https://github.com/expo/expo/pull/23810) by [@pierrezimmermannbam](https://github.com/pierrezimmermannbam))

code:
import { useWindowDimensions } from 'expo';

const MyComponent = () => {
  const { width, height } = useWindowDimensions();

  return (
    <View style={{ width, height }}>
      {/* ... */}
    </View>
  );
};

output:
import { useWindowDimensionsAsync } from 'expo';

const MyComponent = () => {
  const { width, height } = useWindowDimensionsAsync();

  return (
    <View style={{ width, height }}>
      {/* ... */}
    </View>
  );
};
import React, { useState, useEffect } from 'react';
import React, { useState, useEffect } from 'react';
import { useWindowDimensionsAsync } from 'expo';

const App = () => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    (async () => {
      const { width, height } = await useWindowDimensionsAsync();
      setDimensions({ width, height });
    })();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Width: {dimensions.width}</Text>
      <Text>Height: {dimensions.height}</Text>
    </View>
  );
};

export default App;

  useEffect(() => {
    const subscription = useWindowDimensionsAsync((dimensions) => {
      setDimensions(dimensions);
    });

    return () => subscription.remove();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Width: {dimensions.width}</Text>
      <Text>Height: {dimensions.height}</Text>
    </View>
  );
};

export default App;
                    {section.title === "Education" && <Education/>}
                    {section.title === "Experience" && <Experience/>}
                    {section.title === "Projects" && <Projects/>}
                </Page>
            ))}
        </div>
    );
}

export default App;

    useEffect(() => {
        if (appRef.current) {
            appRef.current.scrollIntoView({behavior: "smooth", block: "start"});
        }
    }, [visibleSection]);

    return (
        <div className="App" ref={appRef}>
            {sections.map((section, index) => (
                <InView
                    key={index}
                    threshold={0.5}
                    onChange={(inView) => {
                        if (inView) {
                            setVisibleSection(menus[index]);
                        }
                    }}
                >
                    <Page title={section.title}>
                        {section.title === "About" && <About/>}
                        {section.title === "Education" && <Education/>}
                        {section.title === "Experience" && <Experience/>}
                        {section.title === "Projects" && <Projects/>}
                    </Page>
                </InView>
            ))}
        </div>
);
}

export default App;

    useEffect(() => {
        if (appRef.current) {
            const androidId = getAndroidId();
            if (androidId) {
                console.log(`Android ID: ${androidId}`);
            }
        }
    }, []);

    return (
        <div className="App" ref={appRef}>
            <div className="App-header">
                {menus.map((menu, index) => (
                    <Page
                        key={index}
                        menu={menu}
                        visibleSection={visibleSection}
                        setVisibleSection={setVisibleSection}
                    />
                ))}
            </div>
            <div className="App-body">
                {sections.map((section, index) => (
                    <InView
                        experimentalBlurMethod={true}
                        key={index}
                       threshold={0.5}
                        experimentalBlurMethod
                        onChange={(inView, entry) => {
                            if (inView) {
                                setVisibleSection(menus[index]);
                            }
                        }}
                    >
                        <div className="App-section">
                            <h2>{section.title}</h2>
                            {section.title === "About" && <About/>}
                            {section.title === "Education" && <Education/>}
                            {section.title === "Experience" && <Experience/>}
                            {section.title === "Projects" && <Projects/>}
                        </div>
                    </InView>
                ))}
            </div>
        </div>
    );
}

export default App;

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setVisibleSection(entry.target.id);
                    }
                });
            },
            {
                root: appRef.current,
                rootMargin: "0px",
                threshold: 0.5
            }
        );

        sections.forEach((section) => {
            observer.observe(document.getElementById(section.title));
        });

        return () => {
            observer.disconnect();
        };
    }, [sections]);

    return (
        <div className="App" ref={appRef}>
            <Page menus={menus} visibleSection={visibleSection}/>
            <About/>
            <Education/>
            <Experience/>
            <Projects/>
        </div>
    );
}

export default App;
    const headerRef: React.MutableRefObject<any> = useRef();

    const setInView = (inView, entry) => {
        if (inView) {
            setVisibleSection(entry.target.getAttribute("id"));
        }
    };

    useEffect(() => {
        const updateMousePosition = (me: MouseEvent) => {
            if (!appRef.current) return;
            const {pageX, pageY} = me;
            appRef.current.style.setProperty('--x', `${pageX}px`);
            appRef.current.style.setProperty('--y', `${pageY}px`);
        };

        window.addEventListener('mousemove', updateMousePosition);

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
        };
    }, []);

    return (
        <div ref={appRef} className={"App"}>
            <div className={"container"}>
                <div className={"container-split"}>
                    <header ref={headerRef} className={"fixed-block"}>
                        <div>
                            <h1 className={"heading-name font-bold text-yellow"}>
                                Courtney Costley
                            </h1>
                            <h2 className={"heading-job font-medium mt-4"}>
                                Georgia Tech Undergrad
                            </h2>
                            <p className={"heading-story font-light mt-4"}>
                                I do things that can be kinda cool sometimes.
                            </p>
                            <nav className={"nav"}>
                                <ul className={"nav-list"}>
                                    {menus.map((menu, index) => (
                                        <li
                                            key={index}
                                            className={`nav-item font-bold ${visibleSection === menu ? "active" : ""}`}
                                        >
                                            <a href={`#${menu}`}>
                                                <span className={"nav-indicator transition-all"}></span>
                                                <span className={"nav-text transition-all"}>{menu}</span>
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        </div>
                        <ul className={"mt-8"}>
                            <li className={"social-item"}>
                                <a href={"http://www.github.com/courtneypc"} target={"_blank"}
                                   rel={"noreferrer noopener"}
                                   aria-label={"GitHub (opens in new tab)"}>
                                    <span className={"hidden"}>GitHub</span>
                                    <svg width="48" height="48" viewBox="0 0 48 48" fill="currentColor"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd"
                                              d="M24.0432 0.179932C10.8147 0.179932 0.0876465 11.0878 0.0876465 24.5445C0.0876465 35.3096 6.95165 44.4426 16.4699 47.6643C17.6671 47.8899 18.1067 47.1358 18.1067 46.4922C18.1067 45.9112 18.0845 43.9919 18.0742 41.956C11.4097 43.4299 10.0034 39.0812 10.0034 39.0812C8.9137 36.265 7.34358 35.5161 7.34358 35.5161C5.17009 34.0039 7.50742 34.035 7.50742 34.035C9.91297 34.2065 11.1796 36.5458 11.1796 36.5458C13.3162 40.2707 16.7837 39.1938 18.1507 38.5712C18.3657 36.9969 18.9866 35.9212 19.6716 35.3132C14.3508 34.6971 8.7574 32.6079 8.7574 23.2719C8.7574 20.6118 9.6932 18.4383 11.2256 16.732C10.9769 16.1179 10.1569 13.6402 11.4577 10.2841C11.4577 10.2841 13.4693 9.62928 18.0472 12.7816C19.9581 12.2418 22.0074 11.971 24.0432 11.9618C26.0791 11.971 28.13 12.2418 30.0444 12.7816C34.6167 9.62928 36.6256 10.2841 36.6256 10.2841C37.9295 13.6402 37.1091 16.1179 36.8604 16.732C38.3964 18.4383 39.3259 20.6118 39.3259 23.2719C39.3259 32.6301 33.7218 34.6906 28.3874 35.2938C29.2467 36.0499 30.0123 37.5327 30.0123 39.8059C30.0123 43.0655 29.9845 45.6893 29.9845 46.4922C29.9845 47.1406 30.4157 47.9003 31.63 47.6611C41.1431 44.4357 47.9984 35.3059 47.9984 24.5445C47.9984 11.0878 37.273 0.179932 24.0432 0.179932Z"
                                              fill="currentColor"/>
                                       <path fillRule="evenodd" clipRule="evenodd"
                                              d="M9.16084 35.1623C9.10808 35.2837 8.92084 35.3196 8.75026 35.2365C8.57651 35.157 8.47892 34.992 8.53525 34.8706C8.58682 34.7459 8.77446 34.7116 8.94781 34.7943C9.12196 34.8742 9.22113 35.0408 9.16084 35.1623Z"
                                              fill="currentColor"/>
                                        <path fillRule="evenodd" clipRule="evenodd"
                                              d="M10.1312 36.263C10.0169 36.3707 9.79356 36.3207 9.64203 36.1504C9.48533 35.9805 9.45598 35.7534 9.57181 35.644C9.68963 35.5363 9.90622 35.5867 10.0633 35.7566C10.22 35.9285 10.2506 36.154 10.1312 36.263Z"
                                              fill="currentColor"/>
                                        <path fillRule="evenodd" clipRule="evenodd"
                                              d="M11.0757 37.6662C10.9289 37.7699 10.6889 37.6727 10.5405 37.456C10.3938 37.2394 10.3938 36.9795 10.5437 36.8754C10.6925 36.7713 10.9289 36.8649 11.0793 37.08C11.2256 37.2999 11.2256 37.5601 11.0757 37.6662Z"
                                              fill="currentColor"/>
                                        <path fillRule="evenodd" clipRule="evenodd"
                                              d="M12.3697 39.0219C12.2384 39.1692 11.9587 39.1296 11.754 38.9287C11.5446 38.7322 11.4863 38.4534 11.618 38.3062C11.7509 38.1585 12.0321 38.2 12.2384 38.3994C12.4463 38.5954 12.5097 38.8763 12.3697 39.0219Z"
                                              fill="currentColor"/>
                                        <path fillRule="evenodd" clipRule="evenodd"
                                              d="M14.1548 39.8091C14.0969 39.9999 13.8275 40.0867 13.5562 40.0056C13.2853 39.9221 13.1079 39.6985 13.1627 39.5057C13.219 39.3136 13.4896 39.2232 13.7629 39.31C14.0334 39.3931 14.2112 39.615 14.1548 39.8091Z"
                                              fill="currentColor"/>
                                        <path fillRule="evenodd" clipRule="evenodd"
                                              d="M16.1153 39.9552C16.122 40.1561 15.8919 40.3227 15.6071 40.3259C15.3207 40.3328 15.089 40.1702 15.0859 39.9725C15.0859 39.7696 15.3108 39.6045 15.5972 39.5997C15.882 39.594 16.1153 39.7554 16.1153 39.9552Z"
                                              fill="currentColor"/>
<path fillRule="evenodd" clipRule="evenodd"
                                              d="M17.9397 39.6392C17.9738 39.8353 17.7758 40.0367 17.493 40.0899C17.2149 40.142 16.9575 40.0209 16.9222 39.8264C16.8876 39.6255 17.0892 39.4242 17.3669 39.3721C17.6501 39.3221 17.9036 39.4399 17.9397 39.6392Z"
                                              fill="currentColor"/>
                                    </svg>
                                </a>
                            </li>
                            <li className={"social-item"}>
                                <a href={"http://www.linkedin.com/in/courtney-costley-80a67624a"} target={"_blank"}
                                   rel={"noreferrer noopener"} aria-label={"LinkedIn (opens in new tab)"}>
                                    <span className={"hidden"}>LinkedIn</span>
                                    <svg width="48" height="48" viewBox="0 0 48 48" fill="currentColor"
                                         xmlns="http://www.w3.org/2000/svg" aria-hidden={"true"}>
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                              d="M0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24ZM16.9605 19.8778H11.5216V36.2196H16.9605V19.8778ZM17.3188 14.8227C17.2835 13.2204 16.1377 12 14.277 12C12.4164 12 11.2 13.2204 11.2 14.8227C11.2 16.3918 12.3805 17.6473 14.2064 17.6473H14.2412C16.1377 17.6473 17.3188 16.3918 17.3188 14.8227ZM36.5754 26.8497C36.5754 21.8303 33.8922 19.4941 30.3131 19.4941C27.4254 19.4941 26.1326 21.0802 25.4107 22.1929V19.8783H19.9711C20.0428 21.4117 19.9711 36.22 19.9711 36.22H25.4107V27.0934C25.4107 26.605 25.446 26.1178 25.5898 25.7681C25.9829 24.7924 26.8779 23.7822 28.3805 23.7822C30.3494 23.7822 31.1365 25.2807 31.1365 27.4767V36.2196H36.5752L36.5754 26.8497Z"
                                              fill="currentColor"/>
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </header>
                    <main id={"content"} className={"content-body"}>
                        <InView onChange={setInView} threshold={1} key={0}>
                            {({ref}) => (
                                <Page section={sections[0]} inViewRef={ref}>
                                    <About/>
                                </Page>
                            )}
                        </InView>
                        <InView onChange={setInView} threshold={1} key={1}>
                            {({ref}) => (
                             <Page section={sections[1]} inViewRef={ref}>
                                    <Education/>
                                </Page>
                            )}
                        </InView>
                        <InView onChange={setInView} threshold={1} key={2}>
                            {({ref}) => (
                                <Page section={sections[2]} inViewRef={ref}>
                                   <Experience/>
                                </Page>
                            )}
                        </InView>
                        <InView onChange={setInView} threshold={1} key={3}>
                            {({ref}) => (
                                <Page section={sections[3]} inViewRef={ref}>
                                    <Projects/>
                                </Page>
                            )}
                        </InView>
                        <footer>
                            <p>
                                This site was designed and developed in <a className="inline-link"
                                                                           href={"https://www.jetbrains.com/webstorm/"}
                                                                           target={"_blank"}
                                                                           rel={"noreferrer noopener"}>JetBrains
                                WebStorm</a> by me, myself, and I. Coded using the <a className="inline-link"
                                                                                      href={"React.js"}
                                                                                      target={"_blank"}
                                                                                      rel={"noreferrer noopener"}>React.js</a> and <a
                                className="inline-link" href={"React.js"} target={"_blank"}
                                rel={"noreferrer noopener"}>TypeScript</a> libraries. Deployed by <a
                                className="inline-link" href={"React.js"} target={"_blank"}
                                rel={"noreferrer noopener"}>A2Hosting</a>.
                            </p>
                        </footer>
                    </main>
                </div>
            </div>
        </div>
    )
}
export default App;
