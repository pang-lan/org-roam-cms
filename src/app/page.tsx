import { getAllPosts } from "@/lib/api";
import MyLink from "@/components/Link";
import { Button } from "@/components/ui/button";

export default async function Page() {
  const allPosts = await getPostsinfo();
  // console.log(allPosts);
  return (
    <div className="ml-5">
      <Button variant={"outline"}>Index</Button>
      <ul className="list-disc list-inside">
        {allPosts.map((post) => (
          <li key={post.path} className="text-xl">
            <MyLink href={post.path}>{post.title}</MyLink>
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
