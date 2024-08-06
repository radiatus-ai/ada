# \AuthAPI

All URIs are relative to _http://localhost_

| Method                                                              | HTTP request         | Description  |
| ------------------------------------------------------------------- | -------------------- | ------------ |
| [**LoginGoogleAuthLoginPost**](AuthAPI.md#LoginGoogleAuthLoginPost) | **Post** /auth/login | Login Google |

## LoginGoogleAuthLoginPost

> interface{} LoginGoogleAuthLoginPost(ctx).PostQuery(postQuery).Execute()

Login Google

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
	postQuery := *openapiclient.NewPostQuery("Token_example", int32(123)) // PostQuery |

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.AuthAPI.LoginGoogleAuthLoginPost(context.Background()).PostQuery(postQuery).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `AuthAPI.LoginGoogleAuthLoginPost``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `LoginGoogleAuthLoginPost`: interface{}
	fmt.Fprintf(os.Stdout, "Response from `AuthAPI.LoginGoogleAuthLoginPost`: %v\n", resp)
}
```

### Path Parameters

### Other Parameters

Other parameters are passed through a pointer to a apiLoginGoogleAuthLoginPostRequest struct via the builder pattern

| Name          | Type                          | Description | Notes |
| ------------- | ----------------------------- | ----------- | ----- |
| **postQuery** | [**PostQuery**](PostQuery.md) |             |

### Return type

**interface{}**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)
