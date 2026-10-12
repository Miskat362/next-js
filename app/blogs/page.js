export default function Blogs() {
  const blogs = [
    {
      id: 1,
      title: "Blog 1",
      description: "Description 1",
    },
    {
      id: 2,
      title: "Blog 2",
      description: "Description 2",
    },
    {
      id: 3,
      title: "Blog 3",
      description: "Description 3",
    },
  ];
  return (
    <main className="mt-10">
      <div>
        Blogs
        <ul>
          {blogs.map((blog) => (
            <li className="mb-2" key={blog.id}>
              {blog.title}
              <br />
              <Link href={`/blogs/${blog.id}`}>View Details</Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}