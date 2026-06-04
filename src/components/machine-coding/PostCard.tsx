import type { Comment, Post } from "../../types/post";
import CommentItem from "./CommentItem";

type Props = {
  post: Post;
  onLike: (postId: number, commentId: number) => void;
  onReply: (postId: number, commentId: number, text: string) => void;
  onDelete: (postId: number, comments: Comment[], commentId: number) => void;
};

const PostCard = ({ post, onLike, onReply, onDelete }: Props) => {
  return (
    <div className="bg-white rounded-lg shadow p-5">
      <h2 className="text-xl font-semibold">{post.title}</h2>
      {post.comments.length > 0 ? (
        post.comments.map((comment) => (
          <CommentItem
            comment={comment}
            onLike={(commentId) => onLike(post.id, commentId)}
            onReply={(commentId, text) => onReply(post.id, commentId, text)}
            onDelete={(commentId) => onDelete(post.id, post?.comments, commentId)}
          />
        ))
      ) : (
        <p>No comments</p>
      )}
    </div>
  );
};

export default PostCard;
