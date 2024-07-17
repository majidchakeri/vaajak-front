type Translations = {
  [key: string]: string;
};
export function translateBreadcrumbRoutes(
  breadcrumbRoutes: string[],
  translationsItems: Translations
): string[] {
  const translations: any = translationsItems;

  return breadcrumbRoutes.map((route) => translationsItems[route] || route); 
}
