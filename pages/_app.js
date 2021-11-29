// pages/_app.js
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import Head from "next/head";
export default function MyApp({ Component, pageProps }) {
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
        <link rel="icon" href="/logo.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
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
      <Component {...pageProps} />
    </>
  );
}
