import { BlogPosts } from "app/components/posts";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        My Portfolio
      </h1>
      <p className="mb-4">
        {
          "After graduating from college, I began tutoring math at Mathnasium Learning Center in Brooklyn before getting promoted to Assistant Director of 5 different branch locations in Brooklyn and Manhattan where I honed my deductive reasoning, and logical problem solving skills. In August 2022 I decided to make that move and learn how to become a software developer at FullStack Academy. I'm incredibly excited to show you the projects I've worked on since then and would love to talk about any questions or feedback if you have any. Email me at riley.j.mack@gmail.com."
        }
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}
