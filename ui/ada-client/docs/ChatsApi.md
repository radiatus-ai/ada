# PlatformApi.ChatsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createChatMessageChatsChatIdMessagesPost**](ChatsApi.md#createChatMessageChatsChatIdMessagesPost) | **POST** /chats/{chat_id}/messages | Create Chat Message
[**deleteChatChatsChatIdDelete**](ChatsApi.md#deleteChatChatsChatIdDelete) | **DELETE** /chats/{chat_id} | Delete Chat
[**readChatChatsChatIdGet**](ChatsApi.md#readChatChatsChatIdGet) | **GET** /chats/{chat_id} | Read Chat
[**readChatMessagesChatsChatIdMessagesGet**](ChatsApi.md#readChatMessagesChatsChatIdMessagesGet) | **GET** /chats/{chat_id}/messages | Read Chat Messages
[**updateChatChatsChatIdPut**](ChatsApi.md#updateChatChatsChatIdPut) | **PUT** /chats/{chat_id} | Update Chat



## createChatMessageChatsChatIdMessagesPost

> ChatMessage createChatMessageChatsChatIdMessagesPost(chatId, chatMessageCreate)

Create Chat Message

### Example

```javascript
import PlatformApi from 'platform_api';

let apiInstance = new PlatformApi.ChatsApi();
let chatId = "chatId_example"; // String |
let chatMessageCreate = new PlatformApi.ChatMessageCreate(); // ChatMessageCreate |
apiInstance.createChatMessageChatsChatIdMessagesPost(chatId, chatMessageCreate, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **chatId** | **String**|  |
 **chatMessageCreate** | [**ChatMessageCreate**](ChatMessageCreate.md)|  |

### Return type

[**ChatMessage**](ChatMessage.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteChatChatsChatIdDelete

> Chat deleteChatChatsChatIdDelete(chatId)

Delete Chat

### Example

```javascript
import PlatformApi from 'platform_api';

let apiInstance = new PlatformApi.ChatsApi();
let chatId = "chatId_example"; // String |
apiInstance.deleteChatChatsChatIdDelete(chatId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **chatId** | **String**|  |

### Return type

[**Chat**](Chat.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## readChatChatsChatIdGet

> Chat readChatChatsChatIdGet(chatId)

Read Chat

### Example

```javascript
import PlatformApi from 'platform_api';

let apiInstance = new PlatformApi.ChatsApi();
let chatId = "chatId_example"; // String |
apiInstance.readChatChatsChatIdGet(chatId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **chatId** | **String**|  |

### Return type

[**Chat**](Chat.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## readChatMessagesChatsChatIdMessagesGet

> [ChatMessage] readChatMessagesChatsChatIdMessagesGet(chatId, opts)

Read Chat Messages

### Example

```javascript
import PlatformApi from 'platform_api';

let apiInstance = new PlatformApi.ChatsApi();
let chatId = "chatId_example"; // String |
let opts = {
  'skip': 0, // Number |
  'limit': 100 // Number |
};
apiInstance.readChatMessagesChatsChatIdMessagesGet(chatId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **chatId** | **String**|  |
 **skip** | **Number**|  | [optional] [default to 0]
 **limit** | **Number**|  | [optional] [default to 100]

### Return type

[**[ChatMessage]**](ChatMessage.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateChatChatsChatIdPut

> Chat updateChatChatsChatIdPut(chatId, chatUpdate)

Update Chat

### Example

```javascript
import PlatformApi from 'platform_api';

let apiInstance = new PlatformApi.ChatsApi();
let chatId = "chatId_example"; // String |
let chatUpdate = new PlatformApi.ChatUpdate(); // ChatUpdate |
apiInstance.updateChatChatsChatIdPut(chatId, chatUpdate, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **chatId** | **String**|  |
 **chatUpdate** | [**ChatUpdate**](ChatUpdate.md)|  |

### Return type

[**Chat**](Chat.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
