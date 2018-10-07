import React from "react";
import posed from "react-pose";

import Background from "./background.js";
import Sketchy from "./sketchy.js";

import {
  SectionContainer,
  SectionContents,
  SectionHeader,
  SectionDescription,
  SectionItems,
  SectionTitle,
  Item,
  Icon,
  IconContainer,
} from "../styles/styled-components.js";

const Section = props => {
  const AnimatedSection = posed.section({
    enter: { scale: 0.1 },
    exit: {
      scale: 1,
      delay: 100,
    },
  });

  const P = posed.p({
    enter: { y: 0, opacity: 1 },
    exit: { y: 50, opacity: 0 },
  });
  return (
    <SectionContainer style={{ backgroundColor: props.background }}>
      <Background index={props.index} />{" "}
      <SectionContents>
        <Sketchy offSetLeft={40} />
        <IconContainer>
          <Sketchy offSetBottom={3} />
          <Icon />
        </IconContainer>
        <SectionHeader>
          <SectionTitle>{props.title}</SectionTitle>
          {props.description ? (
            <SectionDescription />
          ) : // dangerouslySetInnerHTML={{ __html: md.render(description)}}
          null}
        </SectionHeader>
        {/* Maybe CTA */}

        <SectionItems>
          {props.items
            ? props.items.map((item, index) => (
                <Item key={index}>
                  {item} {index}
                </Item>
              ))
            : null}
        </SectionItems>
      </SectionContents>
    </SectionContainer>
  );
};

export default Section;
