import { useState } from "react";
import { initialPosts } from "../../data/posts";
import type { Comment, Post } from "../../types/post";
import PostCard from "./PostCard";
import {
  addComment,
  addReply,
  deleteComment,
  likeComment,
} from "../../utils/commentHelper";

const PostWithNestedComments = () => {
  const [posts, setPosts] = useState<Post[]>(initialPosts);
  const [commentInputs, setCommentInputs] = useState<Record<number, string>>(
    {},
  );

  const handleInputChange = (postId: number, value: string) => {
    setCommentInputs((prev) => ({ ...prev, [postId]: value }));
  };

  const handleAddComment = (postId: number) => {
    const comment = commentInputs[postId]?.trim();

    if (!comment) return;

    setPosts((prev) =>
      prev.map((p) =>
        p.id === postId
          ? { ...p, comments: addComment(p.comments, comment) }
          : p,
      ),
    );

    setCommentInputs((prev) => ({
      ...prev,
      [postId]: "",
    }));
  };

  const handleLike = (postId: number, commentId: number) => {
    setPosts((prev) =>
      prev.map((post) =>
        post.id === postId
          ? {
              ...post,
              comments: likeComment(post.comments, commentId),
            }
          : post,
      ),
    );
  };

  const handleReply = (postId: number, commentId: number, text: string) => {
    const trimmedText = text.trim();
    if (!trimmedText) return;
    setPosts((prev) =>
      prev.map((post) =>
        post.id === postId
          ? {
              ...post,
              comments: addReply(post.comments, commentId, trimmedText),
            }
          : post,
      ),
    );
  };

  const handleDelete = (
    postId: number,
    comments: Comment[],
    commentId: number,
  ) => {
    setPosts((prev) =>
      prev.map((post) =>
        post.id === postId
          ? { ...post, comments: deleteComment(comments, commentId) }
          : post,
      ),
    );
  };

  return (
    <div className="max-w-4xl mx-auto py-10">
      <h1 className="text-3xl font-bold mb-8">Nested Comments</h1>

      {posts.map((post) => (
        <div
          key={post.id}
          className="bg-white rounded-2xl shadow-md border border-gray-200 p-6 mb-6 transition-all duration-300 hover:shadow-lg"
        >
          <PostCard post={post} onLike={handleLike} onReply={handleReply} onDelete={handleDelete} />

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              placeholder="Write a comment..."
              value={commentInputs[post.id] || ""}
              onChange={(e) => handleInputChange(post.id, e.target.value)}
              className="
          flex-1
          border
          border-gray-300
          rounded-xl
          px-4
          py-3
          outline-none
          transition-all
          duration-200
          focus:border-blue-500
          focus:ring-2
          focus:ring-blue-200
        "
            />

            <button
              onClick={() => handleAddComment(post.id)}
              className="
          bg-blue-600
          hover:bg-blue-700
          active:scale-95
          transition-all
          duration-200
          text-white
          px-5
          py-3
          rounded-xl
          font-medium
          cursor-pointer
        "
            >
              Add Comment
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostWithNestedComments;
