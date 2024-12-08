import { Headphones } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="glass-morphism py-4 shadow-lg shadow-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Headphones className="w-8 h-8 text-primary" />
            <h1 className="text-2xl font-bold">
              Text<span className="gradient-text">2</span>Speech
            </h1>
          </div>
        </div>
      </div>
    </nav>
  );
}