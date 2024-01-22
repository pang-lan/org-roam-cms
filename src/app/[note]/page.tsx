import { join } from "path";
import Head from "next/head";
import { getAllPaths, getPostBySlug } from "@/lib/api";
import Link from "next/link";
import Rehype from "@/components/Rehype";

export default function Note({ params }: { params: { slug: string } }) {
  return (
    <>
      <Head>
        <title>{params.slug}</title>
      </Head>
      <h1 className="text-xl">My Post: {params.slug}</h1>
      <Rehype hast={params.passharf} />
      {!!backlinks.length && (
        <section>
          <h2>{"Backlinks"}</h2>
          <ul>
            {backlinks.map((b) => (
              <li key={b.path}>
                <Link href={b.path}>{b.title}</Link>
              </li>
            ))}
          </ul>
        </section>
      )}
    </>
  );
}
