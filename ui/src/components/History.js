import CodeIcon from '@mui/icons-material/Code';
import { Box, Chip, CircularProgress, Typography } from '@mui/material';
import React, { useCallback, useEffect, useRef } from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import {
  oneDark,
  oneLight,
} from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Virtuoso } from 'react-virtuoso';
import { useThemeContext } from '../contexts/ThemeContext';
import CodeBlock from './common/CodeBlock';

const History = ({
  responses,
  loading,
  prompt,
  onCodeExpand,
  onCodeSelected,
  selectedCode,
}) => {
  const { darkMode } = useThemeContext();
  const virtuoso = useRef(null);

  useEffect(() => {
    if (virtuoso.current) {
      virtuoso.current.scrollToIndex({
        index: responses.length - 1,
        align: 'end',
        behavior: 'smooth',
      });
    }
  }, [responses]);

  const handleCodeSelect = useCallback(
    (codeBlock) => {
      onCodeSelected((prevSelectedCode) => {
        const newSelectedCode =
          prevSelectedCode && prevSelectedCode.id === codeBlock.id
            ? null
            : codeBlock;
        onCodeExpand(!!newSelectedCode);
        return newSelectedCode;
      });
    },
    [onCodeExpand, onCodeSelected]
  );

  const renderMessageContent = useCallback(
    (message) => {
      let codeBlockCounter = 0;

      const renderCodeBlock = (language, content, blockId) => {
        const lineCount = content.split('\n').length;
        if (lineCount >= 5) {
          return (
            <Box
              key={blockId}
              onClick={() =>
                handleCodeSelect({ id: blockId, language, content })
              }
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                backgroundColor: (theme) =>
                  theme.palette.mode === 'dark'
                    ? 'rgba(255, 255, 255, 0.08)'
                    : 'rgba(255, 250, 250)',
                border: '1px solid',
                borderColor: (theme) =>
                  theme.palette.mode === 'dark'
                    ? 'rgba(255, 255, 255, 0.1)'
                    : 'rgba(0, 0, 0, 0.1)',
                borderRadius: 1,
                p: 1,
                my: 1,
                cursor: 'pointer',
                transition: 'all 0.2s',
                '&:hover': {
                  backgroundColor: (theme) =>
                    theme.palette.mode === 'dark'
                      ? 'rgba(255, 255, 255, 0.12)'
                      : 'rgba(63, 132, 81)',
                  borderColor: (theme) =>
                    theme.palette.mode === 'dark'
                      ? 'rgba(255, 255, 255, 0.2)'
                      : 'rgba(0, 0, 0, 0.2)',
                },
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <CodeIcon sx={{ mr: 1, color: 'text.secondary' }} />
                <Chip
                  label={language.toUpperCase()}
                  size="small"
                  sx={{
                    mr: 1,
                    color: 'text.primary',
                  }}
                />
                <Typography variant="body2" color="text.primary">
                  {lineCount} lines of code
                </Typography>
              </Box>
            </Box>
          );
        } else {
          return (
            <CodeBlock
              language={language}
              customStyles={{ container: { height: 'auto' } }}
            >
              {content}
            </CodeBlock>
          );
        }
      };

      const renderText = (text) => {
        const parts = text.split(/(`[^`]+`)/).filter(Boolean);
        return parts.map((part, index) => {
          if (part.startsWith('`') && part.endsWith('`')) {
            return renderInlineCode(part.slice(1, -1));
          } else {
            return (
              <ReactMarkdown
                key={index}
                components={{
                  p: ({ node, ...props }) => <span {...props} />,
                }}
              >
                {part}
              </ReactMarkdown>
            );
          }
        });
      };

      // todo: inline this or some other function to get the single backtick code working well
      const renderInlineCode = (content) => (
        <SyntaxHighlighter
          language="text"
          style={darkMode ? oneDark : oneLight}
          customStyle={{
            // todo: attempt at the above todo
            // display: 'inline-block',
            padding: '2px 4px',
            borderRadius: '4px',
            fontSize: '0.9em',
            backgroundColor: darkMode ? '#2d2d2d' : '#f0f0f0',
            maxHeight: '5.4em',
            overflowY: 'auto',
            verticalAlign: 'middle',
            lineHeight: '1.2em',
          }}
        >
          {content}
        </SyntaxHighlighter>
      );

      const parts = message.content.split(/(```[\s\S]*?```)/g);
      return parts.map((part, index) => {
        if (part.startsWith('```') && part.endsWith('```')) {
          const [, language, code] = part.match(/```(\w*)\n?([\s\S]*?)```/);
          const blockId = `${message.id}-${codeBlockCounter++}`;
          return renderCodeBlock(language, code.trim(), blockId);
        } else {
          return <Typography key={index}>{renderText(part)}</Typography>;
        }
      });
    },
    [darkMode, handleCodeSelect]
  );

  const aiLight = '#F6F6F6';
  const userLight = '#F6F6F6';

  const getBubbleStyle = useCallback(
    (isUser) => ({
      backgroundColor: isUser
        ? darkMode
          ? 'rgb(32, 33, 36)'
          : userLight
        : darkMode
        ? 'rgb(32, 33, 36)'
        : aiLight,
      borderRadius: 4,
      padding: '12px 16px',
      maxWidth: '80%',
      boxShadow: '0 1px 2px rgba(0, 0, 0, 0.1)',
    }),
    [darkMode]
  );

  if (loading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100%"
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box
      sx={{
        display: 'flex',
        height: '100%',
        maxHeight: '100%',
        // color: darkMode ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)',
        fontSize: 14,
      }}
    >
      <Box
        sx={{
          flexGrow: 1,
          flexBasis: selectedCode ? '60%' : '100%',
          overflowY: 'auto',
          padding: '16px',
        }}
      >
        <Virtuoso
          ref={virtuoso}
          style={{ height: '100%' }}
          totalCount={responses.length}
          overscan={200}
          itemContent={(index) => (
            <Box
              key={responses[index].id || index}
              display="flex"
              justifyContent={
                responses[index].role === 'user' ? 'flex-end' : 'flex-start'
              }
              mb={2}
            >
              <Box sx={getBubbleStyle(responses[index].role === 'user')}>
                {renderMessageContent(responses[index])}
              </Box>
            </Box>
          )}
          initialTopMostItemIndex={responses.length - 1}
          increaseViewportBy={{ top: 100, bottom: 100 }}
          computeItemKey={(index) => responses[index].id || index}
        />
      </Box>
    </Box>
  );
};

export default History;
