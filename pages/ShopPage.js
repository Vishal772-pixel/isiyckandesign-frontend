import React, { useState } from 'react'
import { Header } from "../components/header"
import { Footer } from "../components/footer"
import { ShopSidebar } from "../components/shop-sidebar"
import { ProductCard } from "../components/product-card"

// Sample product data
const products = [
  {
    id: 1,
    name: "Executive Office Chair",
    description: "Ergonomic design with lumbar support",
    price: 299.99,
    rating: 4.5,
    category: "Office",
    image: "/placeholder.svg?height=200&width=200",
    material: "Leather",
    color: "Black",
    size: "Large"
  },
  {
    id: 2,
    name: "Conference Table",
    description: "Large oval table for meetings",
    price: 799.99,
    rating: 4.8,
    category: "Conference",
    image: "/placeholder.svg?height=200&width=200",
    material: "Wood",
    color: "Brown",
    size: "XL"
  },
  {
    id: 3,
    name: "Bar Stool Set",
    description: "Set of 4 modern bar stools",
    price: 399.99,
    rating: 4.2,
    category: "Pub",
    image: "/placeholder.svg?height=200&width=200",
    material: "Metal",
    color: "Grey",
    size: "Medium"
  },
  {
    id: 4,
    name: "Filing Cabinet",
    description: "3-drawer metal filing cabinet",
    price: 149.99,
    rating: 4.0,
    category: "Office",
    image: "/placeholder.svg?height=200&width=200",
    material: "Metal",
    color: "Grey",
    size: "Medium"
  },
  {
    id: 5,
    name: "Boardroom Chairs",
    description: "Set of 8 leather boardroom chairs",
    price: 1299.99,
    rating: 4.7,
    category: "Conference",
    image: "/placeholder.svg?height=200&width=200",
    material: "Leather",
    color: "Brown",
    size: "Large"
  },
  {
    id: 6,
    name: "Pub Table",
    description: "High-top table for bars and pubs",
    price: 249.99,
    rating: 4.3,
    category: "Pub",
    image: "/placeholder.svg?height=200&width=200",
    material: "Wood",
    color: "Brown",
    size: "Medium"
  },
]

const categories = ["All", "Office", "Conference", "Pub"]

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [filters, setFilters] = useState({
    priceRange: { min: 0, max: 10000 },
    materials: [],
    colors: [],
    sizes: []
  })

  const filteredProducts = products.filter(product => {
    if (selectedCategory !== "All" && product.category !== selectedCategory) return false
    if (product.price < filters.priceRange.min || product.price > filters.priceRange.max) return false
    if (filters.materials.length > 0 && !filters.materials.includes(product.material)) return false
    if (filters.colors.length > 0 && !filters.colors.includes(product.color)) return false
    if (filters.sizes.length > 0 && !filters.sizes.includes(product.size)) return false
    return true
  })

  const handleFilterApply = (newFilters) => {
    setFilters(newFilters)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Shop Our Collection</h1>
        <div className="flex">
          <ShopSidebar
            categories={categories}
            onCategorySelect={setSelectedCategory}
            onFilterApply={handleFilterApply}
          />
          <div className="flex-grow ml-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}