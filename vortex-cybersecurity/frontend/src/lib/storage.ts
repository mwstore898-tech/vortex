import type {Conversation} from '../types';
const KEY='vortex_conversations_v1';
export const loadChats=():Conversation[]=>{try{return JSON.parse(localStorage.getItem(KEY)||'[]')}catch{return[]}};
export const saveChats=(v:Conversation[])=>localStorage.setItem(KEY,JSON.stringify(v));
