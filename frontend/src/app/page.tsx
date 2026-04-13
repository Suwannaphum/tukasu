import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="">
      {/* Section Hero */}
      <section className="relative min-h-screen">
        {/* Background image */}
        <div className="absolute inset-0 bg-[url('/images/bg_home.jpg')] bg-cover bg-center" />

        {/* White gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-white/95" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center text-white">
          <img src="/images/tukasu.png" className="w-40 mb-6" />

          <h1 className="text-7xl">ตูกะสู</h1>
          <p className="text-3xl mt-4">คอทเทจ รีสอร์ท</p>
          <br />
          <p className="text-3xl">พักผ่อนสบายๆ ในบรรยากาศสุดชิลล์... แต่ตื่นเช้ามาพร้อมลุย!</p>
          <a href="/home">
            <Button className="mt-5 px-6 py-3 bg-white text-black rounded">ติดต่อจองห้องพัก</Button>
          </a>
        </div>
      </section>
      {/* Section Article */}
      <section className="bg-gray-200 py-20">
        <div className="container mx-auto ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

            {/* Left: Article */}
            <div>
              <h1 className="text-4xl font-bold mb-4">
                ตูกะสู คอทเทจ รีสอร์ท
              </h1>

              <p className="text-lg leading-relaxed mb-4">
                พักผ่อนสบาย ๆ ท่ามกลางธรรมชาติ เงียบสงบ
                เหมาะสำหรับครอบครัว คู่รัก และคนที่อยากพักใจ
              </p>

              <p className="text-lg leading-relaxed">
                ห้องพักสะอาด บรรยากาศดี เดินทางสะดวก
                พร้อมกิจกรรมให้ทำมากมาย
              </p>
            </div>

            {/* Right: Image */}
            <div>
              <img
                src="/images/bg_home.jpg"
                alt="Tukasu Resort"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>

          </div>
        </div>
      </section>
      {/* Section Room */}
      <section className="relative bg-white text-black">
        <div >
            <h1>as;lkfj;laksj;flkjasd</h1>
            <h1>as;lkfj;laksj;flkjasd</h1>
            <h1>as;lkfj;laksj;flkjasd</h1>
            <h1>as;lkfj;laksj;flkjasd</h1>
            <h1>as;lkfj;laksj;flkjasd</h1>
            <h1>as;lkfj;laksj;flkjasd</h1>
            <h1>as;lkfj;laksj;flkjasd</h1>
            <h1>as;lkfj;laksj;flkjasd</h1>
            <h1>as;lkfj;laksj;flkjasd</h1>
            <h1>as;lkfj;laksj;flkjasd</h1>
            <h1>as;lkfj;laksj;flkjasd</h1>
            <h1>as;lkfj;laksj;flkjasd</h1>
            <h1>as;lkfj;laksj;flkjasd</h1>
            <h1>as;lkfj;laksj;flkjasd</h1>
        </div>
      </section>
    </main>
    );
}
