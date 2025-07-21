"use client";

import { useState } from "react";
import { LoaderCircle, Send } from "lucide-react";

import { Input } from "@ui/components/input"
import { Button } from "@ui/components/button"
import { NewMessage, Role, useMessage } from "../hooks/use-message";
import { classifyMedicalText } from "@/lib/api";
import { toast } from "sonner";

function InputBox() {
    const [message, setMessage] = useState("");
    const [isError, setIsError] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const addMessage = useMessage((state) => state.add_message)

    const onPressedSentMessage = async (value: string) => {
        //TODO: Sent message to the model
        setIsLoading(true)

        addMessage(NewMessage(value, Role.User))

        try {
            const category = await classifyMedicalText(value);

            if (!category) {
                console.log("NO CATEGORY");
                return
            }

            addMessage(NewMessage(category, Role.Bot))

            toast.success("Success");
        } catch (err) {
            setIsError(true)
            toast.error("Something went wrong, try again!")
        } finally {
            setIsLoading(false)
        }

        setMessage("")
    }

    return (
        <footer className="w-full h-20 px-8 bg-white dark:bg-zinc-900 absolute bottom-0 left-0 flex items-center justify-between gap-4">
            <Input disabled={isLoading} onChange={(e) => setMessage(e.target.value)} value={message} placeholder="type disease" className="bg-stone-50" />

            <Button disabled={isLoading} type="button" onClick={() => onPressedSentMessage(message)} className="bg-btn-primary text-white rounded-full hover:opacity-70" size="lg" variant="default">
                {isLoading ? <LoaderCircle className="animate-spin" /> : <Send />}
            </Button>
        </footer>
    )
}

export default InputBox
