import Head from "next/head";
import "tailwindcss/tailwind.css";
import Query from "../components/query";
import AUTOS_QUERY from "../apollo/queries/autos/autos";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col px-48 max-w48">
      <Query query={AUTOS_QUERY}>
        {({ data: { autos } }) => {
          return (
            <div>
              <Head>
                <title>Exotic Auto Collection</title>
                <link rel="icon" href="/favicon.ico" />
              </Head>

              <main className="">
                <h1 className="">
                  Welcome to Exotic Auto Collection
                </h1>
                <p className="">
                  Get started by editing{" "}
                  <code className="">pages/index.js</code>
                </p>
                <div className="">
                  {autos.map((auto) => {
                    return (
                      <div className="" key={auto.slug}>
                        <div className="">
                          <Image
                            src={auto.image[0].url}
                            layout="fill"
                            alt={auto.title}
                          ></Image>
                        </div>
                        <h2>
                          {auto.title} - {auto.price}
                        </h2>
                        <p>{auto.description}</p>
                        <p>{auto.specs}</p>
                      </div>
                    );
                  })}
                </div>
              </main>
              <footer className="">
                <a
                  href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Powered by{" "}
                  <img
                    src="/vercel.svg"
                    alt="Vercel Logo"
                    className=""
                  />
                </a>
              </footer>
            </div>
          );
        }}
      </Query>
    </div>
  );
}
