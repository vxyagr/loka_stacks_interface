import { ConnectButton } from "@rainbow-me/rainbowkit";
import type { NextPage } from "next";
import HeroSection from "../components/home/Hero";
import ValueSection from "../components/home/Value";
import NavigationBar from "../components/Navigation";
import HowItWorksSection from "../components/home/HowItWorks";
import LandingMeta from "../components/home/LandingMeta";
import Footer from "../components/Footer";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Loka Mining | Get More BTC, Pay Less $</title>
        <meta
          content="On-chain Bitcoin Mining as a Service, using excess power from renewable energy. Get your sats daily at 30%++ discount rate."
          name="description"
        />
        <link href="/favico_loka.png" rel="icon" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lexend:wght@300;500&display=swap"
          rel="stylesheet"
        />
        <LandingMeta />
      </Head>
      {/* Navigation */}
      <nav className="w-full h-20 sm:h-16 bg-custom-blue ">
        {/* Navigation content */}
        <NavigationBar />
      </nav>
      <div className="relative w-full justify-center background-mobile-static overflow-scroll  hide-scrollbar">
        <div className="bg-[#152233] bg-opacity-50 p-0 m-0">
          {/* Hero section */}
          <section className="w-full h-[100vh]">
            <HeroSection></HeroSection>
          </section>

          {/* Value section */}
          <section className="w-full">
            <ValueSection />
          </section>

          {/* How it works section
      
      <section className="w-full">
        <HowItWorksSection />
      </section>
      */}
          <section>
            <Footer />
          </section>
        </div>
        <div></div>
      </div>
    </div>
  );
};

/* return (
    <div className={styles.container}>
      <Head>
        <title>RainbowKit App</title>
        <meta
          content="Generated by @rainbow-me/create-rainbowkit"
          name="description"
        />
        <link href="/favicon.ico" rel="icon" />
      </Head>

      <main className={styles.main}>
        <ConnectButton />
        <HeroSection></HeroSection>
        <h1 className={styles.title}>
          Welcome to <a href="">RainbowKit</a> + <a href="">wagmi</a> +{" "}
          <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/index.tsx</code>
        </p>

        <div className={styles.grid}>
          <a className={styles.card} href="https://rainbowkit.com">
            <h2>RainbowKit Documentation &rarr;</h2>
            <p>Learn how to customize your wallet connection flow.</p>
          </a>

          <a className={styles.card} href="https://wagmi.sh">
            <h2>wagmi Documentation &rarr;</h2>
            <p>Learn how to interact with Ethereum.</p>
          </a>

          <a
            className={styles.card}
            href="https://github.com/rainbow-me/rainbowkit/tree/main/examples"
          >
            <h2>RainbowKit Examples &rarr;</h2>
            <p>Discover boilerplate example RainbowKit projects.</p>
          </a>

          <a className={styles.card} href="https://nextjs.org/docs">
            <h2>Next.js Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a
            className={styles.card}
            href="https://github.com/vercel/next.js/tree/canary/examples"
          >
            <h2>Next.js Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            className={styles.card}
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a href="https://rainbow.me" rel="noopener noreferrer" target="_blank">
          Made with ❤️ by your frens at 🌈
        </a>
      </footer>
    </div>
  );
};*/

export default Home;
