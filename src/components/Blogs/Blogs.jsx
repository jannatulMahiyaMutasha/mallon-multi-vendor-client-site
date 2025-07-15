import React from "react";
import { Link } from "react-router-dom";

const blogPosts = [
 {
    id: 1,
    title: "Covaxin vs Covishield – A Detailed Comparision",
    date: "June 4, 2021",
    excerpt:
      "Covaxin and Covishield are two widely used COVID-19 vaccines developed and distributed in India. Covaxin, developed by Bharat Biotech, is an inactivated vaccine using traditional methods. Covishield, developed by Oxford-AstraZeneca and manufactured by Serum Institute, uses a viral vector platform. Both vaccines have shown strong efficacy and safety in clinical trials. However, Covaxin is stored at 2-8°C, making it suitable for India’s infrastructure, while Covishield is more widely exported. Side effects for both are typically mild. Consult your doctor for the best option.",
    image:
      "https://demo2.wpthemego.com/themes/sw_mallon/wp-content/uploads/2021/06/blog-21.jpg",
  },
  {
    id: 2,
    title: "Veritatis Eet Quasi Architecto Aeat Vitae DictaSunt",
    date: "2025-04-20",
    excerpt:
      "This article explores the famous quote from classical Latin literature, delving into the philosophical meanings behind existence, architecture, and the human experience. The phrase, often misinterpreted, points to the deep-rooted understanding of design in life and how truth is often built from shared narratives. We analyze interpretations from both ancient scholars and modern thinkers.",
    image:
      "https://demo2.wpthemego.com/themes/sw_mallon/wp-content/uploads/2021/06/blog-22.jpg",
  },
  {
    id: 3,
    title: "Nemo enim ipsam voluptatem quia",
    date: "2025-04-10",
    excerpt:
      "In this blog post, we analyze the Latin phrase often seen in legal and philosophical discussions. 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit' translates to 'No one rejects, dislikes, or avoids pleasure itself because it is pleasure.' We break down the context of this saying, explore its legal relevance, and discuss its frequent use in placeholder text (like Lorem Ipsum) in design mockups.",
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
                <p className="mt-2 text-gray-500">{blog.excerpt}</p>
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
