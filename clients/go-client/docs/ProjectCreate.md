# ProjectCreate

## Properties

| Name               | Type                         | Description | Notes      |
| ------------------ | ---------------------------- | ----------- | ---------- |
| **Name**           | **string**                   |             |
| **OrganizationId** | Pointer to **NullableInt32** |             | [optional] |

## Methods

### NewProjectCreate

`func NewProjectCreate(name string, ) *ProjectCreate`

NewProjectCreate instantiates a new ProjectCreate object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewProjectCreateWithDefaults

`func NewProjectCreateWithDefaults() *ProjectCreate`

NewProjectCreateWithDefaults instantiates a new ProjectCreate object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *ProjectCreate) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *ProjectCreate) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *ProjectCreate) SetName(v string)`

SetName sets Name field to given value.

### GetOrganizationId

`func (o *ProjectCreate) GetOrganizationId() int32`

GetOrganizationId returns the OrganizationId field if non-nil, zero value otherwise.

### GetOrganizationIdOk

`func (o *ProjectCreate) GetOrganizationIdOk() (*int32, bool)`

GetOrganizationIdOk returns a tuple with the OrganizationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrganizationId

`func (o *ProjectCreate) SetOrganizationId(v int32)`

SetOrganizationId sets OrganizationId field to given value.

### HasOrganizationId

`func (o *ProjectCreate) HasOrganizationId() bool`

HasOrganizationId returns a boolean if a field has been set.

### SetOrganizationIdNil

`func (o *ProjectCreate) SetOrganizationIdNil(b bool)`

SetOrganizationIdNil sets the value for OrganizationId to be an explicit nil

### UnsetOrganizationId

`func (o *ProjectCreate) UnsetOrganizationId()`

UnsetOrganizationId ensures that no value is present for OrganizationId, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
