export default function Navbar(){
    return (
        <nav className = "bg-black text-white p-4 flex justify-between">
            <h1 className = "font-bold text-lg">ตูกะสู</h1>
            <div className = "space-x-4">
                <a href="/">หน้าแรก</a>
                <a href="/rooms">ห้องพัก</a>
                <a href="/posts">กิจกรรม</a>
                <a href="/contact">ติดต่อ</a>
            </div>
        </nav>
    )
}