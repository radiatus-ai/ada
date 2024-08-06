/*
Platform API

No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

API version: 0.1.0
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package openapi

import (
	"encoding/json"
	"time"
	"bytes"
	"fmt"
)

// checks if the ChatMessage type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ChatMessage{}

// ChatMessage struct for ChatMessage
type ChatMessage struct {
	Role string `json:"role"`
	Content string `json:"content"`
	IsContextFile *bool `json:"is_context_file,omitempty"`
	Model string `json:"model"`
	Tokens int32 `json:"tokens"`
	ContentRaw map[string]interface{} `json:"content_raw"`
	IsToolMessage *bool `json:"is_tool_message,omitempty"`
	ChatId int32 `json:"chat_id"`
	Id int32 `json:"id"`
	CreatedAt time.Time `json:"created_at"`
}

type _ChatMessage ChatMessage

// NewChatMessage instantiates a new ChatMessage object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewChatMessage(role string, content string, model string, tokens int32, contentRaw map[string]interface{}, chatId int32, id int32, createdAt time.Time) *ChatMessage {
	this := ChatMessage{}
	this.Role = role
	this.Content = content
	var isContextFile bool = false
	this.IsContextFile = &isContextFile
	this.Model = model
	this.Tokens = tokens
	this.ContentRaw = contentRaw
	var isToolMessage bool = false
	this.IsToolMessage = &isToolMessage
	this.ChatId = chatId
	this.Id = id
	this.CreatedAt = createdAt
	return &this
}

// NewChatMessageWithDefaults instantiates a new ChatMessage object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewChatMessageWithDefaults() *ChatMessage {
	this := ChatMessage{}
	var isContextFile bool = false
	this.IsContextFile = &isContextFile
	var isToolMessage bool = false
	this.IsToolMessage = &isToolMessage
	return &this
}

// GetRole returns the Role field value
func (o *ChatMessage) GetRole() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.Role
}

// GetRoleOk returns a tuple with the Role field value
// and a boolean to check if the value has been set.
func (o *ChatMessage) GetRoleOk() (*string, bool) {
	if o == nil {
		return nil, false
	}
	return &o.Role, true
}

// SetRole sets field value
func (o *ChatMessage) SetRole(v string) {
	o.Role = v
}

// GetContent returns the Content field value
func (o *ChatMessage) GetContent() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.Content
}

// GetContentOk returns a tuple with the Content field value
// and a boolean to check if the value has been set.
func (o *ChatMessage) GetContentOk() (*string, bool) {
	if o == nil {
		return nil, false
	}
	return &o.Content, true
}

// SetContent sets field value
func (o *ChatMessage) SetContent(v string) {
	o.Content = v
}

// GetIsContextFile returns the IsContextFile field value if set, zero value otherwise.
func (o *ChatMessage) GetIsContextFile() bool {
	if o == nil || IsNil(o.IsContextFile) {
		var ret bool
		return ret
	}
	return *o.IsContextFile
}

// GetIsContextFileOk returns a tuple with the IsContextFile field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChatMessage) GetIsContextFileOk() (*bool, bool) {
	if o == nil || IsNil(o.IsContextFile) {
		return nil, false
	}
	return o.IsContextFile, true
}

// HasIsContextFile returns a boolean if a field has been set.
func (o *ChatMessage) HasIsContextFile() bool {
	if o != nil && !IsNil(o.IsContextFile) {
		return true
	}

	return false
}

// SetIsContextFile gets a reference to the given bool and assigns it to the IsContextFile field.
func (o *ChatMessage) SetIsContextFile(v bool) {
	o.IsContextFile = &v
}

// GetModel returns the Model field value
func (o *ChatMessage) GetModel() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.Model
}

// GetModelOk returns a tuple with the Model field value
// and a boolean to check if the value has been set.
func (o *ChatMessage) GetModelOk() (*string, bool) {
	if o == nil {
		return nil, false
	}
	return &o.Model, true
}

// SetModel sets field value
func (o *ChatMessage) SetModel(v string) {
	o.Model = v
}

// GetTokens returns the Tokens field value
func (o *ChatMessage) GetTokens() int32 {
	if o == nil {
		var ret int32
		return ret
	}

	return o.Tokens
}

// GetTokensOk returns a tuple with the Tokens field value
// and a boolean to check if the value has been set.
func (o *ChatMessage) GetTokensOk() (*int32, bool) {
	if o == nil {
		return nil, false
	}
	return &o.Tokens, true
}

// SetTokens sets field value
func (o *ChatMessage) SetTokens(v int32) {
	o.Tokens = v
}

// GetContentRaw returns the ContentRaw field value
func (o *ChatMessage) GetContentRaw() map[string]interface{} {
	if o == nil {
		var ret map[string]interface{}
		return ret
	}

	return o.ContentRaw
}

// GetContentRawOk returns a tuple with the ContentRaw field value
// and a boolean to check if the value has been set.
func (o *ChatMessage) GetContentRawOk() (map[string]interface{}, bool) {
	if o == nil {
		return map[string]interface{}{}, false
	}
	return o.ContentRaw, true
}

// SetContentRaw sets field value
func (o *ChatMessage) SetContentRaw(v map[string]interface{}) {
	o.ContentRaw = v
}

// GetIsToolMessage returns the IsToolMessage field value if set, zero value otherwise.
func (o *ChatMessage) GetIsToolMessage() bool {
	if o == nil || IsNil(o.IsToolMessage) {
		var ret bool
		return ret
	}
	return *o.IsToolMessage
}

// GetIsToolMessageOk returns a tuple with the IsToolMessage field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChatMessage) GetIsToolMessageOk() (*bool, bool) {
	if o == nil || IsNil(o.IsToolMessage) {
		return nil, false
	}
	return o.IsToolMessage, true
}

// HasIsToolMessage returns a boolean if a field has been set.
func (o *ChatMessage) HasIsToolMessage() bool {
	if o != nil && !IsNil(o.IsToolMessage) {
		return true
	}

	return false
}

// SetIsToolMessage gets a reference to the given bool and assigns it to the IsToolMessage field.
func (o *ChatMessage) SetIsToolMessage(v bool) {
	o.IsToolMessage = &v
}

// GetChatId returns the ChatId field value
func (o *ChatMessage) GetChatId() int32 {
	if o == nil {
		var ret int32
		return ret
	}

	return o.ChatId
}

// GetChatIdOk returns a tuple with the ChatId field value
// and a boolean to check if the value has been set.
func (o *ChatMessage) GetChatIdOk() (*int32, bool) {
	if o == nil {
		return nil, false
	}
	return &o.ChatId, true
}

// SetChatId sets field value
func (o *ChatMessage) SetChatId(v int32) {
	o.ChatId = v
}

// GetId returns the Id field value
func (o *ChatMessage) GetId() int32 {
	if o == nil {
		var ret int32
		return ret
	}

	return o.Id
}

// GetIdOk returns a tuple with the Id field value
// and a boolean to check if the value has been set.
func (o *ChatMessage) GetIdOk() (*int32, bool) {
	if o == nil {
		return nil, false
	}
	return &o.Id, true
}

// SetId sets field value
func (o *ChatMessage) SetId(v int32) {
	o.Id = v
}

// GetCreatedAt returns the CreatedAt field value
func (o *ChatMessage) GetCreatedAt() time.Time {
	if o == nil {
		var ret time.Time
		return ret
	}

	return o.CreatedAt
}

// GetCreatedAtOk returns a tuple with the CreatedAt field value
// and a boolean to check if the value has been set.
func (o *ChatMessage) GetCreatedAtOk() (*time.Time, bool) {
	if o == nil {
		return nil, false
	}
	return &o.CreatedAt, true
}

// SetCreatedAt sets field value
func (o *ChatMessage) SetCreatedAt(v time.Time) {
	o.CreatedAt = v
}

func (o ChatMessage) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ChatMessage) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	toSerialize["role"] = o.Role
	toSerialize["content"] = o.Content
	if !IsNil(o.IsContextFile) {
		toSerialize["is_context_file"] = o.IsContextFile
	}
	toSerialize["model"] = o.Model
	toSerialize["tokens"] = o.Tokens
	toSerialize["content_raw"] = o.ContentRaw
	if !IsNil(o.IsToolMessage) {
		toSerialize["is_tool_message"] = o.IsToolMessage
	}
	toSerialize["chat_id"] = o.ChatId
	toSerialize["id"] = o.Id
	toSerialize["created_at"] = o.CreatedAt
	return toSerialize, nil
}

func (o *ChatMessage) UnmarshalJSON(data []byte) (err error) {
	// This validates that all required properties are included in the JSON object
	// by unmarshalling the object into a generic map with string keys and checking
	// that every required field exists as a key in the generic map.
	requiredProperties := []string{
		"role",
		"content",
		"model",
		"tokens",
		"content_raw",
		"chat_id",
		"id",
		"created_at",
	}

	allProperties := make(map[string]interface{})

	err = json.Unmarshal(data, &allProperties)

	if err != nil {
		return err;
	}

	for _, requiredProperty := range(requiredProperties) {
		if _, exists := allProperties[requiredProperty]; !exists {
			return fmt.Errorf("no value given for required property %v", requiredProperty)
		}
	}

	varChatMessage := _ChatMessage{}

	decoder := json.NewDecoder(bytes.NewReader(data))
	decoder.DisallowUnknownFields()
	err = decoder.Decode(&varChatMessage)

	if err != nil {
		return err
	}

	*o = ChatMessage(varChatMessage)

	return err
}

type NullableChatMessage struct {
	value *ChatMessage
	isSet bool
}

func (v NullableChatMessage) Get() *ChatMessage {
	return v.value
}

func (v *NullableChatMessage) Set(val *ChatMessage) {
	v.value = val
	v.isSet = true
}

func (v NullableChatMessage) IsSet() bool {
	return v.isSet
}

func (v *NullableChatMessage) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableChatMessage(val *ChatMessage) *NullableChatMessage {
	return &NullableChatMessage{value: val, isSet: true}
}

func (v NullableChatMessage) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableChatMessage) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}
