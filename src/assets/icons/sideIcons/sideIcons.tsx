const importSideIcons = async (): Promise<{ [key: string]: string }> => {
    const context = import.meta.glob('./*.svg', { eager: true });
    console.log(context);
    const icons: { [key: string]: string } = {};
  
    for (const path in context) {
      const key = path.replace('./', '').replace('.svg', '');
      icons[key] = (context[path] as any).default;
    }
    
    return icons;
  };
  
  export const sideIcons = importSideIcons();