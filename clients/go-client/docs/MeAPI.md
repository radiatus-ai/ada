# \MeAPI

All URIs are relative to _http://localhost_

| Method                                            | HTTP request | Description   |
| ------------------------------------------------- | ------------ | ------------- |
| [**ReadUsersMeMeGet**](MeAPI.md#ReadUsersMeMeGet) | **Get** /me  | Read Users Me |

## ReadUsersMeMeGet

> User ReadUsersMeMeGet(ctx).XAdaToken(xAdaToken).Execute()

Read Users Me

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
	resp, r, err := apiClient.MeAPI.ReadUsersMeMeGet(context.Background()).XAdaToken(xAdaToken).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `MeAPI.ReadUsersMeMeGet``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ReadUsersMeMeGet`: User
	fmt.Fprintf(os.Stdout, "Response from `MeAPI.ReadUsersMeMeGet`: %v\n", resp)
}
```

### Path Parameters

### Other Parameters

Other parameters are passed through a pointer to a apiReadUsersMeMeGetRequest struct via the builder pattern

| Name          | Type       | Description | Notes |
| ------------- | ---------- | ----------- | ----- |
| **xAdaToken** | **string** |             |

### Return type

[**User**](User.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)
