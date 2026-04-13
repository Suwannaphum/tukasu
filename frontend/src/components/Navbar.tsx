import * as React from "react"
import { cn } from "@/lib/utils"
import { Button } from "./ui/button" 
// import { Home, Sparkles, Tag, User } from "lucide-react" // ไอคอนเสริม (ถ้าใช้)

export default function Navbar() {
  return (
    // จัดให้อยู่ตำแหน่งคงที่ด้านบนและกึ่งกลางหน้าจอ
    <header className="fixed top-6 left-1/2 z-50 -translate-x-1/2">
      <nav 
        className={cn(
          "flex items-center gap-2 rounded-full border border-border/50 bg-background/80 px-4 py-2 shadow-lg backdrop-blur-md",
          "transition-all duration-300 ease-in-out" // เผื่อใส่ animation เพิ่มเติม
        )}
      >
        {/* โลโก้แบรนด์ */}
        <a href="/" className="flex items-center gap-3 px-2 font-bold tracking-tight text-foreground">
            <img src="/images/tukasu.png" alt="" className="size-16 shrink-0 object-contain"/>
            <span className="text-center leading-tight">
                ตูกะสู <br/>คอทเทจ รีสอร์ท
            </span>
        </a>

        {/* เส้นคั่น (แสดงเฉพาะจอใหญ่) */}
        <div className="mx-1 hidden h-5 w-[1px] bg-border/60 md:block" />
        {/* เมนูลิงก์ */}
        <ul className="hidden items-center gap-1 md:flex">
          <li>
            <Button variant="ghost" className="h-8 rounded-full px-4 " asChild>
              <a href="#home">หน้าแรก</a>
            </Button>
          </li>
          <li>
            <Button variant="ghost" className="h-8 rounded-full px-4" asChild>
              <a href="#features">ห้องพัก</a>
            </Button>
          </li>
          <li>
            <Button variant="ghost" className="h-8 rounded-full px-4" asChild>
              <a href="#pricing">กิจกรรม</a>
            </Button>
          </li>
          <li>
            <Button variant="ghost" className="h-8 rounded-full px-4" asChild>
              <a href="#pricing">ติดต่อ</a>
            </Button>
          </li>
        </ul>
      </nav>
    </header>
  )
}