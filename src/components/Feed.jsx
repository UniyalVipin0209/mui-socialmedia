import { Box } from "@mui/material";
import React from "react";
import Post from "./Post";

const posts = [
  {
    id: 1,
    title: "Beautiful evening",
    imgurl:
      "https://images.unsplash.com/photo-1542442828-287217bfb87f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    postedDate: "September 16, 2023",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas optio aliquam quo deleniti suscipit eius, quis culpa pariatur ut fugit sed laudantium quas. Nulla nam voluptatem vero neque deleniti at, nesciunt sequi animi voluptates ratione aperiam? Debitis.",
  },
  {
    id: 2,
    title: "Beautiful evening",
    imgurl:
      "https://images.unsplash.com/photo-1542397284385-6010376c5337?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80",
    postedDate: "September 16, 2023",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas optio aliquam quo deleniti suscipit eius, quis culpa pariatur ut fugit sed laudantium quas. Nulla nam voluptatem vero neque deleniti at, nesciunt sequi animi voluptates ratione aperiam? Debitis.",
  },
  {
    id: 3,
    title: "Party at town",
    imgurl:
      "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80",
    postedDate: "January 24, 2023",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas optio aliquam quo deleniti suscipit eius, quis culpa pariatur ut fugit sed laudantium quas. Nulla nam voluptatem vero neque deleniti at, nesciunt sequi animi voluptates ratione aperiam? Debitis.",
  },
  {
    id: 4,
    title: "Temples",
    imgurl:
      "https://images.unsplash.com/photo-1490077476659-095159692ab5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1451&q=80",
    postedDate: "March 16, 2023",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas optio aliquam quo deleniti suscipit eius, quis culpa pariatur ut fugit sed laudantium quas. Nulla nam voluptatem vero neque deleniti at, nesciunt sequi animi voluptates ratione aperiam? Debitis.",
  },
  {
    id: 5,
    title: "Artistic",
    imgurl:
      "https://images.unsplash.com/photo-1542461927-dd68c85adc56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2535&q=80",
    postedDate: "September 18, 2022",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas optio aliquam quo deleniti suscipit eius, quis culpa pariatur ut fugit sed laudantium quas. Nulla nam voluptatem vero neque deleniti at, nesciunt sequi animi voluptates ratione aperiam? Debitis.",
  },
];
const Feed = () => {
  return (
    <Box flex={4}>
      {posts.map((p) => (
        <Post
          key={p.id}
          imgurl={p.imgurl}
          title={p.title}
          postedDate={p.postedDate}
          content={p.content}
        />
      ))}
    </Box>
  );
};

export default Feed;
