const SUPPORTED_LANGUAGES = new Set([
  "en",
  "sw",
  "luo",
  "ki",
  "ka",
  "kae",
  "lu",
]);

const LANGUAGE_FALLBACKS = {
  luo: "sw",
  ki: "sw",
  ka: "sw",
  kae: "sw",
  lu: "sw",
};

const SW_TRANSLATIONS = {
  home: "Nyumbani",
  studyMaterials: "Nyenzo za Kujifunzia",
  modelTown: "Mji wa Mfano",
  modelTownBoard: "Bodi ya Mji wa Mfano",
  safetyTraining: "Mafunzo ya Usalama",
  siteName: "Rafiki Driving School",
  hello: "Habari",
  profile: "Wasifu",
  openMainMenu: "Fungua menyu kuu",
  quickLinks: "Viungo vya Haraka",
  legal: "Kisheria",
  privacyPolicy: "Sera ya Faragha",
  termsOfService: "Masharti ya Huduma",
  ntsaMaster: "Rafiki Driving School",
  makingKenyanRoadsSafer: "Kufanya barabara za Kenya kuwa salama zaidi.",
  builtForKenya: "Imejengwa kwa ajili ya Kenya.",
  "Official NTSA aligned learning": "Mafunzo yanayoendana rasmi na NTSA",
  "Learn driving theory with clarity and confidence":
    "Jifunze nadharia ya udereva kwa uwazi na kujiamini",
  "Start learning": "Anza kujifunza",
  "Take a practice test": "Fanya mtihani wa mazoezi",
  "At a glance": "Kwa muhtasari",
  "Why learners choose Rafiki": "Kwa nini wanafunzi huchagua Rafiki",
  "Choose your driving class": "Chagua darasa lako la udereva",
  "Student feedback": "Maoni ya wanafunzi",
  "Model town practical preparation": "Maandalizi ya vitendo ya mji wa mfano",
  "Model Town Board": "Bodi ya Mji wa Mfano",
  "Board infographic": "Muhtasari wa picha wa bodi",
  "Key board zones": "Maeneo muhimu ya bodi",
  "Navigation checklist": "Orodha ya ukaguzi wa uelekezaji",
  "Common road signs on the board": "Alama za kawaida za barabarani kwenye bodi",
  "Training videos": "Video za mafunzo",
  "Practice flush parking": "Fanya mazoezi ya maegesho ya sambamba",
  "Practice angle parking": "Fanya mazoezi ya maegesho ya pembe",
  "Theory Notes: Vehicle Control": "Nukuu za Nadharia: Udhibiti wa Gari",
  "Back to Study Hub": "Rudi kwenye Kituo cha Masomo",
  "Jump to Gear Statistics": "Nenda kwenye Takwimu za Gia",
  "Gear Type Popularity Over Time": "Umaarufu wa Aina za Gia kwa Muda",
  "Global EV trend": "Mwelekeo wa EV duniani",
  "What Is a Motor Vehicle?": "Gari la Injini ni nini?",
  "Safe Vehicle Start Procedure": "Utaratibu Salama wa Kuwasha Gari",
  "Steering Wheel: Function and Control":
    "Usukani: Kazi na Udhibiti",
  "Practical Procedures: Start, Join, Stop, Hills, and Turns":
    "Taratibu za Vitendo: Kuwasha, Kujiunga, Kusimama, Milima na Kugeuka",
  "Gears: Function and Class Differences": "Gia: Kazi na Tofauti za Madarasa",
  "Automatic and Other Transmission Types":
    "Automatic na Aina Nyingine za Transmission",
  "Manual Pedals: Accelerator, Brake, and Clutch (Clutch Focus)":
    "Pedali za Manual: Accelerator, Brake na Clutch (Msisitizo wa Clutch)",
  "Quick Revision Sequence": "Mpangilio wa Haraka wa Marudio",
  "Students trained": "Wanafunzi waliofundishwa",
  "Average pass rate": "Wastani wa ufaulu",
  "Practice questions": "Maswali ya mazoezi",
  "Supported languages": "Lugha zinazotumika",
  "Road Signs": "Alama za Barabarani",
  "Practice Quiz": "Jaribio la Mazoezi",
  "Model Town": "Mji wa Mfano",
  "Start Learning Now": "Anza Kujifunza Sasa",
  "Current Language:": "Lugha ya Sasa:",
  "English": "Kiingereza",
  "Swahili": "Kiswahili",
  switchToLightMode: "Badili hadi hali ya mwanga",
  switchToDarkMode: "Badili hadi hali ya giza",
  lightMode: "Hali ya Mwanga",
  darkMode: "Hali ya Giza",
  closeMainMenu: "Funga menyu kuu",
  profileSaved: "Wasifu umehifadhiwa.",
  settingsSaved: "Mipangilio imehifadhiwa.",
  feedbackRequired: "Tafadhali andika maoni kabla ya kutuma.",
  feedbackSaved: "Maoni yamehifadhiwa. Unaweza pia kutuma kwa barua pepe.",
  quizzesCompleted: "Mitihani Iliyokamilika",
  learningStreak: "Mfululizo wa Kujifunza",
  joined: "Umejiunga",
  overview: "Muhtasari",
  settings: "Mipangilio",
  feedback: "Maoni",
  overviewDescription:
    "Endelea kujifunza, kagua mitihani yako, na tuma maoni moja kwa moja kutoka kwenye wasifu wako.",
  takeQuiz: "Fanya Mtihani",
  reviewedQuizzes: "Mitihani Iliyopitiwa",
  profileDetails: "Maelezo ya Wasifu",
  fullName: "Jina Kamili",
  email: "Barua Pepe",
  phone: "Simu",
  county: "Kaunti",
  drivingSchool: "Shule ya Udereva",
  saveProfile: "Hifadhi Wasifu",
  preferences: "Mapendeleo",
  themePreferenceDescription:
    "Chagua hali unayopendelea kwa mwonekano wa programu.",
  sendDirectFeedback: "Tuma Maoni Moja kwa Moja",
  feedbackDescription:
    "Shiriki hitilafu, maombi ya vipengele, na maoni ya ubora wa mitihani moja kwa moja kutoka kwenye wasifu wako.",
  topic: "Mada",
  platformExperience: "Uzoefu wa jukwaa",
  quizQuality: "Ubora wa mtihani",
  studyContent: "Maudhui ya masomo",
  bugReport: "Ripoti ya hitilafu",
  featureRequest: "Ombi la kipengele",
  contactEmail: "Barua Pepe ya Mawasiliano",
  rating: "Ukadiriaji",
  feedbackMessage: "Ujumbe wa Maoni",
  feedbackPlaceholder: "Andika maoni yako hapa...",
  allowFollowUpContact: "Ruhusu mawasiliano ya ufuatiliaji",
  saveFeedback: "Hifadhi Maoni",
  sendViaEmailApp: "Tuma kwa Programu ya Barua Pepe",
  recentFeedback: "Maoni ya Hivi Karibuni",
  reviewMode: "Hali ya Mapitio",
  review: "Mapitio",
  reviewDescription:
    "Kila swali linaonyesha jibu sahihi na picha inayohusiana kwa marudio.",
  backToReviewHome: "Rudi kwenye ukurasa wa mapitio",
  viewAllReviewQuizzes: "Tazama mapitio yote ya mitihani",
  question: "Swali",
  correct: "Sahihi",
  questionImage: "Picha ya swali",
  quizNotFound: "Mtihani haujapatikana",
  quizNotFoundDescription: "Mtihani wa mapitio uliotakiwa haukupatikana.",
};

