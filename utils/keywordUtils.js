import slides from '@/data/slides';

const extractUnique = (type) => {
  const all = slides.map(slide => slide.keywords[type]);
  const unique = [];

  all.forEach(item => {
    if (!unique.find(u => u.label === item.label)) {
      unique.push(item);
    }
  });

  return unique;
};

export const uniqueFirstKeywords = extractUnique('first');
export const uniqueSecondKeywords = extractUnique('second');
