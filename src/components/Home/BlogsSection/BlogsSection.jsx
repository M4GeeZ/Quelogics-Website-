import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Clock3 } from "lucide-react";
import { realPhotos } from "../../../data/realPhotoData";
import "./BlogsSection.css";

// Same articles as the Insights page, so every card opens a real page.
const posts = [
  {
    category: "AI & Automation",
    title: "Where AI creates real operational value—and where it does not.",
    summary:
      "A practical way to separate useful automation opportunities from expensive demonstrations.",
    path: "/insights/ai-automation",
    readTime: "8 min read",
    image: realPhotos.ai,
  },
  {
    category: "Software & Product",
    title: "The decisions that make an MVP easier to evolve after launch.",
    summary:
      "How focused scope, clear architecture, and fast learning protect the next version of a product.",
    path: "/insights/software-product",
    readTime: "6 min read",
    image: realPhotos.software,
  },
  {
    category: "SEO, AEO & Growth",
    title: "Search visibility now starts before the customer reaches your website.",
    summary:
      "A clearer model for earning attention across search, answer engines, and high-intent journeys.",
    path: "/insights/seo-growth",
    readTime: "7 min read",
    image: realPhotos.seo,
  },
];

const BlogsSection = () => (
  <section className="blogs-section" aria-labelledby="blogs-heading">
    <div className="blogs-shell">
      <div className="blogs-head">
        <div>
          <span className="blogs-eyebrow">Insights</span>
          <h2 id="blogs-heading">Blogs</h2>
          <p>
            Stay up to date with practical thinking on AI, software, product
            design, and growth from the QueLogics team.
          </p>
        </div>
        <Link to="/insights" className="blogs-more">
          Read More
          <ArrowRight aria-hidden="true" />
        </Link>
      </div>

      <div className="blogs-grid">
        {posts.map((post) => (
          <article className="blog-card" key={post.path}>
            <Link to={post.path} className="blog-card-media" tabIndex={-1} aria-hidden="true">
              <img src={post.image} alt="" loading="lazy" decoding="async" />
              <span className="blog-card-tag">{post.category}</span>
            </Link>
            <div className="blog-card-body">
              <span className="blog-card-meta">
                <Clock3 aria-hidden="true" />
                {post.readTime}
              </span>
              <h3>
                <Link to={post.path}>{post.title}</Link>
              </h3>
              <p>{post.summary}</p>
              <Link to={post.path} className="blog-card-link">
                Know more
                <ArrowUpRight aria-hidden="true" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default BlogsSection;
