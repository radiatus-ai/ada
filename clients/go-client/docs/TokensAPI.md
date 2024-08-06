# \TokensAPI

All URIs are relative to _http://localhost_

| Method                                                                                  | HTTP request                  | Description      |
| --------------------------------------------------------------------------------------- | ----------------------------- | ---------------- |
| [**CreateApiTokenTokensPost**](TokensAPI.md#CreateApiTokenTokensPost)                   | **Post** /tokens              | Create Api Token |
| [**DeleteApiTokenTokensTokenIdDelete**](TokensAPI.md#DeleteApiTokenTokensTokenIdDelete) | **Delete** /tokens/{token_id} | Delete Api Token |
| [**ListApiTokensTokensGet**](TokensAPI.md#ListApiTokensTokensGet)                       | **Get** /tokens               | List Api Tokens  |

## CreateApiTokenTokensPost

> APIToken CreateApiTokenTokensPost(ctx).APITokenCreate(aPITokenCreate).XAdaToken(xAdaToken).Execute()

Create Api Token

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
	aPITokenCreate := *openapiclient.NewAPITokenCreate("Name_example") // APITokenCreate |
	xAdaToken := "xAdaToken_example" // string |  (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.TokensAPI.CreateApiTokenTokensPost(context.Background()).APITokenCreate(aPITokenCreate).XAdaToken(xAdaToken).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `TokensAPI.CreateApiTokenTokensPost``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CreateApiTokenTokensPost`: APIToken
	fmt.Fprintf(os.Stdout, "Response from `TokensAPI.CreateApiTokenTokensPost`: %v\n", resp)
}
```

### Path Parameters

### Other Parameters

Other parameters are passed through a pointer to a apiCreateApiTokenTokensPostRequest struct via the builder pattern

| Name               | Type                                    | Description | Notes |
| ------------------ | --------------------------------------- | ----------- | ----- |
| **aPITokenCreate** | [**APITokenCreate**](APITokenCreate.md) |             |
| **xAdaToken**      | **string**                              |             |

### Return type

[**APIToken**](APIToken.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

## DeleteApiTokenTokensTokenIdDelete

> APIToken DeleteApiTokenTokensTokenIdDelete(ctx, tokenId).XAdaToken(xAdaToken).Execute()

Delete Api Token

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
	tokenId := int32(56) // int32 |
	xAdaToken := "xAdaToken_example" // string |  (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.TokensAPI.DeleteApiTokenTokensTokenIdDelete(context.Background(), tokenId).XAdaToken(xAdaToken).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `TokensAPI.DeleteApiTokenTokensTokenIdDelete``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `DeleteApiTokenTokensTokenIdDelete`: APIToken
	fmt.Fprintf(os.Stdout, "Response from `TokensAPI.DeleteApiTokenTokensTokenIdDelete`: %v\n", resp)
}
```

### Path Parameters

| Name        | Type                | Description                                                                 | Notes |
| ----------- | ------------------- | --------------------------------------------------------------------------- | ----- |
| **ctx**     | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc. |
| **tokenId** | **int32**           |                                                                             |

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteApiTokenTokensTokenIdDeleteRequest struct via the builder pattern

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |

**xAdaToken** | **string** | |

### Return type

[**APIToken**](APIToken.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

## ListApiTokensTokensGet

> []APIToken ListApiTokensTokensGet(ctx).XAdaToken(xAdaToken).Execute()

List Api Tokens

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
	xAdaToken := "xAdaToken_example" // string |  (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.TokensAPI.ListApiTokensTokensGet(context.Background()).XAdaToken(xAdaToken).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `TokensAPI.ListApiTokensTokensGet``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ListApiTokensTokensGet`: []APIToken
	fmt.Fprintf(os.Stdout, "Response from `TokensAPI.ListApiTokensTokensGet`: %v\n", resp)
}
```

### Path Parameters

### Other Parameters

Other parameters are passed through a pointer to a apiListApiTokensTokensGetRequest struct via the builder pattern

| Name          | Type       | Description | Notes |
| ------------- | ---------- | ----------- | ----- |
| **xAdaToken** | **string** |             |

### Return type

[**[]APIToken**](APIToken.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)
