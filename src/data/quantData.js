export const quantTopics = [
  {
    "id": "quant-numbers",
    "title": "Number Systems & Divisibility",
    "category": "Quantitative Aptitude",
    "categoryOrder": 3,
    "icon": "Binary",
    "estimatedTime": "30 min",
    "description": "Algebraic identities, classification of numbers, remainder theorem, HCF & LCM, and divisibility tests.",
    "subtopics": [
      "Algebraic Formulas ((a+b)\u00b2, (a\u00b3+b\u00b3), a\u00b3+b\u00b3+c\u00b3-3abc)",
      "Classifications (Natural, Whole, Integers, Prime, Composite)",
      "Tests of Divisibility (2, 3, 4, 5, 6, 8, 9, 10, 11)",
      "HCF & LCM Properties: Product = HCF \u00d7 LCM",
      "Remainder Arithmetic: p = k\u00b7q + r"
    ],
    "theory": {
      "overview": "Number theory is foundational to Quantitative Aptitude in Infosys. It includes divisibility rules, factors, primes, HCF/LCM, and algebraic expansions.",
      "keyRules": [
        "Important Identity: If a + b + c = 0, then a\u00b3 + b\u00b3 + c\u00b3 = 3abc.",
        "(a + b)\u00b2 - (a - b)\u00b2 = 4ab, and (a + b)\u00b2 + (a - b)\u00b2 = 2(a\u00b2 + b\u00b2).",
        "Divisible by 3: Sum of digits is divisible by 3.",
        "Divisible by 4: Last two digits form a number divisible by 4.",
        "Divisible by 8: Last three digits form a number divisible by 8.",
        "Divisible by 9: Sum of digits is divisible by 9.",
        "Divisible by 11: Difference between sum of odd placed digits and even placed digits is 0 or multiple of 11.",
        "Product of two numbers = HCF \u00d7 LCM."
      ],
      "examples": [
        {
          "problem": "What is the smallest number to add to 89357 to make it divisible by 9?",
          "solution": "Sum of digits = 8+9+3+5+7 = 32. Next multiple of 9 is 36. Add 36 - 32 = 4.",
          "tip": "Divisibility by 9 sum of digits"
        },
        {
          "problem": "HCF = 11, LCM = 7700. One number is 275. Find the other.",
          "solution": "Other number = (HCF \u00d7 LCM) / First = (11 \u00d7 7700) / 275 = 308.",
          "tip": "HCF \u00d7 LCM = A \u00d7 B"
        }
      ],
      "tips": [
        "2 is the only even prime number.",
        "There are exactly 25 prime numbers between 1 and 100."
      ]
    },
    "questions": [
      {
        "id": 1,
        "question": "The number obtained by interchanging the two digits of a two-digit number is more than the original number by 27. If the sum of digits is 13, what is the original number?",
        "options": [
          "63",
          "74",
          "85",
          "58"
        ],
        "correctIndex": 3,
        "explanation": "Let original number be 10x + y. Sum of digits: x + y = 13. Interchanged number: 10y + x = (10x + y) + 27 => 9(y - x) = 27 => y - x = 3. Solving: y = 8, x = 5. Original number = 58."
      },
      {
        "id": 2,
        "question": "What is the smallest number that should be added to 89357 to make it exactly divisible by 9?",
        "options": [
          "1",
          "3",
          "4",
          "7"
        ],
        "correctIndex": 2,
        "explanation": "Sum of digits of 89357 = 8 + 9 + 3 + 5 + 7 = 32. The nearest multiple of 9 greater than 32 is 36. Smallest number to add = 36 - 32 = 4."
      },
      {
        "id": 3,
        "question": "The difference between two numbers is 4 and the difference between their squares is 128. What is the larger number?",
        "options": [
          "14",
          "16",
          "12",
          "18"
        ],
        "correctIndex": 3,
        "explanation": "Let numbers be x and y (x > y). x - y = 4. x\u00b2 - y\u00b2 = (x - y)(x + y) = 128 => 4(x + y) = 128 => x + y = 32. Adding: 2x = 36 => x = 18."
      },
      {
        "id": 4,
        "question": "The LCM and HCF of two positive numbers are 300 and 30. If one number divided by 4 gives quotient 15, what is the other number?",
        "options": [
          "360",
          "150",
          "300",
          "75"
        ],
        "correctIndex": 1,
        "explanation": "First number = 4 \u00d7 15 = 60. Using Product = HCF \u00d7 LCM: 60 \u00d7 Other = 30 \u00d7 300 = 9000 => Other = 9000 / 60 = 150."
      },
      {
        "id": 5,
        "question": "The HCF of two numbers is 11 and their LCM is 7700. If one number is 275, find the other.",
        "options": [
          "279",
          "283",
          "308",
          "318"
        ],
        "correctIndex": 2,
        "explanation": "Other number = (11 \u00d7 7700) / 275 = 84700 / 275 = 308."
      }
    ]
  },
  {
    "id": "quant-percentage",
    "title": "Percentages & Ratios",
    "category": "Quantitative Aptitude",
    "categoryOrder": 3,
    "icon": "Percent",
    "estimatedTime": "25 min",
    "description": "Percentage calculations, fraction-ratio equivalence, product stability, population and depreciation formulas.",
    "subtopics": [
      "Fraction - Percentage Equivalence (1/3=33.3%, 1/6=16.66%, 1/8=12.5%)",
      "Percentage Change & Successive Percentage: a + b + ab/100",
      "Product Stability Ratio (A \u00d7 B = Constant)",
      "Population Growth P(1 + R/100)^n & Depreciation P(1 - R/100)^n",
      "Venn Diagram Percentages (Union & Intersection)"
    ],
    "theory": {
      "overview": "A percentage is a pure dimensionless number expressed as a fraction of 100. Mastery of fraction-percentage equivalences enables fast mental calculations.",
      "keyRules": [
        "p% of y = y% of p = (p \u00d7 y) / 100.",
        "Percentage Increase: N \u00d7 (1 + S/100); Decrease: N \u00d7 (1 - S/100).",
        "Compensatory Reduction: If price increases by x%, consumption must reduce by [100x / (100 + x)]% to keep expenditure constant.",
        "Successive Percentage: Effective change = [a + b + (ab/100)]%.",
        "If A is R% more than B, then B is less than A by [R / (100 + R)] \u00d7 100%."
      ],
      "tips": [
        "Memorize: 1/7 \u2248 14.28%, 1/9 \u2248 11.11%, 1/11 \u2248 9.09%, 1/12 \u2248 8.33%, 1/16 \u2248 6.25%."
      ]
    },
    "questions": [
      {
        "id": 1,
        "question": "If 44% of a number is 275, what is 64% of the same number?",
        "options": [
          "450",
          "400",
          "375",
          "500"
        ],
        "correctIndex": 1,
        "explanation": "Let number be X. 0.44X = 275 => X = 275 / 0.44 = 625. Now 64% of 625 = 0.64 \u00d7 625 = 400."
      },
      {
        "id": 2,
        "question": "If A's salary is 20% more than that of B, how much percent is B's salary less than that of A?",
        "options": [
          "16 2/3%",
          "20%",
          "40%",
          "10%"
        ],
        "correctIndex": 0,
        "explanation": "Formula: [R / (100 + R)] \u00d7 100% = [20 / 120] \u00d7 100% = 1/6 \u00d7 100% = 16 2/3%."
      },
      {
        "id": 3,
        "question": "If the price of 1 kg of rice is increased by 25%, the increased amount is Rs. 12. What is the new price per kg?",
        "options": [
          "Rs. 48",
          "Rs. 60",
          "Rs. 72",
          "Rs. 36"
        ],
        "correctIndex": 1,
        "explanation": "25% of Original Price = 12 => Original Price = 12 \u00d7 4 = 48. New Price = 48 + 12 = Rs. 60."
      },
      {
        "id": 4,
        "question": "The population of a town is 15625. It increases 8% annually. What will it be at the end of 3 years?",
        "options": [
          "16983",
          "18693",
          "19683",
          "19638"
        ],
        "correctIndex": 2,
        "explanation": "P_3 = 15625 \u00d7 (1 + 8/100)\u00b3 = 15625 \u00d7 (27/25)\u00b3 = 15625 \u00d7 (19683 / 15625) = 19683."
      }
    ]
  },
  {
    "id": "quant-profit-loss",
    "title": "Profit, Loss & Discount",
    "category": "Quantitative Aptitude",
    "categoryOrder": 3,
    "icon": "TrendingUp",
    "estimatedTime": "30 min",
    "description": "Cost Price, Selling Price, Marked Price, successive discounts, and dishonest dealer weighing errors.",
    "subtopics": [
      "Basic Profit & Loss Formulas (Gain% = Gain/CP \u00d7 100)",
      "Cost Price = 100/(100 + Gain%) \u00d7 SP",
      "Two Items Sold at Equal SP with Equal Gain & Loss: Loss = (x/10)\u00b2 %",
      "Single Discount Equivalent to Successive Discounts: (a + b - ab/100)%",
      "Faulty Weights: Gain% = [Error / (True Value - Error)] \u00d7 100"
    ],
    "theory": {
      "overview": "Profit and Loss governs commercial arithmetic. Profit or loss is always computed with respect to Cost Price (CP) unless specifically indicated otherwise.",
      "keyRules": [
        "Gain = SP - CP; Loss = CP - SP.",
        "Gain% = (Gain / CP) \u00d7 100; Loss% = (Loss / CP) \u00d7 100.",
        "If CP of m articles = SP of n articles, Profit% = [(m - n) / n] \u00d7 100%.",
        "Successive discounts d1 and d2 have equivalent discount = (d1 + d2 - d1\u00b7d2/100)%.",
        "Dishonest shopkeeper using false weight: Gain% = [Error / (True Value - Error)] \u00d7 100."
      ],
      "tips": [
        "Markup is applied on Cost Price; Discount is deducted from Marked Price."
      ]
    },
    "questions": [
      {
        "id": 1,
        "question": "The cost price of 10 articles is equal to the selling price of 9 articles. Find the profit percent.",
        "options": [
          "101/9 %",
          "100/9 % (11 1/9 %)",
          "102/9 %",
          "103/9 %"
        ],
        "correctIndex": 1,
        "explanation": "Formula: [(m - n)/n] \u00d7 100% = [(10 - 9)/9] \u00d7 100% = 100/9% = 11 1/9%."
      },
      {
        "id": 2,
        "question": "Manish sold two mobiles for Rs. 9900 each. On one he gained 10% and on the other he lost 10%. Find his overall gain or loss percentage.",
        "options": [
          "Loss 1%",
          "Neither loss nor gain",
          "Gain 1%",
          "Loss 2%"
        ],
        "correctIndex": 0,
        "explanation": "When two articles are sold at same SP, one at x% gain and other at x% loss, overall result is ALWAYS a loss: (x/10)\u00b2 % = (10/10)\u00b2 % = 1% Loss."
      },
      {
        "id": 3,
        "question": "If the selling price is doubled, the profit triples. Find the original profit percent.",
        "options": [
          "100%",
          "116.67%",
          "200%",
          "300%"
        ],
        "correctIndex": 0,
        "explanation": "Let CP = C, SP = S. Profit P = S - C. If SP becomes 2S, new profit = 2S - C = 3P = 3(S - C) => 2S - C = 3S - 3C => S = 2C. Original profit = (2C - C)/C = 100%."
      },
      {
        "id": 4,
        "question": "The list price of an electric iron is Rs. 300. If two successive discounts of 15% and 10% are allowed, its selling price will be:",
        "options": [
          "Rs. 229.50",
          "Rs. 231.50",
          "Rs. 232.50",
          "Rs. 234.50"
        ],
        "correctIndex": 0,
        "explanation": "Price after 15% discount = 300 \u00d7 0.85 = 255. Price after second 10% discount = 255 \u00d7 0.90 = Rs. 229.50."
      }
    ]
  },
  {
    "id": "quant-time-distance",
    "title": "Time, Speed & Distance",
    "category": "Quantitative Aptitude",
    "categoryOrder": 3,
    "icon": "Gauge",
    "estimatedTime": "30 min",
    "description": "Speed conversion, average speeds, relative motion, train crossings, and boats & streams.",
    "subtopics": [
      "Speed Conversions (km/hr \u00d7 5/18 = m/s)",
      "Average Speed for Equal Distance: 2xy / (x + y)",
      "Relative Speed (Opposite: v1 + v2; Same: |v1 - v2|)",
      "Trains Crossing Objects (Pole: Length=L; Platform: Length=L+P)",
      "Boats & Streams: Downstream = b+s, Upstream = b-s"
    ],
    "theory": {
      "overview": "Time, Speed and Distance problems depend on the relation Distance = Speed \u00d7 Time. When distances are equal, speed is inversely proportional to time.",
      "keyRules": [
        "1 km/hr = 5/18 m/s; 1 m/s = 18/5 km/hr.",
        "Average Speed for two equal distance legs at speeds x and y is 2xy / (x + y).",
        "Relative Speed: In same direction = (V1 - V2); In opposite direction = (V1 + V2).",
        "Train crossing pole: Distance = Length of train.",
        "Train crossing bridge/platform: Distance = Length of train + Length of platform.",
        "Boat speed in still water b = (Downstream + Upstream) / 2; Stream speed s = (Downstream - Upstream) / 2."
      ],
      "tips": [
        "Always check units before computing! Ensure meters align with seconds and km with hours."
      ]
    },
    "questions": [
      {
        "id": 1,
        "question": "A bus covers a distance of 216 km in 4 hours. What is the speed of the bus in m/s?",
        "options": [
          "5 m/s",
          "20 m/s",
          "15 m/s",
          "18 m/s"
        ],
        "correctIndex": 2,
        "explanation": "Speed in km/hr = 216 / 4 = 54 km/hr. Converting to m/s: 54 \u00d7 (5/18) = 3 \u00d7 5 = 15 m/s."
      },
      {
        "id": 2,
        "question": "Excluding stoppages, the speed of a bus is 64 kmph and including stoppages it is 48 kmph. For how many minutes does the bus stop per hour?",
        "options": [
          "15 min",
          "12.5 min",
          "10 min",
          "18 min"
        ],
        "correctIndex": 0,
        "explanation": "Time of stoppage per hour = (Difference in speed / Speed without stoppages) \u00d7 60 = [(64 - 48)/64] \u00d7 60 = (16/64) \u00d7 60 = 15 minutes."
      },
      {
        "id": 3,
        "question": "A goods train runs at 72 kmph and crosses a 250 m long platform in 26 seconds. What is the length of the train?",
        "options": [
          "230 m",
          "240 m",
          "260 m",
          "270 m"
        ],
        "correctIndex": 3,
        "explanation": "Speed = 72 \u00d7 (5/18) = 20 m/s. Total distance in 26 seconds = 20 \u00d7 26 = 520 m. Length of train = Total distance - Platform length = 520 - 250 = 270 m."
      },
      {
        "id": 4,
        "question": "A motorboat whose speed is 15 km/hr in still water goes 30 km downstream and comes back in a total of 4 hours 30 minutes. What is the speed of the stream?",
        "options": [
          "4 km/hr",
          "5 km/hr",
          "6 km/hr",
          "10 km/hr"
        ],
        "correctIndex": 1,
        "explanation": "30/(15+s) + 30/(15-s) = 4.5. Testing s = 5: 30/20 + 30/10 = 1.5 + 3 = 4.5 hours. Exactly matches!"
      }
    ]
  },
  {
    "id": "quant-time-work",
    "title": "Time & Work",
    "category": "Quantitative Aptitude",
    "categoryOrder": 3,
    "icon": "Briefcase",
    "estimatedTime": "25 min",
    "description": "Unitary work rate, MDH chain rule, wages division, alternate working days, and pipes & cisterns.",
    "subtopics": [
      "Work Rate Concept (1/n work per day)",
      "Combined Work Rate: 1/A + 1/B + 1/C",
      "Chain Rule: (M1 \u00d7 D1 \u00d7 H1)/W1 = (M2 \u00d7 D2 \u00d7 H2)/W2",
      "Alternate Days Work",
      "Pipes & Cisterns (Inlet + vs Outlet -)"
    ],
    "theory": {
      "overview": "If A completes work in n days, 1 day's work is 1/n. Total work is usually represented as 1 unit or as the LCM of days for clean integer calculation.",
      "keyRules": [
        "Two persons A and B together finish in: (A \u00d7 B) / (A + B) days.",
        "Chain Rule: (M1 \u00d7 D1 \u00d7 H1) / W1 = (M2 \u00d7 D2 \u00d7 H2) / W2.",
        "Efficiency Ratio: Ratio of time taken is the reciprocal of the ratio of efficiency.",
        "Pipes and Cisterns: Inlet pipe does positive work (+1/x); Outlet/leak pipe does negative work (-1/y)."
      ],
      "tips": [
        "Use the LCM method: Assign total units of work equal to the LCM of individual completion days."
      ]
    },
    "questions": [
      {
        "id": 1,
        "question": "15 men can type 3240 pages in 6 days working 2 hours per day. How many men would be required to type 5400 pages working 4 hours per day for 3 days?",
        "options": [
          "10",
          "16",
          "12",
          "25"
        ],
        "correctIndex": 3,
        "explanation": "Using MDH: (15 \u00d7 6 \u00d7 2) / 3240 = (M \u00d7 3 \u00d7 4) / 5400 => 180 / 3240 = 12M / 5400 => 1/18 = 12M/5400 => 12M = 300 => M = 25 men."
      },
      {
        "id": 2,
        "question": "A, B and C can finish a piece of work in 10, 15 and 30 days respectively. How many days will be required if they work together?",
        "options": [
          "5 days",
          "6 days",
          "7 days",
          "8 days"
        ],
        "correctIndex": 0,
        "explanation": "LCM(10, 15, 30) = 30 units total work. Daily work: A=3, B=2, C=1. Combined = 3 + 2 + 1 = 6 units/day. Days = 30 / 6 = 5 days."
      },
      {
        "id": 3,
        "question": "Pipes A and B can fill a cistern in 10 and 12 hours respectively and pipe C can empty it in 6 hours. If all three are opened simultaneously, when will the tank be full?",
        "options": [
          "20 hours",
          "60 hours",
          "80 hours",
          "40 hours"
        ],
        "correctIndex": 1,
        "explanation": "Net rate per hour = 1/10 + 1/12 - 1/6 = (6 + 5 - 10)/60 = 1/60. Thus the tank fills in 60 hours."
      }
    ]
  },
  {
    "id": "quant-alligation",
    "title": "Mixtures & Alligation",
    "category": "Quantitative Aptitude",
    "categoryOrder": 3,
    "icon": "Beaker",
    "estimatedTime": "25 min",
    "description": "Alligation rule, mean price determination, and repeated liquid replacement formulas.",
    "subtopics": [
      "Alligation Cross Rule: Qc / Qd = (d - m) / (m - c)",
      "Mean Value and Weighted Average",
      "Successive Replacement Formula: Initial \u00d7 (1 - x/V)^n",
      "Concentration Adjustments"
    ],
    "theory": {
      "overview": "Alligation is a modified form of weighted averages used to find the ratio in which two or more ingredients at given prices/concentrations must be mixed to produce a mixture of desired mean value.",
      "keyRules": [
        "Rule: (Cheaper Quantity) / (Dearer Quantity) = (Price of Dearer - Mean Price) / (Mean Price - Price of Cheaper).",
        "Replacement Formula: If from a vessel containing V litres of liquid, x litres are removed and replaced with water n times, the remaining quantity of pure liquid is: V \u00d7 [1 - (x/V)]^n."
      ],
      "tips": [
        "Ensure all prices (cheaper, dearer, mean) are expressed on the same basis (e.g. all CP, never mix CP and SP directly without converting)."
      ]
    },
    "questions": [
      {
        "id": 1,
        "question": "A dairyman pays Rs. 6.40 per litre of milk. He adds water and sells the mixture at Rs. 8 per litre, making 37.5% profit. Find the ratio of water to milk.",
        "options": [
          "1 : 15",
          "1 : 10",
          "1 : 20",
          "1 : 12"
        ],
        "correctIndex": 1,
        "explanation": "Selling price = Rs. 8, Profit = 37.5% = 3/8. Cost price of mixture = 8 / (1 + 3/8) = Rs. 5.818... Milk cost 6.4, water cost 0. Ratio of water to milk = (6.4 - 5.818) / (5.818 - 0) = 1 : 10."
      },
      {
        "id": 2,
        "question": "A container had milk. 10% was removed and replaced with water. This was repeated for a total of 3 days. If 729 L of milk remains, what was the initial quantity?",
        "options": [
          "1200 L",
          "1500 L",
          "1000 L",
          "1300 L"
        ],
        "correctIndex": 2,
        "explanation": "Remaining = Initial \u00d7 (1 - 0.10)\u00b3 = Initial \u00d7 (0.9)\u00b3 = Initial \u00d7 0.729. Since remaining is 729 L: Initial \u00d7 0.729 = 729 => Initial = 1000 L."
      }
    ]
  },
  {
    "id": "quant-mensuration",
    "title": "Mensuration (2D & 3D)",
    "category": "Quantitative Aptitude",
    "categoryOrder": 3,
    "icon": "Box",
    "estimatedTime": "30 min",
    "description": "Perimeter, area, lateral and total surface areas, and volume formulas for 2D and 3D shapes.",
    "subtopics": [
      "2D Figures: Square, Rectangle, Triangles (Scalene, Equilateral, Right), Circle",
      "3D Solids: Cube, Cuboid, Sphere, Hemisphere, Cylinder, Cone",
      "Volume, CSA (Curved Surface Area), and TSA (Total Surface Area)",
      "Melting and Recasting Conservation of Volume"
    ],
    "theory": {
      "overview": "Mensuration deals with calculating length, area, perimeter, and volume of geometric figures.",
      "keyRules": [
        "Square: Area = a\u00b2, Perimeter = 4a, Diagonal = a\u221a2.",
        "Rectangle: Area = l \u00d7 b, Perimeter = 2(l + b), Diagonal = \u221a(l\u00b2 + b\u00b2).",
        "Equilateral Triangle: Area = (\u221a3/4)a\u00b2, Perimeter = 3a.",
        "Circle: Area = \u03c0r\u00b2, Circumference = 2\u03c0r.",
        "Cylinder: Volume = \u03c0r\u00b2h, CSA = 2\u03c0rh, TSA = 2\u03c0r(r + h).",
        "Cone: Volume = (1/3)\u03c0r\u00b2h, Slant height l = \u221a(r\u00b2 + h\u00b2), CSA = \u03c0rl.",
        "Sphere: Volume = (4/3)\u03c0r\u00b3, Surface Area = 4\u03c0r\u00b2.",
        "Cuboid: Volume = l\u00b7b\u00b7h, TSA = 2(lb + bh + hl), Diagonal = \u221a(l\u00b2 + b\u00b2 + h\u00b2)."
      ],
      "tips": [
        "When a solid is melted and recast into another shape, its VOLUME remains strictly invariant."
      ]
    },
    "questions": [
      {
        "id": 1,
        "question": "Perimeter of a square and an equilateral triangle is equal. If the diagonal of the square is 15\u221a2 cm, find the area of the square.",
        "options": [
          "144 sq cm",
          "225 sq cm",
          "288 sq cm",
          "196 sq cm"
        ],
        "correctIndex": 1,
        "explanation": "Diagonal of square = a\u221a2 = 15\u221a2 => Side of square a = 15 cm. Area of square = a\u00b2 = 15\u00b2 = 225 sq cm."
      },
      {
        "id": 2,
        "question": "A rectangular carpet has an area of 120 m\u00b2 and a perimeter of 46 m. What is the length of its diagonal?",
        "options": [
          "15 m",
          "16 m",
          "17 m",
          "20 m"
        ],
        "correctIndex": 2,
        "explanation": "l \u00b7 b = 120, 2(l + b) = 46 => l + b = 23. Diagonal d = \u221a(l\u00b2 + b\u00b2) = \u221a((l+b)\u00b2 - 2lb) = \u221a(23\u00b2 - 2(120)) = \u221a(529 - 240) = \u221a289 = 17 m."
      },
      {
        "id": 3,
        "question": "A right circular cylinder is filled with water. How many right cones of same diameter and height are needed to hold that water?",
        "options": [
          "2",
          "3",
          "4",
          "5"
        ],
        "correctIndex": 1,
        "explanation": "Volume of cylinder = \u03c0r\u00b2h. Volume of cone of same radius and height = (1/3)\u03c0r\u00b2h. Therefore, exactly 3 cones are required."
      }
    ]
  },
  {
    "id": "quant-permutation-combination",
    "title": "Permutation & Combination",
    "category": "Quantitative Aptitude",
    "categoryOrder": 3,
    "icon": "Shuffle",
    "estimatedTime": "30 min",
    "description": "Counting principles, arrangement (nPr), selection (nCr), circular permutations, and anagrams.",
    "subtopics": [
      "Fundamental Principles of Multiplication and Addition",
      "Permutations: Order Matters (nPr = n! / (n - r)!)",
      "Combinations: Order Does Not Matter (nCr = n! / [r!(n - r)!])",
      "Arrangements with Identical Items: n! / (p! \u00b7 q!)",
      "Circular Permutations: (n - 1)! or (n - 1)! / 2"
    ],
    "theory": {
      "overview": "Permutations concern arrangement of objects in definite order. Combinations concern selection of groups of objects where order is irrelevant.",
      "keyRules": [
        "nPr = n! / (n - r)!; nCr = n! / [r! (n - r)!].",
        "Pascal's Rule: nCr-1 + nCr = (n+1)Cr.",
        "Circular Permutation: Clockwise and anticlockwise different: (n - 1)!; If same (garlands, necklaces): (n - 1)! / 2.",
        "Letters with repetition: Ways to arrange letters in word = Total letters! / (repeat count!)."
      ],
      "tips": [
        "When items must be 'together', bind them together into a single composite entity."
      ]
    },
    "questions": [
      {
        "id": 1,
        "question": "In how many different ways can 5 persons stand in a row for a photograph?",
        "options": [
          "100",
          "120",
          "50",
          "24"
        ],
        "correctIndex": 1,
        "explanation": "Number of ways = 5! = 5 \u00d7 4 \u00d7 3 \u00d7 2 \u00d7 1 = 120."
      },
      {
        "id": 2,
        "question": "How many different words can be formed using the letters of the word 'BANKER'?",
        "options": [
          "120",
          "6",
          "720",
          "360"
        ],
        "correctIndex": 2,
        "explanation": "'BANKER' has 6 distinct letters. Number of permutations = 6! = 720."
      },
      {
        "id": 3,
        "question": "In how many ways can 6 persons be seated around a circular table for dinner?",
        "options": [
          "6!",
          "5! (120)",
          "5!/2 (60)",
          "720"
        ],
        "correctIndex": 1,
        "explanation": "For circular seating of n distinct persons, number of arrangements is (n - 1)! = (6 - 1)! = 5! = 120."
      },
      {
        "id": 4,
        "question": "In a party, there are 15 persons and every person shakes hands with every other person once. What is the total number of handshakes?",
        "options": [
          "105",
          "120",
          "140",
          "210"
        ],
        "correctIndex": 0,
        "explanation": "Handshakes = C(15, 2) = (15 \u00d7 14) / 2 = 105."
      }
    ]
  },
  {
    "id": "quant-probability",
    "title": "Probability",
    "category": "Quantitative Aptitude",
    "categoryOrder": 3,
    "icon": "Dices",
    "estimatedTime": "25 min",
    "description": "Sample spaces, events, independent events, dice rolls, coin tosses, and colored marble selections.",
    "subtopics": [
      "Sample Spaces & Classical Definition: P(E) = n(E) / n(S)",
      "Complementary Event: P(E') = 1 - P(E)",
      "Dice Problems (n=6, sum pairs in 2 dice)",
      "Coins Tossing (2^n outcomes)",
      "Marble and Ball Drawings Without Replacement"
    ],
    "theory": {
      "overview": "Probability measures the likelihood of an outcome. The probability of an event always satisfies 0 \u2264 P(E) \u2264 1.",
      "keyRules": [
        "P(E) = (Favorable Outcomes) / (Total Outcomes in Sample Space).",
        "At least one condition: P(At least one) = 1 - P(None).",
        "Two dice thrown simultaneously: Total sample space = 6 \u00d7 6 = 36."
      ],
      "tips": [
        "For 'At least one' problems, always compute the complementary probability of 'None' and subtract from 1."
      ]
    },
    "questions": [
      {
        "id": 1,
        "question": "When two coins are tossed simultaneously, what is the probability that both show heads?",
        "options": [
          "1/6",
          "1/3",
          "1/2",
          "1/4"
        ],
        "correctIndex": 3,
        "explanation": "Sample space S = {HH, HT, TH, TT}, size = 4. Favorable = {HH} = 1. Probability = 1/4."
      },
      {
        "id": 2,
        "question": "When two dice are rolled together, what is the probability that the sum of the outputs is 8?",
        "options": [
          "1/36",
          "7/36",
          "5/36",
          "8/36"
        ],
        "correctIndex": 2,
        "explanation": "Pairs giving sum 8: (2,6), (3,5), (4,4), (5,3), (6,2) -> 5 outcomes out of 36. Probability = 5/36."
      },
      {
        "id": 3,
        "question": "A leap year is selected at random. What is the probability that it will contain 53 Sundays?",
        "options": [
          "5/7",
          "3/4",
          "4/7",
          "2/7"
        ],
        "correctIndex": 3,
        "explanation": "A leap year has 366 days = 52 weeks + 2 extra days. The two extra consecutive days can be: (Sun, Mon), (Mon, Tue), (Tue, Wed), (Wed, Thu), (Thu, Fri), (Fri, Sat), (Sat, Sun) -> 7 pairs. 2 of these pairs contain Sunday. Probability = 2/7."
      }
    ]
  },
  {
    "id": "quant-data-interpretation",
    "title": "Data Interpretation",
    "category": "Quantitative Aptitude",
    "categoryOrder": 3,
    "icon": "BarChart3",
    "estimatedTime": "30 min",
    "description": "Analyzing data tables, pie charts, bar charts, and line graphs to answer analytical questions.",
    "subtopics": [
      "Tabular Data Interpretation",
      "Pie Charts (Degrees 360\u00b0 vs Percentage 100%)",
      "Multi-bar Graphs & Financial Metrics (Sales, Profit, Returns)",
      "Line Graphs & Growth Rate Trends"
    ],
    "theory": {
      "overview": "Data Interpretation tests the ability to extract relevant data from visual charts and apply percentage calculations, ratios, and averages quickly.",
      "keyRules": [
        "Degree in Pie Chart: Angle = (Value / Total) \u00d7 360\u00b0.",
        "Percentage in Pie Chart: % = (Angle / 360) \u00d7 100%.",
        "Profit Margin = (Profit / Sales) \u00d7 100%.",
        "Shareholder's Return = Profit / Equity Base."
      ],
      "tips": [
        "Round smartly and estimate when choices are widely spaced."
      ]
    },
    "questions": [
      {
        "id": 1,
        "question": "In a pie chart of 3600 total employees, Marketing represents 18%, Accounts 20%, Production 35%, IT 15%, HR 12%. What is the central angle for the Marketing department?",
        "options": [
          "54\u00b0",
          "64.8\u00b0",
          "45\u00b0",
          "72\u00b0"
        ],
        "correctIndex": 1,
        "explanation": "Central angle = 18% of 360\u00b0 = (18 / 100) \u00d7 360\u00b0 = 64.8\u00b0."
      },
      {
        "id": 2,
        "question": "If total employees = 3600 and IT department represents 15%, how many employees work in IT?",
        "options": [
          "540",
          "450",
          "600",
          "360"
        ],
        "correctIndex": 0,
        "explanation": "IT employees = 15% of 3600 = 0.15 \u00d7 3600 = 540 employees."
      }
    ]
  }
];
