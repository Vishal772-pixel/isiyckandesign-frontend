import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Star, Minus, Plus, ShoppingCart } from 'lucide-react'
import { Header } from "../components/header"
import { Footer } from "../components/footer"
import { Button } from "../components/ui/button"
import { Textarea } from "../components/ui/textarea"
import { SuggestedProducts } from "../components/suggested-products"
import { useCart } from '../context/CartContext'

// This would typically come from an API or database
const product = {
  id: 1,
  name: "Executive Office Chair",
  description: "Ergonomic design with lumbar support for all-day comfort. Adjustable height and tilt for personalized positioning. Premium leather upholstery adds a touch of luxury to any office space.",
  price: 299.99,
  rating: 4.5,
  category: "Office",
  image: "/placeholder.svg?height=400&width=400",
  material: "Leather",
  color: "Black",
  size: "Large"
}

const suggestedProducts = [
  {
    id: 2,
    name: "Conference Table",
    description: "Large oval table for meetings",
    price: 799.99,
    rating: 4.8,
    category: "Conference",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 3,
    name: "Bar Stool Set",
    description: "Set of 4 modern bar stools",
    price: 399.99,
    rating: 4.2,
    category: "Pub",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 4,
    name: "Filing Cabinet",
    description: "3-drawer metal filing cabinet",
    price: 149.99,
    rating: 4.0,
    category: "Office",
    image: "/placeholder.svg?height=200&width=200",
  },
]

export default function ProductPage() {
  const { id } = useParams()
  const [quantity, setQuantity] = useState(1)
  const [review, setReview] = useState('')
  const { addToCart } = useCart()

  const handleAddToCart = () => {
    addToCart({ ...product, quantity })
    console.log(`Added ${quantity} of product ${id} to cart`)
  }

  const handleRequestQuote = () => {
    console.log(`Requested quote for product ${id}`)
  }

  const handleSubmitReview = () => {
    console.log(`Submitted review for product ${id}: ${review}`)
    setReview('')
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <img src={product.image} alt={product.name} className="w-full h-auto rounded-lg" />
          </div>
          <div>
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${
                    i < Math.floor(product.rating)
                      ? "text-yellow-400 fill-yellow-400"
                      : "text-gray-300"
                  }`}
                />
              ))}
              <span className="ml-2 text-gray-600">({product.rating})</span>
            </div>
            <p className="text-2xl font-bold mb-4">${product.price.toFixed(2)}</p>
            <div className="mb-4">
              <p><strong>Material:</strong> {product.material}</p>
              <p><strong>Color:</strong> {product.color}</p>
              <p><strong>Size:</strong> {product.size}</p>
            </div>
            <div className="flex items-center mb-4">
              <Button 
                variant="outline" 
                size="icon"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span className="mx-4 text-xl">{quantity}</span>
              <Button 
                variant="outline" 
                size="icon"
                onClick={() => setQuantity(quantity + 1)}
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex gap-4 mb-8">
              <Button className="bg-orange-500 hover:bg-orange-600" onClick={handleAddToCart}>
                <ShoppingCart className="h-4 w-4 mr-2" />
                Add to Cart
              </Button>
              <Button variant="outline" onClick={handleRequestQuote}>
                Request a Quote
              </Button>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Add a Review</h3>
              <Textarea
                value={review}
                onChange={(e) => setReview(e.target.value)}
                placeholder="Write your review here..."
                className="mb-2"
              />
              <Button onClick={handleSubmitReview}>Submit Review</Button>
            </div>
          </div>
        </div>
        <SuggestedProducts products={suggestedProducts} />
      </main>
      <Footer />
    </div>
  )
}

