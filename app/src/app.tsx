import React, { useEffect, useState, ChangeEvent, FormEvent } from 'react';
import InnerHTML from 'dangerously-set-html-content';
import { getPosts, IPost, addPost } from './api/api';

function App() {
  const [ posts, setPosts ] = useState<IPost[]>([]);
  const [ newPost, setNewPost ] = useState<string>('');

  const loadPosts = async (): Promise<void> => {
    const posts = await getPosts();
    setPosts(posts);
  };

  useEffect(() => {
    loadPosts();
  }, []);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setNewPost(event.target.value);
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();
    await addPost(newPost);
    setNewPost('');
    await loadPosts();
  }

  return (
    <div className="container">
      <ul className="list-group">
        {posts.map(post => (
          <li key={post.id} className="list-group-item">
            <InnerHTML html={post.content} />
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
      <div className="form-group">
        <input type="text" className="form-control" name="name" value={newPost} onChange={handleChange}/>
      </div>
      <input type="submit" value="Submit" className="btn btn-primary"/>
    </form>
    </div>
  );
}

export default App;
