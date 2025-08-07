import slides from '@/data/slides';
import keywords from '@/data/keywords';

// Utility to get the full keyword object (with images) by label (case-insensitive)
const getKeywordDataByLabel = (type, label) => {
  return keywords[type].find(item =>
    item.label.toLowerCase() === label.toLowerCase()
  );
};

const extractUnique = (type) => {
  const seenLabels = new Set();
  const unique = [];

  slides.forEach(slide => {
    const keyword = slide.keywords[type];
    if (keyword) {
      const normalizedLabel = keyword.label.toLowerCase();
      if (!seenLabels.has(normalizedLabel)) {
        const fullData = getKeywordDataByLabel(type, keyword.label);
        if (fullData) {
          unique.push(fullData);
          seenLabels.add(normalizedLabel);
        }
      }
    }
  });

  return unique;
};

export const uniqueFirstKeywords = extractUnique('first');
export const uniqueSecondKeywords = extractUnique('second');
