import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LandingPresentation from '../components/LandingPage';
import { useAuth } from '../contexts/Auth';
import { useThemeContext } from '../contexts/ThemeContext';
import useApi from '../hooks/useAPI';

const LandingContainer = () => {
  const { darkMode, toggleDarkMode } = useThemeContext();
  const [inputValue, setInputValue] = useState('');
  const [recentChats, setRecentChats] = useState([]);
  const [shouldFetchChats, setShouldFetchChats] = useState(true);
  const { token, user } = useAuth();
  const { projects: projectsApi, error } = useApi();

  const navigate = useNavigate();

  const fetchChats = useCallback(async () => {
    if (!shouldFetchChats) return;
    console.log(user);
    // debugger;

    try {
      // need to get default / current project from token
      const response = await projectsApi.listRecentChats(
        '2af44c08-a8ad-4284-afd2-e69deae8fd82',
        token
      );
      setRecentChats(response.body);
    } catch (error) {
      console.error('Error fetching chats:', error);
      // You might want to show an error message to the user here
    } finally {
      setShouldFetchChats(false);
    }
  }, [projectsApi, token, shouldFetchChats]);

  useEffect(() => {
    fetchChats();
  }, [fetchChats]);

  useEffect(() => {
    if (error) {
      console.error('API Error:', error);
      // You might want to show an error message to the user here
    }
  }, [error]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Submitted:', inputValue);
    setInputValue('');
    try {
      const response = await projectsApi.createChat(
        '2af44c08-a8ad-4284-afd2-e69deae8fd82',
        {
          name: inputValue,
          model: 'modeldog',
        },
        token
      );
      navigate('/chat/' + response.body.id);
    } catch (error) {
      console.error('Error creating chat:', error);
      // You might want to show an error message to the user here
    }
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const toggleStar = (id) => {
    setRecentChats(
      recentChats.map((chat) =>
        chat.id === id ? { ...chat, starred: !chat.starred } : chat
      )
    );
    // After updating the star, we might want to refetch the chats
    setShouldFetchChats(true);
  };

  return (
    <LandingPresentation
      darkMode={darkMode}
      toggleDarkMode={toggleDarkMode}
      inputValue={inputValue}
      recentChats={recentChats}
      handleSubmit={handleSubmit}
      handleInputChange={handleInputChange}
      toggleStar={toggleStar}
    />
  );
};

export default LandingContainer;
