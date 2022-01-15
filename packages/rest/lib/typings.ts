import { GUILDED_STATUS_CODES } from "./constants";

export interface RestOptions {
    /** The bot token to be used for making requests. */
    token: string;
    /** The version of the API to be used for making requests. By default, this will use the latest version that the library supports. */
    version?: 1;
    /** The base url of the API you want to send requests to. By default, this will send it to guilded's rest API. This is meant for big bot developers who want to use a proxy rest system. */
    proxyURL?: string;
}

export type RequestMethods = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";

export interface MessageContent {
    /** If set, this message will only be seen by those mentioned or replied to. */
    isPrivate?: boolean;
    /** The ids of the messages that this will be replying to. */
    replyMessageIds?: string[];
    /** The message content to create. */
    content: string;
}

export interface MessagePayload {
    /** The id of the message */
    id: string;
    /** The type of chat message. "system" messages are generated by Guilded, while "default" messages are user or bot-generated. */
    type: "default" | "system";
    /** The ID of the channel */
    channelId: string;
    /** The content of the message */
    content: string;
    /** The ID of the messages that this is replying to. */
    replyMessageIds: string[];
    /** If set, this message will only be seen by those mentioned or replied to. */
    isPrivate?: boolean;
    /** The ISO 8601 timestamp that the message was created at. */
    createdAt: string;
    /** The ID of the user who created this message (Note: If this event has createdByBotId or createdByWebhookId present, this field will still be populated, but can be ignored. In these cases, the value of this field will always be Ann6LewA) */
    createdBy: string;
    /** The ID of the bot who created this message, if it was created by a bot */
    createdByBotId?: string;
    /** The ID of the webhook who created this message, if it was created by a webhook */
    createdByWebhookId?: string;
    /** The ISO 8601 timestamp that the message was updated at, if relevant */
    updatedAt: string;
}

export interface GetChannelMessagesOptions {
    /** Whether to include private messages between all users in response. */
    includePrivate?: boolean;
}

export interface UpdateChannelMessageOptions {
    /** The message content to update. */
    content: string;
}

/** The known status codes that the guilded api can respond with. */
export type GuildedStatusCodes = keyof typeof GUILDED_STATUS_CODES;

export interface CreateForumThreadOptions {
    /** The title of the forum thread */
    title: string;
    /** The content of the forum thread */
    content: string;
}

export interface ForumThreadPayload {
    /** The ID of the forum thread */
    id: number;
    /** The ID of the channel */
    channelId: string;
    /** The title of the forum thread */
    title?: string;
    /** The content of the forum thread */
    content?: string;
    /** The ISO 8601 timestamp that the forum thread was created at */
    createdAt: string;
    /** The ID of the user who created this forum thread (Note: If this event has createdByWebhookId present, this field will still be populated, but can be ignored. In this case, the value of this field will always be Ann6LewA) */
    createdBy: string;
    /** The ID of the webhook who created this forum thread, if it was created by a webhook */
    createdByWebhookId?: string;
}

export interface CreateListItemOptions {
    /** The message of the list item. */
    message: string;
    /** The note of the list item. */
    note?: string;
}

export interface ListItemPayload {
    /** The ID of the list item. */
    id: string;
    /** The ID of the channel */
    channelId: string;
    /** The message of the list item. */
    message: string;
    /** The note of the list item. */
    note: string;
    /** The ISO 8601 timestamp that the list item was created at */
    createdAt: string;
    /** The ID of the user who created this list item (Note: If this event has createdByWebhookId present, this field will still be populated, but can be ignored. In this case, the value of this field will always be Ann6LewA) */
    createdBy: string;
    /** The ID of the webhook who created this list item, if it was created by a webhook */
    createdByWebhookId?: string;
}

export interface CreateDocOptions {
    /** The title of the doc */
    title: string;
    /** The content of the doc */
    content: string;
}

export interface DocPayload {
    /** The id of the doc */
    id: number;
    /** The ID of the channel */
    channelId: string;
    /** The title of the doc */
    title: string;
    /** The content of the doc */
    content: string;
    /** The ISO 8601 timestamp that the doc was was created at */
    createdAt: string;
    /** The ID of the user who created this doc */
    createdBy: string;
    /** The ISO 8601 timestamp that the doc was updated at, if relevant */
    updatedAt: string;
    /** The ID of the user who updated this doc */
    updatedBy: string;
}

export interface UpdateDocOptions extends CreateDocOptions {}

export interface ContentReactionPayload {
    /** The id of the content reaction */
    id: number;
    /** The ISO 8601 timestamp that the emote was created at */
    createdAt: string;
    /** The ID of the user who created this list item (Note: If this event has createdByWebhookId present, this field will still be populated, but can be ignored. In this case, the value of this field will always be Ann6LewA) */
    createdBy: string;
    /** The ID of the webhook who created this list item, if it was created by a webhook */
    createdByWebhookId?: string;
}

export interface MemberXPPayload {
    /** The total XP after this operation */
    total: number;
}

export type SocialLinkType =
    | "twitch"
    | "bnet"
    | "psn"
    | "xbox"
    | "steam"
    | "origin"
    | "youtube"
    | "twitter"
    | "facebook"
    | "switch"
    | "patreon"
    | "roblox";