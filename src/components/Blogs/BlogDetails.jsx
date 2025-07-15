import React from "react";
import { useParams } from "react-router-dom";

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

const BlogDetails = () => {
  const { id } = useParams();
  const blog = blogPosts.find((post) => post.id === parseInt(id));

  if (!blog) {
    return <div className="p-10 text-center">Blog not found.</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 mt-20">
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-96 object-cover rounded-lg mb-6"
      />
      <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
      <p className="text-gray-600 mb-2">{blog.date}</p>
      <hr className="mb-6" />
      <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-line">
        {blog.excerpt}
      </p>
    </div>
  );
};

export default BlogDetails;
