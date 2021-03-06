// pages/_app.js
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import Head from "next/head";
import { BackgroundSecret } from "../components/BackgroundSecret";

import amplitude from "amplitude-js";
import {
  AmplitudeProvider,
  Amplitude,
  LogOnMount
} from "react-amplitude-hooks";

const SharedApp = ({ Component, pageProps }) => {
  const domain = "mutantdevs.com";
  const url = `https://${domain}`;
  
  const meta = {
    image: url + "/Logo_2A_1024x1024.png",
    title: "Join the MutantCats FISH Hackathon",
    type: "website",
    description:
      "25 ETH is prizes up for grabs by congtributing to the expanding Mutant Verse by hacking on our token protocol and invest new and exciting ways to use your $FISH token.",
    url,
    domain,
  };
  
  return (
    <>
      <Head>
        <title>Mutant World Fish Hackathon</title>
        <meta name="description" content={meta.description} />
        <link rel="icon" href="/Logo_2A_1024x1024.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;500&display=swap"
          rel="stylesheet"
          type={"text/css"}
        />
        <meta property="og:image" content={meta.image}></meta>
        <meta property="og:title" content={meta.title}></meta>
        <meta property="og:type" content={meta.type} />
        <meta property="og:description" content=""></meta>
        <meta property="og:url" content={meta.url}></meta>
      
        <meta name="twitter:card" content={meta.description} />
        <meta property="twitter:domain" content={meta.domain} />
        <meta property="twitter:url" content={meta.url} />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
    
      </Head>
      <BackgroundSecret />
      <Component {...pageProps} />
    </>
  )
}

export default function MyApp({ Component, pageProps }) {
  if(process.browser){
    return (
      <AmplitudeProvider amplitudeInstance={amplitude.getInstance()} apiKey={"ac8e022d8c510e8e1a2aef1e1fa4d34f"}>
        <Amplitude>
          <LogOnMount eventType={"app-load"}>
            <SharedApp Component={Component} {...pageProps}/>
          </LogOnMount>
        </Amplitude>
      </AmplitudeProvider>
    );
  } else {
    return (
      <SharedApp Component={Component} {...pageProps}/>
    );
  }
  
}