const BUILTIN_TRANSLATIONS = {
  sw: SW_TRANSLATIONS,
  luo: {},
  ki: {},
  ka: {},
  kae: {},
  lu: {},
};

export function normalizeLanguage(value) {
  if (typeof value !== "string") return "en";
  const normalized = value.trim().toLowerCase();
  if (!normalized) return "en";
  return SUPPORTED_LANGUAGES.has(normalized) ? normalized : "en";
}

export function getTargetLanguageCandidates(language) {
  const normalized = normalizeLanguage(language);
  if (normalized === "en") return ["en"];

  const fallback = LANGUAGE_FALLBACKS[normalized];
  const candidates = [normalized];

  if (fallback && fallback !== normalized) {
    candidates.push(fallback);
  }

  if (!candidates.includes("sw")) {
    candidates.push("sw");
  }

  return candidates;
}

export function lookupDictionaryTranslation(language, key, fallbackText = "") {
  const normalized = normalizeLanguage(language);
  if (normalized === "en") return null;

  const variants = [key, fallbackText]
    .filter((value) => typeof value === "string")
    .map((value) => value.trim())
    .filter(Boolean);

  if (variants.length === 0) return null;

  const languagesToCheck = getTargetLanguageCandidates(normalized);

  for (const languageCode of languagesToCheck) {
    const dictionary = BUILTIN_TRANSLATIONS[languageCode];
    if (!dictionary) continue;

    for (const variant of variants) {
      if (dictionary[variant]) {
        return dictionary[variant];
      }
    }
  }

  return null;
}
