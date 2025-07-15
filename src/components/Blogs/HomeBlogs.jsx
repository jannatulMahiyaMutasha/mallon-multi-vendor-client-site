import React from "react";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    id: 1,
    title: "Covaxin vs Covishield – A Detailed Comparision",
    date: "June 4, 2021",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Uis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    image:
      "https://demo2.wpthemego.com/themes/sw_mallon/wp-content/uploads/2021/06/blog-21.jpg",
  },
  {
    id: 2,
    title: "Veritatis Eet Quasi Architecto Aeat Vitae DictaSunt",
    date: "2025-04-20",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Uis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    image: "https://demo2.wpthemego.com/themes/sw_mallon/wp-content/uploads/2021/06/blog-22.jpg",
  },
  {
    id: 3,
    title: "Nemo enim ipsam voluptatem quia",
    date: "2025-04-10",
      excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Uis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    image:
      "https://demo2.wpthemego.com/themes/sw_mallon/wp-content/uploads/2021/06/blog-23.jpg",
  }
];

const HomeBlog = () => {
  return (
    <section className="bg-white py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl">
            recent posts
          </h1>
        </div>

        <hr className="my-8 border-gray-200" />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {blogPosts.map((blog) => (
            <div key={blog.id}>
              <img
                className="object-cover w-full h-64 rounded-lg lg:h-80"
                src={blog.image}
                alt={blog.title}
              />
              <div className="mt-8">
                <span className="text-blue-500 uppercase">Blog</span>
                <h1 className="mt-4 text-xl font-semibold text-gray-800">
                  {blog.title}
                </h1>
                <p className="mt-2 text-gray-500">{blog.excerpt.slice(0,200)}</p>
                <div className="flex items-center justify-between mt-4">
                  <p className="text-sm text-gray-500">{blog.date}</p>
                  <Link
                    to={`/blog/${blog.id}`}
                    className="text-blue-500 underline hover:text-blue-400"
                  >
                    Read more
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeBlog;
