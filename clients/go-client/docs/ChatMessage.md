# ChatMessage

## Properties

| Name              | Type                       | Description | Notes                         |
| ----------------- | -------------------------- | ----------- | ----------------------------- |
| **Role**          | **string**                 |             |
| **Content**       | **string**                 |             |
| **IsContextFile** | Pointer to **bool**        |             | [optional] [default to false] |
| **Model**         | **string**                 |             |
| **Tokens**        | **int32**                  |             |
| **ContentRaw**    | **map[string]interface{}** |             |
| **IsToolMessage** | Pointer to **bool**        |             | [optional] [default to false] |
| **ChatId**        | **int32**                  |             |
| **Id**            | **int32**                  |             |
| **CreatedAt**     | **time.Time**              |             |

## Methods

### NewChatMessage

`func NewChatMessage(role string, content string, model string, tokens int32, contentRaw map[string]interface{}, chatId int32, id int32, createdAt time.Time, ) *ChatMessage`

NewChatMessage instantiates a new ChatMessage object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChatMessageWithDefaults

`func NewChatMessageWithDefaults() *ChatMessage`

NewChatMessageWithDefaults instantiates a new ChatMessage object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRole

`func (o *ChatMessage) GetRole() string`

GetRole returns the Role field if non-nil, zero value otherwise.

### GetRoleOk

`func (o *ChatMessage) GetRoleOk() (*string, bool)`

GetRoleOk returns a tuple with the Role field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRole

`func (o *ChatMessage) SetRole(v string)`

SetRole sets Role field to given value.

### GetContent

`func (o *ChatMessage) GetContent() string`

GetContent returns the Content field if non-nil, zero value otherwise.

### GetContentOk

`func (o *ChatMessage) GetContentOk() (*string, bool)`

GetContentOk returns a tuple with the Content field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetContent

`func (o *ChatMessage) SetContent(v string)`

SetContent sets Content field to given value.

### GetIsContextFile

`func (o *ChatMessage) GetIsContextFile() bool`

GetIsContextFile returns the IsContextFile field if non-nil, zero value otherwise.

### GetIsContextFileOk

`func (o *ChatMessage) GetIsContextFileOk() (*bool, bool)`

GetIsContextFileOk returns a tuple with the IsContextFile field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsContextFile

`func (o *ChatMessage) SetIsContextFile(v bool)`

SetIsContextFile sets IsContextFile field to given value.

### HasIsContextFile

`func (o *ChatMessage) HasIsContextFile() bool`

HasIsContextFile returns a boolean if a field has been set.

### GetModel

`func (o *ChatMessage) GetModel() string`

GetModel returns the Model field if non-nil, zero value otherwise.

### GetModelOk

`func (o *ChatMessage) GetModelOk() (*string, bool)`

GetModelOk returns a tuple with the Model field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModel

`func (o *ChatMessage) SetModel(v string)`

SetModel sets Model field to given value.

### GetTokens

`func (o *ChatMessage) GetTokens() int32`

GetTokens returns the Tokens field if non-nil, zero value otherwise.

### GetTokensOk

`func (o *ChatMessage) GetTokensOk() (*int32, bool)`

GetTokensOk returns a tuple with the Tokens field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTokens

`func (o *ChatMessage) SetTokens(v int32)`

SetTokens sets Tokens field to given value.

### GetContentRaw

`func (o *ChatMessage) GetContentRaw() map[string]interface{}`

GetContentRaw returns the ContentRaw field if non-nil, zero value otherwise.

### GetContentRawOk

`func (o *ChatMessage) GetContentRawOk() (*map[string]interface{}, bool)`

GetContentRawOk returns a tuple with the ContentRaw field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetContentRaw

`func (o *ChatMessage) SetContentRaw(v map[string]interface{})`

SetContentRaw sets ContentRaw field to given value.

### GetIsToolMessage

`func (o *ChatMessage) GetIsToolMessage() bool`

GetIsToolMessage returns the IsToolMessage field if non-nil, zero value otherwise.

### GetIsToolMessageOk

`func (o *ChatMessage) GetIsToolMessageOk() (*bool, bool)`

GetIsToolMessageOk returns a tuple with the IsToolMessage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsToolMessage

`func (o *ChatMessage) SetIsToolMessage(v bool)`

SetIsToolMessage sets IsToolMessage field to given value.

### HasIsToolMessage

`func (o *ChatMessage) HasIsToolMessage() bool`

HasIsToolMessage returns a boolean if a field has been set.

### GetChatId

`func (o *ChatMessage) GetChatId() int32`

GetChatId returns the ChatId field if non-nil, zero value otherwise.

### GetChatIdOk

`func (o *ChatMessage) GetChatIdOk() (*int32, bool)`

GetChatIdOk returns a tuple with the ChatId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChatId

`func (o *ChatMessage) SetChatId(v int32)`

SetChatId sets ChatId field to given value.

### GetId

`func (o *ChatMessage) GetId() int32`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *ChatMessage) GetIdOk() (*int32, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *ChatMessage) SetId(v int32)`

SetId sets Id field to given value.

### GetCreatedAt

`func (o *ChatMessage) GetCreatedAt() time.Time`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *ChatMessage) GetCreatedAtOk() (*time.Time, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *ChatMessage) SetCreatedAt(v time.Time)`

SetCreatedAt sets CreatedAt field to given value.

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
