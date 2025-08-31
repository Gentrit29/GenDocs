import type { ReactNode } from "react";

import Link from "@docusaurus/Link";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";

import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import { Cards, cards } from "../lib/cards";

function HomeHeader() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header id="tw-scope">
      <div className="flex flex-col items-center lg:flex-row lg:justify-between">
        <div className="order-2 mt-5 space-y-2 lg:order-1 lg:mt-0 lg:space-y-4">
          <div className="space-y-2 text-center text-3xl font-bold sm:text-5xl lg:text-left">
            <Heading as="h1" className="text-green-500">
              {siteConfig.title}
            </Heading>
            <p className="dark:text-gray-200">{siteConfig.tagline}</p>
          </div>
          <div className="mt-10 space-x-2 text-center lg:text-left">
            <Link
              to="/docs/intro"
              className="rounded-3xl bg-green-500 p-3 text-lg text-white transition-colors duration-300 ease-in hover:bg-green-400"
            >
              Explore
            </Link>
            <a
              href="https://github.com/Gentrit29/GenDocs"
              target="_blank"
              rel="noreferrer noopener"
              className="rounded-3xl border border-gray-300 p-3 text-lg text-black transition-colors duration-300 ease-in hover:border-gray-400 dark:border-gray-500 dark:bg-neutral-800 dark:text-gray-300 dark:hover:border-gray-300"
            >
              GitHub
            </a>
          </div>
        </div>
        <div className="order-1 max-w-[350px] sm:max-w-[400px] lg:order-2 xl:max-w-[500px]">
          <img src="img/gendocs-logo.png" alt="temp" className="object-cover" />
        </div>
      </div>
    </header>
  );
}

function HeroCard({ title, description, icon: Icon }: Cards) {
  return (
    <div className="w-full rounded-lg border border-gray-200 transition-colors duration-300 hover:border-green-500 dark:border-transparent dark:bg-neutral-800 dark:hover:border-green-500">
      <div className="space-y-4 p-6">
        <div className="w-fit rounded-lg bg-green-500 p-2">
          <Icon className="h-6 w-6 text-white dark:text-gray-200" />
        </div>
        <div className="space-y-1">
          <h1 className="text-xl text-gray-800 dark:text-gray-200">{title}</h1>
          <p className="text-base text-gray-700 dark:text-gray-300">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="Home"
      description="Description will go into a meta tag in <head />"
    >
      <div className="mt-10 px-10 lg:px-20 xl:px-32 2xl:px-72">
        <HomeHeader />
        <main>
          <div className="mt-32 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {cards.map((card) => (
              <HeroCard key={card.title} {...card} />
            ))}
          </div>
        </main>
      </div>
    </Layout>
  );
}
