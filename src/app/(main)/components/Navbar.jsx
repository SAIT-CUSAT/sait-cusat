// components/Navbar.js
export default function Navbar() {
    return (
      <nav className="flex justify-between items-center py-6 px-10 bg-white shadow-md">
        <div className="text-xl font-bold">
          {/* Replace with your logo or text */}
          <img src="/resource/logo.png" alt="Logo" className="h-10" />
        </div>
        <ul className="flex space-x-4">
          <li>
            <a href="#" className="px-4 py-2 text-white bg-blue-900 rounded-full hover:bg-blue-800">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="px-4 py-2 text-white bg-blue-900 rounded-full hover:bg-blue-800">
              Placements
            </a>
          </li>
          <li>
            <a href="#" className="px-4 py-2 text-white bg-blue-900 rounded-full hover:bg-blue-800">
              Events
            </a>
          </li>
          <li>
            <a href="#" className="px-4 py-2 text-white bg-blue-900 rounded-full hover:bg-blue-800">
              Executives
            </a>
          </li>
          <li>
            <a href="#" className="px-4 py-2 text-white bg-blue-900 rounded-full hover:bg-blue-800">
              Contact Us
            </a>
          </li>
          <li>
            <a href="#" className="px-4 py-2 text-blue-900 border-2 border-blue-900 rounded-full hover:bg-blue-100">
              Notes
            </a>
          </li>
        </ul>
      </nav>
    );
  }
  