import { Button } from "./ui/custom-button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-fashion.jpg";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-secondary via-background to-accent min-h-[80vh] flex items-center overflow-hidden">
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <div className="space-y-6 lg:pr-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Discover Your
              <span className="block bg-gradient-to-r from-primary to-primary-hover bg-clip-text text-transparent">
                Perfect Style
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-lg">
              Elevate your wardrobe with our curated collection of elegant women's fashion. 
              From stunning dresses to chic accessories - find your signature look.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="hero" size="xl" className="group">
              Shop Collection
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="xl" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              View Lookbook
            </Button>
          </div>

          <div className="flex items-center space-x-8 pt-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">100+</div>
              <div className="text-sm text-muted-foreground">Products</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">24/7</div>
              <div className="text-sm text-muted-foreground">Support</div>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative">
          <div className="relative overflow-hidden rounded-2xl shadow-2xl">
            <img
              src={heroImage}
              alt="T & T Collection Fashion"
              className="w-full h-[600px] object-cover transform hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
          </div>
          
          {/* Floating Cards */}
          <div className="absolute -top-4 -left-4 bg-white p-4 rounded-xl shadow-lg border border-border">
            <div className="text-sm font-semibold text-primary">Free Delivery</div>
            <div className="text-xs text-muted-foreground">Within Lilongwe</div>
          </div>
          
          <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground p-4 rounded-xl shadow-lg">
            <div className="text-sm font-semibold">Mobile Payment</div>
            <div className="text-xs opacity-90">Airtel Money • TNM Mpamba</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;