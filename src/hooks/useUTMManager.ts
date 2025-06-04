
import { useState, useEffect } from 'react';

interface UTMParams {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
}

export const useUTMManager = () => {
  const [utmParams, setUtmParams] = useState<UTMParams>({});

  useEffect(() => {
    // Captura UTMs da URL atual
    const urlParams = new URLSearchParams(window.location.search);
    const captured: UTMParams = {};

    // Lista de parâmetros UTM para capturar
    const utmKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];
    
    utmKeys.forEach(key => {
      const value = urlParams.get(key);
      if (value) {
        captured[key as keyof UTMParams] = value;
      }
    });

    // Se encontrou UTMs na URL, salva no localStorage e no estado
    if (Object.keys(captured).length > 0) {
      localStorage.setItem('utmParams', JSON.stringify(captured));
      setUtmParams(captured);
      console.log('UTMs capturadas:', captured);
    } else {
      // Se não encontrou na URL, tenta recuperar do localStorage
      const saved = localStorage.getItem('utmParams');
      if (saved) {
        try {
          const parsedUTMs = JSON.parse(saved);
          setUtmParams(parsedUTMs);
          console.log('UTMs recuperadas do localStorage:', parsedUTMs);
        } catch (error) {
          console.error('Erro ao parsear UTMs do localStorage:', error);
        }
      }
    }
  }, []);

  // Função para adicionar UTMs a uma URL
  const addUTMsToUrl = (url: string): string => {
    try {
      const urlObj = new URL(url);
      
      // Adiciona cada UTM como parâmetro
      Object.entries(utmParams).forEach(([key, value]) => {
        if (value) {
          urlObj.searchParams.set(key, value);
        }
      });

      const finalUrl = urlObj.toString();
      console.log('URL com UTMs:', finalUrl);
      return finalUrl;
    } catch (error) {
      console.error('Erro ao adicionar UTMs à URL:', error);
      return url;
    }
  };

  // Função para limpar UTMs
  const clearUTMs = () => {
    localStorage.removeItem('utmParams');
    setUtmParams({});
    console.log('UTMs limpas');
  };

  return {
    utmParams,
    addUTMsToUrl,
    clearUTMs,
    hasUTMs: Object.keys(utmParams).length > 0
  };
};
