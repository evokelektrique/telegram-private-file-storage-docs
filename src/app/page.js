import Image from "next/image";
import { Shantell_Sans, Roboto } from 'next/font/google';
const shantell = Shantell_Sans({ weight: ['700', '300'], subsets: ['latin'] })
const roboto = Roboto({ weight: ['400'], subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <main className={"container px-2 md:px-0 mx-auto text-center flex flex-col items-center justify-center h-screen"}>
      <h1 className={"text-2xl antialiased font-bold " + shantell.className}>Telegram Private File Storage Bot</h1>

      <Image src={"/screenshot.png"} alt="Telegram Private File Storage Screenshot" width={512} height={512} className="mx-auto my-[2.5rem] rounded-lg" />

      <p className={"mb-[1.5rem] font-italic" + roboto.className}>
        Telegram Private File Storage Bot is a Telegram bot that provides a unique and convenient way to share messages with others while maintaining user privacy
      </p>

      <div className="md:flex-row flex-col flex gap-2">
        <a href="https://github.com/evokelektrique/telegram-private-file-storage" class="btn btn-md lg:btn-lg btn-success btn-wide">Get started</a>
      </div>
    </main>
    <p className="text-sm p-3 fixed bottom-0 left-0">
      Version: 0.1
    </p>
    </>
  )
}
