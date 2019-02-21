import React from "react";
import { navigate, graphql } from "gatsby";

import Layout from "../components/layout";

import Section from "../components/section";
import NavigationArrows from "../components/navigationArrows";

class RandomPage extends React.Component {
  componentDidMount() {
    this.checkSize();
    window.addEventListener("resize", this.checkSize);
    setTimeout(() => window.addEventListener("keydown", this.onKeyDown), 1000);
  }

  checkSize = () => {
    const currentSize = window.innerWidth;
    if (currentSize < 641) navigate("/");
  };

  onKeyDown(e) {
    if (document.readyState === "complete" && e.key === "ArrowRight")
      document.getElementById("rightArrow").click();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.checkSize);
    window.removeEventListener("keydown", this.onKeyDown);
  }

  render() {
    const {
      title,
      description,
      items,
      texture,
      background,
    } = this.props.data.allDataYaml.edges[0].node.random;
    return (
      <Layout
        from={this.props.location.state ? this.props.location.state.from : null}
      >
        <Section
          title={title}
          description={description}
          items={items}
          index={texture}
          background={background}
        />
        <NavigationArrows right={"/"} rightText={"back"} />
      </Layout>
    );
  }
}

export default RandomPage;

export const pageQuery = graphql`
  query {
    allDataYaml {
      edges {
        node {
          random {
            title
            items {
              title
            }
            description
            background
            texture
          }
        }
      }
    }
  }
`;
