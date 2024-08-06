# \ProjectsAPI

All URIs are relative to _http://localhost_

| Method                                                                                                                                                                    | HTTP request                                                                   | Description         |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ | ------------------- |
| [**CreateAdaV1ProjectsPost**](ProjectsAPI.md#CreateAdaV1ProjectsPost)                                                                                                     | **Post** /ada/v1/projects                                                      | Create              |
| [**CreateChatAdaV1ProjectsProjectIdChatsPost**](ProjectsAPI.md#CreateChatAdaV1ProjectsProjectIdChatsPost)                                                                 | **Post** /ada/v1/projects/{project_id}/chats                                   | Create Chat         |
| [**CreateChatMessageAdaV1ProjectsProjectIdChatsChatIdMessagesPost**](ProjectsAPI.md#CreateChatMessageAdaV1ProjectsProjectIdChatsChatIdMessagesPost)                       | **Post** /ada/v1/projects/{project_id}/chats/{chat_id}/messages                | Create Chat Message |
| [**DeleteChatAdaV1ProjectsProjectIdChatsChatIdDelete**](ProjectsAPI.md#DeleteChatAdaV1ProjectsProjectIdChatsChatIdDelete)                                                 | **Delete** /ada/v1/projects/{project_id}/chats/{chat_id}                       | Delete Chat         |
| [**DeleteChatMessageAdaV1ProjectsProjectIdChatsChatIdMessagesMessageIdDelete**](ProjectsAPI.md#DeleteChatMessageAdaV1ProjectsProjectIdChatsChatIdMessagesMessageIdDelete) | **Delete** /ada/v1/projects/{project_id}/chats/{chat_id}/messages/{message_id} | Delete Chat Message |
| [**ListProjectsAdaV1ProjectsGet**](ProjectsAPI.md#ListProjectsAdaV1ProjectsGet)                                                                                           | **Get** /ada/v1/projects                                                       | List Projects       |
| [**ReadChatAdaV1ProjectsProjectIdChatsChatIdGet**](ProjectsAPI.md#ReadChatAdaV1ProjectsProjectIdChatsChatIdGet)                                                           | **Get** /ada/v1/projects/{project_id}/chats/{chat_id}                          | Read Chat           |
| [**ReadChatMessagesAdaV1ProjectsProjectIdChatsChatIdMessagesGet**](ProjectsAPI.md#ReadChatMessagesAdaV1ProjectsProjectIdChatsChatIdMessagesGet)                           | **Get** /ada/v1/projects/{project_id}/chats/{chat_id}/messages                 | Read Chat Messages  |
| [**ReadChatsAdaV1ProjectsProjectIdChatsGet**](ProjectsAPI.md#ReadChatsAdaV1ProjectsProjectIdChatsGet)                                                                     | **Get** /ada/v1/projects/{project_id}/chats                                    | Read Chats          |
| [**UpdateChatAdaV1ProjectsProjectIdChatsChatIdPut**](ProjectsAPI.md#UpdateChatAdaV1ProjectsProjectIdChatsChatIdPut)                                                       | **Put** /ada/v1/projects/{project_id}/chats/{chat_id}                          | Update Chat         |
| [**UpdateChatMessageAdaV1ProjectsProjectIdChatsChatIdMessagesMessageIdPut**](ProjectsAPI.md#UpdateChatMessageAdaV1ProjectsProjectIdChatsChatIdMessagesMessageIdPut)       | **Put** /ada/v1/projects/{project_id}/chats/{chat_id}/messages/{message_id}    | Update Chat Message |

## CreateAdaV1ProjectsPost

> interface{} CreateAdaV1ProjectsPost(ctx).ProjectCreate(projectCreate).XAdaToken(xAdaToken).Execute()

Create

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
	projectCreate := *openapiclient.NewProjectCreate("Name_example") // ProjectCreate |
	xAdaToken := "xAdaToken_example" // string |  (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.ProjectsAPI.CreateAdaV1ProjectsPost(context.Background()).ProjectCreate(projectCreate).XAdaToken(xAdaToken).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ProjectsAPI.CreateAdaV1ProjectsPost``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CreateAdaV1ProjectsPost`: interface{}
	fmt.Fprintf(os.Stdout, "Response from `ProjectsAPI.CreateAdaV1ProjectsPost`: %v\n", resp)
}
```

### Path Parameters

### Other Parameters

Other parameters are passed through a pointer to a apiCreateAdaV1ProjectsPostRequest struct via the builder pattern

| Name              | Type                                  | Description | Notes |
| ----------------- | ------------------------------------- | ----------- | ----- |
| **projectCreate** | [**ProjectCreate**](ProjectCreate.md) |             |
| **xAdaToken**     | **string**                            |             |

### Return type

**interface{}**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

## CreateChatAdaV1ProjectsProjectIdChatsPost

> Chat CreateChatAdaV1ProjectsProjectIdChatsPost(ctx, projectId).ChatCreate(chatCreate).XAdaToken(xAdaToken).Execute()

Create Chat

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
	projectId := int32(56) // int32 |
	chatCreate := *openapiclient.NewChatCreate("Name_example", "Model_example", int32(123)) // ChatCreate |
	xAdaToken := "xAdaToken_example" // string |  (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.ProjectsAPI.CreateChatAdaV1ProjectsProjectIdChatsPost(context.Background(), projectId).ChatCreate(chatCreate).XAdaToken(xAdaToken).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ProjectsAPI.CreateChatAdaV1ProjectsProjectIdChatsPost``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CreateChatAdaV1ProjectsProjectIdChatsPost`: Chat
	fmt.Fprintf(os.Stdout, "Response from `ProjectsAPI.CreateChatAdaV1ProjectsProjectIdChatsPost`: %v\n", resp)
}
```

### Path Parameters

| Name          | Type                | Description                                                                 | Notes |
| ------------- | ------------------- | --------------------------------------------------------------------------- | ----- |
| **ctx**       | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc. |
| **projectId** | **int32**           |                                                                             |

### Other Parameters

Other parameters are passed through a pointer to a apiCreateChatAdaV1ProjectsProjectIdChatsPostRequest struct via the builder pattern

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |

**chatCreate** | [**ChatCreate**](ChatCreate.md) | |
**xAdaToken** | **string** | |

### Return type

[**Chat**](Chat.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

## CreateChatMessageAdaV1ProjectsProjectIdChatsChatIdMessagesPost

> ChatMessage CreateChatMessageAdaV1ProjectsProjectIdChatsChatIdMessagesPost(ctx, projectId, chatId).ChatMessageCreate(chatMessageCreate).XAdaToken(xAdaToken).Execute()

Create Chat Message

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
	projectId := int32(56) // int32 |
	chatId := int32(56) // int32 |
	chatMessageCreate := *openapiclient.NewChatMessageCreate("Role_example", "Content_example", "Model_example", int32(123), map[string]interface{}(123), int32(123)) // ChatMessageCreate |
	xAdaToken := "xAdaToken_example" // string |  (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.ProjectsAPI.CreateChatMessageAdaV1ProjectsProjectIdChatsChatIdMessagesPost(context.Background(), projectId, chatId).ChatMessageCreate(chatMessageCreate).XAdaToken(xAdaToken).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ProjectsAPI.CreateChatMessageAdaV1ProjectsProjectIdChatsChatIdMessagesPost``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CreateChatMessageAdaV1ProjectsProjectIdChatsChatIdMessagesPost`: ChatMessage
	fmt.Fprintf(os.Stdout, "Response from `ProjectsAPI.CreateChatMessageAdaV1ProjectsProjectIdChatsChatIdMessagesPost`: %v\n", resp)
}
```

### Path Parameters

| Name          | Type                | Description                                                                 | Notes |
| ------------- | ------------------- | --------------------------------------------------------------------------- | ----- |
| **ctx**       | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc. |
| **projectId** | **int32**           |                                                                             |
| **chatId**    | **int32**           |                                                                             |

### Other Parameters

Other parameters are passed through a pointer to a apiCreateChatMessageAdaV1ProjectsProjectIdChatsChatIdMessagesPostRequest struct via the builder pattern

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |

**chatMessageCreate** | [**ChatMessageCreate**](ChatMessageCreate.md) | |
**xAdaToken** | **string** | |

### Return type

[**ChatMessage**](ChatMessage.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

## DeleteChatAdaV1ProjectsProjectIdChatsChatIdDelete

> Chat DeleteChatAdaV1ProjectsProjectIdChatsChatIdDelete(ctx, projectId, chatId).XAdaToken(xAdaToken).Execute()

Delete Chat

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
	projectId := int32(56) // int32 |
	chatId := int32(56) // int32 |
	xAdaToken := "xAdaToken_example" // string |  (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.ProjectsAPI.DeleteChatAdaV1ProjectsProjectIdChatsChatIdDelete(context.Background(), projectId, chatId).XAdaToken(xAdaToken).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ProjectsAPI.DeleteChatAdaV1ProjectsProjectIdChatsChatIdDelete``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `DeleteChatAdaV1ProjectsProjectIdChatsChatIdDelete`: Chat
	fmt.Fprintf(os.Stdout, "Response from `ProjectsAPI.DeleteChatAdaV1ProjectsProjectIdChatsChatIdDelete`: %v\n", resp)
}
```

### Path Parameters

| Name          | Type                | Description                                                                 | Notes |
| ------------- | ------------------- | --------------------------------------------------------------------------- | ----- |
| **ctx**       | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc. |
| **projectId** | **int32**           |                                                                             |
| **chatId**    | **int32**           |                                                                             |

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteChatAdaV1ProjectsProjectIdChatsChatIdDeleteRequest struct via the builder pattern

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |

**xAdaToken** | **string** | |

### Return type

[**Chat**](Chat.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

## DeleteChatMessageAdaV1ProjectsProjectIdChatsChatIdMessagesMessageIdDelete

> ChatMessage DeleteChatMessageAdaV1ProjectsProjectIdChatsChatIdMessagesMessageIdDelete(ctx, projectId, chatId, messageId).XAdaToken(xAdaToken).Execute()

Delete Chat Message

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
	projectId := int32(56) // int32 |
	chatId := int32(56) // int32 |
	messageId := int32(56) // int32 |
	xAdaToken := "xAdaToken_example" // string |  (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.ProjectsAPI.DeleteChatMessageAdaV1ProjectsProjectIdChatsChatIdMessagesMessageIdDelete(context.Background(), projectId, chatId, messageId).XAdaToken(xAdaToken).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ProjectsAPI.DeleteChatMessageAdaV1ProjectsProjectIdChatsChatIdMessagesMessageIdDelete``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `DeleteChatMessageAdaV1ProjectsProjectIdChatsChatIdMessagesMessageIdDelete`: ChatMessage
	fmt.Fprintf(os.Stdout, "Response from `ProjectsAPI.DeleteChatMessageAdaV1ProjectsProjectIdChatsChatIdMessagesMessageIdDelete`: %v\n", resp)
}
```

### Path Parameters

| Name          | Type                | Description                                                                 | Notes |
| ------------- | ------------------- | --------------------------------------------------------------------------- | ----- |
| **ctx**       | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc. |
| **projectId** | **int32**           |                                                                             |
| **chatId**    | **int32**           |                                                                             |
| **messageId** | **int32**           |                                                                             |

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteChatMessageAdaV1ProjectsProjectIdChatsChatIdMessagesMessageIdDeleteRequest struct via the builder pattern

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |

**xAdaToken** | **string** | |

### Return type

[**ChatMessage**](ChatMessage.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

## ListProjectsAdaV1ProjectsGet

> interface{} ListProjectsAdaV1ProjectsGet(ctx).Skip(skip).Limit(limit).XAdaToken(xAdaToken).Execute()

List Projects

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
	skip := int32(56) // int32 |  (optional) (default to 0)
	limit := int32(56) // int32 |  (optional) (default to 100)
	xAdaToken := "xAdaToken_example" // string |  (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.ProjectsAPI.ListProjectsAdaV1ProjectsGet(context.Background()).Skip(skip).Limit(limit).XAdaToken(xAdaToken).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ProjectsAPI.ListProjectsAdaV1ProjectsGet``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ListProjectsAdaV1ProjectsGet`: interface{}
	fmt.Fprintf(os.Stdout, "Response from `ProjectsAPI.ListProjectsAdaV1ProjectsGet`: %v\n", resp)
}
```

### Path Parameters

### Other Parameters

Other parameters are passed through a pointer to a apiListProjectsAdaV1ProjectsGetRequest struct via the builder pattern

| Name          | Type       | Description | Notes            |
| ------------- | ---------- | ----------- | ---------------- |
| **skip**      | **int32**  |             | [default to 0]   |
| **limit**     | **int32**  |             | [default to 100] |
| **xAdaToken** | **string** |             |

### Return type

**interface{}**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

## ReadChatAdaV1ProjectsProjectIdChatsChatIdGet

> Chat ReadChatAdaV1ProjectsProjectIdChatsChatIdGet(ctx, projectId, chatId).XAdaToken(xAdaToken).Execute()

Read Chat

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
	projectId := int32(56) // int32 |
	chatId := int32(56) // int32 |
	xAdaToken := "xAdaToken_example" // string |  (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.ProjectsAPI.ReadChatAdaV1ProjectsProjectIdChatsChatIdGet(context.Background(), projectId, chatId).XAdaToken(xAdaToken).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ProjectsAPI.ReadChatAdaV1ProjectsProjectIdChatsChatIdGet``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ReadChatAdaV1ProjectsProjectIdChatsChatIdGet`: Chat
	fmt.Fprintf(os.Stdout, "Response from `ProjectsAPI.ReadChatAdaV1ProjectsProjectIdChatsChatIdGet`: %v\n", resp)
}
```

### Path Parameters

| Name          | Type                | Description                                                                 | Notes |
| ------------- | ------------------- | --------------------------------------------------------------------------- | ----- |
| **ctx**       | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc. |
| **projectId** | **int32**           |                                                                             |
| **chatId**    | **int32**           |                                                                             |

### Other Parameters

Other parameters are passed through a pointer to a apiReadChatAdaV1ProjectsProjectIdChatsChatIdGetRequest struct via the builder pattern

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |

**xAdaToken** | **string** | |

### Return type

[**Chat**](Chat.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

## ReadChatMessagesAdaV1ProjectsProjectIdChatsChatIdMessagesGet

> []ChatMessage ReadChatMessagesAdaV1ProjectsProjectIdChatsChatIdMessagesGet(ctx, projectId, chatId).Skip(skip).Limit(limit).XAdaToken(xAdaToken).Execute()

Read Chat Messages

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
	projectId := int32(56) // int32 |
	chatId := int32(56) // int32 |
	skip := int32(56) // int32 |  (optional) (default to 0)
	limit := int32(56) // int32 |  (optional) (default to 100)
	xAdaToken := "xAdaToken_example" // string |  (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.ProjectsAPI.ReadChatMessagesAdaV1ProjectsProjectIdChatsChatIdMessagesGet(context.Background(), projectId, chatId).Skip(skip).Limit(limit).XAdaToken(xAdaToken).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ProjectsAPI.ReadChatMessagesAdaV1ProjectsProjectIdChatsChatIdMessagesGet``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ReadChatMessagesAdaV1ProjectsProjectIdChatsChatIdMessagesGet`: []ChatMessage
	fmt.Fprintf(os.Stdout, "Response from `ProjectsAPI.ReadChatMessagesAdaV1ProjectsProjectIdChatsChatIdMessagesGet`: %v\n", resp)
}
```

### Path Parameters

| Name          | Type                | Description                                                                 | Notes |
| ------------- | ------------------- | --------------------------------------------------------------------------- | ----- |
| **ctx**       | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc. |
| **projectId** | **int32**           |                                                                             |
| **chatId**    | **int32**           |                                                                             |

### Other Parameters

Other parameters are passed through a pointer to a apiReadChatMessagesAdaV1ProjectsProjectIdChatsChatIdMessagesGetRequest struct via the builder pattern

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |

**skip** | **int32** | | [default to 0]
**limit** | **int32** | | [default to 100]
**xAdaToken** | **string** | |

### Return type

[**[]ChatMessage**](ChatMessage.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

## ReadChatsAdaV1ProjectsProjectIdChatsGet

> []Chat ReadChatsAdaV1ProjectsProjectIdChatsGet(ctx, projectId).Skip(skip).Limit(limit).XAdaToken(xAdaToken).Execute()

Read Chats

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
	projectId := int32(56) // int32 |
	skip := int32(56) // int32 |  (optional) (default to 0)
	limit := int32(56) // int32 |  (optional) (default to 100)
	xAdaToken := "xAdaToken_example" // string |  (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.ProjectsAPI.ReadChatsAdaV1ProjectsProjectIdChatsGet(context.Background(), projectId).Skip(skip).Limit(limit).XAdaToken(xAdaToken).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ProjectsAPI.ReadChatsAdaV1ProjectsProjectIdChatsGet``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ReadChatsAdaV1ProjectsProjectIdChatsGet`: []Chat
	fmt.Fprintf(os.Stdout, "Response from `ProjectsAPI.ReadChatsAdaV1ProjectsProjectIdChatsGet`: %v\n", resp)
}
```

### Path Parameters

| Name          | Type                | Description                                                                 | Notes |
| ------------- | ------------------- | --------------------------------------------------------------------------- | ----- |
| **ctx**       | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc. |
| **projectId** | **int32**           |                                                                             |

### Other Parameters

Other parameters are passed through a pointer to a apiReadChatsAdaV1ProjectsProjectIdChatsGetRequest struct via the builder pattern

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |

**skip** | **int32** | | [default to 0]
**limit** | **int32** | | [default to 100]
**xAdaToken** | **string** | |

### Return type

[**[]Chat**](Chat.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

## UpdateChatAdaV1ProjectsProjectIdChatsChatIdPut

> Chat UpdateChatAdaV1ProjectsProjectIdChatsChatIdPut(ctx, projectId, chatId).ChatUpdate(chatUpdate).XAdaToken(xAdaToken).Execute()

Update Chat

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
	projectId := int32(56) // int32 |
	chatId := int32(56) // int32 |
	chatUpdate := *openapiclient.NewChatUpdate() // ChatUpdate |
	xAdaToken := "xAdaToken_example" // string |  (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.ProjectsAPI.UpdateChatAdaV1ProjectsProjectIdChatsChatIdPut(context.Background(), projectId, chatId).ChatUpdate(chatUpdate).XAdaToken(xAdaToken).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ProjectsAPI.UpdateChatAdaV1ProjectsProjectIdChatsChatIdPut``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `UpdateChatAdaV1ProjectsProjectIdChatsChatIdPut`: Chat
	fmt.Fprintf(os.Stdout, "Response from `ProjectsAPI.UpdateChatAdaV1ProjectsProjectIdChatsChatIdPut`: %v\n", resp)
}
```

### Path Parameters

| Name          | Type                | Description                                                                 | Notes |
| ------------- | ------------------- | --------------------------------------------------------------------------- | ----- |
| **ctx**       | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc. |
| **projectId** | **int32**           |                                                                             |
| **chatId**    | **int32**           |                                                                             |

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateChatAdaV1ProjectsProjectIdChatsChatIdPutRequest struct via the builder pattern

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |

**chatUpdate** | [**ChatUpdate**](ChatUpdate.md) | |
**xAdaToken** | **string** | |

### Return type

[**Chat**](Chat.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

## UpdateChatMessageAdaV1ProjectsProjectIdChatsChatIdMessagesMessageIdPut

> ChatMessage UpdateChatMessageAdaV1ProjectsProjectIdChatsChatIdMessagesMessageIdPut(ctx, projectId, chatId, messageId).ChatMessageUpdate(chatMessageUpdate).XAdaToken(xAdaToken).Execute()

Update Chat Message

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
	projectId := int32(56) // int32 |
	chatId := int32(56) // int32 |
	messageId := int32(56) // int32 |
	chatMessageUpdate := *openapiclient.NewChatMessageUpdate() // ChatMessageUpdate |
	xAdaToken := "xAdaToken_example" // string |  (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.ProjectsAPI.UpdateChatMessageAdaV1ProjectsProjectIdChatsChatIdMessagesMessageIdPut(context.Background(), projectId, chatId, messageId).ChatMessageUpdate(chatMessageUpdate).XAdaToken(xAdaToken).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ProjectsAPI.UpdateChatMessageAdaV1ProjectsProjectIdChatsChatIdMessagesMessageIdPut``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `UpdateChatMessageAdaV1ProjectsProjectIdChatsChatIdMessagesMessageIdPut`: ChatMessage
	fmt.Fprintf(os.Stdout, "Response from `ProjectsAPI.UpdateChatMessageAdaV1ProjectsProjectIdChatsChatIdMessagesMessageIdPut`: %v\n", resp)
}
```

### Path Parameters

| Name          | Type                | Description                                                                 | Notes |
| ------------- | ------------------- | --------------------------------------------------------------------------- | ----- |
| **ctx**       | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc. |
| **projectId** | **int32**           |                                                                             |
| **chatId**    | **int32**           |                                                                             |
| **messageId** | **int32**           |                                                                             |

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateChatMessageAdaV1ProjectsProjectIdChatsChatIdMessagesMessageIdPutRequest struct via the builder pattern

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |

**chatMessageUpdate** | [**ChatMessageUpdate**](ChatMessageUpdate.md) | |
**xAdaToken** | **string** | |

### Return type

[**ChatMessage**](ChatMessage.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)
