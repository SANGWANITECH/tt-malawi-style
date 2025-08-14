import ProductCard from "./ProductCard";
import { Button } from "./ui/custom-button";
import { ArrowRight } from "lucide-react";
import productDress from "@/assets/product-dress-1.jpg";
import productTop from "@/assets/product-top-1.jpg";
import productAccessories from "@/assets/product-accessories-1.jpg";

const FeaturedProducts = () => {
  const featuredProducts = [
    {
      id: 1,
      name: "Elegant Blue Dress",
      price: 25000,
      originalPrice: 30000,
      image: productDress,
      rating: 4.8,
      reviewCount: 24,
      isNew: true,
      isSale: true,
    },
    {
      id: 2,
      name: "Chic Summer Top",
      price: 15000,
      image: productTop,
      rating: 4.6,
      reviewCount: 18,
      isNew: true,
    },
    {
      id: 3,
      name: "Designer Accessories Set",
      price: 12000,
      originalPrice: 18000,
      image: productAccessories,
      rating: 4.9,
      reviewCount: 31,
      isSale: true,
    },
    {
      id: 4,
      name: "Evening Cocktail Dress",
      price: 35000,
      image: productDress,
      rating: 4.7,
      reviewCount: 42,
    },
    {
      id: 5,
      name: "Casual Blouse Collection",
      price: 18000,
      image: productTop,
      rating: 4.5,
      reviewCount: 28,
      isNew: true,
    },
    {
      id: 6,
      name: "Premium Handbag",
      price: 22000,
      image: productAccessories,
      rating: 4.8,
      reviewCount: 35,
    },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Featured Products
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our handpicked selection of the finest women's fashion pieces, 
            carefully curated for the modern Malawian woman.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button variant="outline" size="lg" className="group border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            View All Products
            <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;