# \CredentialsAPI

All URIs are relative to _http://localhost_

| Method                                                                                                                         | HTTP request                                   | Description       |
| ------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------- | ----------------- |
| [**CreateCredentialAdaV1CredentialsPost**](CredentialsAPI.md#CreateCredentialAdaV1CredentialsPost)                             | **Post** /ada/v1/credentials/                  | Create Credential |
| [**DeleteCredentialAdaV1CredentialsCredentialIdDelete**](CredentialsAPI.md#DeleteCredentialAdaV1CredentialsCredentialIdDelete) | **Delete** /ada/v1/credentials/{credential_id} | Delete Credential |
| [**ReadCredentialAdaV1CredentialsCredentialIdGet**](CredentialsAPI.md#ReadCredentialAdaV1CredentialsCredentialIdGet)           | **Get** /ada/v1/credentials/{credential_id}    | Read Credential   |
| [**ReadCredentialsAdaV1CredentialsGet**](CredentialsAPI.md#ReadCredentialsAdaV1CredentialsGet)                                 | **Get** /ada/v1/credentials/                   | Read Credentials  |
| [**UpdateCredentialAdaV1CredentialsCredentialIdPut**](CredentialsAPI.md#UpdateCredentialAdaV1CredentialsCredentialIdPut)       | **Put** /ada/v1/credentials/{credential_id}    | Update Credential |

## CreateCredentialAdaV1CredentialsPost

> Credential CreateCredentialAdaV1CredentialsPost(ctx).CredentialCreate(credentialCreate).XAdaToken(xAdaToken).Execute()

Create Credential

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
	credentialCreate := *openapiclient.NewCredentialCreate("Name_example", openapiclient.CredentialType("api_key"), map[string]interface{}(123)) // CredentialCreate |
	xAdaToken := "xAdaToken_example" // string |  (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.CredentialsAPI.CreateCredentialAdaV1CredentialsPost(context.Background()).CredentialCreate(credentialCreate).XAdaToken(xAdaToken).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `CredentialsAPI.CreateCredentialAdaV1CredentialsPost``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CreateCredentialAdaV1CredentialsPost`: Credential
	fmt.Fprintf(os.Stdout, "Response from `CredentialsAPI.CreateCredentialAdaV1CredentialsPost`: %v\n", resp)
}
```

### Path Parameters

### Other Parameters

Other parameters are passed through a pointer to a apiCreateCredentialAdaV1CredentialsPostRequest struct via the builder pattern

| Name                 | Type                                        | Description | Notes |
| -------------------- | ------------------------------------------- | ----------- | ----- |
| **credentialCreate** | [**CredentialCreate**](CredentialCreate.md) |             |
| **xAdaToken**        | **string**                                  |             |

### Return type

[**Credential**](Credential.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

## DeleteCredentialAdaV1CredentialsCredentialIdDelete

> Credential DeleteCredentialAdaV1CredentialsCredentialIdDelete(ctx, credentialId).XAdaToken(xAdaToken).Execute()

Delete Credential

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
	credentialId := int32(56) // int32 |
	xAdaToken := "xAdaToken_example" // string |  (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.CredentialsAPI.DeleteCredentialAdaV1CredentialsCredentialIdDelete(context.Background(), credentialId).XAdaToken(xAdaToken).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `CredentialsAPI.DeleteCredentialAdaV1CredentialsCredentialIdDelete``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `DeleteCredentialAdaV1CredentialsCredentialIdDelete`: Credential
	fmt.Fprintf(os.Stdout, "Response from `CredentialsAPI.DeleteCredentialAdaV1CredentialsCredentialIdDelete`: %v\n", resp)
}
```

### Path Parameters

| Name             | Type                | Description                                                                 | Notes |
| ---------------- | ------------------- | --------------------------------------------------------------------------- | ----- |
| **ctx**          | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc. |
| **credentialId** | **int32**           |                                                                             |

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteCredentialAdaV1CredentialsCredentialIdDeleteRequest struct via the builder pattern

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |

**xAdaToken** | **string** | |

### Return type

[**Credential**](Credential.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

## ReadCredentialAdaV1CredentialsCredentialIdGet

> Credential ReadCredentialAdaV1CredentialsCredentialIdGet(ctx, credentialId).XAdaToken(xAdaToken).Execute()

Read Credential

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
	credentialId := int32(56) // int32 |
	xAdaToken := "xAdaToken_example" // string |  (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.CredentialsAPI.ReadCredentialAdaV1CredentialsCredentialIdGet(context.Background(), credentialId).XAdaToken(xAdaToken).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `CredentialsAPI.ReadCredentialAdaV1CredentialsCredentialIdGet``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ReadCredentialAdaV1CredentialsCredentialIdGet`: Credential
	fmt.Fprintf(os.Stdout, "Response from `CredentialsAPI.ReadCredentialAdaV1CredentialsCredentialIdGet`: %v\n", resp)
}
```

### Path Parameters

| Name             | Type                | Description                                                                 | Notes |
| ---------------- | ------------------- | --------------------------------------------------------------------------- | ----- |
| **ctx**          | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc. |
| **credentialId** | **int32**           |                                                                             |

### Other Parameters

Other parameters are passed through a pointer to a apiReadCredentialAdaV1CredentialsCredentialIdGetRequest struct via the builder pattern

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |

**xAdaToken** | **string** | |

### Return type

[**Credential**](Credential.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

## ReadCredentialsAdaV1CredentialsGet

> []Credential ReadCredentialsAdaV1CredentialsGet(ctx).Skip(skip).Limit(limit).XAdaToken(xAdaToken).Execute()

Read Credentials

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
	resp, r, err := apiClient.CredentialsAPI.ReadCredentialsAdaV1CredentialsGet(context.Background()).Skip(skip).Limit(limit).XAdaToken(xAdaToken).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `CredentialsAPI.ReadCredentialsAdaV1CredentialsGet``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ReadCredentialsAdaV1CredentialsGet`: []Credential
	fmt.Fprintf(os.Stdout, "Response from `CredentialsAPI.ReadCredentialsAdaV1CredentialsGet`: %v\n", resp)
}
```

### Path Parameters

### Other Parameters

Other parameters are passed through a pointer to a apiReadCredentialsAdaV1CredentialsGetRequest struct via the builder pattern

| Name          | Type       | Description | Notes            |
| ------------- | ---------- | ----------- | ---------------- |
| **skip**      | **int32**  |             | [default to 0]   |
| **limit**     | **int32**  |             | [default to 100] |
| **xAdaToken** | **string** |             |

### Return type

[**[]Credential**](Credential.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

## UpdateCredentialAdaV1CredentialsCredentialIdPut

> Credential UpdateCredentialAdaV1CredentialsCredentialIdPut(ctx, credentialId).CredentialUpdate(credentialUpdate).XAdaToken(xAdaToken).Execute()

Update Credential

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
	credentialId := int32(56) // int32 |
	credentialUpdate := *openapiclient.NewCredentialUpdate() // CredentialUpdate |
	xAdaToken := "xAdaToken_example" // string |  (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.CredentialsAPI.UpdateCredentialAdaV1CredentialsCredentialIdPut(context.Background(), credentialId).CredentialUpdate(credentialUpdate).XAdaToken(xAdaToken).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `CredentialsAPI.UpdateCredentialAdaV1CredentialsCredentialIdPut``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `UpdateCredentialAdaV1CredentialsCredentialIdPut`: Credential
	fmt.Fprintf(os.Stdout, "Response from `CredentialsAPI.UpdateCredentialAdaV1CredentialsCredentialIdPut`: %v\n", resp)
}
```

### Path Parameters

| Name             | Type                | Description                                                                 | Notes |
| ---------------- | ------------------- | --------------------------------------------------------------------------- | ----- |
| **ctx**          | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc. |
| **credentialId** | **int32**           |                                                                             |

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateCredentialAdaV1CredentialsCredentialIdPutRequest struct via the builder pattern

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |

**credentialUpdate** | [**CredentialUpdate**](CredentialUpdate.md) | |
**xAdaToken** | **string** | |

### Return type

[**Credential**](Credential.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)
