import React, { useCallback, useContext, useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import PromptPresentation from '../components/Prompt';
import { useAuth } from '../contexts/Auth';
import { TitleContext } from '../contexts/TitleContext';
import useApi from '../hooks/useAPI';

const PromptContainer = () => {
  const location = useLocation();
  const [chatId, setChatId] = useState('');
  const [prompt, setPrompt] = useState('');
  const [responses, setResponses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [promptError, setPromptError] = useState(false);
  const [error, setError] = useState(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const { setTitle } = useContext(TitleContext);
  const [isCodeExpanded, setIsCodeExpanded] = useState(false);
  const [selectedCode, setSelectedCode] = useState(null);
  const { token } = useAuth();
  const { chats: chatsApi, chatMessages: messagesApi } = useApi();
  const { id } = useParams();

  const [shouldFetchChat, setShouldFetchChat] = useState(true);
  const [shouldFetchMessages, setShouldFetchMessages] = useState(true);

  // fetches the chat itself, w/ the ai generated title from the first 1-4 prompts
  const fetchChat = useCallback(async () => {
    if (!shouldFetchChat || !id) return;

    try {
      const result = await chatsApi.get(id, token);
      setTitle(result.body.name);
      // debugger;
      const result2 = await chatsApi.listMessages(id, token);
      setResponses(result2.body);
    } catch (error) {
      console.error('Error fetching chat:', error);
      setError('Failed to fetch chat details. Please try again.');
      setSnackbarOpen(true);
    } finally {
      setShouldFetchChat(false);
    }
  }, [chatsApi, id, token, shouldFetchChat, setTitle]);

  const fetchMessages = useCallback(async () => {
    if (!shouldFetchMessages || !chatId) return;

    setLoading(true);
    try {
      const result = await chatsApi.listMessages(chatId, token);
      setResponses(result.body);
    } catch (error) {
      console.error('Error fetching history:', error);
      setError('Failed to fetch chat history. Please try again.');
      setSnackbarOpen(true);
    } finally {
      setLoading(false);
      setShouldFetchMessages(false);
    }
  }, [chatsApi, chatId, token, shouldFetchMessages]);

  useEffect(() => {
    setChatId(id || '');
    fetchChat();
  }, [id, fetchChat]);

  useEffect(() => {
    fetchMessages();
  }, [fetchMessages]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (prompt.trim() === '') {
      setPromptError(true);
      return;
    }

    setLoading(true);
    try {
      const result = await messagesApi.create(
        { prompt: prompt, chatId: id },
        token
      );
      setResponses((prevResponses) => [
        result.body.response.content,
        ...prevResponses,
      ]);
      setPrompt('');
      setShouldFetchMessages(true);
    } catch (error) {
      setPromptError(false);
      console.error('Error submitting query:', error);
      setError(
        'An error occurred while submitting the query. Please try again.'
      );
      setSnackbarOpen(true);
    } finally {
      setLoading(false);
    }
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
    setError(null);
  };

  const handlePromptChange = (e) => {
    setPrompt(e.target.value);
  };

  const handleCodeExpand = (expanded) => {
    setIsCodeExpanded(expanded);
  };

  const handleCodeSelected = (code) => {
    setSelectedCode(code);
  };

  const handleCloseCodeBlock = () => {
    setSelectedCode(null);
    setIsCodeExpanded(false);
  };

  return (
    <PromptPresentation
      prompt={prompt}
      responses={responses}
      loading={loading}
      promptError={promptError}
      error={error}
      snackbarOpen={snackbarOpen}
      isCodeExpanded={isCodeExpanded}
      selectedCode={selectedCode}
      handleSubmit={handleSubmit}
      handlePromptChange={handlePromptChange}
      handleSnackbarClose={handleSnackbarClose}
      handleCodeExpand={handleCodeExpand}
      handleCodeSelected={handleCodeSelected}
      handleCloseCodeBlock={handleCloseCodeBlock}
    />
  );
};

export default PromptContainer;
