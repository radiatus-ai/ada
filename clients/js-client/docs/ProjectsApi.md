# PlatformApi.ProjectsApi

All URIs are relative to _http://localhost_

| Method                                                                                                                                                                    | HTTP request                                                                   | Description         |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ | ------------------- |
| [**createAdaV1ProjectsPost**](ProjectsApi.md#createAdaV1ProjectsPost)                                                                                                     | **POST** /ada/v1/projects                                                      | Create              |
| [**createChatAdaV1ProjectsProjectIdChatsPost**](ProjectsApi.md#createChatAdaV1ProjectsProjectIdChatsPost)                                                                 | **POST** /ada/v1/projects/{project_id}/chats                                   | Create Chat         |
| [**createChatMessageAdaV1ProjectsProjectIdChatsChatIdMessagesPost**](ProjectsApi.md#createChatMessageAdaV1ProjectsProjectIdChatsChatIdMessagesPost)                       | **POST** /ada/v1/projects/{project_id}/chats/{chat_id}/messages                | Create Chat Message |
| [**deleteChatAdaV1ProjectsProjectIdChatsChatIdDelete**](ProjectsApi.md#deleteChatAdaV1ProjectsProjectIdChatsChatIdDelete)                                                 | **DELETE** /ada/v1/projects/{project_id}/chats/{chat_id}                       | Delete Chat         |
| [**deleteChatMessageAdaV1ProjectsProjectIdChatsChatIdMessagesMessageIdDelete**](ProjectsApi.md#deleteChatMessageAdaV1ProjectsProjectIdChatsChatIdMessagesMessageIdDelete) | **DELETE** /ada/v1/projects/{project_id}/chats/{chat_id}/messages/{message_id} | Delete Chat Message |
| [**listProjectsAdaV1ProjectsGet**](ProjectsApi.md#listProjectsAdaV1ProjectsGet)                                                                                           | **GET** /ada/v1/projects                                                       | List Projects       |
| [**readChatAdaV1ProjectsProjectIdChatsChatIdGet**](ProjectsApi.md#readChatAdaV1ProjectsProjectIdChatsChatIdGet)                                                           | **GET** /ada/v1/projects/{project_id}/chats/{chat_id}                          | Read Chat           |
| [**readChatMessagesAdaV1ProjectsProjectIdChatsChatIdMessagesGet**](ProjectsApi.md#readChatMessagesAdaV1ProjectsProjectIdChatsChatIdMessagesGet)                           | **GET** /ada/v1/projects/{project_id}/chats/{chat_id}/messages                 | Read Chat Messages  |
| [**readChatsAdaV1ProjectsProjectIdChatsGet**](ProjectsApi.md#readChatsAdaV1ProjectsProjectIdChatsGet)                                                                     | **GET** /ada/v1/projects/{project_id}/chats                                    | Read Chats          |
| [**updateChatAdaV1ProjectsProjectIdChatsChatIdPut**](ProjectsApi.md#updateChatAdaV1ProjectsProjectIdChatsChatIdPut)                                                       | **PUT** /ada/v1/projects/{project_id}/chats/{chat_id}                          | Update Chat         |
| [**updateChatMessageAdaV1ProjectsProjectIdChatsChatIdMessagesMessageIdPut**](ProjectsApi.md#updateChatMessageAdaV1ProjectsProjectIdChatsChatIdMessagesMessageIdPut)       | **PUT** /ada/v1/projects/{project_id}/chats/{chat_id}/messages/{message_id}    | Update Chat Message |

## createAdaV1ProjectsPost

> Object createAdaV1ProjectsPost(projectCreate, opts)

Create

### Example

```javascript
import PlatformApi from "platform_api";
let defaultClient = PlatformApi.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications["HTTPBearer"];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN";

let apiInstance = new PlatformApi.ProjectsApi();
let projectCreate = new PlatformApi.ProjectCreate(); // ProjectCreate |
let opts = {
  xAdaToken: "xAdaToken_example", // String |
};
apiInstance.createAdaV1ProjectsPost(
  projectCreate,
  opts,
  (error, data, response) => {
    if (error) {
      console.error(error);
    } else {
      console.log("API called successfully. Returned data: " + data);
    }
  },
);
```

### Parameters

| Name              | Type                                  | Description | Notes      |
| ----------------- | ------------------------------------- | ----------- | ---------- |
| **projectCreate** | [**ProjectCreate**](ProjectCreate.md) |             |
| **xAdaToken**     | **String**                            |             | [optional] |

### Return type

**Object**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## createChatAdaV1ProjectsProjectIdChatsPost

> Chat createChatAdaV1ProjectsProjectIdChatsPost(projectId, chatCreate, opts)

Create Chat

### Example

```javascript
import PlatformApi from "platform_api";
let defaultClient = PlatformApi.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications["HTTPBearer"];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN";

let apiInstance = new PlatformApi.ProjectsApi();
let projectId = 56; // Number |
let chatCreate = new PlatformApi.ChatCreate(); // ChatCreate |
let opts = {
  xAdaToken: "xAdaToken_example", // String |
};
apiInstance.createChatAdaV1ProjectsProjectIdChatsPost(
  projectId,
  chatCreate,
  opts,
  (error, data, response) => {
    if (error) {
      console.error(error);
    } else {
      console.log("API called successfully. Returned data: " + data);
    }
  },
);
```

### Parameters

| Name           | Type                            | Description | Notes      |
| -------------- | ------------------------------- | ----------- | ---------- |
| **projectId**  | **Number**                      |             |
| **chatCreate** | [**ChatCreate**](ChatCreate.md) |             |
| **xAdaToken**  | **String**                      |             | [optional] |

### Return type

[**Chat**](Chat.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## createChatMessageAdaV1ProjectsProjectIdChatsChatIdMessagesPost

> ChatMessage createChatMessageAdaV1ProjectsProjectIdChatsChatIdMessagesPost(projectId, chatId, chatMessageCreate, opts)

Create Chat Message

### Example

```javascript
import PlatformApi from "platform_api";
let defaultClient = PlatformApi.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications["HTTPBearer"];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN";

let apiInstance = new PlatformApi.ProjectsApi();
let projectId = 56; // Number |
let chatId = 56; // Number |
let chatMessageCreate = new PlatformApi.ChatMessageCreate(); // ChatMessageCreate |
let opts = {
  xAdaToken: "xAdaToken_example", // String |
};
apiInstance.createChatMessageAdaV1ProjectsProjectIdChatsChatIdMessagesPost(
  projectId,
  chatId,
  chatMessageCreate,
  opts,
  (error, data, response) => {
    if (error) {
      console.error(error);
    } else {
      console.log("API called successfully. Returned data: " + data);
    }
  },
);
```

### Parameters

| Name                  | Type                                          | Description | Notes      |
| --------------------- | --------------------------------------------- | ----------- | ---------- |
| **projectId**         | **Number**                                    |             |
| **chatId**            | **Number**                                    |             |
| **chatMessageCreate** | [**ChatMessageCreate**](ChatMessageCreate.md) |             |
| **xAdaToken**         | **String**                                    |             | [optional] |

### Return type

[**ChatMessage**](ChatMessage.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## deleteChatAdaV1ProjectsProjectIdChatsChatIdDelete

> Chat deleteChatAdaV1ProjectsProjectIdChatsChatIdDelete(projectId, chatId, opts)

Delete Chat

### Example

```javascript
import PlatformApi from "platform_api";
let defaultClient = PlatformApi.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications["HTTPBearer"];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN";

let apiInstance = new PlatformApi.ProjectsApi();
let projectId = 56; // Number |
let chatId = 56; // Number |
let opts = {
  xAdaToken: "xAdaToken_example", // String |
};
apiInstance.deleteChatAdaV1ProjectsProjectIdChatsChatIdDelete(
  projectId,
  chatId,
  opts,
  (error, data, response) => {
    if (error) {
      console.error(error);
    } else {
      console.log("API called successfully. Returned data: " + data);
    }
  },
);
```

### Parameters

| Name          | Type       | Description | Notes      |
| ------------- | ---------- | ----------- | ---------- |
| **projectId** | **Number** |             |
| **chatId**    | **Number** |             |
| **xAdaToken** | **String** |             | [optional] |

### Return type

[**Chat**](Chat.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## deleteChatMessageAdaV1ProjectsProjectIdChatsChatIdMessagesMessageIdDelete

> ChatMessage deleteChatMessageAdaV1ProjectsProjectIdChatsChatIdMessagesMessageIdDelete(projectId, chatId, messageId, opts)

Delete Chat Message

### Example

```javascript
import PlatformApi from "platform_api";
let defaultClient = PlatformApi.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications["HTTPBearer"];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN";

let apiInstance = new PlatformApi.ProjectsApi();
let projectId = 56; // Number |
let chatId = 56; // Number |
let messageId = 56; // Number |
let opts = {
  xAdaToken: "xAdaToken_example", // String |
};
apiInstance.deleteChatMessageAdaV1ProjectsProjectIdChatsChatIdMessagesMessageIdDelete(
  projectId,
  chatId,
  messageId,
  opts,
  (error, data, response) => {
    if (error) {
      console.error(error);
    } else {
      console.log("API called successfully. Returned data: " + data);
    }
  },
);
```

### Parameters

| Name          | Type       | Description | Notes      |
| ------------- | ---------- | ----------- | ---------- |
| **projectId** | **Number** |             |
| **chatId**    | **Number** |             |
| **messageId** | **Number** |             |
| **xAdaToken** | **String** |             | [optional] |

### Return type

[**ChatMessage**](ChatMessage.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listProjectsAdaV1ProjectsGet

> Object listProjectsAdaV1ProjectsGet(opts)

List Projects

### Example

```javascript
import PlatformApi from "platform_api";
let defaultClient = PlatformApi.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications["HTTPBearer"];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN";

let apiInstance = new PlatformApi.ProjectsApi();
let opts = {
  skip: 0, // Number |
  limit: 100, // Number |
  xAdaToken: "xAdaToken_example", // String |
};
apiInstance.listProjectsAdaV1ProjectsGet(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log("API called successfully. Returned data: " + data);
  }
});
```

### Parameters

| Name          | Type       | Description | Notes                       |
| ------------- | ---------- | ----------- | --------------------------- |
| **skip**      | **Number** |             | [optional] [default to 0]   |
| **limit**     | **Number** |             | [optional] [default to 100] |
| **xAdaToken** | **String** |             | [optional]                  |

### Return type

**Object**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## readChatAdaV1ProjectsProjectIdChatsChatIdGet

> Chat readChatAdaV1ProjectsProjectIdChatsChatIdGet(projectId, chatId, opts)

Read Chat

### Example

```javascript
import PlatformApi from "platform_api";
let defaultClient = PlatformApi.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications["HTTPBearer"];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN";

let apiInstance = new PlatformApi.ProjectsApi();
let projectId = 56; // Number |
let chatId = 56; // Number |
let opts = {
  xAdaToken: "xAdaToken_example", // String |
};
apiInstance.readChatAdaV1ProjectsProjectIdChatsChatIdGet(
  projectId,
  chatId,
  opts,
  (error, data, response) => {
    if (error) {
      console.error(error);
    } else {
      console.log("API called successfully. Returned data: " + data);
    }
  },
);
```

### Parameters

| Name          | Type       | Description | Notes      |
| ------------- | ---------- | ----------- | ---------- |
| **projectId** | **Number** |             |
| **chatId**    | **Number** |             |
| **xAdaToken** | **String** |             | [optional] |

### Return type

[**Chat**](Chat.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## readChatMessagesAdaV1ProjectsProjectIdChatsChatIdMessagesGet

> [ChatMessage] readChatMessagesAdaV1ProjectsProjectIdChatsChatIdMessagesGet(projectId, chatId, opts)

Read Chat Messages

### Example

```javascript
import PlatformApi from "platform_api";
let defaultClient = PlatformApi.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications["HTTPBearer"];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN";

let apiInstance = new PlatformApi.ProjectsApi();
let projectId = 56; // Number |
let chatId = 56; // Number |
let opts = {
  skip: 0, // Number |
  limit: 100, // Number |
  xAdaToken: "xAdaToken_example", // String |
};
apiInstance.readChatMessagesAdaV1ProjectsProjectIdChatsChatIdMessagesGet(
  projectId,
  chatId,
  opts,
  (error, data, response) => {
    if (error) {
      console.error(error);
    } else {
      console.log("API called successfully. Returned data: " + data);
    }
  },
);
```

### Parameters

| Name          | Type       | Description | Notes                       |
| ------------- | ---------- | ----------- | --------------------------- |
| **projectId** | **Number** |             |
| **chatId**    | **Number** |             |
| **skip**      | **Number** |             | [optional] [default to 0]   |
| **limit**     | **Number** |             | [optional] [default to 100] |
| **xAdaToken** | **String** |             | [optional]                  |

### Return type

[**[ChatMessage]**](ChatMessage.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## readChatsAdaV1ProjectsProjectIdChatsGet

> [Chat] readChatsAdaV1ProjectsProjectIdChatsGet(projectId, opts)

Read Chats

### Example

```javascript
import PlatformApi from "platform_api";
let defaultClient = PlatformApi.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications["HTTPBearer"];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN";

let apiInstance = new PlatformApi.ProjectsApi();
let projectId = 56; // Number |
let opts = {
  skip: 0, // Number |
  limit: 100, // Number |
  xAdaToken: "xAdaToken_example", // String |
};
apiInstance.readChatsAdaV1ProjectsProjectIdChatsGet(
  projectId,
  opts,
  (error, data, response) => {
    if (error) {
      console.error(error);
    } else {
      console.log("API called successfully. Returned data: " + data);
    }
  },
);
```

### Parameters

| Name          | Type       | Description | Notes                       |
| ------------- | ---------- | ----------- | --------------------------- |
| **projectId** | **Number** |             |
| **skip**      | **Number** |             | [optional] [default to 0]   |
| **limit**     | **Number** |             | [optional] [default to 100] |
| **xAdaToken** | **String** |             | [optional]                  |

### Return type

[**[Chat]**](Chat.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## updateChatAdaV1ProjectsProjectIdChatsChatIdPut

> Chat updateChatAdaV1ProjectsProjectIdChatsChatIdPut(projectId, chatId, chatUpdate, opts)

Update Chat

### Example

```javascript
import PlatformApi from "platform_api";
let defaultClient = PlatformApi.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications["HTTPBearer"];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN";

let apiInstance = new PlatformApi.ProjectsApi();
let projectId = 56; // Number |
let chatId = 56; // Number |
let chatUpdate = new PlatformApi.ChatUpdate(); // ChatUpdate |
let opts = {
  xAdaToken: "xAdaToken_example", // String |
};
apiInstance.updateChatAdaV1ProjectsProjectIdChatsChatIdPut(
  projectId,
  chatId,
  chatUpdate,
  opts,
  (error, data, response) => {
    if (error) {
      console.error(error);
    } else {
      console.log("API called successfully. Returned data: " + data);
    }
  },
);
```

### Parameters

| Name           | Type                            | Description | Notes      |
| -------------- | ------------------------------- | ----------- | ---------- |
| **projectId**  | **Number**                      |             |
| **chatId**     | **Number**                      |             |
| **chatUpdate** | [**ChatUpdate**](ChatUpdate.md) |             |
| **xAdaToken**  | **String**                      |             | [optional] |

### Return type

[**Chat**](Chat.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## updateChatMessageAdaV1ProjectsProjectIdChatsChatIdMessagesMessageIdPut

> ChatMessage updateChatMessageAdaV1ProjectsProjectIdChatsChatIdMessagesMessageIdPut(projectId, chatId, messageId, chatMessageUpdate, opts)

Update Chat Message

### Example

```javascript
import PlatformApi from "platform_api";
let defaultClient = PlatformApi.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications["HTTPBearer"];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN";

let apiInstance = new PlatformApi.ProjectsApi();
let projectId = 56; // Number |
let chatId = 56; // Number |
let messageId = 56; // Number |
let chatMessageUpdate = new PlatformApi.ChatMessageUpdate(); // ChatMessageUpdate |
let opts = {
  xAdaToken: "xAdaToken_example", // String |
};
apiInstance.updateChatMessageAdaV1ProjectsProjectIdChatsChatIdMessagesMessageIdPut(
  projectId,
  chatId,
  messageId,
  chatMessageUpdate,
  opts,
  (error, data, response) => {
    if (error) {
      console.error(error);
    } else {
      console.log("API called successfully. Returned data: " + data);
    }
  },
);
```

### Parameters

| Name                  | Type                                          | Description | Notes      |
| --------------------- | --------------------------------------------- | ----------- | ---------- |
| **projectId**         | **Number**                                    |             |
| **chatId**            | **Number**                                    |             |
| **messageId**         | **Number**                                    |             |
| **chatMessageUpdate** | [**ChatMessageUpdate**](ChatMessageUpdate.md) |             |
| **xAdaToken**         | **String**                                    |             | [optional] |

### Return type

[**ChatMessage**](ChatMessage.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
