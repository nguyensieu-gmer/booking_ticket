import { Link } from "lucide-react";
import { assets } from "../../assets/assets";

export function AdminNavBar() {
  return (
    <div className="flex items-center justify-between px-6 md: px-10 h-16 border-b border-gray-300/30">
      <img src={assets.logo} alt="logo" className="w-36 h-auto" />
      <Link to="/" />
    </div>
  );
}
