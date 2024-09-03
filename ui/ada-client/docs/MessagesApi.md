# PlatformApi.MessagesApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteChatMessageMessagesMessageIdDelete**](MessagesApi.md#deleteChatMessageMessagesMessageIdDelete) | **DELETE** /messages/{message_id} | Delete Chat Message
[**promptMessagesPromptPost**](MessagesApi.md#promptMessagesPromptPost) | **POST** /messages/prompt | Prompt
[**promptMessagesStreamPost**](MessagesApi.md#promptMessagesStreamPost) | **POST** /messages/stream | Prompt
[**updateChatMessageMessagesMessageIdPut**](MessagesApi.md#updateChatMessageMessagesMessageIdPut) | **PUT** /messages/{message_id} | Update Chat Message



## deleteChatMessageMessagesMessageIdDelete

> ChatMessage deleteChatMessageMessagesMessageIdDelete(messageId, projectId, chatId)

Delete Chat Message

### Example

```javascript
import PlatformApi from 'platform_api';

let apiInstance = new PlatformApi.MessagesApi();
let messageId = "messageId_example"; // String |
let projectId = "projectId_example"; // String |
let chatId = "chatId_example"; // String |
apiInstance.deleteChatMessageMessagesMessageIdDelete(messageId, projectId, chatId, (error, data, response) => {
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
 **messageId** | **String**|  |
 **projectId** | **String**|  |
 **chatId** | **String**|  |

### Return type

[**ChatMessage**](ChatMessage.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## promptMessagesPromptPost

> Object promptMessagesPromptPost(postQuery)

Prompt

### Example

```javascript
import PlatformApi from 'platform_api';

let apiInstance = new PlatformApi.MessagesApi();
let postQuery = new PlatformApi.PostQuery(); // PostQuery |
apiInstance.promptMessagesPromptPost(postQuery, (error, data, response) => {
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
 **postQuery** | [**PostQuery**](PostQuery.md)|  |

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## promptMessagesStreamPost

> Object promptMessagesStreamPost(postQuery)

Prompt

### Example

```javascript
import PlatformApi from 'platform_api';

let apiInstance = new PlatformApi.MessagesApi();
let postQuery = new PlatformApi.PostQuery(); // PostQuery |
apiInstance.promptMessagesStreamPost(postQuery, (error, data, response) => {
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
 **postQuery** | [**PostQuery**](PostQuery.md)|  |

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateChatMessageMessagesMessageIdPut

> ChatMessage updateChatMessageMessagesMessageIdPut(messageId, chatId, chatMessageUpdate)

Update Chat Message

### Example

```javascript
import PlatformApi from 'platform_api';

let apiInstance = new PlatformApi.MessagesApi();
let messageId = "messageId_example"; // String |
let chatId = "chatId_example"; // String |
let chatMessageUpdate = new PlatformApi.ChatMessageUpdate(); // ChatMessageUpdate |
apiInstance.updateChatMessageMessagesMessageIdPut(messageId, chatId, chatMessageUpdate, (error, data, response) => {
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
 **messageId** | **String**|  |
 **chatId** | **String**|  |
 **chatMessageUpdate** | [**ChatMessageUpdate**](ChatMessageUpdate.md)|  |

### Return type

[**ChatMessage**](ChatMessage.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
