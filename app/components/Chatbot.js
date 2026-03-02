'use client';
import { useEffect } from 'react';

export default function Chatbot() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.jotfor.ms/agent/embedjs/019cadf5621b78f1a97203d9f7f034e5968b/embed.js';
    script.async = true;
    document.body.appendChild(script);
    return () => document.body.removeChild(script);
  }, []);

  return null;
}
