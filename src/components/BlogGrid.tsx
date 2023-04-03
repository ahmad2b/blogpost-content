import CardWImageBg from "@/components/CardWImageBg";

async function getBlogs() {
  const res = await fetch(
    `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/entries?access_token=${process.env.CONTENTFUL_ACCESS_KEY}&content_type=blogPosts`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function BlogGrid() {
  const blogs = await getBlogs();
  return (
    <div className="flex flex-wrap justify-center ">
      {blogs.items.map((item: any, index: number) => (
        <div key={index}>
          <CardWImageBg
            title={item.fields.title}
            content={item.fields.description}
            createdAt={item.fields.created}
            createdBy={blogs.includes.Entry.map((x: any) =>
              item.fields.author?.sys.id == x.sys.id ? x.fields.name : ""
            )}
            image={blogs.includes.Asset.filter(
              (a: any) => item.fields.image?.sys.id == a.sys.id
            ).map((a: any) => `https:${a.fields.file.url}`)}
          />
        </div>
      ))}
    </div>
  );
}
