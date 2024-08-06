# ChatCreate

## Properties

| Name          | Type       | Description | Notes |
| ------------- | ---------- | ----------- | ----- |
| **Name**      | **string** |             |
| **Model**     | **string** |             |
| **ProjectId** | **int32**  |             |

## Methods

### NewChatCreate

`func NewChatCreate(name string, model string, projectId int32, ) *ChatCreate`

NewChatCreate instantiates a new ChatCreate object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChatCreateWithDefaults

`func NewChatCreateWithDefaults() *ChatCreate`

NewChatCreateWithDefaults instantiates a new ChatCreate object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *ChatCreate) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *ChatCreate) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *ChatCreate) SetName(v string)`

SetName sets Name field to given value.

### GetModel

`func (o *ChatCreate) GetModel() string`

GetModel returns the Model field if non-nil, zero value otherwise.

### GetModelOk

`func (o *ChatCreate) GetModelOk() (*string, bool)`

GetModelOk returns a tuple with the Model field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModel

`func (o *ChatCreate) SetModel(v string)`

SetModel sets Model field to given value.

### GetProjectId

`func (o *ChatCreate) GetProjectId() int32`

GetProjectId returns the ProjectId field if non-nil, zero value otherwise.

### GetProjectIdOk

`func (o *ChatCreate) GetProjectIdOk() (*int32, bool)`

GetProjectIdOk returns a tuple with the ProjectId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProjectId

`func (o *ChatCreate) SetProjectId(v int32)`

SetProjectId sets ProjectId field to given value.

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
