import React from "react";

const Page = (props) => {
    const {section, inViewRef, children} = props;

    return (
        <section id={section.title} ref={inViewRef} className={"section"}>
            <div>
                <div className={"section-header"}>
                    <h2 className={"section-title"}>
                        {section.title}
                    </h2>
                </div>
                {children}
            </div>
        </section>
    );
};
export default Page;
