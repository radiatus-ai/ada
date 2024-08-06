# ChatUpdate

## Properties

| Name      | Type                          | Description | Notes      |
| --------- | ----------------------------- | ----------- | ---------- |
| **Name**  | Pointer to **NullableString** |             | [optional] |
| **Model** | Pointer to **NullableString** |             | [optional] |

## Methods

### NewChatUpdate

`func NewChatUpdate() *ChatUpdate`

NewChatUpdate instantiates a new ChatUpdate object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChatUpdateWithDefaults

`func NewChatUpdateWithDefaults() *ChatUpdate`

NewChatUpdateWithDefaults instantiates a new ChatUpdate object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *ChatUpdate) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *ChatUpdate) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *ChatUpdate) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *ChatUpdate) HasName() bool`

HasName returns a boolean if a field has been set.

### SetNameNil

`func (o *ChatUpdate) SetNameNil(b bool)`

SetNameNil sets the value for Name to be an explicit nil

### UnsetName

`func (o *ChatUpdate) UnsetName()`

UnsetName ensures that no value is present for Name, not even an explicit nil

### GetModel

`func (o *ChatUpdate) GetModel() string`

GetModel returns the Model field if non-nil, zero value otherwise.

### GetModelOk

`func (o *ChatUpdate) GetModelOk() (*string, bool)`

GetModelOk returns a tuple with the Model field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModel

`func (o *ChatUpdate) SetModel(v string)`

SetModel sets Model field to given value.

### HasModel

`func (o *ChatUpdate) HasModel() bool`

HasModel returns a boolean if a field has been set.

### SetModelNil

`func (o *ChatUpdate) SetModelNil(b bool)`

SetModelNil sets the value for Model to be an explicit nil

### UnsetModel

`func (o *ChatUpdate) UnsetModel()`

UnsetModel ensures that no value is present for Model, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
