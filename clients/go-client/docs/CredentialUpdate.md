# CredentialUpdate

## Properties

| Name               | Type                                                       | Description | Notes      |
| ------------------ | ---------------------------------------------------------- | ----------- | ---------- |
| **Name**           | Pointer to **NullableString**                              |             | [optional] |
| **CredentialType** | Pointer to [**NullableCredentialType**](CredentialType.md) |             | [optional] |
| **Metadata**       | Pointer to **map[string]interface{}**                      |             | [optional] |
| **Data**           | Pointer to **map[string]interface{}**                      |             | [optional] |

## Methods

### NewCredentialUpdate

`func NewCredentialUpdate() *CredentialUpdate`

NewCredentialUpdate instantiates a new CredentialUpdate object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCredentialUpdateWithDefaults

`func NewCredentialUpdateWithDefaults() *CredentialUpdate`

NewCredentialUpdateWithDefaults instantiates a new CredentialUpdate object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *CredentialUpdate) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *CredentialUpdate) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *CredentialUpdate) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *CredentialUpdate) HasName() bool`

HasName returns a boolean if a field has been set.

### SetNameNil

`func (o *CredentialUpdate) SetNameNil(b bool)`

SetNameNil sets the value for Name to be an explicit nil

### UnsetName

`func (o *CredentialUpdate) UnsetName()`

UnsetName ensures that no value is present for Name, not even an explicit nil

### GetCredentialType

`func (o *CredentialUpdate) GetCredentialType() CredentialType`

GetCredentialType returns the CredentialType field if non-nil, zero value otherwise.

### GetCredentialTypeOk

`func (o *CredentialUpdate) GetCredentialTypeOk() (*CredentialType, bool)`

GetCredentialTypeOk returns a tuple with the CredentialType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCredentialType

`func (o *CredentialUpdate) SetCredentialType(v CredentialType)`

SetCredentialType sets CredentialType field to given value.

### HasCredentialType

`func (o *CredentialUpdate) HasCredentialType() bool`

HasCredentialType returns a boolean if a field has been set.

### SetCredentialTypeNil

`func (o *CredentialUpdate) SetCredentialTypeNil(b bool)`

SetCredentialTypeNil sets the value for CredentialType to be an explicit nil

### UnsetCredentialType

`func (o *CredentialUpdate) UnsetCredentialType()`

UnsetCredentialType ensures that no value is present for CredentialType, not even an explicit nil

### GetMetadata

`func (o *CredentialUpdate) GetMetadata() map[string]interface{}`

GetMetadata returns the Metadata field if non-nil, zero value otherwise.

### GetMetadataOk

`func (o *CredentialUpdate) GetMetadataOk() (*map[string]interface{}, bool)`

GetMetadataOk returns a tuple with the Metadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMetadata

`func (o *CredentialUpdate) SetMetadata(v map[string]interface{})`

SetMetadata sets Metadata field to given value.

### HasMetadata

`func (o *CredentialUpdate) HasMetadata() bool`

HasMetadata returns a boolean if a field has been set.

### SetMetadataNil

`func (o *CredentialUpdate) SetMetadataNil(b bool)`

SetMetadataNil sets the value for Metadata to be an explicit nil

### UnsetMetadata

`func (o *CredentialUpdate) UnsetMetadata()`

UnsetMetadata ensures that no value is present for Metadata, not even an explicit nil

### GetData

`func (o *CredentialUpdate) GetData() map[string]interface{}`

GetData returns the Data field if non-nil, zero value otherwise.

### GetDataOk

`func (o *CredentialUpdate) GetDataOk() (*map[string]interface{}, bool)`

GetDataOk returns a tuple with the Data field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetData

`func (o *CredentialUpdate) SetData(v map[string]interface{})`

SetData sets Data field to given value.

### HasData

`func (o *CredentialUpdate) HasData() bool`

HasData returns a boolean if a field has been set.

### SetDataNil

`func (o *CredentialUpdate) SetDataNil(b bool)`

SetDataNil sets the value for Data to be an explicit nil

### UnsetData

`func (o *CredentialUpdate) UnsetData()`

UnsetData ensures that no value is present for Data, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
