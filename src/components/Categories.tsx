import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/custom-button";
import productDress from "@/assets/product-dress-1.jpg";
import productTop from "@/assets/product-top-1.jpg";
import productAccessories from "@/assets/product-accessories-1.jpg";

const Categories = () => {
  const categories = [
    {
      id: 1,
      name: "Dresses",
      description: "Elegant dresses for every occasion",
      image: productDress,
      productCount: 45,
    },
    {
      id: 2,
      name: "Tops & Blouses",
      description: "Stylish tops and chic blouses",
      image: productTop,
      productCount: 38,
    },
    {
      id: 3,
      name: "Accessories",
      description: "Complete your look with our accessories",
      image: productAccessories,
      productCount: 52,
    },
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Shop by Category
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our carefully organized collections to find exactly what you're looking for.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Card 
              key={category.id} 
              className="group border-border hover:shadow-xl transition-all duration-300 overflow-hidden bg-card cursor-pointer"
            >
              <div className="relative overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                
                {/* Category Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">{category.name}</h3>
                  <p className="text-sm opacity-90 mb-3">{category.description}</p>
                  <div className="text-xs opacity-75">
                    {category.productCount} products available
                  </div>
                </div>
              </div>

              <CardContent className="p-6">
                <Button 
                  variant="outline" 
                  className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-all"
                >
                  Shop {category.name}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;