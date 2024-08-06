# Credential

## Properties

| Name               | Type                                    | Description | Notes      |
| ------------------ | --------------------------------------- | ----------- | ---------- |
| **Name**           | **string**                              |             |
| **CredentialType** | [**CredentialType**](CredentialType.md) |             |
| **Metadata**       | Pointer to **map[string]interface{}**   |             | [optional] |
| **Id**             | **int32**                               |             |
| **OrganizationId** | **int32**                               |             |

## Methods

### NewCredential

`func NewCredential(name string, credentialType CredentialType, id int32, organizationId int32, ) *Credential`

NewCredential instantiates a new Credential object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCredentialWithDefaults

`func NewCredentialWithDefaults() *Credential`

NewCredentialWithDefaults instantiates a new Credential object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *Credential) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Credential) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Credential) SetName(v string)`

SetName sets Name field to given value.

### GetCredentialType

`func (o *Credential) GetCredentialType() CredentialType`

GetCredentialType returns the CredentialType field if non-nil, zero value otherwise.

### GetCredentialTypeOk

`func (o *Credential) GetCredentialTypeOk() (*CredentialType, bool)`

GetCredentialTypeOk returns a tuple with the CredentialType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCredentialType

`func (o *Credential) SetCredentialType(v CredentialType)`

SetCredentialType sets CredentialType field to given value.

### GetMetadata

`func (o *Credential) GetMetadata() map[string]interface{}`

GetMetadata returns the Metadata field if non-nil, zero value otherwise.

### GetMetadataOk

`func (o *Credential) GetMetadataOk() (*map[string]interface{}, bool)`

GetMetadataOk returns a tuple with the Metadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMetadata

`func (o *Credential) SetMetadata(v map[string]interface{})`

SetMetadata sets Metadata field to given value.

### HasMetadata

`func (o *Credential) HasMetadata() bool`

HasMetadata returns a boolean if a field has been set.

### SetMetadataNil

`func (o *Credential) SetMetadataNil(b bool)`

SetMetadataNil sets the value for Metadata to be an explicit nil

### UnsetMetadata

`func (o *Credential) UnsetMetadata()`

UnsetMetadata ensures that no value is present for Metadata, not even an explicit nil

### GetId

`func (o *Credential) GetId() int32`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Credential) GetIdOk() (*int32, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Credential) SetId(v int32)`

SetId sets Id field to given value.

### GetOrganizationId

`func (o *Credential) GetOrganizationId() int32`

GetOrganizationId returns the OrganizationId field if non-nil, zero value otherwise.

### GetOrganizationIdOk

`func (o *Credential) GetOrganizationIdOk() (*int32, bool)`

GetOrganizationIdOk returns a tuple with the OrganizationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrganizationId

`func (o *Credential) SetOrganizationId(v int32)`

SetOrganizationId sets OrganizationId field to given value.

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
