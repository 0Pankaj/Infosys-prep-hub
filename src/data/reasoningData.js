export const reasoningTopics = [
  {
    "id": "reasoning-series",
    "title": "Series & Sequences",
    "category": "Reasoning Ability",
    "categoryOrder": 2,
    "icon": "Hash",
    "estimatedTime": "25 min",
    "description": "Number series, letter series, and alphanumeric patterns commonly featured in Infosys placement papers.",
    "subtopics": [
      "Ascending & Descending Arithmetic Sequences",
      "Multiplicative & Geometric Progressions (+, \u00d7, \u00d7/+, \u00d7/-)",
      "Alternate & Interleaved Sequences",
      "Letter Series & Positional Alphabet Value",
      "Wrong Number Identification"
    ],
    "theory": {
      "overview": "In number series questions, a set of numbers are given following a particular pattern. In the series, each following number is logically related to its immediate preceding number and thus forms a pattern. The student is required to understand the pattern logic and find the missing or wrong term.",
      "keyRules": [
        "Ascending Series: Involves addition (+), multiplication (\u00d7), or combined operations like (\u00d7n + k) or (\u00d7n - k).",
        "Descending Series: Usually involves subtraction (-) or division (\u00f7).",
        "Alternate Series: Two interleaved sequences run simultaneously at odd and even positions.",
        "Square and Cube Patterns: Differences between successive terms often form squares (n\u00b2) or cubes (n\u00b3).",
        "Letter Series: Assign positions 1 to 26 (A=1, Z=26). Watch for reverse positions (Z=1, A=26) and cyclic shifts."
      ],
      "examples": [
        {
          "problem": "2, 5, 8, 11, 14, ...",
          "solution": "+3 step each time. Next term = 17.",
          "tip": "Simple arithmetic difference"
        },
        {
          "problem": "2, 4, 8, 16, 32, ...",
          "solution": "\u00d72 multiplier. Next term = 64.",
          "tip": "Geometric progression"
        },
        {
          "problem": "2, 5, 11, 23, 47, ...",
          "solution": "\u00d72 + 1 each step (2\u00d72+1=5, 5\u00d72+1=11...). Next = 47\u00d72+1 = 95.",
          "tip": "Compound operation"
        },
        {
          "problem": "5, 6, 7, 8, 10, 11, 14, 15, ...",
          "solution": "Odd series: 5, 7, 10, 14 (+2, +3, +4). Even series: 6, 8, 11, 15 (+2, +3, +4).",
          "tip": "Interleaved dual series"
        }
      ],
      "tips": [
        "Always calculate the difference between adjacent terms first.",
        "If differences increase rapidly, calculate the ratio or square/cube roots.",
        "For letter series, remember the mnemonic EJOTY (5, 10, 15, 20, 25)."
      ]
    },
    "questions": [
      {
        "id": 1,
        "question": "Insert the missing number in the series: 0, 6, 24, 60, 120, 210, ?",
        "options": [
          "336",
          "349",
          "312",
          "337"
        ],
        "correctIndex": 0,
        "explanation": "Pattern is n\u00b3 - n: 1\u00b3-1=0, 2\u00b3-2=6, 3\u00b3-3=24, 4\u00b3-4=60, 5\u00b3-5=120, 6\u00b3-6=210, 7\u00b3-7 = 343 - 7 = 336."
      },
      {
        "id": 2,
        "question": "Find the next number in the series: 11, 14, 19, 22, 27, 30, ?",
        "options": [
          "39",
          "34",
          "36",
          "35"
        ],
        "correctIndex": 3,
        "explanation": "Alternating pattern of +3 and +5: 11+3=14, 14+5=19, 19+3=22, 22+5=27, 27+3=30, next is 30+5 = 35."
      },
      {
        "id": 3,
        "question": "Insert the missing number: 6, 12, 21, ?, 48",
        "options": [
          "33",
          "39",
          "36",
          "31"
        ],
        "correctIndex": 0,
        "explanation": "Differences are increasing by 3: 12-6=6, 21-12=9, next difference is 12 -> 21+12 = 33. Check: 33+15 = 48."
      },
      {
        "id": 4,
        "question": "Find the missing term: 18, 22, 30, ?, 78, 142",
        "options": [
          "44",
          "35",
          "46",
          "48"
        ],
        "correctIndex": 2,
        "explanation": "Differences are powers of 2 multiplied by 4 (or doubling differences): 22-18=4, 30-22=8, next is 16 -> 30+16 = 46. Next is 46+32=78, 78+64=142."
      },
      {
        "id": 5,
        "question": "Find the missing number: 73205, 6655, 605, 55, ?",
        "options": [
          "9",
          "5",
          "13",
          "11"
        ],
        "correctIndex": 1,
        "explanation": "Each successive number is obtained by dividing by 11: 73205 \u00f7 11 = 6655, 6655 \u00f7 11 = 605, 605 \u00f7 11 = 55, 55 \u00f7 11 = 5."
      },
      {
        "id": 6,
        "question": "Find the missing number in the series: 25, 100, ?, 1600, 6400",
        "options": [
          "400",
          "300",
          "360",
          "420"
        ],
        "correctIndex": 0,
        "explanation": "Each number is multiplied by 4: 25 \u00d7 4 = 100, 100 \u00d7 4 = 400, 400 \u00d7 4 = 1600, 1600 \u00d7 4 = 6400."
      },
      {
        "id": 7,
        "question": "Find the missing number: 125, ?, 343, 512, 729, 1000",
        "options": [
          "216",
          "215",
          "256",
          "225"
        ],
        "correctIndex": 0,
        "explanation": "The series represents cubes of consecutive natural numbers: 5\u00b3 = 125, 6\u00b3 = 216, 7\u00b3 = 343, 8\u00b3 = 512, 9\u00b3 = 729, 10\u00b3 = 1000."
      },
      {
        "id": 8,
        "question": "Find the missing number: 1, 27, 125, 343, ?, 1331",
        "options": [
          "730",
          "729",
          "512",
          "772"
        ],
        "correctIndex": 1,
        "explanation": "Cubes of consecutive odd numbers: 1\u00b3 = 1, 3\u00b3 = 27, 5\u00b3 = 125, 7\u00b3 = 343, 9\u00b3 = 729, 11\u00b3 = 1331."
      },
      {
        "id": 9,
        "question": "Find the missing term in the letter series: A, C, F, J, O, ?",
        "options": [
          "Q",
          "U",
          "V",
          "T"
        ],
        "correctIndex": 1,
        "explanation": "Positions in alphabet: A(1) +2 = C(3), +3 = F(6), +4 = J(10), +5 = O(15), +6 = 21 -> U."
      },
      {
        "id": 10,
        "question": "Find the missing term: B, L, E, O, H, R, ?",
        "options": [
          "U",
          "J",
          "K",
          "M"
        ],
        "correctIndex": 2,
        "explanation": "Two alternating series: 1st: B(+3)->E(+3)->H(+3)->K. 2nd: L(+3)->O(+3)->R."
      }
    ]
  },
  {
    "id": "reasoning-coding",
    "title": "Coding & Decoding",
    "category": "Reasoning Ability",
    "categoryOrder": 2,
    "icon": "Code",
    "estimatedTime": "20 min",
    "description": "Deciphering forward/backward shifts, positional opposites, letter substitutions, and artificial language codes.",
    "subtopics": [
      "Forward & Backward Letter Coding",
      "Positional Opposite Coding (A \u2194 Z, B \u2194 Y)",
      "Rearrangement & Pattern Shifts",
      "Multi-word to Multi-word Coding",
      "Artificial Language & Matrix Code Systems"
    ],
    "theory": {
      "overview": "Questions of coding-decoding are designed to test the candidate's ability to understand the rule (logic) used for coding a word or message and apply the same logic to decrypt or encrypt another word.",
      "keyRules": [
        "Forward Letter Coding: Each letter is moved n steps forward in alphabet (e.g. ORACLE -> PSBDMF, +1).",
        "Backward Letter Coding: Each letter is moved n steps backward (e.g. ORACLE -> NQZBKD, -1).",
        "Alternate Forward/Backward: Alternating +1, -1, +1, -1.",
        "Positional Opposite Coding: Replaced by opposite counterpart (A\u2194Z, B\u2194Y, C\u2194X, D\u2194W, E\u2194V... sum of positions = 27).",
        "Artificial Language: Compare common words across phrases to isolate unique vocabulary roots."
      ],
      "examples": [
        {
          "problem": "In a certain code 'COUNTERS' is written as 'SRETNUOC'. How is 'CLEARING' written?",
          "solution": "Letters are simply reversed! CLEARING reversed = GNIRAELC.",
          "tip": "Word reversal pattern"
        },
        {
          "problem": "If VXUPLVH is written as SURMISE, what is OHPRQ?",
          "solution": "Each letter is shifted backward by 3 (V-3=S, X-3=U...). Thus O-3=L, H-3=E, P-3=M, R-3=O, Q-3=N -> LEMON.",
          "tip": "Constant backward shift (-3)"
        }
      ],
      "tips": [
        "Remember opposing letter pairs with mnemonics: AZ, BY (Boy), CX (Crux), DW (Dew), EV (Love), FU (Fun), GT (Road), HS (High School), IR (Indian Railway), JQ (Jack Queen), KP (Kurta Pyjama), LO, MN.",
        "Check whether vowels and consonants are coded differently."
      ]
    },
    "questions": [
      {
        "id": 1,
        "question": "In a certain code 'COUNTERS' is written as 'SRETNUOC'. Then how is 'CLEARING' written?",
        "options": [
          "CGLNEIAR",
          "GNIRCLEA",
          "CLEANRIG",
          "GNIRAELC"
        ],
        "correctIndex": 3,
        "explanation": "The entire word is spelled backwards. CLEARING in reverse order is G-N-I-R-A-E-L-C."
      },
      {
        "id": 2,
        "question": "If VXUPLVH is written as SURMISE, what is OHPRQ the code for?",
        "options": [
          "LEMON",
          "OPENS",
          "MELON",
          "NAMED"
        ],
        "correctIndex": 0,
        "explanation": "Each letter in the coded word is shifted -3 steps: O(-3)=L, H(-3)=E, P(-3)=M, R(-3)=O, Q(-3)=N -> LEMON."
      },
      {
        "id": 3,
        "question": "In a certain code 'CAMPHOR' is '6$3#152' and 'SAKE' is '@$98'. How is 'MORSE' written?",
        "options": [
          "@96$2",
          "352@8",
          "533@8",
          "3528@"
        ],
        "correctIndex": 1,
        "explanation": "Direct letter-symbol mapping: M=3, O=5, R=2, S=@, E=8 -> 352@8."
      },
      {
        "id": 4,
        "question": "If COMPUTER is written as RFUVQNPC, how is MEDICINE written in that code?",
        "options": [
          "EOJDJEFM",
          "EOJDEJFM",
          "MFEJDJOE",
          "MFEDJJOE"
        ],
        "correctIndex": 0,
        "explanation": "The first and last letters are swapped and other letters are shifted +1 and written in reverse order: MEDICINE becomes EOJDJEFM."
      },
      {
        "id": 5,
        "question": "If sand is called Brick, Brick is called House, House is called Temple, and Temple is called Palace, where do you worship?",
        "options": [
          "Palace",
          "Temple",
          "Brick",
          "House"
        ],
        "correctIndex": 0,
        "explanation": "People worship in a 'Temple', and the code states that Temple is called 'Palace'."
      }
    ]
  },
  {
    "id": "reasoning-blood-relations",
    "title": "Blood Relations",
    "category": "Reasoning Ability",
    "categoryOrder": 2,
    "icon": "Users",
    "estimatedTime": "25 min",
    "description": "Family tree analysis, generational hierarchies, and coded relationship equations.",
    "subtopics": [
      "Standard Kinship Terminology & Chart",
      "Three-Generation Family Trees",
      "Pointing / Introduction Puzzles",
      "Coded Relationships (+, -, \u00d7, \u00f7)"
    ],
    "theory": {
      "overview": "Questions from Blood Relations require analyzing statements about family members. The relations are typically distributed across three generations: Grandparents, Parents/Aunts/Uncles, and Siblings/Cousins.",
      "keyRules": [
        "Father's or Mother's son = Brother; Daughter = Sister.",
        "Father's or Mother's brother = Uncle; sister = Aunt.",
        "Son's wife = Daughter-in-law; Daughter's husband = Son-in-law.",
        "Brother's/Sister's son = Nephew; daughter = Niece.",
        "Uncle's/Aunt's children = Cousins (gender neutral).",
        "Grandfather's only son = Father; Grandmother's only daughter-in-law = Mother."
      ],
      "examples": [
        {
          "problem": "Ram is Mohan's son-in-law. Sangeeta has two married sons and one married daughter. Gita is Shyam's sister.",
          "solution": "Build hierarchical tree: Mohan + Sangeeta (parents) have children (2 sons, 1 daughter). Ram is married to daughter Gita.",
          "tip": "Identify parent generation first"
        }
      ],
      "tips": [
        "Never assume gender from a name alone unless explicitly stated or clarified by pronouns/relationships.",
        "Draw family trees using (+) for male, (-) for female, (=) for marriage, and vertical lines for descent."
      ]
    },
    "questions": [
      {
        "id": 1,
        "question": "Deepak is the brother of Ravi. Reena is the sister of Atul. Ravi is the son of Reena. How is Deepak related to Reena?",
        "options": [
          "Son",
          "Brother",
          "Nephew",
          "Father"
        ],
        "correctIndex": 0,
        "explanation": "Since Ravi is the son of Reena and Deepak is the brother of Ravi, Deepak is also the son of Reena."
      },
      {
        "id": 2,
        "question": "E is the son of A, D is the son of B, E is married to C, C is B\u2019s daughter. How is D related to E?",
        "options": [
          "Brother",
          "Uncle",
          "Father-in-law",
          "Brother-in-law"
        ],
        "correctIndex": 3,
        "explanation": "C is the sister of D (both children of B). E is married to C. Therefore, D is the brother of E's wife, which makes D the brother-in-law of E."
      },
      {
        "id": 3,
        "question": "P is the son of Q while Q and R are sisters. T is the mother of R. If S is the son of T, which statement is correct?",
        "options": [
          "T is the brother of Q",
          "S is the cousin of P",
          "S is the maternal uncle of P",
          "Q and S are sisters"
        ],
        "correctIndex": 2,
        "explanation": "T is the mother of Q and R. S is the son of T, so S is the brother of Q (P's mother). The mother's brother is the maternal uncle. Thus, S is the maternal uncle of P."
      },
      {
        "id": 4,
        "question": "If 'L + K' means L is father of K, 'L - K' means L is wife of K, and 'L \u00d7 K' means L is brother of K. In A \u00d7 B + C, how is A related to C?",
        "options": [
          "Brother",
          "Father",
          "Uncle",
          "Son"
        ],
        "correctIndex": 2,
        "explanation": "B is the father of C (B + C). A is the brother of B (A \u00d7 B). The father's brother is Uncle."
      }
    ]
  },
  {
    "id": "reasoning-directions",
    "title": "Direction Sense Test",
    "category": "Reasoning Ability",
    "categoryOrder": 2,
    "icon": "Compass",
    "estimatedTime": "20 min",
    "description": "Cardinal and intercardinal orientations, right/left turns, shadow angles, and Pythagorean displacements.",
    "subtopics": [
      "Standard Directions (N, S, E, W, NE, NW, SE, SW)",
      "Right Turn (Clockwise 90\u00b0) & Left Turn (Anticlockwise 90\u00b0)",
      "Pythagoras Theorem for Shortest Distance",
      "Clock Face and Compass Misalignment"
    ],
    "theory": {
      "overview": "Direction sense problems test your spatial orientation on a two-dimensional map. On paper, North is always UP, South is DOWN, East is RIGHT, and West is LEFT.",
      "keyRules": [
        "Right Turn = 90\u00b0 Clockwise.",
        "Left Turn = 90\u00b0 Anticlockwise.",
        "Shortest Distance: Hypotenuse = \u221a(Base\u00b2 + Perpendicular\u00b2).",
        "Shadows: In morning (sunrise in East), shadows fall to the West. In evening (sunset in West), shadows fall to the East. At noon, there is negligible shadow."
      ],
      "examples": [
        {
          "problem": "A person walks 3 km West, turns left 3 km, turns right 1 km, turns right 3 km. How far from start?",
          "solution": "West displacement: 3 + 1 = 4 km. Vertical displacement: -3 + 3 = 0 km. Distance = 4 km.",
          "tip": "Track horizontal and vertical coordinates separately"
        }
      ],
      "tips": [
        "Set origin as (0, 0): North is +y, South is -y, East is +x, West is -x.",
        "Sum \u0394x and \u0394y to instantly determine final position."
      ]
    },
    "questions": [
      {
        "id": 1,
        "question": "A watch reads 4:30. If the minute hand points towards the West, in which direction does the hour hand point?",
        "options": [
          "Northeast",
          "Southwest",
          "Northwest",
          "North"
        ],
        "correctIndex": 2,
        "explanation": "At 4:30, minute hand is normally South. If South is designated as West (90\u00b0 clockwise rotation), the hour hand (normally Southeast) rotated 90\u00b0 clockwise points Northwest."
      },
      {
        "id": 2,
        "question": "Hanuman travels 3 km West, turns left and goes 3 km, turns right and goes 1 km, again turns right and goes 3 km. How far is he from the starting point?",
        "options": [
          "7 km",
          "6 km",
          "5 km",
          "4 km"
        ],
        "correctIndex": 3,
        "explanation": "Walking 3 km West, then 3 km South, 1 km West, then 3 km North cancels out the South-North movement. Net displacement = 3 km + 1 km = 4 km West."
      },
      {
        "id": 3,
        "question": "If Southeast becomes East, Northwest becomes West, and all other directions change in the same manner, what will North become?",
        "options": [
          "Northwest",
          "Southeast",
          "Southwest",
          "Northeast"
        ],
        "correctIndex": 0,
        "explanation": "Southeast becoming East represents a 45\u00b0 anticlockwise shift. Rotating North 45\u00b0 anticlockwise yields Northwest."
      },
      {
        "id": 4,
        "question": "If Ram is to the West of Shyam and Kareem is to the North of Shyam, in what direction is Kareem with respect to Ram?",
        "options": [
          "Northeast",
          "Southwest",
          "Northwest",
          "Southeast"
        ],
        "correctIndex": 0,
        "explanation": "Placing Ram at (-1, 0) and Kareem at (0, 1), Kareem is North and East of Ram, i.e., Northeast."
      }
    ]
  },
  {
    "id": "reasoning-syllogism",
    "title": "Syllogism",
    "category": "Reasoning Ability",
    "categoryOrder": 2,
    "icon": "CheckSquare",
    "estimatedTime": "30 min",
    "description": "Deductive logic, Venn diagrams, universal/particular premises, and either-or conclusion rules.",
    "subtopics": [
      "Universal Affirmative (All A are B) & Negative (No A is B)",
      "Particular Affirmative (Some A are B) & Negative (Some A are not B)",
      "Venn Diagram Overlap Method",
      "Either-Or Complementary Pairs",
      "Possibility Cases"
    ],
    "theory": {
      "overview": "Syllogism questions present premises assumed to be 100% true, regardless of real-world knowledge. Candidates must decide which conclusions logically follow.",
      "keyRules": [
        "Rule 1: All + All = All (All A are B + All B are C => All A are C).",
        "Rule 2: Some + All = Some (Some A are B + All B are C => Some A are C).",
        "Rule 3: All + Some = No Definite Conclusion.",
        "Rule 4: Some + No = Some Not.",
        "Rule 5: No + All = Some Not Reversed.",
        "Either-Or Conditions: 1. Same subject and predicate. 2. One affirmative, one negative. 3. Both individually false. 4. Complementary pairs (Some + No, or Some + Some Not)."
      ],
      "tips": [
        "'At least some' simply means 'Some'.",
        "'Only A are B' means 'All B are A'.",
        "Never draw conclusions outside what the Venn diagram strictly confirms."
      ]
    },
    "questions": [
      {
        "id": 1,
        "question": "Statements: I. Some brown are blue. II. All blue is black. III. Some black is yellow. Conclusions: I. Some brown are black. II. Some yellow is not black.",
        "options": [
          "Only conclusion I follows",
          "Only conclusion II follows",
          "Either I or II follows",
          "Neither I nor II follows"
        ],
        "correctIndex": 0,
        "explanation": "Since some brown are blue and all blue are black, the blue portion of brown is definitely black. Conclusion I is valid. II is not definitely true."
      },
      {
        "id": 2,
        "question": "Statements: I. Some rats are cats. II. All cats are bats. III. No bat is a dog. Conclusions: I. Some rats are definitely not dogs. II. No rat is dog.",
        "options": [
          "Only I follows",
          "Only II follows",
          "Both I and II follow",
          "Neither follows"
        ],
        "correctIndex": 0,
        "explanation": "The rats that are cats are inside 'bats'. Since no bat is a dog, those specific rats can never be dogs. Thus, 'Some rats are definitely not dogs' is valid."
      },
      {
        "id": 3,
        "question": "Statements: I. All lamps are pots. II. All pots are roses. III. No rose is a flower. Conclusions: I. All roses are pots. II. All lamps are roses.",
        "options": [
          "Only conclusion I follows",
          "Only conclusion II follows",
          "Either I or II follows",
          "Neither follows"
        ],
        "correctIndex": 1,
        "explanation": "Lamps are inside pots, and pots are inside roses. Therefore, all lamps are roses (Conclusion II holds). All roses are not necessarily pots."
      }
    ]
  },
  {
    "id": "reasoning-visual",
    "title": "Visual & Non-Verbal Reasoning",
    "category": "Reasoning Ability",
    "categoryOrder": 2,
    "icon": "Eye",
    "estimatedTime": "25 min",
    "description": "Non-verbal series, analogies, figure matrices, rotations, and element replacements.",
    "subtopics": [
      "Non-Verbal Series (Element Shifts & Rotation)",
      "Non-Verbal Analogy (Rule Transformation: CW & ACW)",
      "Series-Based Classification (Odd Figure Out)",
      "Analogy-Based Pair Classification"
    ],
    "theory": {
      "overview": "Visual and Non-verbal reasoning tests spatial recognition and visual pattern extrapolation. Figures change from step to step based on rotation (90\u00b0, 45\u00b0 CW/ACW), addition/deletion of elements, or positional swapping.",
      "keyRules": [
        "Rotation Logic: Figures frequently rotate in increments of 45\u00b0, 90\u00b0, or 180\u00b0 clockwise (CW) or anticlockwise (ACW).",
        "Element Addition/Deletion: Watch for alternate additions and deletions (e.g. 1 line added, 1 pin dropped).",
        "Alternate Swapping: In consecutive frames, extreme elements often swap places while inner elements invert.",
        "Size Inversion: Larger elements reduce in size and take interior positions while inner elements expand outward."
      ],
      "tips": [
        "Track one individual element at a time across the sequence rather than trying to take in the whole complex image at once.",
        "Verify movement direction: CW or ACW."
      ]
    },
    "questions": [
      {
        "id": 1,
        "question": "In a non-verbal series, a figure rotates 90\u00b0 Clockwise in each consecutive step while one petal is lost. What happens in the 4th step?",
        "options": [
          "Rotates 90\u00b0 CW with 3 petals lost",
          "Rotates 90\u00b0 ACW with 2 petals lost",
          "Inverts upside down with same petals",
          "Remains stationary"
        ],
        "correctIndex": 0,
        "explanation": "Consistent application of the rule: 90\u00b0 CW rotation per step with one petal dropped at each step."
      },
      {
        "id": 2,
        "question": "In alternate steps of a pattern, 'T' and an arrow interchange places while a third element is replaced by a new symbol. This pattern represents:",
        "options": [
          "Analogy rotation",
          "Alternating positional swap with element renewal",
          "Mirror reflection",
          "Translation along X-axis"
        ],
        "correctIndex": 1,
        "explanation": "This follows the classic non-verbal series rule where two anchors oscillate while a transient symbol is refreshed."
      }
    ]
  },
  {
    "id": "reasoning-puzzles",
    "title": "Logical Puzzles",
    "category": "Reasoning Ability",
    "categoryOrder": 2,
    "icon": "Grid",
    "estimatedTime": "25 min",
    "description": "Multi-variable matching, matrix tables, and constraint elimination puzzles.",
    "subtopics": [
      "Consolidated Table Method",
      "Matrix Tick-and-Cross Elimination",
      "Attribute Matching (Person, Profession, City, Price)",
      "Truth-teller & Liar Riddles"
    ],
    "theory": {
      "overview": "Analytical Reasoning puzzles require cross-referencing clues to connect entities with attributes (professions, cities, objects). The two primary techniques are Consolidated Tables and Matrix Grids.",
      "keyRules": [
        "Matrix Method: Rows = Primary entities (names), Columns = Attributes. Put ticks (\u2713) for confirmed matches and cross out (\u2717) rest of row/column.",
        "Direct vs Indirect Information: Fill 100% certain clues first, then test conditional or negative constraints.",
        "Island of Knights & Knaves: Knights always tell truth, Knaves always lie."
      ],
      "tips": [
        "Start with the most restricted variable (the one mentioned most frequently).",
        "Create visual tables to avoid holding mental states."
      ]
    },
    "questions": [
      {
        "id": 1,
        "question": "Four books (Hindi, English, Accounts, Tax) are by Mishra, Kaul, Gupta, Mehta on shelves 1-4. Gupta's book is on shelf 3. Mishra wrote English. Accounts is on shelf 4. Kaul did not write Hindi and his book is on an odd shelf. Who wrote Accounts?",
        "options": [
          "Mishra",
          "Kaul",
          "Gupta",
          "Mehta"
        ],
        "correctIndex": 2,
        "explanation": "By grid deduction of author, subject, and shelf number, Gupta is associated with the Accounts book on shelf 4."
      },
      {
        "id": 2,
        "question": "A family went for vacation. It rained on 13 days. Whenever it rained in morning, afternoon was clear and vice versa. They enjoyed 11 mornings and 12 afternoons without rain. How many total days did they stay?",
        "options": [
          "18 days",
          "13 days",
          "23 days",
          "25 days"
        ],
        "correctIndex": 0,
        "explanation": "Let total days be D. Rainy mornings = r1, rainy afternoons = r2. r1 + r2 = 13. Clear mornings = D - r1 = 11. Clear afternoons = D - r2 = 12. Summing gives 2D - (r1+r2) = 23 => 2D - 13 = 23 => 2D = 36 => D = 18."
      },
      {
        "id": 3,
        "question": "In an island where natives lie and visitors speak truth, a man asks a salesman: 'Is that woman a native or visitor?' Salesman replies: 'She is a visitor'. Is the salesman a native or visitor?",
        "options": [
          "Native",
          "Visitor",
          "Cannot be determined",
          "Data insufficient"
        ],
        "correctIndex": 1,
        "explanation": "Shadow observed the woman, and the salesman confirmed truthfully with proper reference, identifying himself as a Visitor."
      }
    ]
  },
  {
    "id": "reasoning-cryptarithmetic",
    "title": "Cryptarithmetic & Math Puzzles",
    "category": "Reasoning Ability",
    "categoryOrder": 2,
    "icon": "Cpu",
    "estimatedTime": "25 min",
    "description": "Verbal arithmetic, letter-to-digit substitution, carries, and balance problem solving.",
    "subtopics": [
      "Digit Assignment Rules (0 to 9 distinct digits)",
      "Carry-over Analysis (Leading digit carry is always 1)",
      "Parity & Unit Digit Constraints",
      "Balance Scales & Unequal Lever Arms"
    ],
    "theory": {
      "overview": "Cryptarithmetic is a mathematical puzzle where digits are replaced by letters of the alphabet. Each letter represents a unique digit from 0 to 9, and the leading digit of a multi-digit number cannot be 0.",
      "keyRules": [
        "Leading Carry Rule: In an addition like SEND + MORE = MONEY, M must be 1 because the maximum carry from two 4-digit numbers is 1.",
        "Uniqueness: Distinct letters represent distinct digits.",
        "Base 10 arithmetic constraints apply throughout."
      ],
      "tips": [
        "Focus on the leftmost column (highest place value) first to detect carries.",
        "Look for letters added to themselves (e.g. E + E = ... ending in 0 or even number)."
      ]
    },
    "questions": [
      {
        "id": 1,
        "question": "Find the units digit of the product of all prime numbers up to 50.",
        "options": [
          "1",
          "9",
          "7",
          "0"
        ],
        "correctIndex": 3,
        "explanation": "The set of prime numbers up to 50 includes 2 and 5. Since 2 \u00d7 5 = 10, any product containing both 2 and 5 has a units digit of 0."
      },
      {
        "id": 2,
        "question": "Find the total number of rectangles (including squares) in an 8 \u00d7 8 standard chessboard.",
        "options": [
          "64",
          "144",
          "1296",
          "1728"
        ],
        "correctIndex": 2,
        "explanation": "A chessboard has 9 horizontal lines and 9 vertical lines. Any rectangle is formed by choosing 2 horizontal lines and 2 vertical lines: C(9, 2) \u00d7 C(9, 2) = 36 \u00d7 36 = 1296."
      },
      {
        "id": 3,
        "question": "Find the digits X, Y, Z if: XXXX + YYYY + ZZZZ = YXXXZ",
        "options": [
          "9, 1, 8",
          "8, 1, 9",
          "1, 8, 9",
          "9, 8, 1"
        ],
        "correctIndex": 0,
        "explanation": "Since sum of three 4-digit numbers gives a 5-digit number starting with Y, Y must be 1 or 2. Testing Y=1, X=9, Z=8 gives 9999 + 1111 + 8888 = 19998, which matches YXXXZ perfectly."
      }
    ]
  },
  {
    "id": "reasoning-data-sufficiency",
    "title": "Data Sufficiency",
    "category": "Reasoning Ability",
    "categoryOrder": 2,
    "icon": "Layers",
    "estimatedTime": "25 min",
    "description": "Evaluating whether given statements provide sufficient information to reach a unique answer.",
    "subtopics": [
      "Five Standard Options Structure",
      "Testing Statement I & II Independently",
      "Combining Statements (I + II)",
      "Avoiding Unnecessary Calculations"
    ],
    "theory": {
      "overview": "Data Sufficiency questions consist of a question followed by two statements. The goal is not necessarily to solve the arithmetic, but to determine whether the data is sufficient to find a unique solution.",
      "keyRules": [
        "(A) Statement I alone is sufficient, but Statement II alone is not.",
        "(B) Statement II alone is sufficient, but Statement I alone is not.",
        "(C) Either Statement I alone OR Statement II alone is sufficient.",
        "(D) Neither Statement I nor Statement II is sufficient, even combined.",
        "(E) Both Statements I and II together are necessary."
      ],
      "tips": [
        "Never carry over assumptions from Statement I into Statement II when testing Statement II independently.",
        "If an equation produces two possible distinct values, it is NOT sufficient."
      ]
    },
    "questions": [
      {
        "id": 1,
        "question": "What is the area of the circle? I. Circumference is 308 m. II. Radius is 28 m.",
        "options": [
          "Statement I alone is sufficient",
          "Statement II alone is sufficient",
          "Either I alone or II alone is sufficient",
          "Both together are necessary"
        ],
        "correctIndex": 2,
        "explanation": "From I: 2\u03c0r = 308 gives r, and area = \u03c0r\u00b2. From II: r is directly given as 28 m, so area can be calculated. Hence either statement alone is sufficient."
      },
      {
        "id": 2,
        "question": "What is the speed of the train? I. 280 m long train crosses a signal pole in 18 seconds. II. 280 m train crosses a platform in 45 seconds.",
        "options": [
          "Statement I alone is sufficient",
          "Statement II alone is sufficient",
          "Either I alone or II alone is sufficient",
          "Both together are needed"
        ],
        "correctIndex": 0,
        "explanation": "From I, speed = length / time = 280 / 18 m/s, which gives the unique speed. Statement II lacks platform length, so I alone is sufficient."
      },
      {
        "id": 3,
        "question": "Is Kareena the wife of Saif? I. Kareena is female and Saif is male. II. Kareena is the daughter of Saif.",
        "options": [
          "Statement I alone is sufficient",
          "Statement II alone is sufficient",
          "Both together are needed",
          "Data even together not sufficient"
        ],
        "correctIndex": 1,
        "explanation": "Statement II establishes that Kareena is Saif's daughter, which definitely answers the question with a 'NO' (she cannot be his wife). Answering definitively 'No' is sufficient."
      }
    ]
  },
  {
    "id": "reasoning-clock",
    "title": "Clock Problems",
    "category": "Reasoning Ability",
    "categoryOrder": 2,
    "icon": "Clock",
    "estimatedTime": "25 min",
    "description": "Angle between clock hands, coincidences, right angles, straight lines, and slow/fast clock error adjustments.",
    "subtopics": [
      "Dial Division (60 minute spaces = 360\u00b0)",
      "Relative Speed (55 min spaces gained in 60 mins)",
      "Coincidence & Right Angle Frequencies",
      "Angle Formula: \u03b8 = |30H - 5.5M|",
      "Clock Gain and Loss Calculations"
    ],
    "theory": {
      "overview": "The clock face is divided into 60 minute spaces equal to 360\u00b0. The minute hand moves 360\u00b0/60 = 6\u00b0 per minute. The hour hand moves 360\u00b0/720 = 0.5\u00b0 per minute. The relative speed of the minute hand over the hour hand is 5.5\u00b0 per minute (or 55 minute spaces gained every 60 minutes).",
      "keyRules": [
        "Angle Formula: Angle = |30\u00d7H - (11/2)\u00d7M| degrees.",
        "Coincidence: Hands coincide 22 times in 24 hours (once per hour except between 11 and 1).",
        "Opposite Direction (180\u00b0): Hands are in a straight line opposite 22 times in 24 hours.",
        "Straight Line (Coincident or Opposite): 44 times in 24 hours.",
        "Right Angles (90\u00b0): Hands are at right angles 44 times in 24 hours.",
        "Coincidence time between H and H+1: (60H / 11) minutes past H."
      ],
      "examples": [
        {
          "problem": "Angle at 8:30?",
          "solution": "\u03b8 = |30(8) - 5.5(30)| = |240 - 165| = 75\u00b0.",
          "tip": "Direct formula application"
        },
        {
          "problem": "How many degrees does the hour hand rotate from 8 AM to 2 PM?",
          "solution": "Time elapsed = 6 hours. Hour hand rotates 30\u00b0 per hour: 6 \u00d7 30\u00b0 = 180\u00b0.",
          "tip": "Hour hand rotates 0.5\u00b0 per min or 30\u00b0 per hr"
        }
      ],
      "tips": [
        "Reflex angle is always 360\u00b0 minus the smaller internal angle.",
        "Hands coincide at: 12:00, 1:05 5/11, 2:10 10/11, 3:16 4/11, 4:21 9/11..."
      ]
    },
    "questions": [
      {
        "id": 1,
        "question": "An accurate clock shows 8 o'clock in morning. Through how many degrees will the hour hand rotate when it shows 2 o'clock in the afternoon?",
        "options": [
          "144\u00b0",
          "150\u00b0",
          "168\u00b0",
          "180\u00b0"
        ],
        "correctIndex": 3,
        "explanation": "From 8 AM to 2 PM is 6 hours. In 1 hour, the hour hand rotates 360\u00b0/12 = 30\u00b0. In 6 hours, it rotates 6 \u00d7 30\u00b0 = 180\u00b0."
      },
      {
        "id": 2,
        "question": "A clock is started at noon. By 10 minutes past 5, the hour hand has turned through:",
        "options": [
          "155\u00b0",
          "145\u00b0",
          "150\u00b0",
          "160\u00b0"
        ],
        "correctIndex": 0,
        "explanation": "Total time = 5 hours 10 mins = 310 minutes. Since hour hand rotates 0.5\u00b0 per minute: 310 \u00d7 0.5\u00b0 = 155\u00b0."
      },
      {
        "id": 3,
        "question": "The angle between the minute hand and the hour hand of a clock at 8:30 is:",
        "options": [
          "80\u00b0",
          "75\u00b0",
          "60\u00b0",
          "105\u00b0"
        ],
        "correctIndex": 1,
        "explanation": "Using formula \u03b8 = |30H - (11/2)M|: \u03b8 = |30(8) - 5.5(30)| = |240 - 165| = 75\u00b0."
      },
      {
        "id": 4,
        "question": "How often are the hands of a clock at right angles in a single day?",
        "options": [
          "11 times",
          "22 times",
          "44 times",
          "55 times"
        ],
        "correctIndex": 2,
        "explanation": "Hands are at right angles twice every hour except between 2-4 and 8-10, yielding 22 times in 12 hours, which is 44 times in a 24-hour day."
      },
      {
        "id": 5,
        "question": "At what time between 4 and 5 o'clock will the two hands of the clock coincide?",
        "options": [
          "4 hr 21 9/11 min",
          "4 hr 20 min",
          "4 hr 23 7/11 min",
          "4 hr 22 min"
        ],
        "correctIndex": 0,
        "explanation": "Coincidence formula = 60H/11 minutes past H. For H=4: (60 \u00d7 4)/11 = 240/11 = 21 9/11 minutes past 4."
      }
    ]
  },
  {
    "id": "reasoning-calendar",
    "title": "Calendar Problems",
    "category": "Reasoning Ability",
    "categoryOrder": 2,
    "icon": "Calendar",
    "estimatedTime": "25 min",
    "description": "Leap years, odd days calculation, Gregorian calendar rules, and finding weekday for any historical date.",
    "subtopics": [
      "Ordinary Year (365 days = 1 odd day)",
      "Leap Year (366 days = 2 odd days)",
      "Centenary Leap Years (Divisible by 400)",
      "Month Codes & Century Remainder Formula",
      "Calendar Repetition Rules"
    ],
    "theory": {
      "overview": "A calendar year has 365 days (52 weeks + 1 extra day). A leap year has 366 days (52 weeks + 2 extra days). These extra days beyond complete weeks are called Odd Days.",
      "keyRules": [
        "Leap Year Rule: Non-century years divisible by 4 are leap years. Century years must be divisible by 400 (1600, 2000, 2400 are leap years; 1700, 1800, 1900, 2100 are NOT).",
        "Odd Days: 100 years = 5 odd days; 200 years = 3 odd days; 300 years = 1 odd day; 400 years = 0 odd days.",
        "Calendar Repetition: Leap year repeats after 28 years; Leap+1 repeats after 6 years; Leap+2 repeats after 11 years; Leap+3 repeats after 11 years.",
        "Day Formula: Remainder of (Date + Month Code + Year + [Year/4] + Century Code) \u00f7 7."
      ],
      "tips": [
        "Remember standard month codes: Non-leap: Jan=1, Feb=4, Mar=4, Apr=0, May=2, Jun=5, Jul=0, Aug=3, Sep=6, Oct=1, Nov=4, Dec=6.",
        "Remainders: 0=Sat, 1=Sun, 2=Mon, 3=Tue, 4=Wed, 5=Thu, 6=Fri."
      ]
    },
    "questions": [
      {
        "id": 1,
        "question": "How many years have 29 days in February from 2001 to 2100?",
        "options": [
          "25",
          "24",
          "26",
          "23"
        ],
        "correctIndex": 1,
        "explanation": "Between 2001 and 2100, there are 24 leap years because 2100 is a century year not divisible by 400, so it is NOT a leap year (100 / 4 - 1 = 24)."
      },
      {
        "id": 2,
        "question": "Which of the following is NOT a leap year?",
        "options": [
          "700",
          "800",
          "1200",
          "2000"
        ],
        "correctIndex": 0,
        "explanation": "Century years must be divisible by 400 to be leap years. 800, 1200, and 2000 are divisible by 400, but 700 is not."
      },
      {
        "id": 3,
        "question": "The calendar for the year 2007 will be identical to which future year?",
        "options": [
          "2014",
          "2016",
          "2017",
          "2018"
        ],
        "correctIndex": 3,
        "explanation": "2007 is a (Leap + 3) year (2004 was leap). (Leap + 3) years repeat after 11 years: 2007 + 11 = 2018."
      },
      {
        "id": 4,
        "question": "Mahatma Gandhi died on 30th January 1948. What day of the week was it?",
        "options": [
          "Friday",
          "Wednesday",
          "Thursday",
          "Monday"
        ],
        "correctIndex": 0,
        "explanation": "Using odd day computation: Up to 1600 (0) + 300 yrs (1) + 47 yrs (11 leap + 36 ordinary = 58 = 2 odd days) + 30 days in Jan = 33 days = 5 odd days -> Friday."
      }
    ]
  },
  {
    "id": "reasoning-arrangements",
    "title": "Seating Arrangements",
    "category": "Reasoning Ability",
    "categoryOrder": 2,
    "icon": "Users2",
    "estimatedTime": "30 min",
    "description": "Linear rows, double rows facing each other, and circular arrangements facing center or outward.",
    "subtopics": [
      "Linear Row Formations (North vs South facing)",
      "Dual Parallel Rows with Facing Pairs",
      "Circular Seating: Facing the Centre (Right = Anticlockwise)",
      "Circular Seating: Facing Away from Centre (Right = Clockwise)",
      "Relative vs Immediate Positions"
    ],
    "theory": {
      "overview": "Seating arrangement problems require placing people in a line, circle, or polygon according to relative positional clues. Clarifying facing orientation is the most crucial step.",
      "keyRules": [
        "Linear Facing North: Right is your right hand side; Left is your left hand side.",
        "Linear Facing South: Right is your left hand side; Left is your right hand side.",
        "Circular Facing Center: Right-hand side is ANTICLOCKWISE; Left-hand side is CLOCKWISE.",
        "Circular Facing Outward: Right-hand side is CLOCKWISE; Left-hand side is ANTICLOCKWISE.",
        "'A sits next to B' means A and B are adjacent, either left or right.",
        "'A sits to the right of B' does not necessarily mean immediately to the right, unless stated as 'immediate right'."
      ],
      "tips": [
        "Always begin by placing the entity with fixed definite orientation (e.g. 'P sits in the center facing North').",
        "Keep dual scratch diagrams when an initial statement permits two valid configurations."
      ]
    },
    "questions": [
      {
        "id": 1,
        "question": "In a group of six children, Q is taller than P but shorter than L. M is taller than N and O, but shorter than P. Who is the shortest?",
        "options": [
          "N",
          "O",
          "M",
          "Data inadequate"
        ],
        "correctIndex": 3,
        "explanation": "We know L > Q > P > M > (N, O). The relative height between N and O is not specified, so the shortest child cannot be definitively determined (Data inadequate)."
      },
      {
        "id": 2,
        "question": "Nisha is taller than Suja. Nina is taller than Nisha. Nila is taller than Nina. Misha is the tallest of all. Standing in ascending height, who is in the middle?",
        "options": [
          "Nisha",
          "Nina",
          "Suja",
          "Nila"
        ],
        "correctIndex": 1,
        "explanation": "Order from shortest to tallest: Suja < Nisha < Nina < Nila < Misha. Nina is the 3rd person out of 5, sitting right in the middle."
      }
    ]
  }
];
