const CATEGORY_TITLES = {
  "road-signs": "Road Signs",
  "road-laws": "Road Laws",
  "vehicle-parts": "Vehicle Parts",
  "model-town": "Model Town",
};

const CATEGORY_IMAGES = {
  "road-signs": "/roadSign/regulatory/priority/stopSign.jpeg",
  "road-laws": "/traffic/traffic.jpg",
  "vehicle-parts": "/indicators/antiLock.png",
  "model-town": "/modelTown/model1.jpeg",
};

const REVIEW_BANK = {
  "road-signs": [
    {
      question: "What must you do at a red octagonal sign?",
      options: ["Speed up", "Stop completely", "Turn left only", "Yield only"],
      answer: 1,
      image: "/roadSign/regulatory/priority/stopSign.jpeg",
    },
    {
      question: "What does an inverted triangle sign indicate?",
      options: ["No entry", "Stop", "Give way", "Pedestrian crossing"],
      answer: 2,
      image: "/roadSign/regulatory/priority/giveWay.jpeg",
    },
    {
      question: "What does a circular red-bordered sign usually show?",
      options: ["Tourist info", "A warning only", "A prohibition or restriction", "Hospital services"],
      answer: 2,
      image: "/roadSign/regulatory/proh/noEntry.png",
    },
    {
      question: "What does a triangular red-bordered sign usually mean?",
      options: ["Warning ahead", "Parking allowed", "Mandatory direction", "End of restriction"],
      answer: 0,
      image: "/roadSign/warning/crossRoad.png",
    },
    {
      question: "What does a blue circular sign usually indicate?",
      options: ["Road works", "Mandatory instruction", "Danger only", "Police checkpoint"],
      answer: 1,
      image: "/roadSign/regulatory/proh/passLeft.png",
    },
    {
      question: "What does a no-entry sign indicate?",
      options: ["One-way allowed", "Entry prohibited", "Speed limit ends", "Pedestrians only"],
      answer: 1,
      image: "/roadSign/regulatory/proh/noEntry.png",
    },
    {
      question: "What should you do at a pedestrian crossing sign?",
      options: ["Ignore pedestrians", "Increase speed", "Prepare to slow and yield", "Overtake quickly"],
      answer: 2,
      image: "/roadSign/warning/pedCrossing.jpeg",
    },
    {
      question: "What does a road works warning sign tell you?",
      options: ["Road is closed forever", "Road workers ahead", "Fuel station nearby", "Police station ahead"],
      answer: 1,
      image: "/roadSign/warning/roadWork.jpeg",
    },
    {
      question: "What does a speed limit sign mean?",
      options: ["Recommended speed", "Minimum speed", "Maximum legal speed", "Road quality score"],
      answer: 2,
      image: "/roadSign/regulatory/proh/speedLimit.png",
    },
    {
      question: "What does a warning sign with two-way arrows indicate?",
      options: ["One-way only", "Two-way traffic ahead", "No overtaking", "Turn left only"],
      answer: 1,
      image: "/roadSign/warning/twoWay.jpeg",
    },
    {
      question: "What does a roundabout warning sign indicate?",
      options: ["Stop checkpoint", "Roundabout ahead", "No U-turn", "Parking zone"],
      answer: 1,
      image: "/roadSign/warning/roundAbout.jpeg",
    },
    {
      question: "What does a slippery road warning sign require?",
      options: ["Hard braking only", "Higher speed", "Reduce speed and drive smoothly", "Switch off headlights"],
      answer: 2,
      image: "/roadSign/warning/haZard.jpeg",
    },
  ],
  "road-laws": [
    {
      question: "When approaching a junction, what is the safest first step?",
      options: ["Honk continuously", "Check mirrors and reduce speed", "Accelerate through", "Use hazard lights only"],
      answer: 1,
      image: "/traffic/traffic.jpg",
    },
    {
      question: "On Kenyan roads, which side should vehicles normally keep?",
      options: ["Left side", "Right side", "Center lane", "Shoulder lane"],
      answer: 0,
      image: "/traffic/traffic.jpg",
    },
    {
      question: "What is the best action at a yellow traffic light when safe to stop?",
      options: ["Speed up", "Stop smoothly", "Reverse", "Turn off the engine"],
      answer: 1,
      image: "/roadSign/warning/traFfic.jpeg",
    },
    {
      question: "Seat belts should be worn by:",
      options: ["Driver only", "Front passengers only", "All occupants where fitted", "Children only"],
      answer: 2,
      image: "/indicators/seatBelt.jpeg",
    },
    {
      question: "Before overtaking, a driver should:",
      options: ["Use only the horn", "Check mirrors, blind spot, and road ahead", "Overtake on bends", "Avoid signaling"],
      answer: 1,
      image: "/traffic/traffic.jpg",
    },
    {
      question: "If an emergency vehicle approaches with siren, you should:",
      options: ["Block the lane", "Give way safely", "Race it", "Stop in the middle of junction"],
      answer: 1,
      image: "/traffic/traffic.jpg",
    },
    {
      question: "What is the safest following distance rule?",
      options: ["One-second gap", "Two-second gap minimum in dry conditions", "No gap needed in town", "Tailgate at low speed"],
      answer: 1,
      image: "/traffic/traffic.jpg",
    },
    {
      question: "At a zebra crossing with waiting pedestrians, drivers must:",
      options: ["Wave and continue", "Stop and let them cross", "Flash headlights and pass", "Honk to warn them"],
      answer: 1,
      image: "/roadSign/warning/pedCrossing.jpeg",
    },
    {
      question: "Using a phone while driving without proper hands-free use is:",
      options: ["Always allowed", "Allowed at traffic lights", "Unsafe and unlawful", "Allowed on highways only"],
      answer: 2,
      image: "/traffic/traffic.jpg",
    },
    {
      question: "In rain, your braking distance will generally:",
      options: ["Decrease", "Stay the same", "Increase", "Become zero"],
      answer: 2,
      image: "/roadSign/warning/haZard.jpeg",
    },
    {
      question: "What should you do before changing lanes?",
      options: ["Steer first", "Mirror-signal-blind spot check", "Brake sharply", "Use hazard lights"],
      answer: 1,
      image: "/traffic/traffic.jpg",
    },
    {
      question: "At a stop sign, legal compliance means:",
      options: ["Rolling stop allowed", "Full stop, then proceed when safe", "Yield only", "Stop only at night"],
      answer: 1,
      image: "/roadSign/regulatory/priority/stopSign.jpeg",
    },
  ],
  "vehicle-parts": [
    {
      question: "What does the ABS indicator relate to?",
      options: ["Air conditioning", "Anti-lock braking system", "Automatic wipers", "Battery fan"],
      answer: 1,
      image: "/indicators/antiLock.png",
    },
    {
      question: "What does a battery warning light indicate?",
      options: ["Low tire pressure", "Charging system issue", "Open door", "Seat belt unfastened"],
      answer: 1,
      image: "/indicators/disCharge.jpeg",
    },
    {
      question: "What does the engine warning light usually mean?",
      options: ["Fuel cap open", "Engine/management fault detected", "Headlights on", "Parking brake on"],
      answer: 1,
      image: "/indicators/malFunction.png",
    },
    {
      question: "What is the purpose of the brake warning indicator?",
      options: ["Shows cruise control", "Signals possible brake system issue", "Indicates full tank", "Shows fog lights"],
      answer: 1,
      image: "/indicators/brakeWarning.jpg",
    },
    {
      question: "What does a low fuel icon tell you?",
      options: ["Fuel is full", "Refuel soon", "Engine overheating", "Door open"],
      answer: 1,
      image: "/indicators/lowFuel.jpeg",
    },
    {
      question: "What does the seatbelt warning remind you to do?",
      options: ["Adjust mirrors", "Fasten seatbelt", "Turn off headlights", "Check oil pressure"],
      answer: 1,
      image: "/indicators/seatBelt.jpeg",
    },
    {
      question: "What does a tire pressure warning light indicate?",
      options: ["High engine temperature", "Low tire pressure", "Battery charging", "Brake fluid full"],
      answer: 1,
      image: "/indicators/tpms.jpeg",
    },
    {
      question: "What does a high-beam indicator show?",
      options: ["Fog lights active", "High-beam headlights are on", "Left signal active", "Low fuel"],
      answer: 1,
      image: "/indicators/highBeam.jpg",
    },
    {
      question: "What does the turn signal icon represent?",
      options: ["Wiper speed", "Indicator lamp active", "Gear position", "ABS failure"],
      answer: 1,
      image: "/indicators/turnSignal.png",
    },
    {
      question: "What does an overheating coolant symbol indicate?",
      options: ["Engine too hot", "Fuel full", "Door unlocked", "Cruise control active"],
      answer: 0,
      image: "/indicators/coolTemp.jpeg",
    },
    {
      question: "What does the airbag warning light suggest?",
      options: ["Airbag system fault", "Need to inflate tires", "AC issue", "Fuel system OK"],
      answer: 0,
      image: "/indicators/airBag.jpeg",
    },
    {
      question: "What does an open door indicator mean?",
      options: ["Engine is off", "One of the doors is not fully closed", "Seatbelt is fastened", "Low oil pressure"],
      answer: 1,
      image: "/indicators/openDoor.png",
    },
  ],
  "model-town": [
    {
      question: "At model town entry, what should you do first?",
      options: ["Accelerate immediately", "Mirror and control check", "Use horn continuously", "Ignore lane markings"],
      answer: 1,
      image: "/modelTown/model1.jpeg",
    },
    {
      question: "When approaching a give-way line, you should:",
      options: ["Maintain speed", "Yield to traffic with priority", "Stop only if honked at", "Overtake at junction"],
      answer: 1,
      image: "/roadSign/regulatory/priority/giveWay.jpeg",
    },
    {
      question: "What is key during model town lane changes?",
      options: ["No mirror checks", "Mirror-signal-manoeuvre routine", "Only accelerate", "Turn without signaling"],
      answer: 1,
      image: "/modelTown/model2.png",
    },
    {
      question: "Before flush parking, the best setup is:",
      options: ["Fast steering entry", "Slow approach with reference checks", "Use hazard lights and reverse fast", "Park diagonally"],
      answer: 1,
      image: "/roadSign/informatory/Parking.png",
    },
    {
      question: "When leaving a parking bay, you must:",
      options: ["Move off quickly", "Observe all around and signal", "Ignore pedestrians", "Reverse without checking mirrors"],
      answer: 1,
      image: "/modelTown/model1.jpeg",
    },
    {
      question: "At pedestrian crossing zones in model town, drivers should:",
      options: ["Increase speed", "Prepare to slow and stop", "Use horn only", "Overtake waiting vehicles"],
      answer: 1,
      image: "/roadSign/warning/pedCrossing.jpeg",
    },
    {
      question: "At stop signs in model town tests, examiners expect:",
      options: ["Rolling stop", "Complete stop and safe observation", "Fast left turn", "No mirror check"],
      answer: 1,
      image: "/roadSign/regulatory/priority/stopSign.jpeg",
    },
    {
      question: "What is the safest behavior near junctions?",
      options: ["Late signaling", "Early planning and lane discipline", "Brake at last second", "Ignore priority"],
      answer: 1,
      image: "/modelTown/model2.png",
    },
    {
      question: "In model town assessments, smooth control means:",
      options: ["Harsh braking", "Progressive steering and braking", "Frequent horn use", "Rapid acceleration"],
      answer: 1,
      image: "/modelTown/model1.jpeg",
    },
    {
      question: "For angle parking, successful completion requires:",
      options: ["Wheel over line", "Correct angle and full bay alignment", "Rear overhang into lane", "No mirror checks"],
      answer: 1,
      image: "/roadSign/informatory/Parking.png",
    },
    {
      question: "During model town roundabout approach, you should:",
      options: ["Rush entry", "Reduce speed and observe priority", "Overtake inside lane", "Stop in center island"],
      answer: 1,
      image: "/roadSign/warning/roundAbout.jpeg",
    },
    {
      question: "What helps avoid examiner faults in model town?",
      options: ["Consistent observation and signaling", "Fast completion only", "Ignoring markings", "Frequent lane cutting"],
      answer: 0,
      image: "/modelTown/model2.png",
    },
  ],
};

