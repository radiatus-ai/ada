# ChatMessageUpdate

## Properties

| Name              | Type                                  | Description | Notes      |
| ----------------- | ------------------------------------- | ----------- | ---------- |
| **Role**          | Pointer to **NullableString**         |             | [optional] |
| **Content**       | Pointer to **NullableString**         |             | [optional] |
| **IsContextFile** | Pointer to **NullableBool**           |             | [optional] |
| **Model**         | Pointer to **NullableString**         |             | [optional] |
| **Tokens**        | Pointer to **NullableInt32**          |             | [optional] |
| **ContentRaw**    | Pointer to **map[string]interface{}** |             | [optional] |
| **IsToolMessage** | Pointer to **NullableBool**           |             | [optional] |

## Methods

### NewChatMessageUpdate

`func NewChatMessageUpdate() *ChatMessageUpdate`

NewChatMessageUpdate instantiates a new ChatMessageUpdate object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChatMessageUpdateWithDefaults

`func NewChatMessageUpdateWithDefaults() *ChatMessageUpdate`

NewChatMessageUpdateWithDefaults instantiates a new ChatMessageUpdate object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRole

`func (o *ChatMessageUpdate) GetRole() string`

GetRole returns the Role field if non-nil, zero value otherwise.

### GetRoleOk

`func (o *ChatMessageUpdate) GetRoleOk() (*string, bool)`

GetRoleOk returns a tuple with the Role field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRole

`func (o *ChatMessageUpdate) SetRole(v string)`

SetRole sets Role field to given value.

### HasRole

`func (o *ChatMessageUpdate) HasRole() bool`

HasRole returns a boolean if a field has been set.

### SetRoleNil

`func (o *ChatMessageUpdate) SetRoleNil(b bool)`

SetRoleNil sets the value for Role to be an explicit nil

### UnsetRole

`func (o *ChatMessageUpdate) UnsetRole()`

UnsetRole ensures that no value is present for Role, not even an explicit nil

### GetContent

`func (o *ChatMessageUpdate) GetContent() string`

GetContent returns the Content field if non-nil, zero value otherwise.

### GetContentOk

`func (o *ChatMessageUpdate) GetContentOk() (*string, bool)`

GetContentOk returns a tuple with the Content field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetContent

`func (o *ChatMessageUpdate) SetContent(v string)`

SetContent sets Content field to given value.

### HasContent

`func (o *ChatMessageUpdate) HasContent() bool`

HasContent returns a boolean if a field has been set.

### SetContentNil

`func (o *ChatMessageUpdate) SetContentNil(b bool)`

SetContentNil sets the value for Content to be an explicit nil

### UnsetContent

`func (o *ChatMessageUpdate) UnsetContent()`

UnsetContent ensures that no value is present for Content, not even an explicit nil

### GetIsContextFile

`func (o *ChatMessageUpdate) GetIsContextFile() bool`

GetIsContextFile returns the IsContextFile field if non-nil, zero value otherwise.

### GetIsContextFileOk

`func (o *ChatMessageUpdate) GetIsContextFileOk() (*bool, bool)`

GetIsContextFileOk returns a tuple with the IsContextFile field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsContextFile

`func (o *ChatMessageUpdate) SetIsContextFile(v bool)`

SetIsContextFile sets IsContextFile field to given value.

### HasIsContextFile

`func (o *ChatMessageUpdate) HasIsContextFile() bool`

HasIsContextFile returns a boolean if a field has been set.

### SetIsContextFileNil

`func (o *ChatMessageUpdate) SetIsContextFileNil(b bool)`

SetIsContextFileNil sets the value for IsContextFile to be an explicit nil

### UnsetIsContextFile

`func (o *ChatMessageUpdate) UnsetIsContextFile()`

UnsetIsContextFile ensures that no value is present for IsContextFile, not even an explicit nil

### GetModel

`func (o *ChatMessageUpdate) GetModel() string`

GetModel returns the Model field if non-nil, zero value otherwise.

### GetModelOk

`func (o *ChatMessageUpdate) GetModelOk() (*string, bool)`

GetModelOk returns a tuple with the Model field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModel

`func (o *ChatMessageUpdate) SetModel(v string)`

SetModel sets Model field to given value.

### HasModel

`func (o *ChatMessageUpdate) HasModel() bool`

HasModel returns a boolean if a field has been set.

### SetModelNil

`func (o *ChatMessageUpdate) SetModelNil(b bool)`

SetModelNil sets the value for Model to be an explicit nil

### UnsetModel

`func (o *ChatMessageUpdate) UnsetModel()`

UnsetModel ensures that no value is present for Model, not even an explicit nil

### GetTokens

`func (o *ChatMessageUpdate) GetTokens() int32`

GetTokens returns the Tokens field if non-nil, zero value otherwise.

### GetTokensOk

`func (o *ChatMessageUpdate) GetTokensOk() (*int32, bool)`

GetTokensOk returns a tuple with the Tokens field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTokens

`func (o *ChatMessageUpdate) SetTokens(v int32)`

SetTokens sets Tokens field to given value.

### HasTokens

`func (o *ChatMessageUpdate) HasTokens() bool`

HasTokens returns a boolean if a field has been set.

### SetTokensNil

`func (o *ChatMessageUpdate) SetTokensNil(b bool)`

SetTokensNil sets the value for Tokens to be an explicit nil

### UnsetTokens

`func (o *ChatMessageUpdate) UnsetTokens()`

UnsetTokens ensures that no value is present for Tokens, not even an explicit nil

### GetContentRaw

`func (o *ChatMessageUpdate) GetContentRaw() map[string]interface{}`

GetContentRaw returns the ContentRaw field if non-nil, zero value otherwise.

### GetContentRawOk

`func (o *ChatMessageUpdate) GetContentRawOk() (*map[string]interface{}, bool)`

GetContentRawOk returns a tuple with the ContentRaw field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetContentRaw

`func (o *ChatMessageUpdate) SetContentRaw(v map[string]interface{})`

SetContentRaw sets ContentRaw field to given value.

### HasContentRaw

`func (o *ChatMessageUpdate) HasContentRaw() bool`

HasContentRaw returns a boolean if a field has been set.

### SetContentRawNil

`func (o *ChatMessageUpdate) SetContentRawNil(b bool)`

SetContentRawNil sets the value for ContentRaw to be an explicit nil

### UnsetContentRaw

`func (o *ChatMessageUpdate) UnsetContentRaw()`

UnsetContentRaw ensures that no value is present for ContentRaw, not even an explicit nil

### GetIsToolMessage

`func (o *ChatMessageUpdate) GetIsToolMessage() bool`

GetIsToolMessage returns the IsToolMessage field if non-nil, zero value otherwise.

### GetIsToolMessageOk

`func (o *ChatMessageUpdate) GetIsToolMessageOk() (*bool, bool)`

GetIsToolMessageOk returns a tuple with the IsToolMessage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsToolMessage

`func (o *ChatMessageUpdate) SetIsToolMessage(v bool)`

SetIsToolMessage sets IsToolMessage field to given value.

### HasIsToolMessage

`func (o *ChatMessageUpdate) HasIsToolMessage() bool`

HasIsToolMessage returns a boolean if a field has been set.

### SetIsToolMessageNil

`func (o *ChatMessageUpdate) SetIsToolMessageNil(b bool)`

SetIsToolMessageNil sets the value for IsToolMessage to be an explicit nil

### UnsetIsToolMessage

`func (o *ChatMessageUpdate) UnsetIsToolMessage()`

UnsetIsToolMessage ensures that no value is present for IsToolMessage, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
