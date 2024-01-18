// mockData.js
import { v4 as uuidv4 } from "uuid";

const mockData = [
  {
    id: uuidv4(),
    title: " 📃 To Do",
    tasks: [
      {
        id: uuidv4(),
        title: "Organising and planning the portfolio",
      },
      {
        id: uuidv4(),
        title: "Obtain the APIS for the Master's dissertation",
      },
      {
        id: uuidv4(),
        title: "Learn how to make a login with Laravel",
      },
    ],
  },
  {
    id: uuidv4(),
    title: " ✏️ In Progress ",
    tasks: [
      {
        id: uuidv4(),
        title: "Learn React Js ",
      },
      {
        id: uuidv4(),
        title: "Learn Angular",
      },
      {
        id: uuidv4(),
        title: "Learn Node Js",
      },
    ],
  },
  {
    id: uuidv4(),
    title: " ✅ Completed",
    tasks: [
      {
        id: uuidv4(),
        title: "Basic handling of React js with Vite",
      },
      {
        id: uuidv4(),
        title: "Basic handling with information retrieval for web development",
      },
      {
        id: uuidv4(),
        title: "Improved rate of finding code errors",
      },
    ],
  },
];

export default mockData;
