# PlatformApi.LiveApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**sendMessageLiveSendMessageMessageGet**](LiveApi.md#sendMessageLiveSendMessageMessageGet) | **GET** /live/send_message/{message} | Send Message



## sendMessageLiveSendMessageMessageGet

> Object sendMessageLiveSendMessageMessageGet(message)

Send Message

### Example

```javascript
import PlatformApi from 'platform_api';

let apiInstance = new PlatformApi.LiveApi();
let message = "message_example"; // String |
apiInstance.sendMessageLiveSendMessageMessageGet(message, (error, data, response) => {
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
 **message** | **String**|  |

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
