export const roadSignContent = {
  'stop-sign': {
    title: 'Stop Sign',
    description: 'A red octagonal sign that requires vehicles to come to a complete stop.',
    icon: 'ðŸ›‘',
    image: '/roadSign/regulatory/priority/stopSign.jpeg',
    category: 'Regulatory Signs',
    content: [
      { type: 'h3', text: 'Function' },
      { type: 'p', text: 'To control traffic flow and prevent collisions at intersections.' },
      { type: 'h3', text: 'Location' },
      { type: 'p', text: 'Typically placed at intersections where cross-traffic is not required to stop, or where a clear view of conflicting traffic is limited.' },
      { type: 'h3', text: 'Rules to follow' },
      { type: 'ul', items: [
        'Come to a complete stop before the white stop line.',
        'If there is no stop line, stop before the crosswalk.',
        'If there is no crosswalk, stop at the point nearest the intersecting roadway where you have a view of approaching traffic.',
        'Yield the right-of-way to pedestrians and other vehicles that have already entered the intersection.',
        'Proceed only when it is safe to do so.'
      ]},
      { type: 'h3', text: 'Penalties' },
      { type: 'p', text: 'Failure to come to a complete stop at a stop sign is a traffic violation and can result in a fine and demerit points on your driving license. In Kenya, this can be up to KSh 3,000.' }
    ]
  },
  'give-way': {
    title: 'Give Way Sign',
    description: 'A triangular sign that requires you to yield to oncoming traffic.',
    icon: 'ðŸ”º',
    image: '/roadSign/regulatory/priority/giveWay.jpeg',
    category: 'Regulatory Signs',
    content: [
      { type: 'h3', text: 'Function' },
      { type: 'p', text: 'To require a driver to yield the right-of-way to all conflicting traffic at an intersection.' },
      { type: 'h3', text: 'Location' },
      { type: 'p', text: 'Typically placed at intersections where the traffic on the minor road is required to give way to the traffic on the major road, and at roundabouts.' },
      { type: 'h3', text: 'Rules to follow' },
      { type: 'ul', items: [
        'Slow down and be prepared to stop if necessary to let other traffic pass.',
        'Yield to vehicles already in the intersection or approaching on the intersecting road.',
        'Do not proceed until it is safe.',
        'Be especially careful at night or in poor visibility.'
      ]},
      { type: 'h3', text: 'Penalties' },
      { type: 'p', text: 'Failure to give way can result in a fine of up to KSh 3,000 and can lead to serious accidents.' },
      { type: 'h3', text: 'Common mistakes' },
      { type: 'p', text: 'Many drivers confuse give way with stop signs. Remember: give way means yield, not necessarily stop.' }
    ]
  },
  'no-entry': {
    title: 'No Entry Sign',
    description: 'A circular sign with a red border prohibiting entry in the wrong direction.',
    icon: 'ðŸš«',
    image: '/roadSign/regulatory/proh/noEntry.png',
    category: 'Regulatory Signs',
    content: [
      { type: 'h3', text: 'What it means' },
      { type: 'p', text: 'This sign indicates that you cannot enter the road or area in the direction you are traveling.' },
      { type: 'h3', text: 'Rules to follow' },
      { type: 'ul', items: [
        'Do not enter roads marked with this sign',
        'Often found at the end of one-way streets',
        'Also used to prevent entry into restricted areas',
        'Turning around may be necessary if you encounter this sign'
      ]},
      { type: 'h3', text: 'Safety tip' },
      { type: 'p', text: 'Always check for these signs before entering unfamiliar roads to avoid fines and accidents.' }
    ]
  },
  'speed-limit-50': {
    title: 'Speed Limit 50 km/h',
    description: 'Indicates the maximum speed allowed on that road section.',
    icon: '50',
    image: '/roadSign/regulatory/proh/maxSpeed.JPG',
    category: 'Regulatory Signs',
    content: [
      { type: 'h3', text: 'What it means' },
      { type: 'p', text: 'The number on the sign indicates the maximum speed in kilometers per hour that you may drive.' },
      { type: 'h3', text: 'Rules to follow' },
      { type: 'ul', items: [
        'Do not exceed the posted speed limit',
        'Adjust speed according to road and weather conditions',
        'Speed limits are enforced by speed cameras and police',
        'Lower speeds in school zones and residential areas'
      ]},
      { type: 'h3', text: 'Penalties' },
      { type: 'p', text: 'Speeding fines range from KSh 1,000 for minor violations to KSh 10,000 for excessive speeding.' }
    ]
  },
  'sharp-curve-left': {
    title: 'Sharp Curve Left',
    description: 'Warns of a sharp left curve ahead. Reduce speed and prepare to turn.',
    icon: 'â†°',
    image: '/roadSign/warning/sharpLeft.png',
    category: 'Warning Signs',
    content: [
      { type: 'h3', text: 'What it means' },
      { type: 'p', text: 'This triangular warning sign indicates a sharp left curve ahead. The curve is more severe than a regular bend.' },
      { type: 'h3', text: 'Rules to follow' },
      { type: 'ul', items: [
        'Reduce speed well before the curve',
        'Position your vehicle correctly for the turn',
        'Watch for oncoming traffic',
        'Use headlights if visibility is poor'
      ]},
      { type: 'h3', text: 'Safety tip' },
      { type: 'p', text: 'Sharp curves are common causes of accidents. Always slow down and proceed with caution.' }
    ]
  },
  'pedestrian-crossing': {
    title: 'Pedestrian Crossing',
    description: 'Indicates a designated area for pedestrians to cross the road.',
    icon: 'ðŸš¶',
    image: '/roadSign/warning/pedesTrian.jpeg',
    category: 'Warning Signs',
    content: [
      { type: 'h3', text: 'What it means' },
      { type: 'p', text: 'This sign warns of a pedestrian crossing ahead. You must be prepared to stop for pedestrians.' },
      { type: 'h3', text: 'Rules to follow' },
      { type: 'ul', items: [
        'Slow down and watch for pedestrians',
        'Stop if pedestrians are crossing',
        'Yield right of way to pedestrians',
        'Be extra cautious at night when pedestrians may be harder to see'
      ]},
      { type: 'h3', text: 'Legal requirement' },
      { type: 'p', text: 'Under Kenyan traffic laws, drivers must give way to pedestrians at designated crossings.' }
    ]
  },
  'hospital-ahead': {
    title: 'Hospital Ahead',
    description: 'Indicates the location of a hospital. Useful for emergencies.',
    icon: 'ðŸ¥',
    image: '/roadSign/informatory/hospital.png',
    category: 'Informatory Signs',
    content: [
      { type: 'h3', text: 'What it means' },
      { type: 'p', text: 'This rectangular sign indicates that a hospital is located nearby.' },
      { type: 'h3', text: 'Purpose' },
      { type: 'ul', items: [
        'Helps locate medical facilities quickly',
        'Useful in emergency situations',
        'May indicate direction and distance to hospital',
        'Often accompanied by directional arrows'
      ]},
      { type: 'h3', text: 'Additional information' },
      { type: 'p', text: 'Some hospital signs may include phone numbers or specific services available.' }
    ]
  },
  'petrol-station': {
    title: 'Petrol Station',
    description: 'Indicates a fuel station ahead with distance and services.',
    icon: 'â›½',
    image: '/roadSign/informatory/Refueling.jpeg',
    category: 'Informatory Signs',
    content: [
      { type: 'h3', text: 'What it means' },
      { type: 'p', text: 'This sign indicates that a petrol station is located ahead, usually showing the distance.' },
      { type: 'h3', text: 'Information provided' },
      { type: 'ul', items: [
        'Distance to the petrol station',
        'Sometimes indicates available fuel types',
        'May show additional services like car wash or shop',
        'Helps plan fuel stops during long journeys'
      ]},
      { type: 'h3', text: 'Planning tip' },
      { type: 'p', text: 'Always keep your fuel tank at least quarter full to avoid running out of fuel in remote areas.' }
    ]
  },
  'sharp-bend-right': {
    title: 'Sharp Bend Right',
    description: 'Warning of a sharp right bend ahead. Reduce speed and prepare to turn.',
    icon: 'â†±',
    image: '/roadSign/warning/sharpRight.png',
    category: 'Warning Signs',
    content: [
      { type: 'h3', text: 'What it means' },
      { type: 'p', text: 'This sign warns of a sharp bend to the right ahead. Drivers should slow down.' },
      { type: 'h3', text: 'Safety Advice' },
      { type: 'ul', items: [
        'Reduce speed before entering the bend',
        'Keep to your lane',
        'Watch for oncoming traffic cutting the corner'
      ]}
    ]
  },
  'slippery-road': {
    title: 'Slippery Road',
    description: 'Warning of slippery road conditions ahead. Reduce speed and increase following distance.',
    icon: 'ðŸ§Š',
    image: '/roadSign/warning/slippery .jpeg',
    category: 'Warning Signs',
    content: [
      { type: 'h3', text: 'What it means' },
      { type: 'p', text: 'The road surface ahead may be slippery due to weather conditions or road surface material.' },
      { type: 'h3', text: 'Driving Tips' },
      { type: 'ul', items: [
        'Slow down significantly',
        'Increase following distance',
        'Avoid sudden braking or acceleration',
        'Drive with extreme caution during rain'
      ]}
    ]
  },
  'parking-area': {
    title: 'Parking Area',
    description: 'Indicates a designated parking area. Follow parking rules and pay fees if required.',
    icon: 'ðŸ…¿ï¸',
    image: '/roadSign/informatory/Parking.png',
    category: 'Informatory Signs',
    content: [
      { type: 'h3', text: 'What it means' },
      { type: 'p', text: 'This sign marks an area designated for parking vehicles.' },
      { type: 'h3', text: 'Rules' },
      { type: 'ul', items: [
        'Park within the marked lines',
        'Check for any time restrictions or payment requirements',
        'Do not obstruct other vehicles'
      ]}
    ]
  },
  'road-closed': {
    title: 'Road Closed',
    description: 'Indicates that the road is closed to all vehicles and traffic.',
    icon: 'â›”',
    image: '/roadSign/regulatory/proh/roadClosed.jpeg',
    category: 'Regulatory Signs',
    content: [
      { type: 'h3', text: 'What it means' },
      { type: 'p', text: 'This sign indicates that the road ahead is closed to all traffic. No vehicles are allowed to proceed past this sign.' },
      { type: 'h3', text: 'Rules to follow' },
      { type: 'ul', items: [
        'Do not enter the road',
        'Find an alternative route',
        'Often used during road works or emergencies'
      ]}
    ]
  },
  'no-entry-motorcycles': {
    title: 'No Entry for Motorcycles',
    description: 'Prohibits motorcycles from entering the designated road or area.',
    icon: 'ðŸï¸',
    image: '/roadSign/regulatory/proh/noMotor.jpeg',
    category: 'Regulatory Signs',
    content: [
      { type: 'h3', text: 'What it means' },
      { type: 'p', text: 'This sign prohibits motorcycles from using the road. It is often found on highways or specific zones where motorcycles are unsafe or restricted.' },
      { type: 'h3', text: 'Rules to follow' },
      { type: 'ul', items: [
        'Motorcyclists must not enter',
        'Pushing the motorcycle is also typically prohibited if it implies using the road infrastructure'
      ]}
    ]
  },
  'no-entry-bicycles': {
    title: 'No Entry for Bicycles',
    description: 'Prohibits cyclists from entering the designated road.',
    icon: 'ðŸš²',
    image: '/roadSign/regulatory/proh/noBike.png',
    category: 'Regulatory Signs',
    content: [
      { type: 'h3', text: 'What it means' },
      { type: 'p', text: 'Cyclists are not allowed on this road. This is common on high-speed motorways where cycling is dangerous.' },
      { type: 'h3', text: 'Rules to follow' },
      { type: 'ul', items: [
        'Cyclists must find an alternative route',
        'Do not ride or push your bicycle on this road'
      ]}
    ]
  },
  'no-entry-pedestrians': {
    title: 'No Entry for Pedestrians',
    description: 'Prohibits pedestrians from walking on the road.',
    icon: 'ðŸš¶',
    image: '/roadSign/regulatory/proh/noPed.png',
    category: 'Regulatory Signs',
    content: [
      { type: 'h3', text: 'What it means' },
      { type: 'p', text: 'Pedestrians are not allowed. This is strictly enforced on motorways and highways for safety.' },
      { type: 'h3', text: 'Rules to follow' },
      { type: 'ul', items: [
        'Do not walk, jog, or run on this road',
        'Use designated footbridges or underpasses if available'
      ]}
    ]
  },
  'no-entry-animal-carts': {
    title: 'No Entry for Animal Drawn Carts',
    description: 'Prohibits carts drawn by animals (donkeys, oxen, etc.).',
    icon: 'ðŸŽ',
    image: '/roadSign/regulatory/proh/noaniCarts.png',
    category: 'Regulatory Signs',
    content: [
      { type: 'h3', text: 'What it means' },
      { type: 'p', text: 'Animal-drawn carts are slow-moving and can obstruct traffic on fast roads. They are prohibited where this sign is displayed.' },
      { type: 'h3', text: 'Rules to follow' },
      { type: 'ul', items: [
        'Animal-drawn carts must use alternative routes',
        'Ensures smooth flow of faster motorized traffic'
      ]}
    ]
  },
  'no-entry-lorries': {
    title: 'No Entry for Heavy Commercial Vehicles',
    description: 'Prohibits lorries and heavy trucks from entering.',
    icon: 'ðŸš›',
    image: '/roadSign/regulatory/proh/noHeavy.png',
    category: 'Regulatory Signs',
    content: [
      { type: 'h3', text: 'What it means' },
      { type: 'p', text: 'Heavy commercial vehicles (lorries/trucks) are not allowed. This may be due to narrow roads, weak bridges, or residential noise restrictions.' },
      { type: 'h3', text: 'Rules to follow' },
      { type: 'ul', items: [
        'Truck drivers must find an alternative route',
        'Check for weight or height restrictions as well'
      ]}
    ]
  },
  'no-entry-farm-machinery': {
    title: 'No Entry for Farm Machinery',
    description: 'Prohibits tractors and agricultural machinery.',
    icon: 'ðŸšœ',
    image: '/roadSign/regulatory/proh/noFarm.jpg',
    category: 'Regulatory Signs',
    content: [
      { type: 'h3', text: 'What it means' },
      { type: 'p', text: 'Agricultural tractors and machinery are prohibited, usually because they move slowly and can cause congestion on highways.' },
      { type: 'h3', text: 'Rules to follow' },
      { type: 'ul', items: [
        'Farm machinery must stay off this road',
        'Use local or service roads instead'
      ]}
    ]
  },
  'no-entry-motor-vehicles': {
    title: 'No Entry for Motor Vehicles',
    description: 'Prohibits all motor-driven vehicles.',
    icon: 'ðŸš—',
    image: '/roadSign/regulatory/proh/noMotorDrive.png',
    category: 'Regulatory Signs',
    content: [
      { type: 'h3', text: 'What it means' },
      { type: 'p', text: 'No motor vehicles (cars, buses, trucks, motorcycles) are allowed. The road might be for pedestrians or cyclists only.' },
      { type: 'h3', text: 'Rules to follow' },
      { type: 'ul', items: [
        'Do not drive any motor vehicle past this sign',
        'Cyclists and pedestrians may be allowed unless specified otherwise'
      ]}
    ]
  },
  'no-entry-hand-carts': {
    title: 'No Entry for Hand Carts',
    description: 'Prohibits hand-drawn carts (mkokoteni).',
    icon: 'ðŸ›’',
    image: '/roadSign/regulatory/proh/nohanCarts.png',
    category: 'Regulatory Signs',
    content: [
      { type: 'h3', text: 'What it means' },
      { type: 'p', text: 'Hand-drawn carts (mkokoteni) are prohibited to prevent obstruction of traffic flow.' },
      { type: 'h3', text: 'Rules to follow' },
      { type: 'ul', items: [
        'Hand cart pullers must use alternative routes',
        'Keep off the main carriageway'
      ]}
    ]
  },
  'width-limit': {
    title: 'No Entry for Vehicles Exceeding 2m Width',
    description: 'Prohibits vehicles wider than 2 meters.',
    icon: 'â†”ï¸',
    image: '/roadSign/regulatory/proh/2Width.png',
    category: 'Regulatory Signs',
    content: [
      { type: 'h3', text: 'What it means' },
      { type: 'p', text: 'Vehicles wider than 2 meters are not allowed to pass.' }
    ]
  },
  'height-limit': {
    title: 'No Entry for Vehicles Exceeding 3.5m Height',
    description: 'Prohibits vehicles higher than 3.5 meters.',
    icon: 'â†•ï¸',
    image: '/roadSign/regulatory/proh/3.5Height.png',
    category: 'Regulatory Signs',
    content: [
      { type: 'h3', text: 'What it means' },
      { type: 'p', text: 'Vehicles taller than 3.5 meters cannot pass safely.' }
    ]
  },
  'weight-limit': {
    title: 'Weight Limit 5 Tonnes',
    description: 'Prohibits vehicles exceeding 5 tonnes gross weight.',
    icon: 'âš–ï¸',
    image: '/roadSign/regulatory/proh/5Tonnes.png',
    category: 'Regulatory Signs',
    content: [
      { type: 'h3', text: 'What it means' },
      { type: 'p', text: 'No vehicle with a gross weight over 5 tonnes is allowed.' }
    ]
  },
  'axle-weight-limit': {
    title: 'Axle Weight Limit 2 Tonnes',
    description: 'Prohibits vehicles with more than 2 tonnes on any axle.',
    icon: 'ðŸš›',
    image: '/roadSign/regulatory/proh/2Axle.png',
    category: 'Regulatory Signs',
    content: [
      { type: 'h3', text: 'What it means' },
      { type: 'p', text: 'Vehicles exerting more than 2 tonnes of pressure per axle are prohibited.' }
    ]
  },
  'length-limit': {
    title: 'Length Limit 10m',
    description: 'Prohibits vehicles longer than 10 meters.',
    icon: 'ðŸ“',
    image: '/roadSign/regulatory/proh/vehLength.png',
    category: 'Regulatory Signs',
    content: [
      { type: 'h3', text: 'What it means' },
      { type: 'p', text: 'Vehicles exceeding 10 meters in length are not allowed.' }
    ]
  },
  'keep-distance': {
    title: 'Keep Distance',
    description: 'Mandatory minimum distance between moving vehicles.',
    icon: 'ðŸš—â†”ï¸ðŸš—',
    image: '/roadSign/regulatory/proh/distKept.JPG',
    category: 'Regulatory Signs',
    content: [
      { type: 'h3', text: 'What it means' },
      { type: 'p', text: 'Drivers must maintain the indicated distance from the vehicle in front.' }
    ]
  },
  'no-left-turn': {
    title: 'No Left Turn',
    description: 'Prohibits turning left at the intersection.',
    icon: 'â†°ðŸš«',
    image: '/roadSign/regulatory/proh/noLeft.png',
    category: 'Regulatory Signs',
    content: [
      { type: 'h3', text: 'What it means' },
      { type: 'p', text: 'You must not turn left at this junction.' }
    ]
  },
  'no-right-turn': {
    title: 'No Right Turn',
    description: 'Prohibits turning right at the intersection.',
    icon: 'â†±ðŸš«',
    image: '/roadSign/regulatory/proh/noRight.png',
    category: 'Regulatory Signs',
    content: [
      { type: 'h3', text: 'What it means' },
      { type: 'p', text: 'You must not turn right at this junction.' }
    ]
  },
  'no-u-turn': {
    title: 'No U-Turn',
    description: 'Prohibits turning the vehicle around.',
    icon: 'â†©ï¸ðŸš«',
    image: '/roadSign/regulatory/proh/noUturn.png',
    category: 'Regulatory Signs',
    content: [
      { type: 'h3', text: 'What it means' },
      { type: 'p', text: 'U-turns are illegal at this location.' }
    ]
  },
  'no-overtaking': {
    title: 'No Overtaking',
    description: 'Prohibits overtaking other moving vehicles.',
    icon: 'ðŸš—ðŸš«ðŸš—',
    image: '/roadSign/regulatory/proh/noOvertake.jpeg',
    category: 'Regulatory Signs',
    content: [
      { type: 'h3', text: 'What it means' },
      { type: 'p', text: 'You must not overtake any vehicle except motorcycles without sidecars.' }
    ]
  },
  'no-overtaking-heavy': {
    title: 'No Overtaking by Heavy Vehicles',
    description: 'Prohibits heavy commercial vehicles from overtaking.',
    icon: 'ðŸš›ðŸš«ðŸš—',
    image: '/roadSign/regulatory/proh/heavyTake.png',
    category: 'Regulatory Signs',
    content: [
      { type: 'h3', text: 'What it means' },
      { type: 'p', text: 'Heavy goods vehicles are not allowed to overtake other vehicles.' }
    ]
  },
  'speed-limit-town': {
    title: 'Speed Limit (Town)',
    description: 'Maximum speed limit in built-up areas (usually 50 km/h).',
    icon: '50',
    image: '/roadSign/regulatory/proh/40Limit.png',
    category: 'Regulatory Signs',
    content: [
      { type: 'h3', text: 'What it means' },
      { type: 'p', text: 'The maximum speed limit is typically 50 km/h in towns.' }
    ]
  },
  'no-hooting': {
    title: 'No Hooting',
    description: 'Prohibits the use of the horn.',
    icon: 'ðŸ”•',
    image: '/roadSign/regulatory/proh/noHoot.png',
    category: 'Regulatory Signs',
    content: [
      { type: 'h3', text: 'What it means' },
      { type: 'p', text: 'Do not use your horn.' }
    ]
  },
  'stop-customs': {
    title: 'Stop at Customs',
    description: 'Mandatory stop at a customs post.',
    icon: 'ðŸ›‘',
    image: '/roadSign/regulatory/proh/custom.jpeg',
    category: 'Regulatory Signs',
    content: [
      { type: 'h3', text: 'What it means' },
      { type: 'p', text: 'You must stop for customs clearance.' }
    ]
  },
  'stop-control': {
    title: 'Stop at Control Post',
    description: 'Mandatory stop at a control post.',
    icon: 'ðŸ›‘',
    image: '/roadSign/regulatory/proh/conTrolled.jpeg',
    category: 'Regulatory Signs',
    content: [
      { type: 'h3', text: 'What it means' },
      { type: 'p', text: 'You must stop at the control post.' }
    ]
  },
  'priority-oncoming': {
    title: 'Priority to Oncoming Vehicle',
    description: 'Give way to vehicles from the opposite direction.',
    icon: 'â¬‡ï¸â¬†ï¸',
    image: '/roadSign/regulatory/proh/onComing.png',
    category: 'Regulatory Signs',
    content: [
      { type: 'h3', text: 'What it means' },
      { type: 'p', text: 'Oncoming traffic has the right of way.' }
    ]
  },
  'end-prohibition': {
    title: 'End of All Prohibitions',
    description: 'End of all local prohibitions.',
    icon: 'âšª',
    image: '/roadSign/regulatory/proh/endProhb.png',
    category: 'Regulatory Signs',
    content: [
      { type: 'h3', text: 'What it means' },
      { type: 'p', text: 'Previous restrictions like speed limits or no overtaking end here.' }
    ]
  },
  'end-speed-40': {
    title: 'End of Speed Limit 40',
    description: 'End of 40 km/h speed restriction.',
    icon: '40',
    image: '/roadSign/regulatory/proh/endminSpeed.png',
    category: 'Regulatory Signs',
    content: [
      { type: 'h3', text: 'What it means' },
      { type: 'p', text: 'The 40 km/h speed limit is no longer in effect.' }
    ]
  },
  'no-parking': {
    title: 'No Parking',
    description: 'Parking is prohibited.',
    icon: 'ðŸ…¿ï¸ðŸš«',
    image: '/roadSign/regulatory/proh/noPark.jpeg',
    category: 'Regulatory Signs',
    content: [
      { type: 'h3', text: 'What it means' },
      { type: 'p', text: 'You cannot park your vehicle here.' }
    ]
  },
  'no-stopping': {
    title: 'No Stopping',
    description: 'Stopping and parking are prohibited.',
    icon: 'âŒ',
    image: '/roadSign/regulatory/proh/noSWP.jpeg',
    category: 'Regulatory Signs',
    content: [
      { type: 'h3', text: 'What it means' },
      { type: 'p', text: 'You must not stop your vehicle for any reason.' }
    ]
  },
  'no-parking-odd': {
    title: 'Parking Prohibited on Odd Dates',
    description: 'No parking on odd dates.',
    icon: '1ï¸âƒ£ðŸš«',
    image: '/roadSign/regulatory/proh/oddDates.png',
    category: 'Regulatory Signs',
    content: [
      { type: 'h3', text: 'What it means' },
      { type: 'p', text: 'Parking is not allowed on odd-numbered days.' }
    ]
  },
  'no-parking-even': {
    title: 'Parking Prohibited on Even Dates',
    description: 'No parking on even dates.',
    icon: '2ï¸âƒ£ðŸš«',
    image: '/roadSign/regulatory/proh/evenDates.png',
    category: 'Regulatory Signs',
    content: [
      { type: 'h3', text: 'What it means' },
      { type: 'p', text: 'Parking is not allowed on even-numbered days.' }
    ]
  },
  'controlled-parking': {
    title: 'Controlled Parking Zone',
    description: 'Zone with specific parking controls.',
    icon: 'ðŸ…¿ï¸',
    image: '/roadSign/regulatory/proh/conTrolled.jpeg',
    category: 'Regulatory Signs',
    content: [
      { type: 'h3', text: 'What it means' },
      { type: 'p', text: 'Parking is controlled by meters or permits.' }
    ]
  },
  'end-controlled-parking': {
    title: 'Exit from Controlled Zone',
    description: 'End of controlled parking zone.',
    icon: 'ðŸ…¿ï¸ðŸ',
    image: '/roadSign/regulatory/proh/exitControlled.JPG',
    category: 'Regulatory Signs',
    content: [
      { type: 'h3', text: 'What it means' },
      { type: 'p', text: 'Leaving the controlled parking zone.' }
    ]
  },
  'compulsory-turn-left': {
    title: 'Compulsory Turn Left',
    description: 'All vehicles must turn left.',
    icon: 'â†°',
    image: '/roadSign/regulatory/proh/turnLeft.png',
    category: 'Regulatory Signs',
    content: [
      { type: 'h3', text: 'What it means' },
      { type: 'p', text: 'You must turn left at the intersection.' }
    ]
  },
  'compulsory-go-straight': {
    title: 'Compulsory Go Straight',
    description: 'All vehicles must go straight.',
    icon: 'â¬†ï¸',
    image: '/roadSign/regulatory/proh/goStraight.png',
    category: 'Regulatory Signs',
    content: [
      { type: 'h3', text: 'What it means' },
      { type: 'p', text: 'You must proceed straight ahead. Turning is not allowed.' }
    ]
  },
  'compulsory-turn-right': {
    title: 'Compulsory Turn Right',
    description: 'All vehicles must turn right.',
    icon: 'â†±',
    image: '/roadSign/regulatory/proh/turnRight.jpeg',
    category: 'Regulatory Signs',
    content: [
      { type: 'h3', text: 'What it means' },
      { type: 'p', text: 'You must turn right at the intersection.' }
    ]
  },
  'compulsory-straight-or-right': {
    title: 'Compulsory Straight or Turn Right',
    description: 'All vehicles must go straight or turn right.',
    icon: 'â†±â¬†ï¸',
    image: '/roadSign/regulatory/proh/turn.jpeg',
    category: 'Regulatory Signs',
    content: [
      { type: 'h3', text: 'What it means' },
      { type: 'p', text: 'You may go straight or turn right, but cannot turn left.' }
    ]
  },
  'compulsory-keep-left': {
    title: 'Compulsory Keep Left',
    description: 'All vehicles must pass to the left.',
    icon: 'â†–ï¸',
    image: '/roadSign/regulatory/proh/passLeft.png',
    category: 'Regulatory Signs',
    content: [
      { type: 'h3', text: 'What it means' },
      { type: 'p', text: 'Keep to the left side of the sign or obstruction.' }
    ]
  },
  'compulsory-cyclist-track': {
    title: 'Compulsory Cyclist Track',
    description: 'Track reserved for cyclists.',
    icon: 'ðŸš²',
    image: '/roadSign/regulatory/proh/compCyc.png',
    category: 'Regulatory Signs',
    content: [
      { type: 'h3', text: 'What it means' },
      { type: 'p', text: 'Cyclists must use this track. Other vehicles are prohibited.' }
    ]
  },
  'compulsory-pedestrian-track': {
    title: 'Compulsory Pedestrian Track',
    description: 'Track reserved for pedestrians.',
    icon: 'ðŸš¶',
    image: '/roadSign/regulatory/proh/compPed.png',
    category: 'Regulatory Signs',
    content: [
      { type: 'h3', text: 'What it means' },
      { type: 'p', text: 'Pedestrians must use this track.' }
    ]
  },
  'compulsory-minimum-speed': {
    title: 'Compulsory Minimum Speed Limit',
    description: 'Drivers must travel at least at this speed.',
    icon: '30',
    image: '/roadSign/regulatory/proh/minSpeed.png',
    category: 'Regulatory Signs',
    content: [
      { type: 'h3', text: 'What it means' },
      { type: 'p', text: 'You must not drive slower than the indicated speed unless necessary for safety.' }
    ]
  },
  'end-compulsory-minimum-speed': {
    title: 'End of Compulsory Minimum Speed',
    description: 'The minimum speed limit is no longer in effect.',
    icon: '30',
    image: '/roadSign/regulatory/proh/endminSpeed.png',
    category: 'Regulatory Signs',
    content: [
      { type: 'h3', text: 'What it means' },
      { type: 'p', text: 'You are no longer required to maintain the minimum speed.' }
    ]
  },
  'railway-crossing-no-barrier': {
    title: 'Railway Crossing Without Barrier',
    description: 'Warning of a railway crossing ahead with no barrier.',
    icon: 'ðŸš‚',
    image: '/roadSign/warning/railWay.png',
    category: 'Warning Signs',
    content: [
      { type: 'h3', text: 'What it means' },
      { type: 'p', text: 'Be prepared to stop for trains. There are no gates.' }
    ]
  },
  'sharp-bend-left': {
    title: 'Sharp Bend to the Left',
    description: 'Warning of a sharp bend to the left ahead.',
    icon: 'â†°',
    image: '/roadSign/warning/sharpLeft.png',
    category: 'Warning Signs',
    content: [
      { type: 'h3', text: 'What it means' },
      { type: 'p', text: 'Slow down for the sharp left turn.' }
    ]
  },
  'successive-bends-left': {
    title: 'Successive Bends (First Left)',
    description: 'Warning of successive bends, the first to the left.',
    icon: 'ðŸ',
    image: '/roadSign/warning/succLeft.jpeg',
    category: 'Warning Signs',
    content: [
      { type: 'h3', text: 'What it means' },
      { type: 'p', text: 'Winding road ahead starting with a left turn.' }
    ]
  },
  'successive-bends-right': {
    title: 'Successive Bends (First Right)',
    description: 'Warning of successive bends, the first to the right.',
    icon: 'ðŸ',
    image: '/roadSign/warning/succRight.png',
    category: 'Warning Signs',
    content: [
      { type: 'h3', text: 'What it means' },
      { type: 'p', text: 'Winding road ahead starting with a right turn.' }
    ]
  },
  'steep-descent': {
    title: 'Steep Descent',
    description: 'Warning of a steep downward slope ahead.',
    icon: 'ðŸ“‰',
    image: '/roadSign/warning/desCent.png',
    category: 'Warning Signs',
    content: [
      { type: 'h3', text: 'What it means' },
      { type: 'p', text: 'Shift to a lower gear. Do not rely solely on brakes.' }
    ]
  },
  'steep-ascent': {
    title: 'Steep Ascent',
    description: 'Warning of a steep upward slope ahead.',
    icon: 'ðŸ“ˆ',
    image: '/roadSign/warning/asCent.png',
    category: 'Warning Signs',
    content: [
      { type: 'h3', text: 'What it means' },
      { type: 'p', text: 'Be prepared to shift to a lower gear to maintain power.' }
    ]
  },
  'road-narrows-both': {
    title: 'Road Narrows Both Sides',
    description: 'The road ahead narrows from both left and right.',
    icon: 'â¬',
    image: '/roadSign/warning/bothSides.jpeg',
    category: 'Warning Signs',
    content: [
      { type: 'h3', text: 'What it means' },
      { type: 'p', text: 'The carriageway gets narrower. Watch for oncoming traffic.' }
    ]
  },
  'road-narrows-right': {
    title: 'Road Narrows Right',
    description: 'The road narrows from the right side.',
    icon: 'â‡™',
    image: '/roadSign/warning/rightSide.jpeg',
    category: 'Warning Signs',
    content: [
      { type: 'h3', text: 'What it means' },
      { type: 'p', text: 'Merge left or adjust position as the right lane ends or narrows.' }
    ]
  },
  'road-narrows-left': {
    title: 'Road Narrows Left',
    description: 'The road narrows from the left side.',
    icon: 'â‡˜',
    image: '/roadSign/warning/leftSide.png',
    category: 'Warning Signs',
    content: [
      { type: 'h3', text: 'What it means' },
      { type: 'p', text: 'Merge right or adjust position as the left lane ends or narrows.' }
    ]
  },
  'river-bank-no-barrier': {
    title: 'River Bank Without Barrier',
    description: 'Warning of a river bank or quayside without a protective barrier.',
    icon: 'ðŸŒŠ',
    image: '/roadSign/warning/riverBank.png',
    category: 'Warning Signs',
    content: [
      { type: 'h3', text: 'What it means' },
      { type: 'p', text: 'Danger of falling into water. Drive carefully.' }
    ]
  },
  'uneven-road': {
    title: 'Uneven Road Surface',
    description: 'Warning of uneven or bumpy road surface.',
    icon: 'ã€°ï¸',
    image: '/roadSign/warning/unEven.jpeg',
    category: 'Warning Signs',
    content: [
      { type: 'h3', text: 'What it means' },
      { type: 'p', text: 'Reduce speed to maintain control and comfort.' }
    ]
  },
  'severe-bump': {
    title: 'Severe Bump',
    description: 'Warning of a severe bump or speed bump ahead.',
    icon: 'ðŸ«',
    image: '/roadSign/warning/severeBump.jpeg',
    category: 'Warning Signs',
    content: [
      { type: 'h3', text: 'What it means' },
      { type: 'p', text: 'Slow down significantly to cross the bump safely.' }
    ]
  },
  'river-bed-crossing': {
    title: 'River Bed Crossing',
    description: 'Warning of a drift or ford crossing.',
    icon: 'ðŸš™ðŸŒŠ',
    image: '/roadSign/warning/riverBed.jpeg',
    category: 'Warning Signs',
    content: [
      { type: 'h3', text: 'What it means' },
      { type: 'p', text: 'Road passes through a shallow water crossing. Check water depth before proceeding.' }
    ]
  },
  'loose-stone': {
    title: 'Loose Stones',
    description: 'Warning of loose stones or gravel on the road.',
    icon: 'ðŸª¨',
    image: '/roadSign/warning/surFace.png',
    category: 'Warning Signs',
    content: [
      { type: 'h3', text: 'What it means' },
      { type: 'p', text: 'Drive slowly to avoid skidding or throwing stones at other vehicles.' }
    ]
  },
  'falling-rocks': {
    title: 'Falling Rocks',
    description: 'Warning of potential falling rocks.',
    icon: 'â›°ï¸',
    image: '/roadSign/warning/fallRock.png',
    category: 'Warning Signs',
    content: [
      { type: 'h3', text: 'What it means' },
      { type: 'p', text: 'Watch for rocks on the road or falling from cliffs.' }
    ]
  },
  'children-crossing': {
    title: 'Children Crossing',
    description: 'Warning of children crossing, often near schools.',
    icon: 'ðŸš¸',
    image: '/roadSign/warning/childCross.png',
    category: 'Warning Signs',
    content: [
      { type: 'h3', text: 'What it means' },
      { type: 'p', text: 'Slow down and watch for children running into the road.' }
    ]
  },
  'bicycle-crossing': {
    title: 'Bicycle Crossing',
    description: 'Warning of cyclists crossing or entering the road.',
    icon: 'ðŸš²',
    image: '/roadSign/warning/cycCross.jpeg',
    category: 'Warning Signs',
    content: [
      { type: 'h3', text: 'What it means' },
      { type: 'p', text: 'Watch out for cyclists.' }
    ]
  },
  'cattle-crossing': {
    title: 'Cattle Crossing',
    description: 'Warning of cattle likely to be on the road.',
    icon: 'ðŸ„',
    image: '/roadSign/warning/cattleCross.png',
    category: 'Warning Signs',
    content: [
      { type: 'h3', text: 'What it means' },
      { type: 'p', text: 'Slow down and be prepared to stop for animals.' }
    ]
  },
  'wild-animals': {
    title: 'Wild Animals',
    description: 'Warning of wild animals crossing.',
    icon: 'ðŸ¦Œ',
    image: '/roadSign/warning/wildCross.png',
    category: 'Warning Signs',
    content: [
      { type: 'h3', text: 'What it means' },
      { type: 'p', text: 'Watch for wildlife, especially at dawn and dusk.' }
    ]
  },
  'road-works': {
    title: 'Road Works',
    description: 'Warning of road construction or maintenance ahead.',
    icon: 'ðŸš§',
    image: '/roadSign/warning/roadWork.jpeg',
    category: 'Warning Signs',
    content: [
      { type: 'h3', text: 'What it means' },
      { type: 'p', text: 'Slow down and follow temporary signs or flaggers.' }
    ]
  },
  'low-flying-aircraft': {
    title: 'Low Flying Aircraft',
    description: 'Warning of low flying aircraft nearby.',
    icon: 'âœˆï¸',
    image: '/roadSign/warning/lowFly.png',
    category: 'Warning Signs',
    content: [
      { type: 'h3', text: 'What it means' },
      { type: 'p', text: 'Sudden noise from aircraft may startle drivers.' }
    ]
  },
  'traffic-lights-ahead': {
    title: 'Traffic Lights Ahead',
    description: 'Warning of traffic signals ahead.',
    icon: 'ðŸš¦',
    image: '/roadSign/warning/traFfic.jpeg',
    category: 'Warning Signs',
    content: [
      { type: 'h3', text: 'What it means' },
      { type: 'p', text: 'Be prepared to stop at the traffic lights.' }
    ]
  },
  'two-way-traffic': {
    title: 'Two-Way Traffic',
    description: 'Warning of two-way traffic ahead on a road that was one-way.',
    icon: 'â‡…',
    image: '/roadSign/warning/twoWay.jpeg',
    category: 'Warning Signs',
    content: [
      { type: 'h3', text: 'What it means' },
      { type: 'p', text: 'Watch for oncoming traffic.' }
    ]
  },
  'cross-roads': {
    title: 'Crossroads',
    description: 'Warning of a crossroads intersection ahead.',
    icon: 'âž•',
    image: '/roadSign/warning/crossRoad.png',
    category: 'Warning Signs',
    content: [
      { type: 'h3', text: 'What it means' },
      { type: 'p', text: 'Be prepared for traffic entering from left and right.' }
    ]
  },
  'junction-minor-both': {
    title: 'Junction with Minor Road (Both Sides)',
    description: 'Warning of minor roads joining from both sides.',
    icon: 'â•‚',
    image: '/roadSign/warning/bothMinor.jpeg',
    category: 'Warning Signs',
    content: [
      { type: 'h3', text: 'What it means' },
      { type: 'p', text: 'Watch for vehicles entering from side roads.' }
    ]
  },
  'hazards-ahead': {
    title: 'Hazards Ahead',
    description: 'Warning of unspecified hazards ahead.',
    icon: 'â—',
    image: '/roadSign/warning/haZard.jpeg',
    category: 'Warning Signs',
    content: [
      { type: 'h3', text: 'What it means' },
      { type: 'p', text: 'Drive with caution and look out for dangers.' }
    ]
  },
  'junction-minor-right': {
    title: 'Junction with Minor Road from Right',
    description: 'Warning of a minor road joining from the right.',
    icon: 'â”£',
    image: '/roadSign/warning/minorRight.png',
    category: 'Warning Signs',
    content: [
      { type: 'h3', text: 'What it means' },
      { type: 'p', text: 'Watch for traffic entering from the right.' }
    ]
  },
  'roundabout': {
    title: 'Roundabout Ahead',
    description: 'Warning of a roundabout ahead.',
    icon: 'ðŸ”„',
    image: '/roadSign/warning/roundAbout.jpeg',
    category: 'Warning Signs',
    content: [
      { type: 'h3', text: 'What it means' },
      { type: 'p', text: 'Slow down and prepare to yield to traffic in the roundabout.' }
    ]
  },
  'junction-accelerating-left': {
    title: 'Junction with Accelerating Lane (Left)',
    description: 'Warning of traffic merging from an accelerating lane on the left.',
    icon: 'â†²',
    image: '/roadSign/warning/laneLeft.png',
    category: 'Warning Signs',
    content: [
      { type: 'h3', text: 'What it means' },
      { type: 'p', text: 'Watch for merging traffic.' }
    ]
  },
  'parking': {
    title: 'Parking',
    description: 'Designated parking place.',
    icon: 'ðŸ…¿ï¸',
    image: '/roadSign/informatory/Parking.png',
    category: 'Informatory Signs',
    content: [{ type: 'p', text: 'You may park your vehicle here.' }]
  },
  'pedestrian-crossing-spot': {
    title: 'Pedestrian Crossing on Spot',
    description: 'Indicates a pedestrian crossing at this location.',
    icon: 'ðŸš¸',
    image: '/roadSign/informatory/pedestrianonspot.jpeg',
    category: 'Informatory Signs',
    content: [{ type: 'p', text: 'Pedestrians have priority here.' }]
  },
  'one-way-left': {
    title: 'One Way Traffic to the Left',
    description: 'Traffic must flow to the left.',
    icon: 'â¬…ï¸',
    image: '/roadSign/informatory/onewayLeft.jpeg',
    category: 'Informatory Signs',
    content: [{ type: 'p', text: 'One way traffic direction.' }]
  },
  'one-way-right': {
    title: 'One Way Traffic to the Right',
    description: 'Traffic must flow to the right.',
    icon: 'âž¡ï¸',
    image: '/roadSign/informatory/oneway.png',
    category: 'Informatory Signs',
    content: [{ type: 'p', text: 'One way traffic direction.' }]
  },
  'no-through-way': {
    title: 'No Through Way',
    description: 'Road ends ahead (Cul-de-sac).',
    icon: 'ðŸ›‘',
    image: '/roadSign/informatory/nothroughway.jpeg',
    category: 'Informatory Signs',
    content: [{ type: 'p', text: 'This road does not lead to another road.' }]
  },
  'cyclist-only': {
    title: 'Cyclist Only',
    description: 'Route reserved for cyclists.',
    icon: 'ðŸš²',
    image: '/roadSign/informatory/cyclistonly.jpg',
    category: 'Informatory Signs',
    content: [{ type: 'p', text: 'Only cyclists allowed.' }]
  },
  'in-sign': {
    title: 'In',
    description: 'Entrance.',
    icon: 'â¬‡ï¸',
    image: '/roadSign/informatory/in.png',
    category: 'Informatory Signs',
    content: [{ type: 'p', text: 'Entrance to a facility or area.' }]
  },
  'out-sign': {
    title: 'Out',
    description: 'Exit.',
    icon: 'â¬†ï¸',
    image: '/roadSign/informatory/out.jpeg',
    category: 'Informatory Signs',
    content: [{ type: 'p', text: 'Exit from a facility or area.' }]
  },
  'no-exit': {
    title: 'No Exit',
    description: 'No exit for vehicles.',
    icon: 'ðŸš«',
    image: '/roadSign/informatory/noexit.png',
    category: 'Informatory Signs',
    content: [{ type: 'p', text: 'You cannot exit from here.' }]
  },
  'taxi-stand': {
    title: 'Taxi',
    description: 'Designated stand for taxis.',
    icon: 'ðŸš•',
    image: '/roadSign/informatory/taxi.jpeg',
    category: 'Informatory Signs',
    content: [{ type: 'p', text: 'Parking reserved for taxis.' }]
  },
  'bus-stop': {
    title: 'Bus Stop',
    description: 'Designated stop for buses.',
    icon: 'ðŸšŒ',
    image: '/roadSign/informatory/busstop.png',
    category: 'Informatory Signs',
    content: [{ type: 'p', text: 'Area for buses to pick up and drop off passengers.' }]
  },
  'priority-over-oncoming': {
    title: 'Priority Over Oncoming Traffic',
    description: 'You have right of way over oncoming vehicles.',
    icon: 'â¬†ï¸â¬‡ï¸',
    image: '/roadSign/informatory/onomingtraffic.jpeg',
    category: 'Informatory Signs',
    content: [{ type: 'p', text: 'Oncoming traffic must yield to you.' }]
  },
  'telephone': {
    title: 'Telephone',
    description: 'Public telephone available.',
    icon: 'â˜Žï¸',
    image: '/roadSign/informatory/telephone.jpeg',
    category: 'Informatory Signs',
    content: [{ type: 'p', text: 'Public telephone facility ahead.' }]
  },
  'breakdown-services': {
    title: 'Breakdown Services',
    description: 'Mechanical breakdown assistance available.',
    icon: 'ðŸ”§',
    image: '/roadSign/informatory/breakdown.jpeg',
    category: 'Informatory Signs',
    content: [{ type: 'p', text: 'Vehicle repair services available.' }]
  },
  'first-aid-station': {
    title: 'First Aid Station',
    description: 'Medical first aid available.',
    icon: 'âž•',
    image: '/roadSign/informatory/firstAid.png',
    category: 'Informatory Signs',
    content: [{ type: 'p', text: 'Emergency medical help available.' }]
  },
  'chevrons': {
    title: 'Chevrons',
    description: 'Sharp change in road direction.',
    icon: 'ã€‹',
    image: '/roadSign/informatory/dangerousChange.png',
    category: 'Informatory Signs',
    content: [{ type: 'p', text: 'Indicates a sharp bend or curve.' }]
  },
  'motel-hotel': {
    title: 'Motel/Hotel',
    description: 'Accommodation available.',
    icon: 'ðŸ¨',
    image: '/roadSign/informatory/motel.png',
    category: 'Informatory Signs',
    content: [{ type: 'p', text: 'Hotel or motel accommodation ahead.' }]
  },
  'restaurant': {
    title: 'Restaurant',
    description: 'Food services available.',
    icon: 'ðŸ½ï¸',
    image: '/roadSign/informatory/restauRantpng.png',
    category: 'Informatory Signs',
    content: [{ type: 'p', text: 'Restaurant or dining facility ahead.' }]
  },
  'refreshments': {
    title: 'Refreshments',
    description: 'Light refreshments available.',
    icon: 'â˜•',
    image: '/roadSign/informatory/refreshMents.png',
    category: 'Informatory Signs',
    content: [{ type: 'p', text: 'Cafeteria or snack bar ahead.' }]
  },
  'youth-hostel': {
    title: 'Youth Hostel',
    description: 'Youth hostel accommodation.',
    icon: 'ðŸ›Œ',
    image: '/roadSign/informatory/youthHostel.png',
    category: 'Informatory Signs',
    content: [{ type: 'p', text: 'Youth hostel facility ahead.' }]
  },
  'public-footpath': {
    title: 'Public Footpath',
    description: 'Path for pedestrians.',
    icon: 'ðŸš¶',
    image: '/roadSign/informatory/pedestrianonspot.jpeg',
    category: 'Informatory Signs',
    content: [{ type: 'p', text: 'Route designated for walking.' }]
  },
  'picnic-site': {
    title: 'Picnic Site',
    description: 'Area for picnics.',
    icon: 'ðŸ§º',
    image: '/roadSign/informatory/picnicSite.jpg',
    category: 'Informatory Signs',
    content: [{ type: 'p', text: 'Designated area for picnics and rest.' }]
  },
  'camping-site': {
    title: 'Camping Site',
    description: 'Area for camping.',
    icon: 'â›º',
    image: '/roadSign/informatory/campingSite.png',
    category: 'Informatory Signs',
    content: [{ type: 'p', text: 'Designated area for setting up tents.' }]
  },
  'caravan-site': {
    title: 'Caravan Site',
    description: 'Area for caravans.',
    icon: 'ðŸš',
    image: '/roadSign/informatory/caravanSite.png',
    category: 'Informatory Signs',
    content: [{ type: 'p', text: 'Designated area for parking caravans.' }]
  },
  'camping-and-caravan': {
    title: 'Camping and Caravan Site',
    description: 'Area for both camping and caravans.',
    icon: 'â›ºðŸš',
    image: '/roadSign/informatory/campCaravan.png',
    category: 'Informatory Signs',
    content: [{ type: 'p', text: 'Facilities for both tents and caravans.' }]
  },
  'ferry-services': {
    title: 'Ferry Services',
    description: 'Ferry crossing ahead.',
    icon: 'â›´ï¸',
    image: '/roadSign/informatory/ferryServices.png',
    category: 'Informatory Signs',
    content: [{ type: 'p', text: 'Ferry terminal or crossing point.' }]
  },
  'hazards-demarcation': {
    title: 'Hazards Demarcation',
    description: 'Marks an obstruction or hazard.',
    icon: 'ðŸš§',
    image: '/roadSign/informatory/hazardDemarcation.png',
    category: 'Informatory Signs',
    content: [{ type: 'p', text: 'Highlights a physical hazard on the road.' }]
  },
  'dangerous-change-road': {
    title: 'Dangerous Change of Road Direction',
    description: 'Road direction changes sharply.',
    icon: 'â†ªï¸',
    image: '/roadSign/informatory/dangerousChange.png',
    category: 'Informatory Signs',
    content: [{ type: 'p', text: 'Prepare for a sudden change in road path.' }]
  },
  'distance-indicators': {
    title: 'Distance Indicators',
    description: 'Countdown markers to an exit or hazard.',
    icon: 'ðŸ“',
    image: '/roadSign/informatory/placeIdentify.jpeg',
    category: 'Informatory Signs',
    content: [{ type: 'p', text: 'Indicates distance remaining to a point.' }]
  },
  'channelizing-island': {
    title: 'Channelizing Island',
    description: 'Island to guide traffic flow.',
    icon: 'ðŸï¸',
    image: '/roadSign/informatory/placeIdentify.jpeg',
    category: 'Informatory Signs',
    content: [{ type: 'p', text: 'Guides traffic into specific lanes.' }]
  },
  'exit-main-road': {
    title: 'Exit from Main Road',
    description: 'Exit lane ahead.',
    icon: 'â†—ï¸',
    image: '/roadSign/informatory/exitfromMain.png',
    category: 'Informatory Signs',
    content: [{ type: 'p', text: 'Lane leading off the main road.' }]
  }
};

