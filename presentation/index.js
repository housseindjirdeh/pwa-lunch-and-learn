// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Deck,
  Heading,
  ListItem,
  Appear,
  List,
  Quote,
  Slide,
  Image,
  Text,
  Cite,
  Spectacle
} from "spectacle";

import CodeSlide from "spectacle-code-slide";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/rangle-logo.svg"),
  markdown: require("../assets/markdown.png"),
  xkcd: require("../assets/xkcd-installing.png"),
  downasaur: require("../assets/downasaur.jpg"),
  lighthouse: require("../assets/lighthouse-logo.png"),
  lighthouseReport: require("../assets/lighthouse-report.gif"),
  httpsMeme: require("../assets/https-buzz.jpg"),
  noJS: require("../assets/no-js.png")
};

preloader(images);

const theme = createTheme({
  primary: "white",
  secondary: "#422d51",
  tertiary: "#422e51",
  quartenary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["fade"]} bgColor="primary">
          <Image src={images.xkcd.replace("/", "")} margin="0px auto 40px" height="600px"/>
           <Text textSize="0.3em" margin="20px 0px 0px" bold>XKCD / Installing</Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Progressive Web Applications
          </Heading>
          <Image src={images.logo} margin="40px auto 0px" height="20px"/>
        </Slide>
        <Slide transition={["slide"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote textSize="1.5em" textColor="primary">Uses modern web capabilities to provide a user experience similar to native apps</Quote>
          </BlockQuote>
        </Slide>
        <Slide transition={["slide"]} bgColor="primary" textColor="secondary">
          <Image src={images.lighthouse} margin="-70px auto 0px"/>
        </Slide>
        <Slide transition={["fade"]} bgImage={images.lighthouse.replace("/", "")} bgDarken={0.75}>
          <BlockQuote>
            <Quote textSize="1.5em" textColor="primary">
              Lighthouse analyzes web apps and web pages, collecting modern performance metrics and insights on developer best practices.
            </Quote>
            <Cite textColor="quartenary">Google Chrome Lighthouse</Cite>
          </BlockQuote>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="secondary">
          <Image src={images.lighthouseReport} margin="-70px auto 0px"/>
        </Slide>
        <Slide transition={["slide"]} bgColor="secondary">
          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            Network connection is secure
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="secondary">
          <Image src={images.httpsMeme} />
        </Slide>
        <Slide transition={["slide"]} bgColor="secondary">
          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            Can work with poor/no connection
          </Heading>
        </Slide>
        <Slide transition={["slide"]} bgColor="#f5f5f5" textColor="secondary">
          <Image src={images.downasaur}/>
        </Slide>
        <Slide transition={["fade"]} bgImage={images.downasaur.replace("/", "")} bgDarken={0.75}>
          <BlockQuote>
            <Quote textSize="1.5em" textColor="primary">
                A service worker is a script that runs in the background of your browser when you view a webpage.
            </Quote>
            </BlockQuote>
        </Slide>
        <Slide transition={["slide"]} bgColor="primary" textColor="secondary">
          <Heading size={8} textColor="secondary" caps>Adding a Service Worker</Heading>
          <List>
            <Appear><ListItem textSize="1em">1. Add the file and write the logic yourself</ListItem></Appear>
            <Appear><ListItem textSize="1em">2. Use Service Worker Precache</ListItem></Appear>
          </List>
        </Slide>
        <Slide transition={["slide"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote textSize="1.5em" textColor="primary">sw-precache integrates with your build process</Quote>
          </BlockQuote>
        </Slide>
        <CodeSlide
          transition={["fade"]}
          lang="jsx"
          code={require("raw-loader!../assets/service-worker-add-example")}
          ranges={[
            { loc: [0, 1], title: "Adding" },
            { loc: [2, 6] },
            { loc: [7, 8] }
          ]}
        />
        <CodeSlide
          transition={["fade"]}
          lang="jsx"
          textSize=".6em"
          code={require("raw-loader!../assets/service-worker-register-example")}
          ranges={[
            { loc: [0, 11], title: "Registering" },
            { loc: [2, 3] },
            { loc: [3, 7] }
          ]}
        />
      <Slide transition={["fade"]} bgColor="secondary">
          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            Progressive enhancement
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="#f0db4f" textColor="secondary">
          <Image src={images.noJS} margin="0px auto 0px" height="300px"/>
        </Slide>
        <CodeSlide
          transition={["fade"]}
          lang="jsx"
          code={require("raw-loader!../assets/no-script")}
          ranges={[
            { loc: [0, 4], title: "<noscript>" }
          ]}
        />
      </Deck>
      </Spectacle>
    );
  }
}
