import React from "react"
import { Link } from "react-router-dom"
import { Phone, Mail, User, ShoppingCart, Search } from 'lucide-react'
import { Button } from "./ui/button"
import { Input } from "./ui/input"

export function Header() {
  return (
    <header className="w-full bg-[#001829] text-white">
      {/* Top Bar */}
      <div className="container mx-auto px-4 py-2 flex justify-between items-center border-b border-gray-700">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4" />
            <span className="text-sm">+234 567 890</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4" />
            <span className="text-sm">info@islyckan.com</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm">
            Track Order
          </Button>
          <Button variant="ghost" size="sm">
            Find Store
          </Button>
          <Link to="/dashboard">
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <User className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold">
            Islyckan
          </Link>
          <div className="flex-1 max-w-xl mx-8">
            <div className="relative">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
              <Input
                type="search"
                placeholder="Search products..."
                className="pl-10 bg-[#002137] border-gray-700"
              />
            </div>
          </div>
          <Link to="/cart">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-6 w-6" />
              <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </Button>
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="mt-4">
          <ul className="flex gap-8">
            <li>
              <Link to="/shop" className="hover:text-orange-400">
                Shop
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-orange-400">
                Office Furniture
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-orange-400">
                Hotel Furniture
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-orange-400">
                Conference Room
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-orange-400">
                Pub Furniture
              </Link>
            </li>
            <li>
              <Link to="#" className="text-orange-400">
                Special Offers
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

