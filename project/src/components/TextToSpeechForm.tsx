import { useState } from 'react';
import { Volume2, Download, Loader2 } from 'lucide-react';
import { generateSpeech, downloadSpeech } from '../utils/speech';

export function TextToSpeechForm() {
  const [text, setText] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [voice, setVoice] = useState('en-US');

  const handleGenerate = async () => {
    if (!text) return;
    
    setIsGenerating(true);
    try {
      await generateSpeech(text, voice);
    } catch (error) {
      console.error('Error generating speech:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleDownload = async () => {
    if (!text) return;
    
    try {
      await downloadSpeech(text, voice);
    } catch (error) {
      console.error('Error downloading speech:', error);
    }
  };

  return (
    <div className="glass-morphism rounded-lg p-6 max-w-2xl mx-auto w-full space-y-4">
      <div className="space-y-2">
        <label htmlFor="text" className="block text-sm font-medium">
          Enter your text
        </label>
        <textarea
          id="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full h-32 rounded-lg bg-input-background p-3 text-text-color border border-primary/20 focus:border-secondary/50 focus:ring-1 focus:ring-secondary/50 transition-all duration-200"
          placeholder="Type or paste your text here..."
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="voice" className="block text-sm font-medium">
          Select voice
        </label>
        <select
          id="voice"
          value={voice}
          onChange={(e) => setVoice(e.target.value)}
          className="w-full rounded-lg bg-input-background p-3 text-text-color border border-primary/20 focus:border-secondary/50 focus:ring-1 focus:ring-secondary/50 transition-all duration-200"
        >
          <option value="en-US">English (US)</option>
          <option value="en-GB">English (UK)</option>
          <option value="es-ES">Spanish</option>
          <option value="fr-FR">French</option>
          <option value="de-DE">German</option>
        </select>
      </div>

      <div className="flex gap-4">
        <button
          onClick={handleGenerate}
          disabled={isGenerating || !text}
          className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-secondary py-2 px-4 rounded-lg font-medium hover-effect disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isGenerating ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : (
            <Volume2 className="w-5 h-5" />
          )}
          Generate Speech
        </button>

        <button
          onClick={handleDownload}
          disabled={isGenerating || !text}
          className="flex items-center justify-center gap-2 bg-input-background py-2 px-4 rounded-lg font-medium hover-effect disabled:opacity-50 disabled:cursor-not-allowed gradient-border"
        >
          <Download className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}