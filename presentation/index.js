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
  logo: require("../assets/rangle-logo.svg"),
  xkcd: require("../assets/xkcd-installing.png"),
  downasaur: require("../assets/downasaur.jpg"),
  lighthouse: require("../assets/lighthouse-logo.png"),
  lighthouseReport: require("../assets/lighthouse-report.gif"),
  httpsMeme: require("../assets/https-buzz.jpg"),
  noJS: require("../assets/no-js.png"),
  thinkingFace: require("../assets/thinking-face.png"),
  appShellContent: require("../assets/app-shell-content.png"),
  androidInstallBanner: require("../assets/install-to-home-screen.png"),
  androidInstalled: require("../assets/android-installed.png"),
  androidSplash: require("../assets/android-splash.png"),
  iosApp: require("../assets/ios-app.gif"),
  angular2hn: require("../assets/angular2-hn.png"),
  citii: require("../assets/citii.png"),
  endMeme: require("../assets/end-meme.jpg")
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
            lang="js"
            code={require("raw-loader!../assets/service-worker-add-example")}
            ranges={[
              { loc: [0, 1], title: "Adding" },
              { loc: [2, 6] },
              { loc: [7, 8] }
            ]}
          />
          <CodeSlide
            transition={["fade"]}
            lang="js"
            textSize=".7em"
            code={require("raw-loader!../assets/service-worker-register-example")}
            ranges={[
              { loc: [0, 11], title: "Registering" },
              { loc: [2, 3] },
              { loc: [3, 7] }
            ]}
          />
          <Slide transition={["slide"]} bgColor="primary" textColor="secondary">
            <Image src={images.thinkingFace} height="200px"/>
          </Slide>
          <Slide transition={["slide"]} bgColor="secondary">
            <Heading size={1} fit caps lineHeight={1} textColor="primary">
              1. Application Shell
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary" textColor="secondary">
            <Image src={images.appShellContent} height="700px"/>
          </Slide>
          <CodeSlide
            transition={["fade"]}
            lang="js"
            textSize=".8em"
            code={require("raw-loader!../assets/service-worker-add-example-with-config")}
            ranges={[
              { loc: [0, 5], title: "WITH CONFIG" },
              { loc: [2, 3] }
            ]}
          />
          <CodeSlide
            transition={["fade"]}
            lang="js"
            code={require("raw-loader!../assets/sw-precache-config")}
            ranges={[
              { loc: [0, 13], title: "CONFIG" },
              { loc: [1, 8] },
              { loc: [8, 9] },
              { loc: [9, 10] },
              { loc: [10, 11] }
            ]}
          />
          <Slide transition={["slide"]} bgColor="secondary">
            <Heading size={1} fit caps lineHeight={1} textColor="primary">
              2. Dynamic Content
            </Heading>
          </Slide>
          <CodeSlide
            transition={["fade"]}
            lang="js"
            code={require("raw-loader!../assets/sw-precache-config-runtime-caching")}
            ranges={[
              { loc: [0, 0], title: "RUNTIME CACHING" },
              { loc: [11, 15] }
            ]}
          />
          <Slide transition={["slide"]} bgColor="secondary">
            <Heading size={1} fit caps lineHeight={1} textColor="primary">
              Add to Homescreen
            </Heading>
          </Slide>
          <CodeSlide
            transition={["fade"]}
            lang="js"
            code={'<link rel="manifest" href="/manifest.json">'}
            ranges={[
              { loc: [0, 1], title: "WEB APP MANIFEST" }
            ]}
          />
          <CodeSlide
            transition={["fade"]}
            lang="json"
            code={require("raw-loader!../assets/manifest")}
            ranges={[
              { loc: [0, 22], title: "WEB APP MANIFEST" },
              { loc: [1, 3] },
              { loc: [3, 15] },
              { loc: [15, 19] },
              { loc: [19, 20] }
            ]}
          />
          <Slide transition={["slide"]} bgColor="secondary" textColor="primary">
            <Heading size={5} textColor="primary" caps>Chromium on Android</Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="secondary" textColor="primary">
            <Text textAlign="center" textColor="primary" textSize="1em">App install banner with repeat visits</Text>
            <Image src={images.androidInstallBanner} height="700px"/>
          </Slide>
          <Slide transition={["slide"]} bgColor="secondary" textColor="primary">
            <Text textAlign="center" textColor="primary" textSize="1em">Can install to homescreen</Text>
            <Image src={images.androidInstalled} height="700px"/>
          </Slide>
          <Slide transition={["slide"]} bgColor="secondary" textColor="primary">
            <Text textAlign="center" textColor="primary" textSize="1em">Splash Screen</Text>
            <Image src={images.androidSplash} height="700px"/>
          </Slide>
          <Slide transition={["slide"]} bgColor="secondary" textColor="primary">
            <Heading size={5} textColor="primary" caps>Safari on iOS</Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="secondary" textColor="primary">
            <Text textAlign="center" textColor="primary" textSize="1.5em">Can install to homescreen</Text>
            <Appear><Text textAlign="center" textColor="primary" textSize="1.5em">but that's it...</Text></Appear>
          </Slide>
          <CodeSlide
            transition={["fade"]}
            lang="html"
            code={require("raw-loader!../assets/apple-meta-tags")}
            ranges={[
              { loc: [0, 1], title: "Apple-Specific Meta Tags" },
              { loc: [2, 8] },
              { loc: [9, 16] },
              { loc: [16, 24] }
            ]}
          />
          <Slide transition={["slide"]} bgColor="primary" textColor="primary">
            <Image src={images.iosApp} height="700px"/>
          </Slide>
          <Slide transition={["slide"]} bgColor="secondary">
            <Heading size={1} fit caps lineHeight={1} textColor="primary">
              Progressive enhancement
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="#f0db4f" textColor="secondary">
            <Image src={images.noJS} margin="0px auto 0px" height="300px"/>
          </Slide>
          <CodeSlide
            transition={["fade"]}
            lang="js"
            code={require("raw-loader!../assets/no-script")}
            ranges={[
              { loc: [0, 4], title: "<noscript>" }
            ]}
          />
          <Slide transition={["slide"]} bgColor="secondary" textColor="primary">
            <BlockQuote>
              <Quote textSize="1.5em" textColor="primary">SWPrecacheWebpackPlugin</Quote>
            </BlockQuote>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary" textColor="secondary">
            <Text textColor="secondary" textAlign="center" textSize="1em">Angular</Text>
            <Image src={images.angular2hn} height="600px"/>
          </Slide>
          <Slide transition={["slide"]} bgColor="#333" textColor="primary">
            <Text textColor="primary" textAlign="center" textSize="1em">React</Text>
            <Image src={images.citii} height="700px" margin="-20px auto 0px"/>
          </Slide>
          <Slide transition={["slide"]} bgColor="secondary" textColor="primary">
            <BlockQuote>
              <Quote textSize="1.5em" textColor="primary">create-react-pwa</Quote>
              <Cite textColor="quartenary">jeffposnick</Cite>
            </BlockQuote>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary" textColor="secondary">
            <Image src={images.endMeme}/>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
