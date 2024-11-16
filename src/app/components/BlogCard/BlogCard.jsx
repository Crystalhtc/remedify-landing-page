import styles from './BlogCard.module.css';

export default function BlogCard({ blogImage, title, date, description, authorImage, author, blogURL }) {
    return (
        <div className={styles.blogCard}>
            <a href={blogURL} target="_blank">
                <div className={styles.blogImageContainer}>
                <img src={blogImage} className={styles.blogImage}/>
                </div>
                <div className={styles.blog}>
                    <h3 className={styles.blogTitle}>{title}</h3>
                    <p className={styles.blogDate}>{date}</p>
                    <p className={styles.blogDescription}>{description}</p>
                </div>
                <div className={styles.authorContainer}>
                    <img src={authorImage} className={styles.authorImage}/>
                    <p className={styles.author}>{author}</p>
                </div>
            </a>
            
        </div>
    );
}
