'use client'
import Profile from "@ui/components/profile"
import { Badge } from "@ui/components/badge"

import { BadgeCheck, EllipsisVertical, Search } from "lucide-react"
import MessageBox from "@/ui/components/input-box"
import MessageContainer from "@/ui/components/message-container"

function App() {
    return (
        <main className="w-[70%] h-[800px] m-auto mt-24 rounded-md relative">
            <section className="w-full h-[800px] bg-primary">
                <header className="w-full h-20 absolute top-0 left-0 bg-white px-8 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <Profile placeholder="E" />

                        <p className="font-semibold">BOT Prediksi Kategori Penyakit</p>
                        <Badge className="bg-[#155dfc] text-white flex items-center gap-2" variant="outline">
                            <BadgeCheck />
                            verified
                        </Badge>
                    </div>

                    <div className="flex items-center gap-4">
                        <Search />
                        <EllipsisVertical />
                    </div>
                </header>

                <MessageContainer />
            </section>
            <MessageBox />
        </main>
    )
}

export default App 
