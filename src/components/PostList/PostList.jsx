import { PostInfo } from '../PostInfo';

export const PostList = ({ posts, users, comments }) => {
  return (
    <div className="PostList">
      {posts.map(post => (
        <PostInfo post={post} users={users} key={post.id} comments={comments} />
      ))}
    </div>
  );
};
