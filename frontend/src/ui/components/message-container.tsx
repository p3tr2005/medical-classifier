'use client';
import { cn } from "@/lib/utils";
import { Role, useMessage } from "../hooks/use-message"

function MessageContainer() {
    const messages = useMessage(state => state.messages)

    return (
        <div className="w-full h-full flex flex-col gap-2 pt-24 px-4 bg-primary border-1">
            {messages.map((message, id) => (
                <div key={id} className="w-full" dir={message.role === Role.User ? "rtl" : "ltr"}>
                    <div className={cn("w-max text-white text-sm p-3", message.role == Role.Bot ? "bg-stone-300 text-black rounded-tl-full rounded-tr-full rounded-br-full" : "bg-btn-primary rounded-tl-full rounded-tr-full rounded-bl-full")}>
                        {message.value}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default MessageContainer
