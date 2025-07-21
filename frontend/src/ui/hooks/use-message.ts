import { create } from "zustand"

export enum Role {
    Bot,
    User
}

export type Message = {
    id: string;
    value: string;
    role: Role;
    createdAt: string;
}

export type State = {
    messages: Array<Message>;
    add_message: (message: Message) => void;
    delete_message: (message_id: string) => void;
}

export function NewMessage(value: string, role: Role): Message {
    return {
        id: crypto.randomUUID(),
        value,
        role,
        createdAt: new Date(Date.now()).toISOString()
    }
}

export const useMessage = create<State>((set) => ({
    messages: [
        NewMessage("Paste deskripsi penyakit", Role.Bot),
    ],
    add_message: (message) => set((state) => ({ messages: [...state.messages, message] })),
    delete_message: (message_id) => set((state) => ({ messages: state.messages.filter(msg => msg.id !== message_id) })),
}))
