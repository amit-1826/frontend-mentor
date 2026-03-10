import type { SessionModel } from "./store/SessionsContext";

export const DUMMY_SESSIONS: SessionModel[] = [
  {
    id: 1,
    title: "React Basics",
    author: "John Doe",
    aboutAuthor:
      "John Doe is a senior React developer with over 5 years of experience in building scalable web applications.",
    publishedAt: "2024-06-01T10:00:00Z",
    agenda: [
      "Introduction to React",
      "JSX and Components",
      "State and Props",
      "Lifecycle Methods",
    ],
    description:
      "Learn the fundamentals of React and how to build dynamic web applications.",
    imageUrl:
      "https://dummyjson.com/image/400x200/282828?fontFamily=Roboto&text=React+Basics&fontSize=16",
    preRequisites: [
      "Basic understanding of JavaScript",
      "Familiarity with HTML and CSS",
    ],
  },
  {
    id: 2,
    title: "Advanced JavaScript",
    author: "Jane Smith",
    aboutAuthor:
      "Jane Smith is a JavaScript expert with a passion for teaching and sharing knowledge about modern JavaScript features and best practices.",
    publishedAt: "2024-06-02T10:00:00Z",
    agenda: [
      "Advanced JavaScript Concepts",
      "Closures and Scope",
      "Prototypes and Inheritance",
      "Async Programming",
    ],
    preRequisites: [
      "Strong understanding of JavaScript fundamentals",
      "Experience with ES6+ features",
    ],
    description:
      "Deep dive into advanced JavaScript concepts and best practices.",
    imageUrl:
      "https://dummyjson.com/image/400x200/292929?fontFamily=Roboto&text=Advanced+JavaScript&fontSize=16",
  },
  {
    id: 3,
    title: "CSS Flexbox and Grid",
    author: "Alice Johnson",
    aboutAuthor:
      "Alice Johnson is a front-end developer specializing in CSS and responsive design, with a focus on creating visually appealing and user-friendly web interfaces.",
    preRequisites: [
      "Basic understanding of CSS",
      "Familiarity with HTML structure",
    ],
    publishedAt: "2024-06-03T10:00:00Z",
    agenda: [
      "CSS Flexbox Basics",
      "Flex Container Properties",
      "Flex Item Properties",
      "CSS Grid Layout",
    ],
    description:
      "Master CSS Flexbox and Grid to create responsive layouts with ease.",
    imageUrl:
      "https://dummyjson.com/image/400x200/272727?fontFamily=Roboto&text=CSS+Flexbox+and+Grid&fontSize=16",
  },
  {
    id: 4,
    title: "TypeScript for Beginners",
    author: "Bob Wilson",
    aboutAuthor:
      "Bob Wilson is a software engineer with extensive experience in TypeScript and JavaScript, passionate about helping developers transition to TypeScript for improved code quality and maintainability.",
    publishedAt: "2024-06-04T10:00:00Z",
    agenda: [
      "Introduction to TypeScript",
      "Static Types and Type Inference",
      "Interfaces and Types",
      "TypeScript with React",
    ],
    preRequisites: [
      "Basic understanding of JavaScript",
      "Familiarity with React (optional but recommended)",
    ],
    description:
      "Get started with TypeScript and learn how to add static types to your JavaScript code.",
    imageUrl:
      "https://dummyjson.com/image/400x200/262626?fontFamily=Roboto&text=TypeScript+for+Beginners&fontSize=16",
  },
  {
    id: 5,
    title: "Angular Fundamentals",
    author: "Charlie Brown",
    aboutAuthor:
      "Charlie Brown is an experienced Angular developer and trainer, known for his engaging teaching style and deep knowledge of Angular's core concepts and best practices.",
    publishedAt: "2024-06-05T10:00:00Z",
    agenda: [
      "Introduction to Angular",
      "Components and Templates",
      "Data Binding and Directives",
      "Services and Dependency Injection",
    ],
    preRequisites: [
      "Basic understanding of JavaScript",
      "Familiarity with TypeScript (optional but recommended)",
    ],
    description:
      "Learn the fundamentals of Angular and how to build dynamic web applications.",
    imageUrl:
      "https://dummyjson.com/image/400x200/252525?fontFamily=Roboto&text=Angular+Fundamentals&fontSize=16",
  },
  {
    id: 6,
    title: "Testing with Jest",
    author: "David Miller",
    aboutAuthor:
      "David Miller is a software tester and educator with expertise in JavaScript testing frameworks, particularly Jest, and a passion for teaching developers how to write effective tests for their applications.",
    publishedAt: "2024-06-06T10:00:00Z",
    agenda: [
      "Introduction to Jest",
      "Writing Unit Tests",
      "Mocking and Spying",
      "Testing React Components",
    ],
    preRequisites: [
      "Basic understanding of JavaScript",
      "Familiarity with React (optional but recommended)",
    ],
    description:
      "Learn how to write unit tests for your JavaScript applications using Jest.",
    imageUrl:
      "https://dummyjson.com/image/400x200/242424?fontFamily=Roboto&text=Testing+with+Jest&fontSize=16",
  },
  {
    id: 7,
    title: "Angular Advanced",
    author: "Eve Davis",
    aboutAuthor:
      "Eve Davis is a senior Angular developer and consultant with extensive experience in building complex Angular applications and a passion for sharing her knowledge of advanced Angular concepts and best practices.",
    publishedAt: "2024-06-07T10:00:00Z",
    agenda: [
      "Advanced Angular Concepts",
      "Change Detection and Performance",
      "Angular Universal",
      "State Management with NgRx",
    ],
    preRequisites: [
      "Strong understanding of Angular fundamentals",
      "Experience with TypeScript (optional but recommended)",
    ],
    description:
      "Learn advanced Angular concepts and best practices for building scalable applications.",
    imageUrl:
      "https://dummyjson.com/image/400x200/232323?fontFamily=Roboto&text=Angular+Advanced&fontSize=16",
  },
];
