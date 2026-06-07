const baseUrl = 'https://www.myclean-service.de';

type JsonLd = Record<string, unknown> | Record<string, unknown>[];

type SeoOptions = {
  title: string;
  description: string;
  path: string;
  jsonLd?: JsonLd;
};

const ensureMeta = (selector: string, create: () => HTMLMetaElement) => {
  let meta = document.querySelector<HTMLMetaElement>(selector);
  if (!meta) {
    meta = create();
    document.head.appendChild(meta);
  }
  return meta;
};

export const setPageSeo = ({ title, description, path, jsonLd }: SeoOptions) => {
  document.title = title;

  const metaDescription = ensureMeta('meta[name="description"]', () => {
    const meta = document.createElement('meta');
    meta.name = 'description';
    return meta;
  });
  metaDescription.content = description;

  const ogTitle = ensureMeta('meta[property="og:title"]', () => {
    const meta = document.createElement('meta');
    meta.setAttribute('property', 'og:title');
    return meta;
  });
  ogTitle.content = title;

  const ogDescription = ensureMeta('meta[property="og:description"]', () => {
    const meta = document.createElement('meta');
    meta.setAttribute('property', 'og:description');
    return meta;
  });
  ogDescription.content = description;

  let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.rel = 'canonical';
    document.head.appendChild(canonical);
  }
  canonical.href = `${baseUrl}${path}`;

  document.getElementById('page-jsonld')?.remove();
  if (jsonLd) {
    const script = document.createElement('script');
    script.id = 'page-jsonld';
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(jsonLd);
    document.head.appendChild(script);
  }
};

export { baseUrl };
