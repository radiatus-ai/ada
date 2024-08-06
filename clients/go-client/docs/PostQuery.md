# PostQuery

## Properties

| Name               | Type       | Description | Notes |
| ------------------ | ---------- | ----------- | ----- |
| **Token**          | **string** |             |
| **OrganizationId** | **int32**  |             |

## Methods

### NewPostQuery

`func NewPostQuery(token string, organizationId int32, ) *PostQuery`

NewPostQuery instantiates a new PostQuery object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostQueryWithDefaults

`func NewPostQueryWithDefaults() *PostQuery`

NewPostQueryWithDefaults instantiates a new PostQuery object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetToken

`func (o *PostQuery) GetToken() string`

GetToken returns the Token field if non-nil, zero value otherwise.

### GetTokenOk

`func (o *PostQuery) GetTokenOk() (*string, bool)`

GetTokenOk returns a tuple with the Token field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetToken

`func (o *PostQuery) SetToken(v string)`

SetToken sets Token field to given value.

### GetOrganizationId

`func (o *PostQuery) GetOrganizationId() int32`

GetOrganizationId returns the OrganizationId field if non-nil, zero value otherwise.

### GetOrganizationIdOk

`func (o *PostQuery) GetOrganizationIdOk() (*int32, bool)`

GetOrganizationIdOk returns a tuple with the OrganizationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrganizationId

`func (o *PostQuery) SetOrganizationId(v int32)`

SetOrganizationId sets OrganizationId field to given value.

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
