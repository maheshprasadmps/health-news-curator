const simulateAIProcessing = (delay) => {
  return new Promise(resolve => setTimeout(resolve, delay));
};

const generateTLDR = (content) => {
  const sentences = content.split('. ').filter(s => s.length > 20);
  const firstSentence = sentences[0] + '.';
  const secondSentence = sentences[1] ? sentences[1] + '.' : sentences[2] + '.';
  return `${firstSentence} ${secondSentence}`;
};

const generateKeyTakeaways = (content) => {
  const sentences = content.split('. ').filter(s => s.length > 30);
  const takeaways = [];
  
  for (let i = 0; i < Math.min(3, sentences.length); i++) {
    const sentence = sentences[i * 2] || sentences[i];
    takeaways.push(sentence.endsWith('.') ? sentence : sentence + '.');
  }
  
  return takeaways.slice(0, 3);
};

const simplifyContent = (content) => {
  const sentences = content.split('. ');
  const simplified = sentences.map(sentence => {
    return sentence
      .replace(/approximately/gi, 'about')
      .replace(/individuals/gi, 'people')
      .replace(/demonstrate/gi, 'show')
      .replace(/significantly/gi, 'greatly')
      .replace(/substantial/gi, 'large')
      .replace(/conducted/gi, 'done')
      .replace(/observed/gi, 'saw')
      .replace(/participants/gi, 'people in the study');
  }).join('. ');
  
  return simplified;
};

export const processArticle = async (article) => {
  await simulateAIProcessing(1500);
  
  return {
    ...article,
    tldr: generateTLDR(article.content),
    keyTakeaways: generateKeyTakeaways(article.content),
  };
};

export const processArticleSimplification = async (article) => {
  await simulateAIProcessing(2000);
  
  return {
    ...article,
    simplifiedContent: simplifyContent(article.content),
  };
};