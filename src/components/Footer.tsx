import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="glass-morphism py-4 mt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm text-gray-400">
          Made with <Heart className="inline-block w-4 h-4 text-red-500" /> by proohio
        </p>
      </div>
    </footer>
  );
}