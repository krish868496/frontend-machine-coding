import type { Post } from "../types/post";

export const initialPosts: Post[] = [
  {
    id: 1,
    title: "Learning React",
    comments: [
      {
        id: 1,
        text: "Great post",
        likes: 0,
        replies: [],
      },
    ],
  },
  {
    id: 2,
    title: "Learning JavaScript",
    comments: [
      {
        id: 2,
        text: "Very Helpful",
        likes: 0,
        replies: [],
      },
    ],
  },
];
