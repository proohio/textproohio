import { Navbar } from './components/Navbar';
import { TextToSpeechForm } from './components/TextToSpeechForm';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="spinner" />
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <TextToSpeechForm />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;