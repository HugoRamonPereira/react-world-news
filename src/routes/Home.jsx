import React from 'react';
import styles from './Home.module.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {

    try {
      const response = await axios.get('https://api.nytimes.com/svc/topstories/v2/world.json?api-key=isy3iOLhLOwz14I8n8x0MyhQb1ysQCDg');

      const data = response.data.results;
      console.log(data);

      setPosts(data);
    } catch (error) {
      console.log(error);
    }

  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div>
      <div>Latest News</div>
      {posts.length === 0 ? <h2>Loading...</h2> : (
        posts.map((post) => (
          <div className={styles.post} key={post.uri}>
            <h2>{post.title}</h2>
            <img src={post.multimedia[0].url} width={400} alt={post.des_facet} />
            <p>{post.abstract}</p>
            <small>{post.byline}</small>
            <Link to={post.url} target='_blank' className={styles.newsBtn}>Read original</Link>
          </div>
        ))
      )}
    </div>
  );
};

export default Home;


// yXloVupyYRXqflb2S8ZbzRCGV2HI5ZaV

// New York Times API
// pass: N3ws?8863
// isy3iOLhLOwz14I8n8x0MyhQb1ysQCDg
