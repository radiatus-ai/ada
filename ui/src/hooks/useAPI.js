import { context, propagation, trace } from '@opentelemetry/api';
import { useCallback, useState } from 'react';
import {
  ChatsApi,
  createApi,
  CredentialsApi,
  handleApiError,
  MessagesApi,
  ProjectsApi,
} from '../clients/adaClient';

const useApi = () => {
  const [error, setError] = useState(null);

  const apiCall = useCallback(
    async (ApiClass, method, params = [], token = null, parentSpan = null) => {
      let headers = {};

      if (parentSpan) {
        const ctx = trace.setSpan(context.active(), parentSpan);
        const carrier = {};
        propagation.inject(ctx, carrier);
        headers = { ...carrier };
      }

      try {
        const api = createApi(ApiClass, token);
        const apiMethod = api[method];
        if (typeof apiMethod !== 'function') {
          throw new Error(`Invalid method ${method} for ${ApiClass.name}`);
        }

        const response = await apiMethod.apply(api, params);
        return response;
      } catch (err) {
        if (parentSpan) {
          parentSpan.recordException(err);
        }
        setError(err.message);
        handleApiError(err);
        throw err;
      }
    },
    []
  );

  // TODO:
  // const auth = {
  //   loginGoogle: (data, token, parentSpan) =>
  //     apiCall(AuthApi, 'loginGoogleAuthLoginPost', [data], token, parentSpan),
  // };

  const projects = {
    list: (token, parentSpan) =>
      apiCall(ProjectsApi, 'listProjectsProjectsGet', [], token, parentSpan),
    create: (data, token, parentSpan) =>
      apiCall(ProjectsApi, 'createProjectsPost', [data], token, parentSpan),
    createChat: (id, data, token, parentSpan) =>
      apiCall(
        ProjectsApi,
        'createChatProjectsProjectIdChatsPost',
        [id, data],
        token,
        parentSpan
      ),
    listRecentChats: (id, token, parentSpan) =>
      apiCall(
        ProjectsApi,
        'readChatsProjectsProjectIdChatsGet',
        [id],
        token,
        parentSpan
      ),
  };

  const chats = {
    create: (chatId, data, token, parentSpan) =>
      apiCall(
        ChatsApi,
        'createChatMessageChatsChatIdMessagesPost',
        [chatId, data],
        token,
        parentSpan
      ),
    listMessages: (id, token, parentSpan) =>
      apiCall(
        ChatsApi,
        'readChatMessagesChatsChatIdMessagesGet',
        [id],
        token,
        parentSpan
      ),
    get: (id, token, parentSpan) =>
      apiCall(ChatsApi, 'readChatChatsChatIdGet', [id], token, parentSpan),
    update: (id, data, token, parentSpan) =>
      apiCall(
        ChatsApi,
        'updateChatChatsChatIdPut',
        [id, data],
        token,
        parentSpan
      ),
    delete: (id, token, parentSpan) =>
      apiCall(ChatsApi, 'deleteChatChatsChatIdDelete', [id], token, parentSpan),
  };

  const chatMessages = {
    create: (data, token, parentSpan) =>
      apiCall(
        MessagesApi,
        'promptMessagesPromptPost',
        [data],
        token,
        parentSpan
      ),
    createStream: (data, token, parentSpan) =>
      apiCall(
        MessagesApi,
        'promptMessagesStreamPost',
        [data],
        token,
        parentSpan
      ),
    update: (id, data, token, parentSpan) =>
      apiCall(
        MessagesApi,
        'updateChatMessageMessagesMessageIdPut',
        [id, data],
        token,
        parentSpan
      ),
    delete: (id, token, parentSpan) =>
      apiCall(
        MessagesApi,
        'deleteChatMessageMessagesMessageIdDelete',
        [id],
        token,
        parentSpan
      ),
  };

  const credentials = {
    list: (token, parentSpan) =>
      apiCall(
        CredentialsApi,
        'readCredentialsCredentialsGet',
        [],
        token,
        parentSpan
      ),
    create: (data, token, parentSpan) =>
      apiCall(
        CredentialsApi,
        'createCredentialCredentialsPost',
        [data],
        token,
        parentSpan
      ),
    get: (id, token, parentSpan) =>
      apiCall(
        CredentialsApi,
        'readCredentialCredentialsCredentialIdGet',
        [id],
        token,
        parentSpan
      ),
    update: (id, data, token, parentSpan) =>
      apiCall(
        CredentialsApi,
        'updateCredentialCredentialsCredentialIdPut',
        [id, data],
        token,
        parentSpan
      ),
    delete: (id, token, parentSpan) =>
      apiCall(
        CredentialsApi,
        'deleteCredentialCredentialsCredentialIdDelete',
        [id],
        token,
        parentSpan
      ),
  };

  return { projects, chats, chatMessages, credentials, error };
};

export default useApi;
