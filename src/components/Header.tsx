import { useState } from "react";
import { Search, ShoppingBag, User, Menu, X, Heart } from "lucide-react";
import { Button } from "./ui/custom-button";
import { Input } from "./ui/input";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        {/* Main Header */}
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary-hover bg-clip-text text-transparent">
              T & T Collection
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
              Home
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
              Dresses
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
              Tops
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
              Accessories
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
              Sale
            </a>
          </nav>

          {/* Search Bar */}
          <div className="hidden lg:flex items-center space-x-4 flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search for products..."
                className="pl-10 pr-4 py-2 w-full bg-muted/50 border-border focus:bg-background"
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" className="hidden sm:flex">
              <Heart className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </Button>
            
            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="lg:hidden pb-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search for products..."
              className="pl-10 pr-4 py-2 w-full bg-muted/50 border-border focus:bg-background"
            />
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border py-4">
            <nav className="flex flex-col space-y-4">
              <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
                Home
              </a>
              <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
                Dresses
              </a>
              <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
                Tops
              </a>
              <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
                Accessories
              </a>
              <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
                Sale
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;