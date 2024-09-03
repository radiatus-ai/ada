# PlatformApi.ProjectsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createChatProjectsProjectIdChatsPost**](ProjectsApi.md#createChatProjectsProjectIdChatsPost) | **POST** /projects/{project_id}/chats | Create Chat
[**createProjectsPost**](ProjectsApi.md#createProjectsPost) | **POST** /projects | Create
[**listProjectsProjectsGet**](ProjectsApi.md#listProjectsProjectsGet) | **GET** /projects | List Projects
[**readChatsProjectsProjectIdChatsGet**](ProjectsApi.md#readChatsProjectsProjectIdChatsGet) | **GET** /projects/{project_id}/chats | Read Chats



## createChatProjectsProjectIdChatsPost

> Chat createChatProjectsProjectIdChatsPost(projectId, chatCreate)

Create Chat

### Example

```javascript
import PlatformApi from 'platform_api';

let apiInstance = new PlatformApi.ProjectsApi();
let projectId = "projectId_example"; // String |
let chatCreate = new PlatformApi.ChatCreate(); // ChatCreate |
apiInstance.createChatProjectsProjectIdChatsPost(projectId, chatCreate, (error, data, response) => {
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
 **projectId** | **String**|  |
 **chatCreate** | [**ChatCreate**](ChatCreate.md)|  |

### Return type

[**Chat**](Chat.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createProjectsPost

> Object createProjectsPost(projectCreate)

Create

### Example

```javascript
import PlatformApi from 'platform_api';

let apiInstance = new PlatformApi.ProjectsApi();
let projectCreate = new PlatformApi.ProjectCreate(); // ProjectCreate |
apiInstance.createProjectsPost(projectCreate, (error, data, response) => {
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
 **projectCreate** | [**ProjectCreate**](ProjectCreate.md)|  |

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## listProjectsProjectsGet

> Object listProjectsProjectsGet(opts)

List Projects

### Example

```javascript
import PlatformApi from 'platform_api';

let apiInstance = new PlatformApi.ProjectsApi();
let opts = {
  'skip': 0, // Number |
  'limit': 100 // Number |
};
apiInstance.listProjectsProjectsGet(opts, (error, data, response) => {
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
 **skip** | **Number**|  | [optional] [default to 0]
 **limit** | **Number**|  | [optional] [default to 100]

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## readChatsProjectsProjectIdChatsGet

> [Chat] readChatsProjectsProjectIdChatsGet(projectId, opts)

Read Chats

### Example

```javascript
import PlatformApi from 'platform_api';

let apiInstance = new PlatformApi.ProjectsApi();
let projectId = "projectId_example"; // String |
let opts = {
  'skip': 0, // Number |
  'limit': 100 // Number |
};
apiInstance.readChatsProjectsProjectIdChatsGet(projectId, opts, (error, data, response) => {
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
 **projectId** | **String**|  |
 **skip** | **Number**|  | [optional] [default to 0]
 **limit** | **Number**|  | [optional] [default to 100]

### Return type

[**[Chat]**](Chat.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
