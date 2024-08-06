import { Box, Button, Typography } from '@mui/material';
import React, { useState } from 'react';
import History from './History'; // Adjust the import path as necessary

const fakeData = [
  { id: 1, role: 'user', content: 'Hello, can you help me with React?' },
  {
    id: 2,
    role: 'assistant',
    content:
      "Of course! I'd be happy to help you with React. What specific question or topic do you have in mind?",
  },
  { id: 3, role: 'user', content: 'Can you explain how to use hooks?' },
  {
    id: 4,
    role: 'assistant',
    content:
      "Certainly! React Hooks are functions that allow you to use state and other React features in functional components. Here's a brief overview of some common hooks:\n\n1. `useState`: Allows you to add state to functional components.\n\n```javascript\nconst [count, setCount] = useState(0);\n```\n\n2. `useEffect`: Lets you perform side effects in function components.\n\n```javascript\nuseEffect(() => {\n  document.title = `You clicked ${count} times`;\n}, [count]);\n```\n\n3. `useContext`: Subscribes to React context without introducing nesting.\n\n```javascript\nconst value = useContext(MyContext);\n```\n\nWould you like me to explain any of these hooks in more detail?",
  },
  {
    id: 5,
    role: 'user',
    content:
      'Can you show me an example of useState with some **markdown** formatting?',
  },
  {
    id: 6,
    role: 'assistant',
    content:
      "Absolutely! Here's an example of using `useState` with some Markdown formatting:\n\n**useState Example:**\n\nLet's create a simple counter component:\n\n```jsx\nimport React, { useState } from 'react';\n\nfunction Counter() {\n  const [count, setCount] = useState(0);\n\n  return (\n    <div>\n      <p>You clicked {count} times</p>\n      <button onClick={() => setCount(count + 1)}>\n        Click me\n      </button>\n    </div>\n  );\n}\n```\n\nIn this example:\n\n- We import `useState` from React.\n- We declare a state variable called `count` and a function to update it called `setCount`.\n- The initial value of `count` is set to 0.\n- When the button is clicked, we call `setCount` with the new value.\n\n*Remember*: When you use `useState`, you're telling React that you want this component to remember something between renders.\n\nIs there anything specific about `useState` that you'd like me to explain further?",
  },
];

const HistoryTest = () => {
  const [responses, setResponses] = useState(fakeData);
  const [loading, setLoading] = useState(false);
  const [selectedCode, setSelectedCode] = useState(null);
  const [isCodeExpanded, setIsCodeExpanded] = useState(false);

  const handleCodeExpand = (expanded) => {
    setIsCodeExpanded(expanded);
  };

  const handleCodeSelected = (codeBlock) => {
    setSelectedCode(codeBlock);
  };

  const addNewMessage = () => {
    setLoading(true);
    setTimeout(() => {
      const newMessage = {
        id: responses.length + 1,
        role: responses.length % 2 === 0 ? 'user' : 'assistant',
        content: `This is a new ${
          responses.length % 2 === 0 ? 'user' : 'assistant'
        } message with some \`inline code\` and **bold text**.`,
      };
      setResponses([...responses, newMessage]);
      setLoading(false);
    }, 1000);
  };

  return (
    <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Typography variant="h4" sx={{ p: 2 }}>
        History Component Test
      </Typography>
      <Button onClick={addNewMessage} variant="contained" sx={{ m: 2 }}>
        Add New Message
      </Button>
      <Box sx={{ flexGrow: 1, overflow: 'hidden' }}>
        <History
          responses={responses}
          loading={loading}
          prompt=""
          selectedCode={selectedCode}
          onCodeExpand={handleCodeExpand}
          onCodeSelected={handleCodeSelected}
        />
      </Box>
      {isCodeExpanded && selectedCode && (
        <Box
          sx={{
            height: '30%',
            overflow: 'auto',
            p: 2,
            borderTop: '1px solid grey',
          }}
        >
          <Typography variant="h6">Selected Code:</Typography>
          <pre>{selectedCode.content}</pre>
        </Box>
      )}
    </Box>
  );
};

export default HistoryTest;
