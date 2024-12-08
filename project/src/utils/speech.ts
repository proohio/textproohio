export async function generateSpeech(text: string, voice: string): Promise<void> {
  return new Promise((resolve, reject) => {
    try {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = voice;
      
      utterance.onend = () => {
        resolve();
      };
      
      utterance.onerror = (error) => {
        reject(error);
      };
      
      window.speechSynthesis.speak(utterance);
    } catch (error) {
      reject(error);
    }
  });
}

export async function downloadSpeech(text: string, voice: string): Promise<void> {
  try {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = voice;
    
    // Currently, the Web Speech API doesn't support direct audio download
    // This is a placeholder for future implementation with a proper TTS API
    alert('Download functionality will be implemented with a proper TTS API in the future.');
  } catch (error) {
    console.error('Error downloading speech:', error);
    throw error;
  }
}