const QUESTIONS_PER_REVIEW = 5;

function parseSlug(slug) {
  const match = slug.match(/^(.*)-(\d+)$/);
  if (!match) {
    return { category: slug, quizNumber: 1 };
  }

  return {
    category: match[1],
    quizNumber: Number(match[2]) || 1,
  };
}

function pickQuestions(bank, quizNumber) {
  if (!Array.isArray(bank) || bank.length === 0) return [];

  const start = ((quizNumber - 1) * QUESTIONS_PER_REVIEW) % bank.length;
  const selected = [];

  for (let index = 0; index < QUESTIONS_PER_REVIEW; index += 1) {
    selected.push(bank[(start + index) % bank.length]);
  }

  return selected;
}

function sanitizeQuestion(question, fallbackImage) {
  const options = Array.isArray(question?.options)
    ? question.options
        .map((option) => (typeof option === "string" ? option.trim() : ""))
        .filter(Boolean)
    : [];

  while (options.length < 4) {
    options.push(`Option ${String.fromCharCode(65 + options.length)}`);
  }

  return {
    question:
      typeof question?.question === "string" && question.question.trim()
        ? question.question.trim()
        : "Review question",
    options: options.slice(0, 4),
    answer:
      Number.isInteger(question?.answer) && question.answer >= 0 && question.answer < 4
        ? question.answer
        : 0,
    image:
      typeof question?.image === "string" && question.image.trim()
        ? question.image
        : fallbackImage,
  };
}

export function getCuratedReviewQuiz(slug) {
  const { category, quizNumber } = parseSlug(slug);
  const bank = REVIEW_BANK[category];
  if (!bank) return null;

  const fallbackImage = CATEGORY_IMAGES[category] || "/quiz/mainSign.jpg";

  return {
    title: `${CATEGORY_TITLES[category]} Quiz ${quizNumber}`,
    questions: pickQuestions(bank, quizNumber).map((question) =>
      sanitizeQuestion(question, fallbackImage),
    ),
  };
}

export function getCategoryFallbackImage(slug) {
  const { category } = parseSlug(slug);
  return CATEGORY_IMAGES[category] || "/quiz/mainSign.jpg";
}
