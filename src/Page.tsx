import React from "react";

interface Props {
    section: { title: string },
    inViewRef: any,
    children: any
}

const Page = (props: Props) => {
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