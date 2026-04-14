"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import Link from "next/link";
import { useEffect, useState } from "react";
export default function Home() {
    const images = [
    "/images/bg_home.jpg",
    "/images/tukasu.png",
    "/images/bg_home.jpg",
  ];
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  },[]);
  const rooms = [
    { id: 1, name: "ห้อง 1", image: "/images/bg_home.jpg" },
    { id: 2, name: "ห้อง 2", image: "/images/bg_home.jpg" },
    { id: 3, name: "ห้อง 3", image: "/images/bg_home.jpg" },
    { id: 4, name: "ห้อง 4", image: "/images/bg_home.jpg" },
    { id: 5, name: "ห้อง 5", image: "/images/bg_home.jpg" },
  ];
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
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
            <Button className="mt-5 px-6 py-3 bg-white text-black rounded-lg hover:bg-gray-800">ติดต่อจองห้องพัก</Button>
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
            <div className="w-full h-[400px] overflow-hidden rounded-lg shadow-lg w-full h-[250px] md:h-[400px]">
              <img
                src={images[current]}
                className="w-full h-full object-cover transition duration-500"
              />

              {/* Dots */}
              <div className="relative w-full h-[250px] md:h-[400px] rounded-lg overflow-hidden">
                
                {images.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                      i === current ? "opacity-100" : "opacity-0"
                    }`}
                  />
                ))}

              </div>
            </div>

          </div>
        </div>
      </section>
      {/* Section Room */}
      <section className="bg-white text-black py-20">
        <div className="container mx-auto">

          <h2 className="text-4xl font-bold text-center mb-10">
            ห้องพักของเรา
          </h2>

          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 2500 }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {rooms.map((room) => (
              <SwiperSlide key={room.id}>
                <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition">

                  <img
                    src={room.image}
                    className="w-full h-60 object-cover cursor-pointer"
                    onClick={() => setSelectedImage(room.image)}
                  />

                  <div className="p-4 text-center">
                    <h3 className="text-xl font-semibold">
                      {room.name}
                    </h3>
                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Button */}
          <div className="flex justify-center mt-10">
            <Link href="/rooms">
              <Button className="px-8 py-3 bg-black text-white rounded-lg hover:bg-gray-800">
                ดูห้องเพิ่มเติม
              </Button>
            </Link>
          </div>

        </div>
      </section>
      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50" onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} className="max-w-4xl w-full rounded-lg"/>
        </div>
      )}
    </main>
    );
}
