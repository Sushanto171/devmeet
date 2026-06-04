'use client';
import { useEffect } from 'react';

export default function ChatbotEmbed() {
  useEffect(() => {
    const script1 = document.createElement('script');
    script1.src = 'https://cdn.jotfor.ms/s/umd/latest/for-embedded-agent.js';
    script1.async = true;
    document.body.appendChild(script1);

    script1.onload = () => {
      window.AgentInitializer?.init({
        agentRenderURL: "https://eu.jotform.com/agent/01964a3ab6e27d78bd2750d11a70e184b7e2",
        rootId: "JotformAgent-01964a3ab6e27d78bd2750d11a70e184b7e2",
        formID: "01964a3ab6e27d78bd2750d11a70e184b7e2",
        queryParams: ["skipWelcome=1", "maximizable=1"],
        domain: "https://eu.jotform.com",
        isDraggable: false,
        background: "linear-gradient(180deg, #6C73A8 0%, #6C73A8 100%)",
        buttonBackgroundColor: "#0066C3",
        buttonIconColor: "#FFFFFF",
        variant: false,
        customizations: {
          "greeting": "Yes",
          "greetingMessage": "Hi! How can I assist you?",
          "pulse": "Yes",
          "position": "right"
        },
        isVoice: false,
      });
    };
  }, []);

  return null; 
}
