import type { Comment, Post } from "../types/post";

export const likeComment = (
  comments: Comment[],
  commentId: number,
): Comment[] => {
  return comments.map((comment) => {
    if (comment.id === commentId) {
      return {
        ...comment,
        likes: comment.likes + 1,
      };
    }

    return {
      ...comment,
      replies: likeComment(comment.replies, commentId),
    };
  });
};

export const deleteComment = (
  comments: Comment[],
  commentId: number,
): Comment[] => {
  return comments
    .filter((comment) => comment.id !== commentId)
    .map((comment) => ({
      ...comment,
      replies: deleteComment(comment.replies, commentId),
    }));
};

export const addReply = (
  comments: Comment[],
  commentId: number,
  text: string,
): Comment[] => {
  return comments.map((comment) => {
    if (comment.id === commentId) {
      return { ...comment, replies: addComment(comment.replies, text) };
    }

    return {
      ...comment,
      replies: addReply(comment.replies, commentId, text),
    };
  });
};

export const addComment = (comments: Comment[], commentValue: string) => {
  return [
    ...comments,
    {
      id: Date.now(),
      text: commentValue,
      likes: 0,
      replies: [],
    },
  ];
};
