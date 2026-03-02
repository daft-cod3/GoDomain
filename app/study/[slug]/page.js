'use client';

import Link from 'next/link';
import { useLanguage } from '@/app/components/LanguageContext';
import { useParams } from 'next/navigation';
const syllabusContent = {
  "introduction-to-driving": {
    title: "1. Introduction to Driving",
    content: [
      { type: 'p', text: 'The Act and talent of moving and controlling a Motor vehicle,but driving is not only about controlling a vehicle — it is about participating in a shared system of movement where safety, discipline, and awareness are critical. Roads in Kenya are diverse: from congested Nairobi highways to rural dirt roads, and each environment demands different skills. Driving education prepares learners to navigate these realities while respecting laws, protecting lives, and adapting to local challenges.' },
      { type: 'h3', text: '🎯 Purpose of Driving Education' },
      { type: 'ul', items: [
          'Reduce accidents and fatalities: Kenya records thousands of road deaths annually, often linked to speeding, drunk driving, and reckless matatu or boda boda behavior. Education aims to change this trend.',
          'Legal compliance: Learners must understand NTSA regulations, traffic laws, and the consequences of violations (fines, license suspension, imprisonment).',
          'Skill development: Training covers urban driving (traffic jams, roundabouts), rural driving (unpaved roads, livestock crossings), and hazard perception (poor signage, pedestrians crossing unexpectedly).',
          'Responsibility and respect: Drivers must learn to coexist with pedestrians, cyclists, matatus, boda bodas, and long‑distance trucks — all of which dominate Kenyan roads.',
          'Cultural shift: In Kenya, casual attitudes toward rules are common. Driving education must instill a culture of discipline similar to that in first‑world countries.',
        ]
      },
      { type: 'h3', text: '👤 Responsibilities of a Driver' },
      { type: 'ul', items: [
          'Obey traffic laws: Speed limits, traffic lights, and signage must be respected. In Kenya, ignoring red lights or overlapping lanes is common, but dangerous.',
          'Ensure vehicle roadworthiness: NTSA inspections exist, but drivers must personally check brakes, lights, tires, and mirrors. Poorly maintained vehicles are a major cause of accidents.',
          'Respect other road users: Yield when required, avoid aggressive driving, and protect vulnerable groups. In Kenya, this includes giving space to boda bodas and pedestrians who often cross outside designated areas.',
          'Prioritize safety: Always wear seatbelts, avoid distractions like mobile phones, and never drive under the influence. Alcohol‑related crashes remain a serious issue in Kenya.',
          'Adapt to local realities: Kenyan drivers must anticipate matatus stopping abruptly, boda bodas weaving through traffic, and livestock appearing on rural roads.',
        ]
      },
      { type: 'h3', text: '📜 Legal Requirements in Kenya' },
      { type: 'ul', items: [
          'Valid driver’s license: Issued by NTSA, specific to vehicle class (motorcycle, private car, truck, PSV).',
          'Vehicle registration and insurance: Mandatory for all vehicles. Insurance protects both drivers and accident victims.',
          'Compliance with NTSA standards: Roadworthiness inspections, emissions checks, and adherence to safety regulations.',
          'Penalties for violations: Driving without a license or insurance can result in fines, imprisonment, or vehicle impoundment. In practice, enforcement is inconsistent, and corruption sometimes undermines accountability.',
        ]
      },
      { type: 'h3', text: '📝 Learner Licensing Process (Kenya)' },
      { type: 'ul', items: [
          'Medical examination & eye test: Confirms fitness to drive. Poor eyesight is a common but overlooked cause of accidents.',
          'Theory test: Covers road signs, traffic rules, and safety principles. Learners must understand both urban and rural driving challenges.',
          'Practical assessment: Driving test in controlled and real environments, including handling roundabouts, overtaking, and parking.',
          'Provisional license: Allows supervised driving until full licensing. In Kenya, corruption sometimes undermines this process, but NTSA reforms aim to digitize and strengthen transparency.',
          'Costs and timelines: Learners must pay fees for tests and licensing. Delays are common due to high demand and limited testing centers.',
        ]
      },
      { type: 'h3', text: '🌍 Comparison: Kenya vs. First‑World Countries' },
      { type: 'h4', text: 'Kenya' },
      { type: 'ul', items: [
          'Licensing overseen by NTSA, with ongoing digitization reforms.',
          'Testing involves basic theory and practical exams, often limited in scope.',
          'Technology use is minimal — few simulators, limited e‑learning, and manual record‑keeping.',
          'Enforcement faces challenges: corruption, weak penalties, and inconsistent monitoring.',
          'Road safety culture is still developing, with high accident rates and casual attitudes toward compliance.',
          'Infrastructure issues: poorly marked roads, potholes, limited signage, and inadequate pedestrian facilities.',
        ]
      },
      { type: 'h4', text: 'First‑World Countries (e.g., UK, Germany, USA)' },
      { type: 'ul', items: [
          'Licensing overseen by independent, digitized agencies with strict oversight.',
          'Testing is multi‑stage: hazard perception exams, simulator training, advanced road tests, and mandatory supervised hours.',
          'Widespread use of technology: simulators, online learning platforms, telematics, and automated enforcement systems.',
          'Strong enforcement: automated fines, strict penalties, and zero tolerance for violations.',
          'Road safety culture is well established, with disciplined compliance and lower accident rates.',
          'Infrastructure is advanced: well‑marked highways, reliable signage, pedestrian bridges, and consistent maintenance.',
        ]
      },
      { type: 'h3', text: '🛠️ The Cockpit Drill (DSSSM)' },
      { type: 'p', text: 'Before starting the car, ensure safety and comfort using the DSSSM routine:' },
      { type: 'ul', items: [
          'Doors: Ensure all doors are securely closed.',
          'Seat: Adjust for reach (pedals) and rake (steering) to ensure control and comfort.',
          'Steering: Adjust height and reach; wrists should rest on top of the wheel with arms slightly bent.',
          'Seatbelt: Fasten securely, ensuring it is not twisted. Check passengers too.',
          'Mirrors: Adjust rear‑view and side mirrors to minimize blind spots.',
        ]
      },
      { type: 'h3', text: '🚗 Steering Wheel Mastery' },
      { type: 'p', text: 'Proper steering wheel handling is critical for vehicle control and safety. It minimizes fatigue and ensures you can react quickly to hazards.' },
      { type: 'h4', text: 'Hand Positioning' },
      { type: 'ul', items: [
          '9 and 3 o\'clock: The recommended standard. Keeps hands clear of the airbag and allows for a wide range of movement without repositioning.',
          '10 and 2 o\'clock: Formerly taught, but now less favored due to airbag deployment risks.',
          'Avoid "12 o\'clock": Resting a hand at the top reduces leverage and is dangerous in a crash.',
        ]
      },
      { type: 'h4', text: 'Steering Techniques' },
      { type: 'ul', items: [
          'Push-Pull (Feed the Wheel): One hand pushes up, the other pulls down. Keeps both hands on the wheel and is smoother.',
          'Hand-over-Hand: Useful for tight maneuvers like parking or U-turns. Involves crossing hands to turn the wheel rapidly.',
        ]
      },
      { type: 'image-row', images: [
          { src: '/images/steering-9-3.jpg', alt: '9 and 3 Hand Position', caption: 'Correct: 9 and 3 Position' },
          { src: '/images/steering-push-pull.jpg', alt: 'Push Pull Steering', caption: 'Push-Pull Technique' },
          { src: '/images/steering-hand-over.jpg', alt: 'Hand Over Hand Steering', caption: 'Hand-Over-Hand Turn' }
        ] 
      },
      { type: 'h3', text: '🦶 Foot Controls (ABC)' },
      { type: 'ul', items: [
          'Accelerator (A): Right pedal. Controls engine speed (RPM) to move the car.',
          'Brake (B): Middle pedal. Slows or stops the vehicle and activates brake lights.',
          'Clutch (C): Left pedal (manual only). Disconnects engine from wheels for gear changes.',
        ]
      },
    ]
  },
  "fundamental-rules-of-the-road": {
    title: "2. Fundamental Rules of the Road",
    content: [
      { type: 'h3', text: 'Speed Limits' },
      { type: 'p', text: 'Speed limits vary by road type and conditions. Always adjust speed according to weather, traffic, and road conditions.' },
      { type: 'h3', text: 'Right of Way' },
      { type: 'ul', items: [
          'Give way to emergency vehicles.',
          'Yield at uncontrolled intersections.',
          'Respect pedestrian crossings.',
        ]
      },
      { type: 'h3', text: 'Overtaking Rules' },
      { type: 'ul', items: [
          'Only overtake when safe and legal.',
          'Use appropriate signals.',
          'Maintain safe distance.',
        ]
      },
      { type: 'h3', text: 'Lane Discipline' },
      { type: 'ul', items: [
          'Stay in designated lanes.',
          'Use turn signals for lane changes.',
          'Avoid weaving through traffic.',
        ]
      },
    ]
  },
  "road-signs-and-signals": {
    title: "3. Road Signs and Signals",
    content: [
      { type: 'h3', text: 'Regulatory Signs' },
      { type: 'p', text: 'These signs inform drivers of laws and regulations that must be obeyed.' },
      { type: 'ul', items: [
          'Stop signs and give way signs.',
          'Speed limit signs.',
          'No entry and one-way signs.',
        ]
      },
      { type: 'h3', text: 'Warning Signs' },
      { type: 'p', text: 'These signs alert drivers to potential hazards ahead.' },
      { type: 'ul', items: [
          'Curve ahead warnings.',
          'Pedestrian crossing alerts.',
          'Road work notifications.',
        ]
      },
      { type: 'h3', text: 'Traffic Lights' },
      { type: 'p', text: 'Traffic lights, or "robots" as they are commonly called in Kenya, are crucial for managing traffic flow and ensuring safety at intersections. They follow a universal color sequence, and understanding them is non-negotiable for any driver.' },
      { type: 'image', src: '/roadSign/warNing.jpg', alt: 'Traffic Light Sequence', caption: 'Standard vertical traffic light.' },
      { type: 'h4', text: 'The Main Sequence' },
      { type: 'ul', items: [
        'RED: Stop. This is an absolute command. Stop before the white line on the road. Do not proceed until the light turns green.',
        'AMBER (Yellow): Prepare to Stop. The signal is about to change to red. You must stop unless you are too close to the intersection to do so safely. Never accelerate to "beat the amber light."',
        'GREEN: Proceed. You may go if the way is clear. Always check for pedestrians or vehicles still clearing the intersection.'
      ]},
      { type: 'h3', text: 'Special Signals & Arrows' },
      { type: 'p', text: 'Beyond the main sequence, you will encounter other important signals.'},
      { type: 'h4', text: 'Green Arrow' },
      { type: 'ul', items: [
          'Meaning: Protected Turn. You may proceed carefully in the direction of the arrow, even if the main light is red.',
          'Action: Oncoming traffic is stopped, giving you a safe, "protected" window to turn. Always watch for pedestrians.'
      ]},
      { type: 'h4', text: 'Flashing Amber Light' },
      { type: 'ul', items: [
          'Meaning: Caution. Often used at night or during off-peak hours.',
          'Action: Proceed with care. You are not required to stop, but you must be vigilant and yield to pedestrians or other hazards.'
      ]},
      { type: 'h4', text: 'Flashing Red Light' },
      { type: 'ul', items: [
          'Meaning: Stop and Proceed When Safe. This signal has the same legal standing as a Stop Sign.',
          'Action: Bring your vehicle to a complete stop. Look for any conflicting traffic or pedestrians. Proceed only when the way is clear.'
      ]},
    ]
  },
  "model-town-board-knowledge": {
    title: "4. Model Town Board (MTB) Knowledge",
    content: [
      { type: 'h3', text: 'Lane Usage' },
      { type: 'ul', items: [
          'Stay in correct lanes for intended direction.',
          'Use turning lanes appropriately.',
          'Avoid lane hopping.',
        ]
      },
      { type: 'h3', text: 'Roundabouts' },
      { type: 'ul', items: [
          'Yield to traffic already in the roundabout.',
          'Signal intentions clearly.',
          'Maintain appropriate speed.',
        ]
      },
      { type: 'h3', text: 'Parking Rules' },
      { type: 'ul', items: [
          'Park parallel to the curb.',
          'Leave adequate space for other vehicles.',
          'Obey parking restrictions.',
        ]
      },
    ]
  },
  "vehicle-basics": {
    title: "5. Vehicle Basics",
    content: [
      { type: 'h3', text: 'Vehicle Controls' },
      { type: 'ul', items: [
          'Steering wheel and pedals.',
          'Gear selector and handbrake.',
          'Lights and indicators.',
        ]
      },
      { type: 'h3', text: 'Dashboard Symbols' },
      { type: 'ul', items: [
          'Engine warning lights.',
          'Fuel and temperature gauges.',
          'Safety system indicators.',
        ]
      },
      { type: 'h3', text: 'Routine Safety Checks' },
      { type: 'ul', items: [
          'Tires, brakes, and lights.',
          'Fluid levels and belts.',
          'Emergency equipment.',
        ]
      },
    ]
  },
  "human-factors-road-safety": {
    title: "6. Human Factors & Road Safety",
    content: [
      { type: 'h3', text: 'Defensive Driving' },
      { type: 'ul', items: [
          'Anticipate other drivers\' actions.',
          'Maintain safe following distances.',
          'Scan for potential hazards.',
        ]
      },
      { type: 'h3', text: 'Urban & Rural Driving' },
      { type: 'ul', items: [
          'Adjust speed and awareness according to the environment.',
          'Watch for pedestrians, livestock and cyclists in rural areas.',
          'Be prepared for poor road surfaces and limited visibility.',
          'Use headlights appropriately when visibility is reduced.',
          'Recognize that traffic patterns change between settings.',
        ]
      },
      { type: 'h3', text: 'Traffic Awareness' },
      { type: 'ul', items: [
          'Understand peak hours and congestion zones.',
          'Practice lane discipline and keep intersections clear.',
          'Yield to emergency vehicles and follow traffic signals.',
          'Avoid aggressive maneuvers that disrupt flow.',
          'Be courteous to other road users to reduce incidents.',
        ]
      },
      { type: 'h3', text: 'Fatigue and Distraction' },
      { type: 'ul', items: [
          'Recognize signs of fatigue.',
          'Avoid mobile phone use.',
          'Take regular breaks.',
        ]
      },
      { type: 'h3', text: 'Alcohol and Drugs' },
      { type: 'ul', items: [
          'Zero tolerance for drinking and driving.',
          'Effects on reaction time and judgment.',
          'Legal consequences.',
        ]
      },
    ]
  },

  "traffic-laws-regulations": {
    title: "7. Traffic Laws & Regulations",
    content: [
      { type: 'h3', text: 'Highway Code Principles' },
      { type: 'ul', items: [
          'Courtesy and consideration for others.',
          'Priority to vulnerable road users.',
          'Environmental responsibility.',
        ]
      },
      { type: 'h3', text: 'Offenses and Penalties' },
      { type: 'ul', items: [
          'Speeding fines and license suspension.',
          'Driving under influence penalties.',
          'Points system for serious offenses.',
        ]
      },
      { type: 'h3', text: 'Insurance Requirements' },
      { type: 'ul', items: [
          'Third party liability coverage.',
          'Comprehensive insurance options.',
          'Penalties for uninsured driving.',
        ]
      },
    ]
  },
  "first-aid-emergencies": {
    title: "8. First Aid & Emergencies",
    content: [
      { type: 'h3', text: 'Basic First Aid' },
      { type: 'ul', items: [
          'Assess the situation safely.',
          'Check for responsiveness.',
          'Call emergency services.',
        ]
      },
      { type: 'h3', text: 'Accident Response' },
      { type: 'ul', items: [
          'Ensure scene safety.',
          'Provide immediate care.',
          'Report the incident.',
        ]
      },
      { type: 'h3', text: 'First Aid Kit in Vehicles' },
      { type: 'ul', items: [
          'Keep a well‑stocked kit in every car.',
          'Include bandages, antiseptic, gloves, scissors, torch, and a blanket.',
          'Check expiration dates regularly and restock as needed.',
          'Store the kit in an easily accessible location.',
          'Know basic instructions for using each item.',
        ]
      },
      { type: 'h3', text: 'Roadside Safety' },
      { type: 'ul', items: [
          'Use warning triangles.',
          'Wear high-visibility clothing.',
          'Stay away from traffic.',
        ]
      },
    ]
  },
  "practical-driving-knowledge": {
    title: "9. Practical Driving Knowledge (Simulation-Relevant)",
    content: [
      { type: 'h3', text: 'Parking Techniques' },
      { type: 'ul', items: [
          'Parallel parking.',
          'Bay parking.',
          'Angle parking.',
        ]
      },
      { type: 'h3', text: 'Reversing' },
      { type: 'ul', items: [
          'Use mirrors effectively.',
          'Go slow and check surroundings.',
          'Practice in safe areas.',
        ]
      },
      { type: 'h3', text: 'Junction Negotiation' },
      { type: 'ul', items: [
          'Check all directions.',
          'Use appropriate speed.',
          'Signal intentions.',
        ]
      },
    ]
  },
  "gear-a1-a2-a3-topic-1": {
    title: "Gear Control: A1 A2 A3 - Topic 1",
    content: [
      { type: 'h3', text: 'Overview' },
      { type: 'p', text: 'Learn about gear control and shifting techniques for optimal vehicle performance. Understanding proper gear usage is essential for safe and efficient driving.' },
      { type: 'image-row', images: [
          { src: '/images/gear-1.jpg', alt: 'Gear Position 1', caption: 'First Gear - Starting' },
          { src: '/images/gear-2.jpg', alt: 'Gear Position 2', caption: 'Second Gear - Acceleration' },
          { src: '/images/gear-3.jpg', alt: 'Gear Position 3', caption: 'Third Gear - Cruising' },
          { src: '/images/gear-4.jpg', alt: 'Gear Position 4', caption: 'Fourth Gear - Highway' }
        ] 
      },
      { type: 'h3', text: 'Key Points' },
      { type: 'ul', items: [
          'Understand when to shift gears for optimal performance',
          'Learn smooth gear transition techniques',
          'Master clutch control and coordination',
          'Practice proper gear selection for different road conditions'
        ]
      },
      { type: 'h3', text: 'Practice Tips' },
      { type: 'p', text: 'Practice gear shifting in a safe environment before attempting on busy roads. Focus on smooth transitions and listening to engine sounds to determine optimal shift points.' }
    ]
  },
  "gear-a1-a2-a3-topic-2": {
    title: "Gear Control: A1 A2 A3 - Topic 2",
    content: [
      { type: 'h3', text: 'Advanced Gear Techniques' },
      { type: 'p', text: 'Master advanced gear control techniques for various driving scenarios.' },
      { type: 'image-row', images: [
          { src: '/images/hill-start.jpg', alt: 'Hill Start', caption: 'Hill Start Technique' },
          { src: '/images/downshift.jpg', alt: 'Downshifting', caption: 'Engine Braking' },
          { src: '/images/rev-match.jpg', alt: 'Rev Matching', caption: 'Rev Matching' },
          { src: '/images/smooth-shift.jpg', alt: 'Smooth Shifting', caption: 'Smooth Transitions' }
        ] 
      },
      { type: 'ul', items: [
          'Hill start techniques',
          'Downshifting for engine braking',
          'Rev matching for smooth shifts'
        ]
      }
    ]
  },
  "gear-a1-a2-a3-topic-3": {
    title: "Gear Control: A1 A2 A3 - Topic 3",
    content: [
      { type: 'h3', text: 'Gear Selection Strategy' },
      { type: 'p', text: 'Learn to select the right gear for different driving conditions.' },
      { type: 'image-row', images: [
          { src: '/images/city-driving.jpg', alt: 'City Driving', caption: 'City Gear Patterns' },
          { src: '/images/highway-cruise.jpg', alt: 'Highway Cruising', caption: 'Highway Techniques' },
          { src: '/images/fuel-efficient.jpg', alt: 'Fuel Efficiency', caption: 'Fuel-Efficient Usage' },
          { src: '/images/traffic-gear.jpg', alt: 'Traffic Conditions', caption: 'Traffic Gear Selection' }
        ] 
      },
      { type: 'ul', items: [
          'City driving gear patterns',
          'Highway cruising techniques',
          'Fuel-efficient gear usage'
        ]
      }
    ]
  },
  "gear-a1-a2-a3-topic-4": {
    title: "Gear Control: A1 A2 A3 - Topic 4",
    content: [
      { type: 'h3', text: 'Common Gear Mistakes' },
      { type: 'p', text: 'Avoid these common gear-related errors.' },
      { type: 'image-row', images: [
          { src: '/images/clutch-riding.jpg', alt: 'Riding Clutch', caption: 'Avoid Riding Clutch' },
          { src: '/images/grinding-gears.jpg', alt: 'Grinding Gears', caption: 'Prevent Gear Grinding' },
          { src: '/images/wrong-gear.jpg', alt: 'Wrong Gear', caption: 'Correct Gear Selection' },
          { src: '/images/gear-damage.jpg', alt: 'Gear Damage', caption: 'Prevent Transmission Damage' }
        ] 
      },
      { type: 'ul', items: [
          'Riding the clutch',
          'Grinding gears',
          'Staying in wrong gear too long'
        ]
      }
    ]
  },
  "gear-a1-a2-a3-topic-5": {
    title: "Gear Control: A1 A2 A3 - Topic 5",
    content: [
      { type: 'h3', text: 'Gear Maintenance' },
      { type: 'p', text: 'Keep your transmission in top condition.' },
      { type: 'image-row', images: [
          { src: '/images/transmission-fluid.jpg', alt: 'Transmission Fluid', caption: 'Fluid Check' },
          { src: '/images/clutch-adjust.jpg', alt: 'Clutch Adjustment', caption: 'Clutch Adjustment' },
          { src: '/images/gear-problems.jpg', alt: 'Gear Problems', caption: 'Problem Signs' },
          { src: '/images/maintenance.jpg', alt: 'Regular Maintenance', caption: 'Regular Maintenance' }
        ] 
      },
      { type: 'ul', items: [
          'Regular transmission fluid checks',
          'Clutch adjustment',
          'Signs of gear problems'
        ]
      }
    ]
  }
};
function renderContent(contentItem, index) {
  switch (contentItem.type) {
    case 'h3':
      return <h3 key={index} className="text-2xl font-semibold mt-6 mb-3 text-green-400">{contentItem.text}</h3>;
    case 'h4':
      return <h4 key={index} className="text-xl font-semibold mt-4 mb-2 text-green-300">{contentItem.text}</h4>;
    case 'p':
      return <p key={index} className="text-gray-300 leading-relaxed">{contentItem.text}</p>;
    case 'ul':
      return (
        <ul key={index} className="list-disc list-inside text-gray-300 space-y-2 pl-4">
          {contentItem.items.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
      );
    case 'image':
      return (
        <div key={index} className="my-8">
          <div className="rounded-xl overflow-hidden border border-gray-700 shadow-lg bg-gray-800">
            <img src={contentItem.src} alt={contentItem.alt || 'Illustration'} className="w-full h-auto object-cover" />
          </div>
          {contentItem.caption && <p className="text-center text-gray-400 text-sm mt-2 italic">{contentItem.caption}</p>}
        </div>
      );
    case 'image-row':
      return (
        <div key={index} className="my-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {contentItem.images.map((img, i) => (
            <div key={i} className="flex flex-col group">
              <div className="rounded-xl overflow-hidden border border-gray-700 shadow-lg bg-gray-800 h-48 relative">
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
              </div>
              {img.caption && <p className="text-center text-gray-400 text-sm mt-2 italic">{img.caption}</p>}
            </div>
          ))}
        </div>
      );
    case 'video':
      return (
        <div key={index} className="my-8">
           <div className="rounded-xl overflow-hidden border border-gray-700 shadow-lg bg-black aspect-video relative">
             <video controls className="w-full h-full">
               <source src={contentItem.src} type="video/mp4" />
               Your browser does not support the video tag.
             </video>
           </div>
           {contentItem.caption && <p className="text-center text-gray-400 text-sm mt-2 italic">{contentItem.caption}</p>}
        </div>
      );
    default:
      return null;
  }
}
export default function SyllabusPage() {
  const params = useParams();
  const { slug } = params;
  const { t } = useLanguage();
  const topic = syllabusContent[slug];
  if (!topic) {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-red-500 mb-4">Topic not found.</h1>
        <Link href="/study" className="bg-green-600 hover:bg-green-500 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/20">
          {t('backToStudyGuide','Back to Study Guide')}
        </Link>
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-black text-white p-4 sm:p-8 flex justify-center">
      <div className="bg-gray-900/90 backdrop-blur-md p-6 sm:p-8 rounded-2xl shadow-2xl shadow-black/50 max-w-4xl w-full border border-gray-800/50 transform transition-all hover:shadow-blue-900/5">
        <h1 className="text-4xl font-bold text-center mb-4 text-green-500 drop-shadow-sm">{topic.title}</h1>
        <hr className="border-gray-700 mb-6"/>
        <article>
          {topic.content.map(renderContent)}
        </article>
        <div className="mt-10 text-center">
          <Link href="/study" className="bg-green-600 hover:bg-green-500 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/20 active:scale-95">
            {t('backToStudyGuide','Back to Study Guide')}
          </Link>
        </div>
      </div>
    </div>
  );
}