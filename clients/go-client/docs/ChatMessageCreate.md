# ChatMessageCreate

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

## Methods

### NewChatMessageCreate

`func NewChatMessageCreate(role string, content string, model string, tokens int32, contentRaw map[string]interface{}, chatId int32, ) *ChatMessageCreate`

NewChatMessageCreate instantiates a new ChatMessageCreate object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChatMessageCreateWithDefaults

`func NewChatMessageCreateWithDefaults() *ChatMessageCreate`

NewChatMessageCreateWithDefaults instantiates a new ChatMessageCreate object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRole

`func (o *ChatMessageCreate) GetRole() string`

GetRole returns the Role field if non-nil, zero value otherwise.

### GetRoleOk

`func (o *ChatMessageCreate) GetRoleOk() (*string, bool)`

GetRoleOk returns a tuple with the Role field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRole

`func (o *ChatMessageCreate) SetRole(v string)`

SetRole sets Role field to given value.

### GetContent

`func (o *ChatMessageCreate) GetContent() string`

GetContent returns the Content field if non-nil, zero value otherwise.

### GetContentOk

`func (o *ChatMessageCreate) GetContentOk() (*string, bool)`

GetContentOk returns a tuple with the Content field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetContent

`func (o *ChatMessageCreate) SetContent(v string)`

SetContent sets Content field to given value.

### GetIsContextFile

`func (o *ChatMessageCreate) GetIsContextFile() bool`

GetIsContextFile returns the IsContextFile field if non-nil, zero value otherwise.

### GetIsContextFileOk

`func (o *ChatMessageCreate) GetIsContextFileOk() (*bool, bool)`

GetIsContextFileOk returns a tuple with the IsContextFile field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsContextFile

`func (o *ChatMessageCreate) SetIsContextFile(v bool)`

SetIsContextFile sets IsContextFile field to given value.

### HasIsContextFile

`func (o *ChatMessageCreate) HasIsContextFile() bool`

HasIsContextFile returns a boolean if a field has been set.

### GetModel

`func (o *ChatMessageCreate) GetModel() string`

GetModel returns the Model field if non-nil, zero value otherwise.

### GetModelOk

`func (o *ChatMessageCreate) GetModelOk() (*string, bool)`

GetModelOk returns a tuple with the Model field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModel

`func (o *ChatMessageCreate) SetModel(v string)`

SetModel sets Model field to given value.

### GetTokens

`func (o *ChatMessageCreate) GetTokens() int32`

GetTokens returns the Tokens field if non-nil, zero value otherwise.

### GetTokensOk

`func (o *ChatMessageCreate) GetTokensOk() (*int32, bool)`

GetTokensOk returns a tuple with the Tokens field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTokens

`func (o *ChatMessageCreate) SetTokens(v int32)`

SetTokens sets Tokens field to given value.

### GetContentRaw

`func (o *ChatMessageCreate) GetContentRaw() map[string]interface{}`

GetContentRaw returns the ContentRaw field if non-nil, zero value otherwise.

### GetContentRawOk

`func (o *ChatMessageCreate) GetContentRawOk() (*map[string]interface{}, bool)`

GetContentRawOk returns a tuple with the ContentRaw field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetContentRaw

`func (o *ChatMessageCreate) SetContentRaw(v map[string]interface{})`

SetContentRaw sets ContentRaw field to given value.

### GetIsToolMessage

`func (o *ChatMessageCreate) GetIsToolMessage() bool`

GetIsToolMessage returns the IsToolMessage field if non-nil, zero value otherwise.

### GetIsToolMessageOk

`func (o *ChatMessageCreate) GetIsToolMessageOk() (*bool, bool)`

GetIsToolMessageOk returns a tuple with the IsToolMessage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsToolMessage

`func (o *ChatMessageCreate) SetIsToolMessage(v bool)`

SetIsToolMessage sets IsToolMessage field to given value.

### HasIsToolMessage

`func (o *ChatMessageCreate) HasIsToolMessage() bool`

HasIsToolMessage returns a boolean if a field has been set.

### GetChatId

`func (o *ChatMessageCreate) GetChatId() int32`

GetChatId returns the ChatId field if non-nil, zero value otherwise.

### GetChatIdOk

`func (o *ChatMessageCreate) GetChatIdOk() (*int32, bool)`

GetChatIdOk returns a tuple with the ChatId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChatId

`func (o *ChatMessageCreate) SetChatId(v int32)`

SetChatId sets ChatId field to given value.

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
