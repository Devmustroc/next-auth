import LoginButton from "@/components/login-button";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";



const font = Poppins({
  weight: ["400", "500", "600"],
  subsets: ['latin'],
})


export default function Home() {
  return (
    <main
      className="flex flex-col items-center justify-center min-h-screen py-2 bg-emerald-400"
    >
      <div
        className="space-y-6 text-center"
      >
        <h1
          className={cn("text-6xl font-semibold text-white drop-shadow-sm", font.className)}
        >
          Auth  🔐
        </h1>
        <p
          className="text-sm font-semibold text-white drop-shadow-sm"
        >
          Auth is a Next.js app with AuthJs.
        </p>
        <div>
          <LoginButton
            mode="modal"
          >
            <Button>Login</Button>
          </LoginButton>
        </div>
      </div>
    </main>
  );
}
