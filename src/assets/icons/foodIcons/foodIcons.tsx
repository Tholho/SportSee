const importFoodIcons = async (): Promise<{ [key: string]: string }> => {
    const context = import.meta.glob('./*.svg', { eager: true });
    const icons: { [key: string]: string } = {};
  
    for (const path in context) {
      const key = path.replace('./', '').replace('.svg', '');
      icons[key] = (context[path] as any).default;
    }
  
    return icons;
  };
  
  export const foodIcons = importFoodIcons();