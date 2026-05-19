import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
}

export function useSEO({ title, description, canonical, ogImage }: SEOProps) {
  useEffect(() => {
    // 1. Update Title
    const fullTitle = `${title} | AG Cube`;
    document.title = fullTitle;

    // Helper function to update or create meta tags
    const setMetaTag = (attr: string, key: string, content: string) => {
      let element = document.querySelector(`meta[${attr}="${key}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attr, key);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // 2. Update Standard Meta Tags
    setMetaTag('name', 'description', description);
    
    // 3. Update Open Graph Meta Tags
    setMetaTag('property', 'og:title', fullTitle);
    setMetaTag('property', 'og:description', description);
    if (ogImage) {
      setMetaTag('property', 'og:image', ogImage);
    }

    // 4. Update Twitter Card Meta Tags
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', fullTitle);
    setMetaTag('name', 'twitter:description', description);
    if (ogImage) {
      setMetaTag('name', 'twitter:image', ogImage);
    }

    // 5. Update Canonical Tag
    if (canonical) {
      let linkElement = document.querySelector(`link[rel="canonical"]`);
      if (!linkElement) {
        linkElement = document.createElement('link');
        linkElement.setAttribute('rel', 'canonical');
        document.head.appendChild(linkElement);
      }
      linkElement.setAttribute('href', canonical);
    }

  }, [title, description, canonical, ogImage]);
}
