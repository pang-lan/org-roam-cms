import Head from "next/head";
import { getAllPaths, getPostBySlug } from "@/lib/api";
import Link from "next/link";
import Rehype from "@/components/Rehype";

export default async function Note({ params }: { params: { slug: any } }) {
  const Post = await getPost({ slug: params.slug });
  return (
    <>
      <Head>
        <title>{Post.title}</title>
      </Head>
      <h1 className="text-xl">My Post: {params.slug}</h1>
      <Rehype hast={Post.hast} />
      {!!Post.backlinks.length && (
        <section>
          <h2>{"Backlinks"}</h2>
          <ul>
            {Post.backlinks.map((b) => (
              <li key={b.path}>
                <Link href={b.path} passHref>
                  {b.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}
    </>
  );
}

async function getPost({ slug }: { slug: string }) {
  const path = `/${slug}`;
  const post = await getPostBySlug(path);
  const data = await post.data;
  const backlinks = await Promise.all([...data.backlinks].map(getPostBySlug));
  return {
    title: data.title || post.basename,
    hast: post.result,
    backlinks: backlinks.map((b) => ({
      path: b.path,
      title: b.data.title || b.basename,
    })),
  };
}
