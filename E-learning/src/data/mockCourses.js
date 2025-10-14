// src/data/mockCourses.js

export const featuredCourses = [
  {
    id: 1,
    title: 'React - The Complete Guide 2025',
    instructor: 'Maximilian Schwarzmüller',
    rating: 4.7,
    reviews: 188354,
    price: 84.99,
    imageUrl: 'https://img-c.udemycdn.com/course/480x270/1362070_b9a1_2.jpg',
  },
  {
    id: 2,
    title: 'The Complete JavaScript Course 2025',
    instructor: 'Jonas Schmedtmann',
    rating: 4.8,
    reviews: 154129,
    price: 89.99,
    imageUrl: './src/assets/javascript.jpg',
  },
  {
    id: 3,
    title: 'Tailwind CSS From Scratch',
    instructor: 'Brad Traversy',
    rating: 4.6,
    reviews: 21543,
    price: 49.99,
    imageUrl: './src/assets/tailwind.jpg',
  },
  {
    id: 4,
    title: 'Figma UI UX Design Essentials',
    instructor: 'Daniel Walter Scott',
    rating: 4.5,
    reviews: 87432,
    price: 79.99,
    imageUrl: './src/assets/figma.jpg',
  }
];

export const allCourses = [
  {
    id: 1,
    title: 'React - The Complete Guide 2025',
    instructor: 'Maximilian Schwarzmüller',
    rating: 4.7,
    reviews: 188354,
    price: 84.99,
    imageUrl: 'https://img-c.udemycdn.com/course/480x270/1362070_b9a1_2.jpg',
    curriculum: [
      {
        title: 'Getting Started with React',
        lectures: [
          { id: '1-1', title: 'Welcome to the Course!', videoUrl: 'https://www.youtube.com/watch?v=Ke90Tje7VS0' },
          { id: '1-2', title: 'What is React and Why Use It?', videoUrl: 'https://www.youtube.com/watch?v=Q-fM3eS-sM4' },
        ],
      },
      {
        title: 'Core React Concepts',
        lectures: [
          { id: '2-1', title: 'Components & JSX', videoUrl: 'https://www.youtube.com/watch?v=FjIesg62yX0' },
          { id: '2-2', title: 'State & Props Deep Dive', videoUrl: 'https://www.youtube.com/watch?v=D-YvP8Oar_w' },
        ],
      },
      {
        title: 'Advanced React',
        lectures: [
          { id: '3-1', title: 'Context API Explained', videoUrl: 'https://www.youtube.com/watch?v=rtG_WJ4hXz4' },
          { id: '3-2', title: 'React Hooks Best Practices', videoUrl: 'https://www.youtube.com/watch?v=dpw9EHDh2bM' },
        ],
      },
    ],
  },
  {
    id: 2,
    title: 'The Complete JavaScript Course 2025',
    instructor: 'Jonas Schmedtmann',
    rating: 4.8,
    reviews: 154129,
    price: 89.99,
    imageUrl: '.src/assets/javascript.jpg',
    curriculum: [
      {
        title: 'Fundamentals of JavaScript',
        lectures: [
          { id: 'js-1', title: 'Introduction to JavaScript', videoUrl: 'https://www.youtube.com/watch?v=zofMnllkVfI' },
          { id: 'js-2', title: 'Variables and Data Types', videoUrl: 'https://www.youtube.com/watch?v=7xStNKTM3bE' },
        ],
      },
      {
        title: 'Modern JavaScript',
        lectures: [
          { id: 'js-3', title: 'ES6+ Features', videoUrl: 'https://www.youtube.com/watch?v=h33Srr5J9nY' },
          { id: 'js-4', title: 'Asynchronous JavaScript', videoUrl: 'https://www.youtube.com/watch?v=9j1dZwFEJ-c' },
        ],
      },
    ],
  },
  {
    id: 3,
    title: 'Tailwind CSS From Scratch',
    instructor: 'Brad Traversy',
    rating: 4.6,
    reviews: 21543,
    price: 49.99,
    imageUrl: './src/assets/tailwind.jpg',
    curriculum: [
      {
        title: 'Getting Started with Tailwind',
        lectures: [
          { id: 'tw-1', title: 'Introduction to Utility-First CSS', videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' }, // Dummy URL
          { id: 'tw-2', title: 'Installation and Setup', videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
        ],
      },
      {
        title: 'Building Components',
        lectures: [
          { id: 'tw-3', title: 'Responsive Design with Tailwind', videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
          { id: 'tw-4', title: 'Customizing Tailwind', videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
        ],
      },
    ],
  },
  {
    id: 4,
    title: 'Figma UI UX Design Essentials',
    instructor: 'Daniel Walter Scott',
    rating: 4.5,
    reviews: 87432,
    price: 79.99,
    imageUrl: './src/assets/figma.jpg',
    curriculum: [
      {
        title: 'Figma Basics',
        lectures: [
          { id: 'fig-1', title: 'Introduction to Figma Interface', videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
          { id: 'fig-2', title: 'Creating Your First Design', videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
        ],
      },
      {
        title: 'Advanced UI/UX',
        lectures: [
          { id: 'fig-3', title: 'Prototyping and Interactions', videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
          { id: 'fig-4', title: 'Design Systems in Figma', videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
        ],
      },
    ],
  },
  {
    id: 5,
    title: 'Python for Data Science and Machine Learning',
    instructor: 'Jose Portilla',
    rating: 4.6,
    reviews: 121876,
    price: 94.99,
    imageUrl: '.src/assets/python.jpg',
    curriculum: [
      {
        title: 'Python Fundamentals',
        lectures: [
          { id: 'py-1', title: 'Setting up Python Environment', videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
          { id: 'py-2', title: 'Variables and Data Structures', videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
        ],
      },
      {
        title: 'Data Science Libraries',
        lectures: [
          { id: 'py-3', title: 'Numpy for Numerical Operations', videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
          { id: 'py-4', title: 'Pandas for Data Analysis', videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
        ],
      },
    ],
  },
  {
    id: 6,
    title: 'The Web Developer Bootcamp 2025',
    instructor: 'Colt Steele',
    rating: 4.7,
    reviews: 254123,
    price: 84.99,
    imageUrl: '.src/assets/web.jpg',
    curriculum: [
      {
        title: 'HTML & CSS Essentials',
        lectures: [
          { id: 'wd-1', title: 'HTML Structure', videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
          { id: 'wd-2', title: 'CSS Styling', videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
        ],
      },
      {
        title: 'JavaScript for Web',
        lectures: [
          { id: 'wd-3', title: 'DOM Manipulation', videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
          { id: 'wd-4', title: 'Asynchronous JS', videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
        ],
      },
    ],
  },
  {
    id: 7,
    title: 'C# Unity Game Developer 2D',
    instructor: 'GameDev.tv Team',
    rating: 4.7,
    reviews: 98453,
    price: 99.99,
    imageUrl: 'https://img-c.udemycdn.com/course/480x270/258316_55e9_12.jpg',
    curriculum: [
      {
        title: 'Unity Basics',
        lectures: [
          { id: 'unity-1', title: 'Installing Unity Hub', videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
          { id: 'unity-2', title: 'First 2D Project', videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
        ],
      },
      {
        title: 'C# Scripting',
        lectures: [
          { id: 'unity-3', title: 'Variables and Functions', videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
          { id: 'unity-4', title: 'Player Movement', videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
        ],
      },
    ],
  },
  {
    id: 8,
    title: 'AWS Certified Solutions Architect - Associate',
    instructor: 'Stephane Maarek',
    rating: 4.8,
    reviews: 176342,
    price: 79.99,
    imageUrl: './src/assets/AWS.jpg',
    curriculum: [
      {
        title: 'AWS Fundamentals',
        lectures: [
          { id: 'aws-1', title: 'Introduction to AWS', videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
          { id: 'aws-2', title: 'IAM Services', videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
        ],
      },
      {
        title: 'Core AWS Services',
        lectures: [
          { id: 'aws-3', title: 'EC2 Basics', videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
          { id: 'aws-4', title: 'S3 Storage', videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
        ],
      },
    ],
  },
];