# PlatformApi.MeApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**readUsersMeMeGet**](MeApi.md#readUsersMeMeGet) | **GET** /me | Read Users Me



## readUsersMeMeGet

> User readUsersMeMeGet()

Read Users Me

### Example

```javascript
import PlatformApi from 'platform_api';

let apiInstance = new PlatformApi.MeApi();
apiInstance.readUsersMeMeGet((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
