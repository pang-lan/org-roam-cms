import { getAllPosts } from "@/lib/api";
import Link from "next/link";

export default async function Page() {
  const allPosts = await getPostsinfo();
  // console.log(allPosts);
  return (
    <div className="ml-5">
      <ul className="list-disc list-inside">
        {allPosts.map((post) => (
          <li key={post.path} className="text-xl">
            <Link href={post.path} passHref>
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

async function getPostsinfo() {
  let allPosts = await getAllPosts();
  const posts = allPosts
    .map((p) => ({ title: p.data.title || p.basename, path: p.path }))
    .sort((a, b) => {
      return a.title.toLowerCase() < b.title.toLowerCase() ? -1 : 1;
    });
  return posts;
}
