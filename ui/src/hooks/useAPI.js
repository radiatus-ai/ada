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

  const projects = {
    list: (token, parentSpan) =>
      apiCall(
        ProjectsApi,
        'listProjectsAdaV1ProjectsGet',
        [],
        token,
        parentSpan
      ),
    create: (data, token, parentSpan) =>
      apiCall(
        ProjectsApi,
        'createAdaV1ProjectsPost',
        [data],
        token,
        parentSpan
      ),
    createChat: (id, data, token, parentSpan) =>
      apiCall(
        ProjectsApi,
        'createChatAdaV1ProjectsProjectIdChatsPost',
        [id, data],
        token,
        parentSpan
      ),
    get: (id, token, parentSpan) =>
      apiCall(
        ProjectsApi,
        'getProjectAdaV1ProjectsProjectIdGet',
        [id],
        token,
        parentSpan
      ),
    update: (id, data, token, parentSpan) =>
      apiCall(
        ProjectsApi,
        'updateProjectAdaV1ProjectsProjectIdPut',
        [id, data],
        token,
        parentSpan
      ),
    delete: (id, token, parentSpan) =>
      apiCall(
        ProjectsApi,
        'deleteProjectAdaV1ProjectsProjectIdDelete',
        [id],
        token,
        parentSpan
      ),
    listRecentChats: (id, token, parentSpan) =>
      apiCall(
        ProjectsApi,
        'readChatsAdaV1ProjectsProjectIdChatsGet',
        [id],
        token,
        parentSpan
      ),
  };

  const chats = {
    create: (chatId, data, token, parentSpan) =>
      apiCall(
        ChatsApi,
        'createChatMessageAdaV1ChatsChatIdMessagesPost',
        [chatId, 1, data],
        token,
        parentSpan
      ),
    // prompt: (chatId, data, token, parentSpan) => apiCall(ChatsApi, 'createChatMessageAdaV1ChatsChatIdMessagesPost', [chatId, 1, data], token, parentSpan),
    listMessages: (id, token, parentSpan) =>
      apiCall(
        ChatsApi,
        'readChatMessagesAdaV1ChatsChatIdMessagesGet',

        [id],
        token,
        parentSpan
      ),
    // create: (data, token, parentSpan) => apiCall(ProjectsApi, 'createAdaV1ProjectsPost', [data], token, parentSpan),
    get: (id, token, parentSpan) =>
      apiCall(ChatsApi, 'readChatAdaV1ChatsChatIdGet', [id], token, parentSpan),
    // update: (id, data, token, parentSpan) => apiCall(ProjectsApi, 'updateProjectAdaV1ProjectsProjectIdPut', [id, data], token, parentSpan),
    // delete: (id, token, parentSpan) => apiCall(ProjectsApi, 'deleteProjectAdaV1ProjectsProjectIdDelete', [id], token, parentSpan),
    // listRecentChats: (id, token, parentSpan) => apiCall(ProjectsApi, 'readChatsAdaV1ProjectsProjectIdChatsGet', [id], token, parentSpan),
  };

  const chatMessages = {
    create: (data, token, parentSpan) =>
      apiCall(
        MessagesApi,
        'promptAdaV1MessagesPromptPost',
        [data],
        token,
        parentSpan
      ),
    createStream: (data, token, parentSpan) =>
      apiCall(
        MessagesApi,
        'promptAdaV1MessagesStreamPost',
        [data],
        token,
        parentSpan
      ),
    // listMessages: (id, token, parentSpan) => apiCall(ChatsApi, 'readChatMessagesAdaV1ChatsChatIdMessagesGet', [id, 1], token, parentSpan),
  };

  const credentials = {
    getSettings: (token, parentSpan) =>
      apiCall(
        CredentialsApi,
        'getSettingsAdaV1CredentialsGet',
        [],
        token,
        parentSpan
      ),
    updateSettings: (data, token, parentSpan) =>
      apiCall(
        CredentialsApi,
        'updateSettingsAdaV1CredentialsPut',
        [data],
        token,
        parentSpan
      ),
  };

  return { projects, chats, chatMessages, credentials, error };
};

export default useApi;
