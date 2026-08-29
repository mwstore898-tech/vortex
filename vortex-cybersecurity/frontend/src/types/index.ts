export type Section='dashboard'|'ai'|'academy'|'labs'|'scanner'|'tools'|'news'|'cve'|'mitre'|'profile'|'rules'|'settings';
export type Message={id:string;role:'user'|'assistant';content:string;createdAt:number};
export type Conversation={id:string;title:string;messages:Message[];createdAt:number;updatedAt:number};
