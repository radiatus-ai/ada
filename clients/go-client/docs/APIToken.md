# APIToken

## Properties

| Name           | Type             | Description | Notes |
| -------------- | ---------------- | ----------- | ----- |
| **Name**       | **string**       |             |
| **Id**         | **int32**        |             |
| **Token**      | **string**       |             |
| **UserId**     | **int32**        |             |
| **CreatedAt**  | **time.Time**    |             |
| **LastUsedAt** | **NullableTime** |             |

## Methods

### NewAPIToken

`func NewAPIToken(name string, id int32, token string, userId int32, createdAt time.Time, lastUsedAt NullableTime, ) *APIToken`

NewAPIToken instantiates a new APIToken object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAPITokenWithDefaults

`func NewAPITokenWithDefaults() *APIToken`

NewAPITokenWithDefaults instantiates a new APIToken object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *APIToken) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *APIToken) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *APIToken) SetName(v string)`

SetName sets Name field to given value.

### GetId

`func (o *APIToken) GetId() int32`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *APIToken) GetIdOk() (*int32, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *APIToken) SetId(v int32)`

SetId sets Id field to given value.

### GetToken

`func (o *APIToken) GetToken() string`

GetToken returns the Token field if non-nil, zero value otherwise.

### GetTokenOk

`func (o *APIToken) GetTokenOk() (*string, bool)`

GetTokenOk returns a tuple with the Token field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetToken

`func (o *APIToken) SetToken(v string)`

SetToken sets Token field to given value.

### GetUserId

`func (o *APIToken) GetUserId() int32`

GetUserId returns the UserId field if non-nil, zero value otherwise.

### GetUserIdOk

`func (o *APIToken) GetUserIdOk() (*int32, bool)`

GetUserIdOk returns a tuple with the UserId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUserId

`func (o *APIToken) SetUserId(v int32)`

SetUserId sets UserId field to given value.

### GetCreatedAt

`func (o *APIToken) GetCreatedAt() time.Time`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *APIToken) GetCreatedAtOk() (*time.Time, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *APIToken) SetCreatedAt(v time.Time)`

SetCreatedAt sets CreatedAt field to given value.

### GetLastUsedAt

`func (o *APIToken) GetLastUsedAt() time.Time`

GetLastUsedAt returns the LastUsedAt field if non-nil, zero value otherwise.

### GetLastUsedAtOk

`func (o *APIToken) GetLastUsedAtOk() (*time.Time, bool)`

GetLastUsedAtOk returns a tuple with the LastUsedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastUsedAt

`func (o *APIToken) SetLastUsedAt(v time.Time)`

SetLastUsedAt sets LastUsedAt field to given value.

### SetLastUsedAtNil

`func (o *APIToken) SetLastUsedAtNil(b bool)`

SetLastUsedAtNil sets the value for LastUsedAt to be an explicit nil

### UnsetLastUsedAt

`func (o *APIToken) UnsetLastUsedAt()`

UnsetLastUsedAt ensures that no value is present for LastUsedAt, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
