import React from "react"
import { Package, Percent, Clock, Shield } from 'lucide-react'

export function Features() {
  const features = [
    {
      icon: <Package className="h-8 w-8" />,
      title: "Fast Delivery",
      description: "Quick shipping nationwide",
    },
    {
      icon: <Percent className="h-8 w-8" />,
      title: "Bulk Discounts",
      description: "Special prices for large orders",
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "24/7 Support",
      description: "Always here to help you",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Warranty",
      description: "5-year warranty on all items",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="text-orange-500 mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

