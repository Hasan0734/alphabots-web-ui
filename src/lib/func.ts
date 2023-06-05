export const getFullNameAbbr = (fullName: string | undefined): string => {
    return fullName
      ? fullName
        .replace(/\b(\w)\w+/g, '$1')
        .replace(/\s/g, '')
        .replace(/\./, '')
        .toUpperCase()
      : '';
  };

