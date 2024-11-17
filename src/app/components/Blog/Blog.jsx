import styles from './Blog.module.css';
import BlogCard from '../BlogCard/BlogCard';

const blogInfo = [
    {
        blogImage: '/blog/styleguide.webp',
        title: 'App Design Progress: Styleguide',
        date: 'October 11, 2024',
        description: "Here's a quick look at our progress on the app's style guide. Our moodboard, font choices, and color palette emphasize warmth, support, and professionalism.",
        authorImage: '/logo-only.svg',
        author: 'Crystal and Madoka',
        url: 'https://remedify-blog.vercel.app/posts/styleguide'
    },
    {
        blogImage: '/blog/dev-update01.webp',
        title: 'Development Team Progress Update',
        date: 'October 11, 2024',
        description: "Short developer update #1",
        authorImage: '/logo-only.svg',
        author: 'Deluka',
        url: 'https://remedify-blog.vercel.app/posts/dev-update01'
    },
    {
        blogImage: '/blog/marketing.webp',
        title: 'Marketing and Visual Story Advertisement Video Research',
        date: 'October 13, 2024',
        description: "Read here to understand our target marketing plan and align with our advertisement vision.",
        authorImage: '/logo-only.svg',
        author: 'Brian and Kenny',
        url: 'https://remedify-blog.vercel.app/posts/marketing-research'
    },
    {
        blogImage: '/blog/competitive.webp',
        title: 'Competitive Analysis: How Remedify Stands Out',
        date: 'October 14, 2024',
        description: "A deep dive into how Remedify stands out in a crowded market of medication management apps through innovative AI recognition and accessibility-focused design.",
        authorImage: '/logo-only.svg',
        author: 'Jillian and Yeongtaek',
        url: 'https://remedify-blog.vercel.app/posts/competitive-analysis'
    },
    {
        blogImage: '/blog/wireframe.webp',
        title: 'App Design Progress: Wireframe',
        date: 'October 19, 2024',
        description: "Here's a quick look at our progress on the app's wireframes.",
        authorImage: '/logo-only.svg',
        author: 'Crystal and Madoka',
        url: 'https://remedify-blog.vercel.app/posts/wireframe'
    }
];


export default function Blog() {
    return (
        <section className={styles.blog} id='blog'>
            <div className={styles.textContainer}>
                <h2 className={styles.title}>Blog</h2>
                <p>Follow our progress as we build the ultimate medication reminder app! In our blog, we share every step of our journey, from the initial spark of an idea to the final polished product.</p>
            </div>
            <div className={styles.catalog}>
                {blogInfo.map((blog, index) => {
                    return (
                        <BlogCard 
                            className={styles.blogCard}
                            key={index} 
                            blog={blog}
                            blogImage={blog.blogImage}
                            title={blog.title}
                            date={blog.date}
                            description={blog.description}
                            blogURL={blog.url}
                        />
                    )
                })}
            </div>
            <div className={styles.mobile}>
                <img src='/blog/mobile.svg' className={styles.mobileGraphic}/>
            </div>
            <div className={styles.button}>
                <a href='https://remedify-blog.vercel.app/' target="_blank">
                    <button className={styles.button}>More Blogs</button>
                </a>
            </div>
        </section>
        
    );
}
