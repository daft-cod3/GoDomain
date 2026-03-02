'use client';

import { useLanguage } from './LanguageContext';

// Enhanced translation patterns for quiz content
const translationPatterns = {
  sw: {
    // Question starters
    'What does a sign': 'Je, alama',
    'What does the sign': 'Je, alama',
    'What is the': 'Ni nini',
    'What should you': 'Unapaswa nini',
    'When can you': 'Lini unaweza',
    'When are you': 'Lini wewe',
    'When should you': 'Lini unapaswa',
    'Where should you': 'Wapi unapaswa',
    'How should you': 'Jinsi gani unapaswa',
    'Which way': 'Njia gani',
    'Who has': 'Nani ana',
    'Are you allowed': 'Je, unaruhusiwa',
    'Is it legal': 'Je, ni halali',
    'Is it permissible': 'Je, inaruhusiwa',
    
    // Question endings
    'mean?': 'maana yake?',
    'represent?': 'inawakilisha?',
    'indicate?': 'inaonyesha?',
    'signify?': 'inamaanisha?',
    'warn of?': 'inaonya kuhusu?',
    'show?': 'inaonyesha?',
    'tell you?': 'inakuambia?',
    
    // Common phrases
    'showing a': 'inayoonyesha',
    'with a': 'na',
    'on a': 'kwenye',
    'in a': 'katika',
    'for a': 'kwa',
    'of a': 'ya',
    'to a': 'kwa',
    'from a': 'kutoka',
    'at a': 'katika',
    'by a': 'na',
    
    // Colors and shapes
    'red border': 'mpaka nyekundu',
    'white border': 'mpaka mweupe',
    'black border': 'mpaka nyeusi',
    'blue border': 'mpaka wa bluu',
    'green border': 'mpaka wa kijani',
    'yellow background': 'mandhari ya manjano',
    'white background': 'mandhari nyeupe',
    'blue background': 'mandhari ya bluu',
    'green background': 'mandhari ya kijani',
    'red background': 'mandhari nyekundu',
    'triangular': 'pembetatu',
    'circular': 'duara',
    'rectangular': 'mstatili',
    'square': 'mraba',
    'round': 'duara',
    
    // Traffic elements
    'traffic light': 'taa za trafiki',
    'road sign': 'alama ya barabara',
    'speed limit': 'kiwango cha kasi',
    'parking': 'kuegesha',
    'no parking': 'hakuna kuegesha',
    'one way': 'njia moja',
    'two way': 'njia mbili',
    'roundabout': 'kizunguko',
    'junction': 'makutano',
    'crossroads': 'makutano ya njia',
    'motorway': 'barabara kuu',
    'dual carriageway': 'barabara ya njia mbili',
    'single carriageway': 'barabara ya njia moja',
    
    // Vehicles
    'car': 'gari',
    'vehicle': 'gari',
    'motor vehicle': 'gari la moto',
    'motorcycle': 'pikipiki',
    'bicycle': 'baiskeli',
    'bus': 'basi',
    'truck': 'lori',
    'lorry': 'lori',
    'van': 'gari dogo',
    'taxi': 'teksi',
    'ambulance': 'gari la wagonjwa',
    'fire engine': 'gari la kuzima moto',
    'police car': 'gari la polisi',
    
    // Actions
    'turn left': 'geuka kushoto',
    'turn right': 'geuka kulia',
    'go straight': 'enda moja kwa moja',
    'stop': 'simama',
    'give way': 'peana njia',
    'yield': 'peana njia',
    'overtake': 'pita',
    'reverse': 'rudi nyuma',
    'park': 'egesha',
    'wait': 'ngoja',
    'proceed': 'endelea',
    'slow down': 'punguza kasi',
    'speed up': 'ongeza kasi',
    
    // Common answers
    'Yes': 'Ndio',
    'No': 'Hapana',
    'Never': 'Kamwe',
    'Always': 'Kila wakati',
    'Sometimes': 'Wakati mwingine',
    'Only when': 'Tu wakati',
    'Only if': 'Tu kama',
    'Except': 'Isipokuwa',
    'Unless': 'Isipokuwa',
    
    // Numbers and measurements
    'mph': 'maili kwa saa',
    'km/h': 'kilomita kwa saa',
    'metres': 'mita',
    'kilometers': 'kilomita',
    'miles': 'maili',
    'feet': 'futi',
    'inches': 'inchi',
    'seconds': 'sekunde',
    'minutes': 'dakika',
    'hours': 'masaa',
    'days': 'siku',
    'weeks': 'wiki',
    'months': 'miezi',
    'years': 'miaka'
  }
};

export function translateQuizContent(text, language) {
  if (!text || language === 'en') return text;
  
  const patterns = translationPatterns[language];
  if (!patterns) return text;
  
  let translatedText = text;
  
  // Apply translation patterns
  Object.entries(patterns).forEach(([english, translated]) => {
    const regex = new RegExp(english, 'gi');
    translatedText = translatedText.replace(regex, translated);
  });
  
  return translatedText;
}

export default function QuizTranslator({ children, className = '' }) {
  const { language } = useLanguage();
  
  if (!children) return null;
  
  if (typeof children === 'string') {
    const translated = translateQuizContent(children, language);
    return <span className={className}>{translated}</span>;
  }
  
  return <span className={className}>{children}</span>;
}