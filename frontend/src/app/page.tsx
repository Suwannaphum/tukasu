import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <section className="bg-[url(/images/bg_home.jpg)] bg-no-repeat bg-center bg-cover">
      <div className="text-white">
        <div className="lex h-screen items-center">
          <img src="/images/tukasu.png" alt="" className="w-50 h-auto mx-auto pt-40"/>
          <div className="text-center">
            <p className=" text-8xl">ตูกะสู</p>
            <br />
            <p className=" text-3xl">คอทเทจ รีสอร์ท</p>
            <br />
            <br />
            <p className="text-3xl">พักผ่อนสบายๆ ในบรรยากาศสุดชิลล์... แต่ตื่นเช้ามาพร้อมลุย!</p>
            <br />
            <Button>ติดต่อจองห้องพัก</Button>
          </div>
        </div>
      </div>
    </section>
    );
}
