import { AppData, FlightOrigin, Language } from './types';

export const DATA: Record<Language, AppData> = {
  en: {
    nav: {
      PLAN: 'Plan',
      GUIDE: 'Souvenirs',
      WALLET: 'Exchange',
      LISTS: 'Lists',
      INFO: 'Info'
    },
    flights: {
      TW: [
        { type: 'Departure', flightNumber: 'CI0909', date: '2/22', time: '10:45 - 13:00', airport: 'TPE -> HKG', terminal: 'T1' },
        { type: 'Return', flightNumber: 'CI0916', date: '2/26', time: '17:35 - 19:20', airport: 'HKG -> TPE', terminal: 'T1' }
      ],
      SG: [
        { type: 'Departure', flightNumber: 'SQ892', date: '2/22', time: '09:55 - 13:55', airport: 'SIN -> HKG', terminal: 'T1' },
        { type: 'Return', flightNumber: 'SQ893', date: '2/26', time: '15:45 - 19:50', airport: 'HKG -> SIN', terminal: 'T1' }
      ]
    },
    hotel: {
      name: 'Holiday Inn Golden Mile',
      address: '50 Nathan Rd, Tsim Sha Tsui, Hong Kong',
      checkIn: '15:00',
      checkOut: '12:00',
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=Holiday+Inn+Golden+Mile+Hong+Kong'
    },
    itinerary: [
      {
        day: 'Day 1',
        date: '2/22 (Sun)',
        weather: '17°C - 21°C ☁️ Cloudy',
        items: [
          { id: '1-1', time: '13:55', title: 'Arrivals', description: 'TW arrives 13:00. SG arrives 13:55. Meet at Arrival Hall, near Gate A (Pret A Manger).', isImportant: true },
          { id: '1-2', time: '15:00', title: 'Pick up to Hotel', description: 'Klook Car (booked x2). 30 mins drive.', isImportant: true },
          { id: '1-3', time: '16:00', title: 'Check-in Holiday Inn', description: 'IHG App (4 Rooms). Rest.', links: [{ label: 'Hotel Map', url: 'https://www.google.com/maps/search/?api=1&query=Holiday+Inn+Golden+Mile+Hong+Kong', type: 'map' }] },
          { id: '1-4', time: '18:00', title: 'Dinner @ Nanhai No. 1', description: 'Located in iSquare. Michelin-recommended Cantonese cuisine with a panoramic view of Victoria Harbour.', links: [{ label: 'Restaurant Map', url: 'https://www.google.com/maps/search/?api=1&query=Nanhai+No.1+Hong+Kong', type: 'food' }] },
          { id: '1-5', time: '20:00', title: 'Nathan Road Shopping', description: 'Explore Tsim Sha Tsui area.' },
          { id: '1-6', time: '20:30', title: 'Back to Hotel', description: 'Rest. Prepare for early Shenzhen trip tomorrow.' }
        ]
      },
      {
        day: 'Day 2',
        date: '2/23 (Mon)',
        weather: '16°C - 22°C ☀️ Sunny',
        items: [
          { id: '2-1', time: '09:00', title: 'To West Kowloon Station', description: 'Uber (30 mins). HSR to Shenzhen.', isImportant: true, links: [{ label: 'West Kowloon Map', url: 'https://www.google.com/maps/search/?api=1&query=Hong+Kong+West+Kowloon+Station', type: 'map' }] },
          { id: '2-2', time: '10:45', title: 'HSR to Shenzhen (G5630)', description: '10:45 - 11:01 to Futian Station. Klook Tickets (booked x8). Arrive 90mins before.', links: [{ label: 'Futian Station Map', url: 'https://www.google.com/maps/search/?api=1&query=Futian+Railway+Station', type: 'map' }] },
          { id: '2-3', time: '11:00', title: 'Nantou Ancient Town', description: 'Didi from Futian (20 mins). Lunch here.', links: [{ label: 'Nantou Map', url: 'https://www.google.com/maps/search/?api=1&query=Nantou+Ancient+Town+Shenzhen', type: 'map' }] },
          { id: '2-4', time: '13:30', title: 'The MixC Mall (Optional)', description: 'If Nantou is finished early, visit The MixC.', links: [{ label: 'MixC Map', url: 'https://www.google.com/maps/search/?api=1&query=The+MixC+Shenzhen+Bay', type: 'map' }] },
          { id: '2-5', time: '15:30', title: 'Dongmen Pedestrian St.', description: 'Street food and shopping. Dinner in area.', links: [{ label: 'Dongmen Map', url: 'https://www.google.com/maps/search/?api=1&query=Dongmen+Pedestrian+Street', type: 'map' }] },
          { id: '2-6', time: '20:00', title: 'To Shenzhen North/Futian', description: 'Didi to station (20 mins).' },
          { id: '2-7', time: '21:54', title: 'HSR back to HK (G5825)', description: '21:54 - 22:08. Klook Tickets (booked x8). Uber back to hotel (30 mins).', isImportant: true }
        ]
      },
      {
        day: 'Day 3',
        date: '2/24 (Tue)',
        weather: '18°C - 23°C 🌤️ Partly Cloudy',
        items: [
          { id: '3-1', time: '10:30', title: 'Free Morning', description: 'Sleep in. Free time.' },
          { id: '3-2', time: '12:00', title: 'Lunch', description: 'Local restaurant (TBD).', links: [{ label: 'Nearby Food', url: 'https://www.google.com/maps/search/?api=1&query=Restaurants+near+Tsim+Sha+Tsui', type: 'food' }] },
          { id: '3-3', time: '14:00', title: 'Shopping / Temple St', description: 'Nathan road shopping. Temple street night market later.' },
          { id: '3-4', time: '18:30', title: 'Dinner', description: 'Suggestion: Kwan Kee Claypot Rice. Walking distance.', links: [{ label: 'Kwan Kee Map', url: 'https://www.google.com/maps/search/?api=1&query=Kwan+Kee+Claypot+Rice', type: 'food' }] },
          { id: '3-5', time: '20:00', title: 'Victoria Harbour', description: 'Night view of the skyline.' }
        ]
      },
      {
        day: 'Day 4',
        date: '2/25 (Wed)',
        weather: '17°C - 22°C ☀️ Sunny',
        items: [
          { id: '4-1', time: '08:30', title: 'To Ferry Terminal', description: 'Uber (30 mins) to Sheung Wan / China Ferry Terminal.', isImportant: true, links: [{ label: 'Sheung Wan Terminal', url: 'https://www.google.com/maps/place/%E9%A6%99%E6%B8%AF%E5%B0%96%E6%B2%99%E5%92%80%E4%B8%AD%E5%9C%8B%E5%AE%A2%E9%81%8B%E7%A2%BC%E9%A0%AD/@22.2989038,114.1628425,912m/data=!3m1!1e3!4m6!3m5!1s0x3404009297fce72d:0x7475eca620a27198!8m2!3d22.2990876!4d114.1662761!16s%2Fg%2F12hnz4ztj?entry=ttu&g_ep=EgoyMDI2MDIxMS4wIKXMDSoASAFQAw%3D%3D', type: 'map' }] },
          { id: '4-2', time: '10:30', title: 'Ferry to Macau', description: 'TurboJET to Macau Outer Harbour (1h). Klook (Booked x4 + x4).', isImportant: true },
          { id: '4-3', time: '12:00', title: 'Ruins of St. Paul', description: 'Uber 10 mins. Sightseeing.', links: [{ label: 'Location Map', url: 'https://www.google.com/maps/search/?api=1&query=Ruins+of+St+Paul+Macau', type: 'map' }] },
          { id: '4-4', time: '13:00', title: 'Lunch: Wong Chi Kei', description: 'Walk 10 mins. Famous noodles. Senado Square.', links: [{ label: 'Wong Chi Kei', url: 'https://www.google.com/maps/search/?api=1&query=Wong+Chi+Kei+Macau', type: 'food' }] },
          { id: '4-5', time: '16:00', title: 'To City of Dreams', description: 'Uber 20 mins.', links: [{ label: 'City of Dreams Map', url: 'https://www.google.com/maps/search/?api=1&query=City+of+Dreams+Macau', type: 'info' }] },
          { id: '4-6', time: '17:00', title: 'House of Dancing Water', description: 'Show starts. Duration: 1h 20m. Booked x8.', imageUrl: 'https://duk.tw/tUFMsH.jpg' },
          { id: '4-7', time: '19:00', title: 'Taipa Village', description: 'Dinner and snacks.', links: [{ label: 'Taipa Food St', url: 'https://www.google.com/maps/search/?api=1&query=Rua+do+Cunha+Macau', type: 'food' }] },
          { id: '4-8', time: '20:30', title: 'To Taipa Ferry Terminal', description: 'Uber 10 mins.', links: [{ label: 'Taipa Terminal', url: 'https://www.google.com/maps/search/?api=1&query=Taipa+Ferry+Terminal', type: 'map' }] },
          { id: '4-9', time: '22:00', title: 'Ferry back to HK', description: 'Taipa -> Sheung Wan. Klook (Booked x2 + x2x3). Grab/Uber back to hotel (30 mins).', isImportant: true }
        ]
      },
      {
        day: 'Day 5',
        date: '2/26 (Thu)',
        weather: '18°C - 24°C 🌤️ Sunny',
        items: [
          { id: '5-1', time: '10:30', title: 'Last Shopping / Bakehouse', description: 'Victoria harbour morning view. Buy Bakehouse egg tarts.', links: [{ label: 'Bakehouse TST', url: 'https://www.google.com/maps/search/?api=1&query=Bakehouse+Tsim+Sha+Tsui', type: 'food' }] },
          { id: '5-2', time: '12:15', title: 'Check Out', description: 'Check out of Holiday Inn.' },
          { id: '5-3', time: '12:30', title: 'To Airport', description: 'Klook Car (Booked x2). Pickup at 12:45 Lobby.', isImportant: true },
          { id: '5-4', time: '13:45', title: 'Lunch @ Airport', description: 'Eat before flight.' },
          { id: '5-5', time: '15:45', title: 'SG Flight', description: 'SG Team departs 15:45.' },
          { id: '5-6', time: '17:35', title: 'TW Flight', description: 'TW Team departs 17:35.' }
        ]
      }
    ],
    guides: [
      {
        id: 'CN',
        name: 'CN',
        souvenirs: [
          {
            id: 'cn-shop',
            name: 'Miniso / KKV',
            description: 'Affordable lifestyle goods and blind boxes.',
            tags: ['Shopping'],
            mustBuy: ['Chiikawa Blind Box', 'Plushies'],
            imageUrl: 'https://duk.tw/T1N6zx.png'
          }
        ],
        taxInfo: {
          title: 'Mainland China Tax Refund',
          content: 'Overseas tourists can claim an 11% VAT refund on purchases of min. 500 RMB at designated "Tax Free" stores.',
          steps: [
            'Spend >500 RMB in one store in one day.',
            'Request a "Tax Refund Application Form" + VAT Invoice.',
            'At departure (Shenzhen Airport/Port), present passport + goods + forms at Customs.',
            'Refund is usually returned to card or Alipay.'
          ]
        }
      },
      {
        id: 'HK',
        name: 'HK',
        souvenirs: [
          {
            id: 'hk-jenny',
            name: 'Jenny Bakery',
            description: 'Famous butter cookies. Tsim Sha Tsui (Mirador Mansion). Long queues expected.',
            tags: ['Food', 'Famous'],
            mustBuy: ['4-mix Butter Cookies', 'Coffee Flower Cookies'],
            imageUrl: 'https://duk.tw/gg19gR.webp'
          },
          {
            id: 'hk-bake',
            name: 'Bakehouse',
            description: 'Sourdough Egg Tarts. Pre-order recommended.',
            tags: ['Food'],
            mustBuy: ['Sourdough Egg Tart', 'Croissant'],
            imageUrl: 'https://duk.tw/U4SqTe.jpg'
          },
          {
            id: 'hk-lemon',
            name: 'Lemon King',
            description: 'Preserved lemon snacks. Sheung Wan.',
            tags: ['Snack'],
            mustBuy: ['Licorice Lemon', 'Licorice Olive']
          },
          {
            id: 'hk-duck',
            name: 'Duck Shing Ho',
            description: 'Egg rolls. North Point. Very hard to buy (early morning queue).',
            tags: ['Food'],
            mustBuy: ['Original Egg Rolls', 'Coconut Egg Rolls'],
            imageUrl: 'https://duk.tw/OmXSXn.jpg'
          },
          {
            id: 'hk-pen',
            name: 'Peninsula Boutique',
            description: 'Luxury XO sauce and chocolates.',
            tags: ['Luxury'],
            mustBuy: ['XO Chili Sauce', 'Chocolate Gift Box']
          },
          {
            id: 'hk-snacks',
            name: 'Snacks',
            description: 'Popular local snacks from supermarkets.',
            tags: ['Snack'],
            mustBuy: ['Hot Wave Chips', 'Vitasoy']
          }
        ],
        taxInfo: {
          title: 'Hong Kong Tax Free',
          content: 'Hong Kong is a free port. There is NO sales tax (VAT) on goods.',
          steps: [
            'You do not need to apply for any tax refund.',
            'The price you see is the final price.',
            'Exceptions: Alcohol and Tobacco have duties.'
          ]
        }
      },
      {
        id: 'MO',
        name: 'MO',
        souvenirs: [
          {
            id: 'mo-koi',
            name: 'Koi Kei Bakery',
            description: 'Almond cakes and peanut candy. Everywhere in Macau.',
            tags: ['Food'],
            mustBuy: ['Almond Cookies', 'Peanut Candy'],
            imageUrl: 'https://duk.tw/BL4isA.png'
          },
          {
            id: 'mo-stow',
            name: 'Lord Stow\'s Bakery',
            description: 'Portuguese Egg Tarts. The original one in Coloane is best.',
            tags: ['Food'],
            mustBuy: ['Portuguese Egg Tarts'],
            imageUrl: 'https://duk.tw/iywCEp.png'
          },
          {
            id: 'mo-jerky',
            name: 'Meat Jerky',
            description: 'Beef/Pork jerky sheets found near Ruins of St. Paul.',
            tags: ['Snack'],
            mustBuy: ['Wild Boar Jerky', 'Black Pepper Beef Jerky']
          },
          {
            id: 'mo-omoon',
            name: 'O Moon',
            description: 'Macau-themed creative lifestyle products.',
            tags: ['Gift'],
            mustBuy: ['Azulejo Coasters', 'Moon Lamps'],
            imageUrl: 'https://duk.tw/1R4vhd.jpg'
          }
        ],
        taxInfo: {
          title: 'Macau Tax Free',
          content: 'Macau is also a free port. Most goods are tax-free.',
          steps: [
            'No sales tax on general consumer goods.',
            'No refund process required.'
          ]
        }
      }
    ],
    checklist: [
      'Passport / Mainland Travel Permit (台胞證)',
      'Visa for China (if needed)',
      'Alipay / WeChat Pay (Bound to card)',
      'Roaming / SIM Card / eSIM',
      'Power Bank',
      'Comfortable Shoes',
      'Personal Medicine'
    ],
    info: {
      weather: {
        title: 'Weather Forecast',
        subtitle: 'Check HK/Macau/China Weather',
        url: 'https://www.hko.gov.hk/en/'
      },
      emergency: {
        title: 'EMERGENCY',
        police: 'Police: 999 (HK/Macau) / 110 (CN)',
        ambulance: 'Amb: 999 (HK/Macau) / 120 (CN)',
        office: 'Diplomatic / Assistance',
        officeName: 'TECO (HK/Macau)'
      },
      rules: {
        title: 'TRAVEL NOTICES',
        items: [
          'HK: No eating/drinking on MTR.',
          'Macau: Casinos require ID (21+).',
          'Bring cash (HKD/RMB) for taxis.',
          'China: Use eSIM for unrestricted internet.'
        ]
      }
    }
  },
  zh: {
    nav: {
      PLAN: '行程',
      GUIDE: '伴手禮',
      WALLET: '匯率計算機',
      LISTS: '清單',
      INFO: '資訊'
    },
    flights: {
      TW: [
        { type: '去程', flightNumber: 'CI0909', date: '2/22', time: '10:45 - 13:00', airport: '桃園 -> 香港', terminal: 'T1' },
        { type: '回程', flightNumber: 'CI0916', date: '2/26', time: '17:35 - 19:20', airport: '香港 -> 桃園', terminal: 'T1' }
      ],
      SG: [
        { type: '去程', flightNumber: 'SQ892', date: '2/22', time: '09:55 - 13:55', airport: '樟宜 -> 香港', terminal: 'T1' },
        { type: '回程', flightNumber: 'SQ893', date: '2/26', time: '15:45 - 19:50', airport: '香港 -> 樟宜', terminal: 'T1' }
      ]
    },
    hotel: {
      name: '香港金域假日酒店',
      address: '香港九龍尖沙咀彌敦道50號',
      checkIn: '15:00',
      checkOut: '12:00',
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=Holiday+Inn+Golden+Mile+Hong+Kong'
    },
    itinerary: [
      {
        day: '第一天',
        date: '2/22 (日) 香港',
        weather: '17°C - 21°C ☁️ 多雲',
        items: [
          { id: '1-1', time: '13:55', title: '抵達香港', description: 'TW 13:00 抵達 / SG 13:55 抵達。接機大堂 A 區 (Pret A Manger 旁) 集合。', isImportant: true },
          { id: '1-2', time: '15:00', title: '前往飯店', description: 'Klook 包車接送 (預訂 x2)。車程30分鐘。', isImportant: true },
          { id: '1-3', time: '16:00', title: '入住假日酒店', description: 'IHG App 訂房 (4間)。休息。', links: [{ label: '飯店地圖', url: 'https://www.google.com/maps/search/?api=1&query=Holiday+Inn+Golden+Mile+Hong+Kong', type: 'map' }] },
          { id: '1-4', time: '18:00', title: '晚餐 @ 南海一號', description: '位於 iSquare 國際廣場。米其林推薦粵菜，擁有維港全景。', links: [{ label: '餐廳地圖', url: 'https://www.google.com/maps/search/?api=1&query=Nanhai+No.1+Hong+Kong', type: 'food' }] },
          { id: '1-5', time: '20:00', title: '彌敦道逛街', description: '尖沙咀周邊購物。' },
          { id: '1-6', time: '20:30', title: '返回飯店', description: '休息。準備明日前往深圳。' }
        ]
      },
      {
        day: '第二天',
        date: '2/23 (一) 深圳',
        weather: '16°C - 22°C ☀️ 晴朗',
        items: [
          { id: '2-1', time: '09:00', title: '前往西九龍高鐵站', description: '搭乘 Uber (30分鐘)。準備前往深圳。', isImportant: true, links: [{ label: '西九龍地圖', url: 'https://www.google.com/maps/search/?api=1&query=Hong+Kong+West+Kowloon+Station', type: 'map' }] },
          { id: '2-2', time: '10:45', title: '高鐵往深圳福田 (G5630)', description: '10:45 - 11:01。Klook 訂票 (預訂 x8)。需提前90分鐘抵達。', links: [{ label: '福田站地圖', url: 'https://www.google.com/maps/search/?api=1&query=Futian+Railway+Station', type: 'map' }] },
          { id: '2-3', time: '11:00', title: '南頭古城 & 午餐', description: '搭乘滴滴 Didi (20分鐘)。古城內用餐。', links: [{ label: '古城地圖', url: 'https://www.google.com/maps/search/?api=1&query=Nantou+Ancient+Town+Shenzhen', type: 'map' }] },
          { id: '2-4', time: '13:30', title: '萬象天地 (選)', description: '若南頭逛完可去 (The MixC)。', links: [{ label: '萬象天地', url: 'https://www.google.com/maps/search/?api=1&query=The+MixC+Shenzhen+Bay', type: 'map' }] },
          { id: '2-5', time: '15:30', title: '東門步行街', description: '逛街、小吃、晚餐。', links: [{ label: '東門地圖', url: 'https://www.google.com/maps/search/?api=1&query=Dongmen+Pedestrian+Street', type: 'map' }] },
          { id: '2-6', time: '20:00', title: '前往深圳北/福田', description: '搭乘滴滴 (20分鐘)。' },
          { id: '2-7', time: '21:54', title: '高鐵回香港 (G5825)', description: '21:54 - 22:08。Klook 訂票 (預訂 x8)。抵港後 Uber 回飯店 (30分鐘)。', isImportant: true }
        ]
      },
      {
        day: '第三天',
        date: '2/24 (二) 香港',
        weather: '18°C - 23°C 🌤️ 晴時多雲',
        items: [
          { id: '3-1', time: '10:30', title: '自由活動', description: '睡到自然醒。早午餐。' },
          { id: '3-2', time: '12:00', title: '午餐', description: '當地餐廳 (待定)。', links: [{ label: '尖沙咀美食', url: 'https://www.google.com/maps/search/?api=1&query=Restaurants+near+Tsim+Sha+Tsui', type: 'food' }] },
          { id: '3-3', time: '14:00', title: '逛街 / 廟街', description: '彌敦道購物。稍晚前往廟街夜市。' },
          { id: '3-4', time: '18:30', title: '晚餐', description: '建議：坤記煲仔飯 (Kwan Kee Claypot Rice)。步行前往。', links: [{ label: '坤記地圖', url: 'https://www.google.com/maps/search/?api=1&query=Kwan+Kee+Claypot+Rice', type: 'food' }] },
          { id: '3-5', time: '20:00', title: '維多利亞港夜景', description: '星光大道散步。' }
        ]
      },
      {
        day: '第四天',
        date: '2/25 (三) 澳門',
        weather: '17°C - 22°C ☀️ 晴朗',
        items: [
          { id: '4-1', time: '08:30', title: '前往碼頭', description: 'Uber (30分鐘) 往上環信德中心或中港城。', isImportant: true, links: [{ label: '上環碼頭', url: 'https://www.google.com/maps/place/%E9%A6%99%E6%B8%AF%E5%B0%96%E6%B2%99%E5%92%80%E4%B8%AD%E5%9C%8B%E5%AE%A2%E9%81%8B%E7%A2%BC%E9%A0%AD/@22.2989038,114.1628425,912m/data=!3m1!1e3!4m6!3m5!1s0x3404009297fce72d:0x7475eca620a27198!8m2!3d22.2990876!4d114.1662761!16s%2Fg%2F12hnz4ztj?entry=ttu&g_ep=EgoyMDI2MDIxMS4wIKXMDSoASAFQAw%3D%3D', type: 'map' }] },
          { id: '4-2', time: '10:30', title: '渡輪往澳門', description: '外港客運碼頭 (1小時)。Klook 訂票 (預訂 x4 + x4)。', isImportant: true },
          { id: '4-3', time: '12:00', title: '大三巴牌坊', description: 'Uber (10分鐘)。觀光。', links: [{ label: '地圖', url: 'https://www.google.com/maps/search/?api=1&query=Ruins+of+St+Paul+Macau', type: 'map' }] },
          { id: '4-4', time: '13:00', title: '午餐：黃枝記', description: '步行 10 分鐘。議事亭前地。', links: [{ label: '黃枝記', url: 'https://www.google.com/maps/search/?api=1&query=Wong+Chi+Kei+Macau', type: 'food' }] },
          { id: '4-5', time: '16:00', title: '前往新濠天地', description: 'Uber (20分鐘)。看秀。', links: [{ label: '新濠天地地圖', url: 'https://www.google.com/maps/search/?api=1&query=City+of+Dreams+Macau', type: 'info' }] },
          { id: '4-6', time: '17:00', title: '水舞間', description: '演出約 1小時20分。已預訂 x8。', imageUrl: 'https://duk.tw/tUFMsH.jpg' },
          { id: '4-7', time: '19:00', title: '官也街晚餐', description: '氹仔村吃葡國菜或小吃。', links: [{ label: '官也街', url: 'https://www.google.com/maps/search/?api=1&query=Rua+do+Cunha+Macau', type: 'food' }] },
          { id: '4-8', time: '20:30', title: '前往氹仔碼頭', description: 'Uber (10分鐘)。', links: [{ label: '氹仔碼頭', url: 'https://www.google.com/maps/search/?api=1&query=Taipa+Ferry+Terminal', type: 'map' }] },
          { id: '4-9', time: '22:00', title: '渡輪回香港', description: '氹仔 -> 上環。Klook 訂票 (預訂 x2 + x2x3)。Uber 回飯店 (30分鐘)。', isImportant: true }
        ]
      },
      {
        day: '第五天',
        date: '2/26 (四) 返程',
        weather: '18°C - 24°C 🌤️ 晴朗',
        items: [
          { id: '5-1', time: '10:30', title: '最後採購 / Bakehouse', description: '維多利亞港晨景。購買 Bakehouse 蛋塔。', links: [{ label: 'Bakehouse TST', url: 'https://www.google.com/maps/search/?api=1&query=Bakehouse+Tsim+Sha+Tsui', type: 'food' }] },
          { id: '5-2', time: '12:15', title: '退房', description: '金域假日酒店退房。' },
          { id: '5-3', time: '12:30', title: '前往機場', description: 'Klook 包車接送 (預訂 x2)。12:45 大廳集合。', isImportant: true },
          { id: '5-4', time: '13:45', title: '機場午餐', description: '登機前用餐。' },
          { id: '5-5', time: '15:45', title: 'SG 航班', description: '新加坡團隊 15:45 起飛。' },
          { id: '5-6', time: '17:35', title: 'TW 航班', description: '台灣團隊 17:35 起飛。' }
        ]
      }
    ],
    guides: [
      {
        id: 'CN',
        name: '中國',
        souvenirs: [
          {
            id: 'cn-shop',
            name: 'Miniso / KKV',
            description: '平價生活小物、盲盒，款式比香港多。',
            tags: ['購物'],
            mustBuy: ['Chiikawa 盲盒', '公仔玩偶'],
            imageUrl: 'https://duk.tw/T1N6zx.png'
          }
        ],
        taxInfo: {
          title: '中國大陸 退稅須知',
          content: '境外旅客在指定「退稅商店」消費滿 500 人民幣，可申請 11% 增值稅退稅。',
          steps: [
            '同一天、同一店消費滿 500 RMB。',
            '索取「離境退稅申請單」及增值稅發票。',
            '離境時 (如深圳機場/碼頭) 向海關出示護照、商品、單據。',
            '退稅款通常退回支付寶或銀行卡。'
          ]
        }
      },
      {
        id: 'HK',
        name: '香港',
        souvenirs: [
          {
            id: 'hk-jenny',
            name: '珍妮曲奇 (小熊餅乾)',
            description: '尖沙咀美麗都大廈。著名的奶油曲奇，通常需排隊。',
            tags: ['美食', '熱門'],
            mustBuy: ['四味奶油曲奇', '咖啡花曲奇'],
            imageUrl: 'https://duk.tw/gg19gR.webp'
          },
          {
            id: 'hk-bake',
            name: 'Bakehouse',
            description: '酸種蛋塔。建議提前預訂或早上去排隊。',
            tags: ['美食'],
            mustBuy: ['酸種蛋塔 (Sourdough Tart)', '可頌 (Croissant)'],
            imageUrl: 'https://duk.tw/U4SqTe.jpg'
          },
          {
            id: 'hk-lemon',
            name: '檸檬王',
            description: '上環甘草檸檬，老字號零嘴。',
            tags: ['零食'],
            mustBuy: ['甘草檸檬', '甘草欖']
          },
          {
            id: 'hk-duck',
            name: '德成號',
            description: '北角蛋捲。非常難買，需清晨排隊。',
            tags: ['美食'],
            mustBuy: ['家鄉雞蛋捲', '椰汁雞蛋捲'],
            imageUrl: 'https://duk.tw/OmXSXn.jpg'
          },
          {
            id: 'hk-pen',
            name: '半島酒店精品店',
            description: 'XO醬、巧克力，送禮體面。',
            tags: ['高級'],
            mustBuy: ['XO醬', '巧克力禮盒']
          },
          {
            id: 'hk-snacks',
            name: '零食',
            description: '超市必買熱門零食，便宜好吃。',
            tags: ['零食'],
            mustBuy: ['熱浪薯片', '維他奶']
          }
        ],
        taxInfo: {
          title: '香港 免稅須知',
          content: '香港是自由港，絕大多數商品無銷售稅 (VAT)。',
          steps: [
            '您看到的價格即為最終價格。',
            '無需辦理任何退稅手續。',
            '例外：菸草和酒精飲品含有稅金。'
          ]
        }
      },
      {
        id: 'MO',
        name: '澳門',
        souvenirs: [
          {
            id: 'mo-koi',
            name: '鉅記手信',
            description: '杏仁餅、花生糖。分店遍佈全澳。',
            tags: ['美食'],
            mustBuy: ['粒粒杏仁餅', '花生糖'],
            imageUrl: 'https://duk.tw/BL4isA.png'
          },
          {
            id: 'mo-stow',
            name: '安德魯 / 瑪嘉烈',
            description: '葡式蛋塔。路環總店 (安德魯) 最經典。',
            tags: ['美食'],
            mustBuy: ['葡式蛋塔'],
            imageUrl: 'https://duk.tw/iywCEp.png'
          },
          {
            id: 'mo-jerky',
            name: '豬肉乾',
            description: '大三巴街有許多店家提供試吃與販售。',
            tags: ['零食'],
            mustBuy: ['野豬肉乾', '黑胡椒牛肉乾']
          },
          {
            id: 'mo-omoon',
            name: 'O Moon',
            description: '充滿澳門元素的文創商品。',
            tags: ['禮品'],
            mustBuy: ['花磚杯墊', '月球燈'],
            imageUrl: 'https://duk.tw/1R4vhd.jpg'
          }
        ],
        taxInfo: {
          title: '澳門 免稅須知',
          content: '澳門也是自由港，大部分商品免稅。',
          steps: [
            '無消費稅，購物無需退稅。',
            '盡情享受購物樂趣。'
          ]
        }
      }
    ],
    checklist: [
      '護照 / 台胞證 (檢查有效期)',
      '中國簽證 (如需要)',
      '支付寶 / WeChat Pay (綁定信用卡)',
      '漫遊 / 網卡 / eSIM',
      '行動電源',
      '好走的鞋',
      '個人常備藥品'
    ],
    info: {
      weather: {
        title: '天氣預報',
        subtitle: '查詢 香港/澳門/中國 天氣',
        url: 'https://www.hko.gov.hk/tc/'
      },
      emergency: {
        title: '緊急聯絡',
        police: '報警: 999 (港澳) / 110 (中)',
        ambulance: '救護: 999 (港澳) / 120 (中)',
        office: '辦事處 / 協助',
        officeName: '台北經濟文化辦事處'
      },
      rules: {
        title: '旅遊注意事項',
        items: [
          '香港: 地鐵內禁止飲食。',
          '澳門: 賭場需年滿 21 歲。',
          '搭乘計程車建議準備現金 (HKD/RMB)。',
          '中國: 使用 eSIM 可無限制上網。'
        ]
      }
    }
  }
};