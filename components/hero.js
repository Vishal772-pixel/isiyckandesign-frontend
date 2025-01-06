import React from "react"
import { Link } from "react-router-dom"
import { Button } from "./ui/button"

export function Hero() {
  return (
    <section className="relative h-[500px] bg-gray-200">
      <div className="container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold mb-6">
            Discover our exclusive collection of office and hotel furniture designed for comfort and productivity
          </h1>
          <div className="flex gap-4">
            <Link to="/shop">
              <Button className="bg-orange-500 hover:bg-orange-600">
                Shop Now
              </Button>
            </Link>
            <Button variant="outline">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

