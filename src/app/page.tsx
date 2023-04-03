import BlogGrid from "@/components/BlogGrid";

export default function Home() {
  return (
    <div>
      <h1 className="text-6xl font-bold mb-12 text-center">Blog Post</h1>

      {/* @ts-expect-error Async Server Component */}
      <BlogGrid />
    </div>
  );
}
