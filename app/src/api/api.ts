export interface IPost {
  id: number;
  content: string;
}

export const getPosts = async (): Promise<IPost[]> => {
  try {
    const response = await fetch('http://localhost:3001/posts');
    return await response.json();
  } catch(e) {
    console.log('failed to get posts', e);
    return Promise.resolve([]);
  }
};

export const addPost = async (content: string): Promise<void> => {
  try {
    await fetch('http://localhost:3001/posts', {
      method: 'post',
      body: JSON.stringify({ content }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch(e) {
    console.log('failed to add post', e);
    return Promise.resolve();
  }
};