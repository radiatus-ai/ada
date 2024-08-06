# CredentialCreate

## Properties

| Name               | Type                                    | Description | Notes      |
| ------------------ | --------------------------------------- | ----------- | ---------- |
| **Name**           | **string**                              |             |
| **CredentialType** | [**CredentialType**](CredentialType.md) |             |
| **Metadata**       | Pointer to **map[string]interface{}**   |             | [optional] |
| **Data**           | **map[string]interface{}**              |             |

## Methods

### NewCredentialCreate

`func NewCredentialCreate(name string, credentialType CredentialType, data map[string]interface{}, ) *CredentialCreate`

NewCredentialCreate instantiates a new CredentialCreate object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCredentialCreateWithDefaults

`func NewCredentialCreateWithDefaults() *CredentialCreate`

NewCredentialCreateWithDefaults instantiates a new CredentialCreate object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *CredentialCreate) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *CredentialCreate) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *CredentialCreate) SetName(v string)`

SetName sets Name field to given value.

### GetCredentialType

`func (o *CredentialCreate) GetCredentialType() CredentialType`

GetCredentialType returns the CredentialType field if non-nil, zero value otherwise.

### GetCredentialTypeOk

`func (o *CredentialCreate) GetCredentialTypeOk() (*CredentialType, bool)`

GetCredentialTypeOk returns a tuple with the CredentialType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCredentialType

`func (o *CredentialCreate) SetCredentialType(v CredentialType)`

SetCredentialType sets CredentialType field to given value.

### GetMetadata

`func (o *CredentialCreate) GetMetadata() map[string]interface{}`

GetMetadata returns the Metadata field if non-nil, zero value otherwise.

### GetMetadataOk

`func (o *CredentialCreate) GetMetadataOk() (*map[string]interface{}, bool)`

GetMetadataOk returns a tuple with the Metadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMetadata

`func (o *CredentialCreate) SetMetadata(v map[string]interface{})`

SetMetadata sets Metadata field to given value.

### HasMetadata

`func (o *CredentialCreate) HasMetadata() bool`

HasMetadata returns a boolean if a field has been set.

### SetMetadataNil

`func (o *CredentialCreate) SetMetadataNil(b bool)`

SetMetadataNil sets the value for Metadata to be an explicit nil

### UnsetMetadata

`func (o *CredentialCreate) UnsetMetadata()`

UnsetMetadata ensures that no value is present for Metadata, not even an explicit nil

### GetData

`func (o *CredentialCreate) GetData() map[string]interface{}`

GetData returns the Data field if non-nil, zero value otherwise.

### GetDataOk

`func (o *CredentialCreate) GetDataOk() (*map[string]interface{}, bool)`

GetDataOk returns a tuple with the Data field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetData

`func (o *CredentialCreate) SetData(v map[string]interface{})`

SetData sets Data field to given value.

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
