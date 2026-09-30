import json
import os

# Helper to normalize 4 options
def make_4_options(opts, correct_letter):
    letter_map = {'a': 0, 'b': 1, 'c': 2, 'd': 3, 'e': 3, 'A': 0, 'B': 1, 'C': 2, 'D': 3, 'E': 3}
    c_idx = letter_map.get(str(correct_letter).strip().lower(), 0)
    cleaned_opts = [o.strip() for o in opts]
    if len(cleaned_opts) > 4:
        if c_idx >= 3:
            cleaned_opts[3] = cleaned_opts[c_idx]
            c_idx = 3
        cleaned_opts = cleaned_opts[:4]
    while len(cleaned_opts) < 4:
        cleaned_opts.append("None of the above")
    return cleaned_opts, min(c_idx, 3)

intro_topic = {
    "id": "exam-pattern",
    "title": "Infosys Exam Pattern & Syllabus",
    "category": "Exam Pattern",
    "categoryOrder": 1,
    "icon": "FileText",
    "estimatedTime": "15 min",
    "description": "Comprehensive guide to Infosys placement test structure, section timings, question counts, and cutoff marks.",
    "subtopics": [
        "Test Structure & Overview",
        "Sectional Time Limits & Marks",
        "Syllabus Breakdown (2025 - 2026)",
        "Cut-off Strategy & Safe Scores"
    ],
    "theory": {
        "overview": "The Infosys Written Test is considered tough, so proper preparation is essential. The test covers 7 main sections with strict sectional time limits. Logical Reasoning is typically regarded as one of the most critical sections.",
        "keyRules": [
            "Online test has 7 sections spanning 120 minutes with a total of 60 questions.",
            "Technical Ability (Quantitative Aptitude): 10 Questions in 35 mins. Focus is on Numbers, Time & Work, P&C, Probability.",
            "Reasoning Ability (Logical): 15 Questions in 25 mins. High scoring yet requires rapid pattern spotting.",
            "Verbal Ability: 20 Questions in 20 mins. Tests grammar, reading comprehension, critical reasoning.",
            "Pseudo Code: 5 Questions in 10 mins (Data Structures, C/C++ logic).",
            "Puzzle Solving: 4 Questions in 10 mins. Numerical puzzles & grid deductions.",
            "English Grammar & Writing: 5 questions in 10 mins, plus 1 writing task (10 mins)."
        ],
        "tables": [
            {
                "title": "Infosys Online Test Pattern",
                "headers": ["Section Name", "Questions", "Time Limit", "Expected Cutoff"],
                "rows": [
                    ["Logical Ability", "15 Ques", "25 mins", "75% - 80% (9-11 correct)"],
                    ["Technical Ability (Quant)", "10 Ques", "35 mins", "70% - 80% (6-8 correct)"],
                    ["Verbal Ability", "20 Ques", "20 mins", "70% - 80% (14-16 correct)"],
                    ["Pseudo Code", "5 Ques", "10 mins", "3-4 correct"],
                    ["Puzzle Solving", "4 Ques", "10 mins", "2-3 correct"],
                    ["English Grammar", "5 Ques", "10 mins", "4 correct"],
                    ["English Writing", "1 Ques", "10 mins", "Evaluated"]
                ]
            }
        ],
        "tips": [
            "Easy Hits in Quant: Time Speed & Distance, Time & Work, Mixtures & Alligation.",
            "Difficult Hits in Quant: Number Systems, Permutations & Combinations, Probability.",
            "Easy Hits in Reasoning: Syllogism, Directions, Data Sufficiency, Clocks.",
            "Difficult Hits in Reasoning: Complex Seating Arrangements, Multi-variable Puzzles.",
            "Sectional cutoffs must be cleared individually; do not spend excessive time on single tricky questions."
        ]
    },
    "questions": [
        {
            "id": 1,
            "question": "What is the total duration and question count of the Infosys Written Test?",
            "options": ["100 mins & 50 Questions", "120 mins & 60 Questions", "90 mins & 60 Questions", "150 mins & 75 Questions"],
            "correctIndex": 1,
            "explanation": "According to the official Infosys Exam Pattern, the total time is 120 minutes for 60 questions across all sections."
        },
        {
            "id": 2,
            "question": "In the Quantitative Aptitude section, how many questions must be answered within 35 minutes?",
            "options": ["15 Questions", "20 Questions", "10 Questions", "25 Questions"],
            "correctIndex": 2,
            "explanation": "Quantitative Aptitude comprises 10 questions with a generous 35-minute time window because questions involve multi-step calculations."
        },
        {
            "id": 3,
            "question": "What is the expected cut-off percentile for the Logical Reasoning section?",
            "options": ["50% - 60%", "75% - 80% (9 to 11 correct)", "95% - 99%", "60% - 65%"],
            "correctIndex": 1,
            "explanation": "The expected cutoff for Logical Reasoning is approximately 75% to 80% percentile, which corresponds to 9 to 11 correct answers."
        },
        {
            "id": 4,
            "question": "Which of the following topics is classified as an 'Easy Hit' under Reasoning Ability?",
            "options": ["Multi-tier Arrangements", "Syllogism", "Cryptarithmetic without options", "Complex Circular Arrangements"],
            "correctIndex": 1,
            "explanation": "Syllogism and Direction tests follow strict systematic rules and are considered high-yield 'Easy Hits' with 100% chance of appearance."
        }
    ]
}


reasoning_topics = [
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
            "Multiplicative & Geometric Progressions (+, ×, ×/+, ×/-)",
            "Alternate & Interleaved Sequences",
            "Letter Series & Positional Alphabet Value",
            "Wrong Number Identification"
        ],
        "theory": {
            "overview": "In number series questions, a set of numbers are given following a particular pattern. In the series, each following number is logically related to its immediate preceding number and thus forms a pattern. The student is required to understand the pattern logic and find the missing or wrong term.",
            "keyRules": [
                "Ascending Series: Involves addition (+), multiplication (×), or combined operations like (×n + k) or (×n - k).",
                "Descending Series: Usually involves subtraction (-) or division (÷).",
                "Alternate Series: Two interleaved sequences run simultaneously at odd and even positions.",
                "Square and Cube Patterns: Differences between successive terms often form squares (n²) or cubes (n³).",
                "Letter Series: Assign positions 1 to 26 (A=1, Z=26). Watch for reverse positions (Z=1, A=26) and cyclic shifts."
            ],
            "examples": [
                {"problem": "2, 5, 8, 11, 14, ...", "solution": "+3 step each time. Next term = 17.", "tip": "Simple arithmetic difference"},
                {"problem": "2, 4, 8, 16, 32, ...", "solution": "×2 multiplier. Next term = 64.", "tip": "Geometric progression"},
                {"problem": "2, 5, 11, 23, 47, ...", "solution": "×2 + 1 each step (2×2+1=5, 5×2+1=11...). Next = 47×2+1 = 95.", "tip": "Compound operation"},
                {"problem": "5, 6, 7, 8, 10, 11, 14, 15, ...", "solution": "Odd series: 5, 7, 10, 14 (+2, +3, +4). Even series: 6, 8, 11, 15 (+2, +3, +4).", "tip": "Interleaved dual series"}
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
                "options": ["336", "349", "312", "337"],
                "correctIndex": 0,
                "explanation": "Pattern is n³ - n: 1³-1=0, 2³-2=6, 3³-3=24, 4³-4=60, 5³-5=120, 6³-6=210, 7³-7 = 343 - 7 = 336."
            },
            {
                "id": 2,
                "question": "Find the next number in the series: 11, 14, 19, 22, 27, 30, ?",
                "options": ["39", "34", "36", "35"],
                "correctIndex": 3,
                "explanation": "Alternating pattern of +3 and +5: 11+3=14, 14+5=19, 19+3=22, 22+5=27, 27+3=30, next is 30+5 = 35."
            },
            {
                "id": 3,
                "question": "Insert the missing number: 6, 12, 21, ?, 48",
                "options": ["33", "39", "36", "31"],
                "correctIndex": 0,
                "explanation": "Differences are increasing by 3: 12-6=6, 21-12=9, next difference is 12 -> 21+12 = 33. Check: 33+15 = 48."
            },
            {
                "id": 4,
                "question": "Find the missing term: 18, 22, 30, ?, 78, 142",
                "options": ["44", "35", "46", "48"],
                "correctIndex": 2,
                "explanation": "Differences are powers of 2 multiplied by 4 (or doubling differences): 22-18=4, 30-22=8, next is 16 -> 30+16 = 46. Next is 46+32=78, 78+64=142."
            },
            {
                "id": 5,
                "question": "Find the missing number: 73205, 6655, 605, 55, ?",
                "options": ["9", "5", "13", "11"],
                "correctIndex": 1,
                "explanation": "Each successive number is obtained by dividing by 11: 73205 ÷ 11 = 6655, 6655 ÷ 11 = 605, 605 ÷ 11 = 55, 55 ÷ 11 = 5."
            },
            {
                "id": 6,
                "question": "Find the missing number in the series: 25, 100, ?, 1600, 6400",
                "options": ["400", "300", "360", "420"],
                "correctIndex": 0,
                "explanation": "Each number is multiplied by 4: 25 × 4 = 100, 100 × 4 = 400, 400 × 4 = 1600, 1600 × 4 = 6400."
            },
            {
                "id": 7,
                "question": "Find the missing number: 125, ?, 343, 512, 729, 1000",
                "options": ["216", "215", "256", "225"],
                "correctIndex": 0,
                "explanation": "The series represents cubes of consecutive natural numbers: 5³ = 125, 6³ = 216, 7³ = 343, 8³ = 512, 9³ = 729, 10³ = 1000."
            },
            {
                "id": 8,
                "question": "Find the missing number: 1, 27, 125, 343, ?, 1331",
                "options": ["730", "729", "512", "772"],
                "correctIndex": 1,
                "explanation": "Cubes of consecutive odd numbers: 1³ = 1, 3³ = 27, 5³ = 125, 7³ = 343, 9³ = 729, 11³ = 1331."
            },
            {
                "id": 9,
                "question": "Find the missing term in the letter series: A, C, F, J, O, ?",
                "options": ["Q", "U", "V", "T"],
                "correctIndex": 1,
                "explanation": "Positions in alphabet: A(1) +2 = C(3), +3 = F(6), +4 = J(10), +5 = O(15), +6 = 21 -> U."
            },
            {
                "id": 10,
                "question": "Find the missing term: B, L, E, O, H, R, ?",
                "options": ["U", "J", "K", "M"],
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
            "Positional Opposite Coding (A ↔ Z, B ↔ Y)",
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
                "Positional Opposite Coding: Replaced by opposite counterpart (A↔Z, B↔Y, C↔X, D↔W, E↔V... sum of positions = 27).",
                "Artificial Language: Compare common words across phrases to isolate unique vocabulary roots."
            ],
            "examples": [
                {"problem": "In a certain code 'COUNTERS' is written as 'SRETNUOC'. How is 'CLEARING' written?", "solution": "Letters are simply reversed! CLEARING reversed = GNIRAELC.", "tip": "Word reversal pattern"},
                {"problem": "If VXUPLVH is written as SURMISE, what is OHPRQ?", "solution": "Each letter is shifted backward by 3 (V-3=S, X-3=U...). Thus O-3=L, H-3=E, P-3=M, R-3=O, Q-3=N -> LEMON.", "tip": "Constant backward shift (-3)"}
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
                "options": ["CGLNEIAR", "GNIRCLEA", "CLEANRIG", "GNIRAELC"],
                "correctIndex": 3,
                "explanation": "The entire word is spelled backwards. CLEARING in reverse order is G-N-I-R-A-E-L-C."
            },
            {
                "id": 2,
                "question": "If VXUPLVH is written as SURMISE, what is OHPRQ the code for?",
                "options": ["LEMON", "OPENS", "MELON", "NAMED"],
                "correctIndex": 0,
                "explanation": "Each letter in the coded word is shifted -3 steps: O(-3)=L, H(-3)=E, P(-3)=M, R(-3)=O, Q(-3)=N -> LEMON."
            },
            {
                "id": 3,
                "question": "In a certain code 'CAMPHOR' is '6$3#152' and 'SAKE' is '@$98'. How is 'MORSE' written?",
                "options": ["@96$2", "352@8", "533@8", "3528@"],
                "correctIndex": 1,
                "explanation": "Direct letter-symbol mapping: M=3, O=5, R=2, S=@, E=8 -> 352@8."
            },
            {
                "id": 4,
                "question": "If COMPUTER is written as RFUVQNPC, how is MEDICINE written in that code?",
                "options": ["EOJDJEFM", "EOJDEJFM", "MFEJDJOE", "MFEDJJOE"],
                "correctIndex": 0,
                "explanation": "The first and last letters are swapped and other letters are shifted +1 and written in reverse order: MEDICINE becomes EOJDJEFM."
            },
            {
                "id": 5,
                "question": "If sand is called Brick, Brick is called House, House is called Temple, and Temple is called Palace, where do you worship?",
                "options": ["Palace", "Temple", "Brick", "House"],
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
            "Coded Relationships (+, -, ×, ÷)"
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
                {"problem": "Ram is Mohan's son-in-law. Sangeeta has two married sons and one married daughter. Gita is Shyam's sister.", "solution": "Build hierarchical tree: Mohan + Sangeeta (parents) have children (2 sons, 1 daughter). Ram is married to daughter Gita.", "tip": "Identify parent generation first"}
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
                "options": ["Son", "Brother", "Nephew", "Father"],
                "correctIndex": 0,
                "explanation": "Since Ravi is the son of Reena and Deepak is the brother of Ravi, Deepak is also the son of Reena."
            },
            {
                "id": 2,
                "question": "E is the son of A, D is the son of B, E is married to C, C is B’s daughter. How is D related to E?",
                "options": ["Brother", "Uncle", "Father-in-law", "Brother-in-law"],
                "correctIndex": 3,
                "explanation": "C is the sister of D (both children of B). E is married to C. Therefore, D is the brother of E's wife, which makes D the brother-in-law of E."
            },
            {
                "id": 3,
                "question": "P is the son of Q while Q and R are sisters. T is the mother of R. If S is the son of T, which statement is correct?",
                "options": ["T is the brother of Q", "S is the cousin of P", "S is the maternal uncle of P", "Q and S are sisters"],
                "correctIndex": 2,
                "explanation": "T is the mother of Q and R. S is the son of T, so S is the brother of Q (P's mother). The mother's brother is the maternal uncle. Thus, S is the maternal uncle of P."
            },
            {
                "id": 4,
                "question": "If 'L + K' means L is father of K, 'L - K' means L is wife of K, and 'L × K' means L is brother of K. In A × B + C, how is A related to C?",
                "options": ["Brother", "Father", "Uncle", "Son"],
                "correctIndex": 2,
                "explanation": "B is the father of C (B + C). A is the brother of B (A × B). The father's brother is Uncle."
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
            "Right Turn (Clockwise 90°) & Left Turn (Anticlockwise 90°)",
            "Pythagoras Theorem for Shortest Distance",
            "Clock Face and Compass Misalignment"
        ],
        "theory": {
            "overview": "Direction sense problems test your spatial orientation on a two-dimensional map. On paper, North is always UP, South is DOWN, East is RIGHT, and West is LEFT.",
            "keyRules": [
                "Right Turn = 90° Clockwise.",
                "Left Turn = 90° Anticlockwise.",
                "Shortest Distance: Hypotenuse = √(Base² + Perpendicular²).",
                "Shadows: In morning (sunrise in East), shadows fall to the West. In evening (sunset in West), shadows fall to the East. At noon, there is negligible shadow."
            ],
            "examples": [
                {"problem": "A person walks 3 km West, turns left 3 km, turns right 1 km, turns right 3 km. How far from start?", "solution": "West displacement: 3 + 1 = 4 km. Vertical displacement: -3 + 3 = 0 km. Distance = 4 km.", "tip": "Track horizontal and vertical coordinates separately"}
            ],
            "tips": [
                "Set origin as (0, 0): North is +y, South is -y, East is +x, West is -x.",
                "Sum Δx and Δy to instantly determine final position."
            ]
        },
        "questions": [
            {
                "id": 1,
                "question": "A watch reads 4:30. If the minute hand points towards the West, in which direction does the hour hand point?",
                "options": ["Northeast", "Southwest", "Northwest", "North"],
                "correctIndex": 2,
                "explanation": "At 4:30, minute hand is normally South. If South is designated as West (90° clockwise rotation), the hour hand (normally Southeast) rotated 90° clockwise points Northwest."
            },
            {
                "id": 2,
                "question": "Hanuman travels 3 km West, turns left and goes 3 km, turns right and goes 1 km, again turns right and goes 3 km. How far is he from the starting point?",
                "options": ["7 km", "6 km", "5 km", "4 km"],
                "correctIndex": 3,
                "explanation": "Walking 3 km West, then 3 km South, 1 km West, then 3 km North cancels out the South-North movement. Net displacement = 3 km + 1 km = 4 km West."
            },
            {
                "id": 3,
                "question": "If Southeast becomes East, Northwest becomes West, and all other directions change in the same manner, what will North become?",
                "options": ["Northwest", "Southeast", "Southwest", "Northeast"],
                "correctIndex": 0,
                "explanation": "Southeast becoming East represents a 45° anticlockwise shift. Rotating North 45° anticlockwise yields Northwest."
            },
            {
                "id": 4,
                "question": "If Ram is to the West of Shyam and Kareem is to the North of Shyam, in what direction is Kareem with respect to Ram?",
                "options": ["Northeast", "Southwest", "Northwest", "Southeast"],
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
                "options": ["Only conclusion I follows", "Only conclusion II follows", "Either I or II follows", "Neither I nor II follows"],
                "correctIndex": 0,
                "explanation": "Since some brown are blue and all blue are black, the blue portion of brown is definitely black. Conclusion I is valid. II is not definitely true."
            },
            {
                "id": 2,
                "question": "Statements: I. Some rats are cats. II. All cats are bats. III. No bat is a dog. Conclusions: I. Some rats are definitely not dogs. II. No rat is dog.",
                "options": ["Only I follows", "Only II follows", "Both I and II follow", "Neither follows"],
                "correctIndex": 0,
                "explanation": "The rats that are cats are inside 'bats'. Since no bat is a dog, those specific rats can never be dogs. Thus, 'Some rats are definitely not dogs' is valid."
            },
            {
                "id": 3,
                "question": "Statements: I. All lamps are pots. II. All pots are roses. III. No rose is a flower. Conclusions: I. All roses are pots. II. All lamps are roses.",
                "options": ["Only conclusion I follows", "Only conclusion II follows", "Either I or II follows", "Neither follows"],
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
            "overview": "Visual and Non-verbal reasoning tests spatial recognition and visual pattern extrapolation. Figures change from step to step based on rotation (90°, 45° CW/ACW), addition/deletion of elements, or positional swapping.",
            "keyRules": [
                "Rotation Logic: Figures frequently rotate in increments of 45°, 90°, or 180° clockwise (CW) or anticlockwise (ACW).",
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
                "question": "In a non-verbal series, a figure rotates 90° Clockwise in each consecutive step while one petal is lost. What happens in the 4th step?",
                "options": ["Rotates 90° CW with 3 petals lost", "Rotates 90° ACW with 2 petals lost", "Inverts upside down with same petals", "Remains stationary"],
                "correctIndex": 0,
                "explanation": "Consistent application of the rule: 90° CW rotation per step with one petal dropped at each step."
            },
            {
                "id": 2,
                "question": "In alternate steps of a pattern, 'T' and an arrow interchange places while a third element is replaced by a new symbol. This pattern represents:",
                "options": ["Analogy rotation", "Alternating positional swap with element renewal", "Mirror reflection", "Translation along X-axis"],
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
                "Matrix Method: Rows = Primary entities (names), Columns = Attributes. Put ticks (✓) for confirmed matches and cross out (✗) rest of row/column.",
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
                "options": ["Mishra", "Kaul", "Gupta", "Mehta"],
                "correctIndex": 2, # based on page 58: 1.c (Gupta)
                "explanation": "By grid deduction of author, subject, and shelf number, Gupta is associated with the Accounts book on shelf 4."
            },
            {
                "id": 2,
                "question": "A family went for vacation. It rained on 13 days. Whenever it rained in morning, afternoon was clear and vice versa. They enjoyed 11 mornings and 12 afternoons without rain. How many total days did they stay?",
                "options": ["18 days", "13 days", "23 days", "25 days"],
                "correctIndex": 0,
                "explanation": "Let total days be D. Rainy mornings = r1, rainy afternoons = r2. r1 + r2 = 13. Clear mornings = D - r1 = 11. Clear afternoons = D - r2 = 12. Summing gives 2D - (r1+r2) = 23 => 2D - 13 = 23 => 2D = 36 => D = 18."
            },
            {
                "id": 3,
                "question": "In an island where natives lie and visitors speak truth, a man asks a salesman: 'Is that woman a native or visitor?' Salesman replies: 'She is a visitor'. Is the salesman a native or visitor?",
                "options": ["Native", "Visitor", "Cannot be determined", "Data insufficient"],
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
                "options": ["1", "9", "7", "0"],
                "correctIndex": 3,
                "explanation": "The set of prime numbers up to 50 includes 2 and 5. Since 2 × 5 = 10, any product containing both 2 and 5 has a units digit of 0."
            },
            {
                "id": 2,
                "question": "Find the total number of rectangles (including squares) in an 8 × 8 standard chessboard.",
                "options": ["64", "144", "1296", "1728"],
                "correctIndex": 2,
                "explanation": "A chessboard has 9 horizontal lines and 9 vertical lines. Any rectangle is formed by choosing 2 horizontal lines and 2 vertical lines: C(9, 2) × C(9, 2) = 36 × 36 = 1296."
            },
            {
                "id": 3,
                "question": "Find the digits X, Y, Z if: XXXX + YYYY + ZZZZ = YXXXZ",
                "options": ["9, 1, 8", "8, 1, 9", "1, 8, 9", "9, 8, 1"],
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
                "options": ["Statement I alone is sufficient", "Statement II alone is sufficient", "Either I alone or II alone is sufficient", "Both together are necessary"],
                "correctIndex": 2,
                "explanation": "From I: 2πr = 308 gives r, and area = πr². From II: r is directly given as 28 m, so area can be calculated. Hence either statement alone is sufficient."
            },
            {
                "id": 2,
                "question": "What is the speed of the train? I. 280 m long train crosses a signal pole in 18 seconds. II. 280 m train crosses a platform in 45 seconds.",
                "options": ["Statement I alone is sufficient", "Statement II alone is sufficient", "Either I alone or II alone is sufficient", "Both together are needed"],
                "correctIndex": 0,
                "explanation": "From I, speed = length / time = 280 / 18 m/s, which gives the unique speed. Statement II lacks platform length, so I alone is sufficient."
            },
            {
                "id": 3,
                "question": "Is Kareena the wife of Saif? I. Kareena is female and Saif is male. II. Kareena is the daughter of Saif.",
                "options": ["Statement I alone is sufficient", "Statement II alone is sufficient", "Both together are needed", "Data even together not sufficient"],
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
            "Dial Division (60 minute spaces = 360°)",
            "Relative Speed (55 min spaces gained in 60 mins)",
            "Coincidence & Right Angle Frequencies",
            "Angle Formula: θ = |30H - 5.5M|",
            "Clock Gain and Loss Calculations"
        ],
        "theory": {
            "overview": "The clock face is divided into 60 minute spaces equal to 360°. The minute hand moves 360°/60 = 6° per minute. The hour hand moves 360°/720 = 0.5° per minute. The relative speed of the minute hand over the hour hand is 5.5° per minute (or 55 minute spaces gained every 60 minutes).",
            "keyRules": [
                "Angle Formula: Angle = |30×H - (11/2)×M| degrees.",
                "Coincidence: Hands coincide 22 times in 24 hours (once per hour except between 11 and 1).",
                "Opposite Direction (180°): Hands are in a straight line opposite 22 times in 24 hours.",
                "Straight Line (Coincident or Opposite): 44 times in 24 hours.",
                "Right Angles (90°): Hands are at right angles 44 times in 24 hours.",
                "Coincidence time between H and H+1: (60H / 11) minutes past H."
            ],
            "examples": [
                {"problem": "Angle at 8:30?", "solution": "θ = |30(8) - 5.5(30)| = |240 - 165| = 75°.", "tip": "Direct formula application"},
                {"problem": "How many degrees does the hour hand rotate from 8 AM to 2 PM?", "solution": "Time elapsed = 6 hours. Hour hand rotates 30° per hour: 6 × 30° = 180°.", "tip": "Hour hand rotates 0.5° per min or 30° per hr"}
            ],
            "tips": [
                "Reflex angle is always 360° minus the smaller internal angle.",
                "Hands coincide at: 12:00, 1:05 5/11, 2:10 10/11, 3:16 4/11, 4:21 9/11..."
            ]
        },
        "questions": [
            {
                "id": 1,
                "question": "An accurate clock shows 8 o'clock in morning. Through how many degrees will the hour hand rotate when it shows 2 o'clock in the afternoon?",
                "options": ["144°", "150°", "168°", "180°"],
                "correctIndex": 3,
                "explanation": "From 8 AM to 2 PM is 6 hours. In 1 hour, the hour hand rotates 360°/12 = 30°. In 6 hours, it rotates 6 × 30° = 180°."
            },
            {
                "id": 2,
                "question": "A clock is started at noon. By 10 minutes past 5, the hour hand has turned through:",
                "options": ["155°", "145°", "150°", "160°"],
                "correctIndex": 0,
                "explanation": "Total time = 5 hours 10 mins = 310 minutes. Since hour hand rotates 0.5° per minute: 310 × 0.5° = 155°."
            },
            {
                "id": 3,
                "question": "The angle between the minute hand and the hour hand of a clock at 8:30 is:",
                "options": ["80°", "75°", "60°", "105°"],
                "correctIndex": 1,
                "explanation": "Using formula θ = |30H - (11/2)M|: θ = |30(8) - 5.5(30)| = |240 - 165| = 75°."
            },
            {
                "id": 4,
                "question": "How often are the hands of a clock at right angles in a single day?",
                "options": ["11 times", "22 times", "44 times", "55 times"],
                "correctIndex": 2,
                "explanation": "Hands are at right angles twice every hour except between 2-4 and 8-10, yielding 22 times in 12 hours, which is 44 times in a 24-hour day."
            },
            {
                "id": 5,
                "question": "At what time between 4 and 5 o'clock will the two hands of the clock coincide?",
                "options": ["4 hr 21 9/11 min", "4 hr 20 min", "4 hr 23 7/11 min", "4 hr 22 min"],
                "correctIndex": 0,
                "explanation": "Coincidence formula = 60H/11 minutes past H. For H=4: (60 × 4)/11 = 240/11 = 21 9/11 minutes past 4."
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
                "Day Formula: Remainder of (Date + Month Code + Year + [Year/4] + Century Code) ÷ 7."
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
                "options": ["25", "24", "26", "23"],
                "correctIndex": 1,
                "explanation": "Between 2001 and 2100, there are 24 leap years because 2100 is a century year not divisible by 400, so it is NOT a leap year (100 / 4 - 1 = 24)."
            },
            {
                "id": 2,
                "question": "Which of the following is NOT a leap year?",
                "options": ["700", "800", "1200", "2000"],
                "correctIndex": 0,
                "explanation": "Century years must be divisible by 400 to be leap years. 800, 1200, and 2000 are divisible by 400, but 700 is not."
            },
            {
                "id": 3,
                "question": "The calendar for the year 2007 will be identical to which future year?",
                "options": ["2014", "2016", "2017", "2018"],
                "correctIndex": 3,
                "explanation": "2007 is a (Leap + 3) year (2004 was leap). (Leap + 3) years repeat after 11 years: 2007 + 11 = 2018."
            },
            {
                "id": 4,
                "question": "Mahatma Gandhi died on 30th January 1948. What day of the week was it?",
                "options": ["Friday", "Wednesday", "Thursday", "Monday"],
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
                "options": ["N", "O", "M", "Data inadequate"],
                "correctIndex": 3,
                "explanation": "We know L > Q > P > M > (N, O). The relative height between N and O is not specified, so the shortest child cannot be definitively determined (Data inadequate)."
            },
            {
                "id": 2,
                "question": "Nisha is taller than Suja. Nina is taller than Nisha. Nila is taller than Nina. Misha is the tallest of all. Standing in ascending height, who is in the middle?",
                "options": ["Nisha", "Nina", "Suja", "Nila"],
                "correctIndex": 1,
                "explanation": "Order from shortest to tallest: Suja < Nisha < Nina < Nila < Misha. Nina is the 3rd person out of 5, sitting right in the middle."
            }
        ]
    }
]

print("Reasoning topics compiled:", len(reasoning_topics))

quant_topics = [
    {
        "id": "quant-numbers",
        "title": "Number Systems & Divisibility",
        "category": "Quantitative Aptitude",
        "categoryOrder": 3,
        "icon": "Binary",
        "estimatedTime": "30 min",
        "description": "Algebraic identities, classification of numbers, remainder theorem, HCF & LCM, and divisibility tests.",
        "subtopics": [
            "Algebraic Formulas ((a+b)², (a³+b³), a³+b³+c³-3abc)",
            "Classifications (Natural, Whole, Integers, Prime, Composite)",
            "Tests of Divisibility (2, 3, 4, 5, 6, 8, 9, 10, 11)",
            "HCF & LCM Properties: Product = HCF × LCM",
            "Remainder Arithmetic: p = k·q + r"
        ],
        "theory": {
            "overview": "Number theory is foundational to Quantitative Aptitude in Infosys. It includes divisibility rules, factors, primes, HCF/LCM, and algebraic expansions.",
            "keyRules": [
                "Important Identity: If a + b + c = 0, then a³ + b³ + c³ = 3abc.",
                "(a + b)² - (a - b)² = 4ab, and (a + b)² + (a - b)² = 2(a² + b²).",
                "Divisible by 3: Sum of digits is divisible by 3.",
                "Divisible by 4: Last two digits form a number divisible by 4.",
                "Divisible by 8: Last three digits form a number divisible by 8.",
                "Divisible by 9: Sum of digits is divisible by 9.",
                "Divisible by 11: Difference between sum of odd placed digits and even placed digits is 0 or multiple of 11.",
                "Product of two numbers = HCF × LCM."
            ],
            "examples": [
                {"problem": "What is the smallest number to add to 89357 to make it divisible by 9?", "solution": "Sum of digits = 8+9+3+5+7 = 32. Next multiple of 9 is 36. Add 36 - 32 = 4.", "tip": "Divisibility by 9 sum of digits"},
                {"problem": "HCF = 11, LCM = 7700. One number is 275. Find the other.", "solution": "Other number = (HCF × LCM) / First = (11 × 7700) / 275 = 308.", "tip": "HCF × LCM = A × B"}
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
                "options": ["63", "74", "85", "58"],
                "correctIndex": 3,
                "explanation": "Let original number be 10x + y. Sum of digits: x + y = 13. Interchanged number: 10y + x = (10x + y) + 27 => 9(y - x) = 27 => y - x = 3. Solving: y = 8, x = 5. Original number = 58."
            },
            {
                "id": 2,
                "question": "What is the smallest number that should be added to 89357 to make it exactly divisible by 9?",
                "options": ["1", "3", "4", "7"],
                "correctIndex": 2,
                "explanation": "Sum of digits of 89357 = 8 + 9 + 3 + 5 + 7 = 32. The nearest multiple of 9 greater than 32 is 36. Smallest number to add = 36 - 32 = 4."
            },
            {
                "id": 3,
                "question": "The difference between two numbers is 4 and the difference between their squares is 128. What is the larger number?",
                "options": ["14", "16", "12", "18"],
                "correctIndex": 3,
                "explanation": "Let numbers be x and y (x > y). x - y = 4. x² - y² = (x - y)(x + y) = 128 => 4(x + y) = 128 => x + y = 32. Adding: 2x = 36 => x = 18."
            },
            {
                "id": 4,
                "question": "The LCM and HCF of two positive numbers are 300 and 30. If one number divided by 4 gives quotient 15, what is the other number?",
                "options": ["360", "150", "300", "75"],
                "correctIndex": 1,
                "explanation": "First number = 4 × 15 = 60. Using Product = HCF × LCM: 60 × Other = 30 × 300 = 9000 => Other = 9000 / 60 = 150."
            },
            {
                "id": 5,
                "question": "The HCF of two numbers is 11 and their LCM is 7700. If one number is 275, find the other.",
                "options": ["279", "283", "308", "318"],
                "correctIndex": 2,
                "explanation": "Other number = (11 × 7700) / 275 = 84700 / 275 = 308."
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
            "Product Stability Ratio (A × B = Constant)",
            "Population Growth P(1 + R/100)^n & Depreciation P(1 - R/100)^n",
            "Venn Diagram Percentages (Union & Intersection)"
        ],
        "theory": {
            "overview": "A percentage is a pure dimensionless number expressed as a fraction of 100. Mastery of fraction-percentage equivalences enables fast mental calculations.",
            "keyRules": [
                "p% of y = y% of p = (p × y) / 100.",
                "Percentage Increase: N × (1 + S/100); Decrease: N × (1 - S/100).",
                "Compensatory Reduction: If price increases by x%, consumption must reduce by [100x / (100 + x)]% to keep expenditure constant.",
                "Successive Percentage: Effective change = [a + b + (ab/100)]%.",
                "If A is R% more than B, then B is less than A by [R / (100 + R)] × 100%."
            ],
            "tips": [
                "Memorize: 1/7 ≈ 14.28%, 1/9 ≈ 11.11%, 1/11 ≈ 9.09%, 1/12 ≈ 8.33%, 1/16 ≈ 6.25%."
            ]
        },
        "questions": [
            {
                "id": 1,
                "question": "If 44% of a number is 275, what is 64% of the same number?",
                "options": ["450", "400", "375", "500"],
                "correctIndex": 1,
                "explanation": "Let number be X. 0.44X = 275 => X = 275 / 0.44 = 625. Now 64% of 625 = 0.64 × 625 = 400."
            },
            {
                "id": 2,
                "question": "If A's salary is 20% more than that of B, how much percent is B's salary less than that of A?",
                "options": ["16 2/3%", "20%", "40%", "10%"],
                "correctIndex": 0,
                "explanation": "Formula: [R / (100 + R)] × 100% = [20 / 120] × 100% = 1/6 × 100% = 16 2/3%."
            },
            {
                "id": 3,
                "question": "If the price of 1 kg of rice is increased by 25%, the increased amount is Rs. 12. What is the new price per kg?",
                "options": ["Rs. 48", "Rs. 60", "Rs. 72", "Rs. 36"],
                "correctIndex": 1,
                "explanation": "25% of Original Price = 12 => Original Price = 12 × 4 = 48. New Price = 48 + 12 = Rs. 60."
            },
            {
                "id": 4,
                "question": "The population of a town is 15625. It increases 8% annually. What will it be at the end of 3 years?",
                "options": ["16983", "18693", "19683", "19638"],
                "correctIndex": 2,
                "explanation": "P_3 = 15625 × (1 + 8/100)³ = 15625 × (27/25)³ = 15625 × (19683 / 15625) = 19683."
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
            "Basic Profit & Loss Formulas (Gain% = Gain/CP × 100)",
            "Cost Price = 100/(100 + Gain%) × SP",
            "Two Items Sold at Equal SP with Equal Gain & Loss: Loss = (x/10)² %",
            "Single Discount Equivalent to Successive Discounts: (a + b - ab/100)%",
            "Faulty Weights: Gain% = [Error / (True Value - Error)] × 100"
        ],
        "theory": {
            "overview": "Profit and Loss governs commercial arithmetic. Profit or loss is always computed with respect to Cost Price (CP) unless specifically indicated otherwise.",
            "keyRules": [
                "Gain = SP - CP; Loss = CP - SP.",
                "Gain% = (Gain / CP) × 100; Loss% = (Loss / CP) × 100.",
                "If CP of m articles = SP of n articles, Profit% = [(m - n) / n] × 100%.",
                "Successive discounts d1 and d2 have equivalent discount = (d1 + d2 - d1·d2/100)%.",
                "Dishonest shopkeeper using false weight: Gain% = [Error / (True Value - Error)] × 100."
            ],
            "tips": [
                "Markup is applied on Cost Price; Discount is deducted from Marked Price."
            ]
        },
        "questions": [
            {
                "id": 1,
                "question": "The cost price of 10 articles is equal to the selling price of 9 articles. Find the profit percent.",
                "options": ["101/9 %", "100/9 % (11 1/9 %)", "102/9 %", "103/9 %"],
                "correctIndex": 1,
                "explanation": "Formula: [(m - n)/n] × 100% = [(10 - 9)/9] × 100% = 100/9% = 11 1/9%."
            },
            {
                "id": 2,
                "question": "Manish sold two mobiles for Rs. 9900 each. On one he gained 10% and on the other he lost 10%. Find his overall gain or loss percentage.",
                "options": ["Loss 1%", "Neither loss nor gain", "Gain 1%", "Loss 2%"],
                "correctIndex": 0,
                "explanation": "When two articles are sold at same SP, one at x% gain and other at x% loss, overall result is ALWAYS a loss: (x/10)² % = (10/10)² % = 1% Loss."
            },
            {
                "id": 3,
                "question": "If the selling price is doubled, the profit triples. Find the original profit percent.",
                "options": ["100%", "116.67%", "200%", "300%"],
                "correctIndex": 0,
                "explanation": "Let CP = C, SP = S. Profit P = S - C. If SP becomes 2S, new profit = 2S - C = 3P = 3(S - C) => 2S - C = 3S - 3C => S = 2C. Original profit = (2C - C)/C = 100%."
            },
            {
                "id": 4,
                "question": "The list price of an electric iron is Rs. 300. If two successive discounts of 15% and 10% are allowed, its selling price will be:",
                "options": ["Rs. 229.50", "Rs. 231.50", "Rs. 232.50", "Rs. 234.50"],
                "correctIndex": 0,
                "explanation": "Price after 15% discount = 300 × 0.85 = 255. Price after second 10% discount = 255 × 0.90 = Rs. 229.50."
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
            "Speed Conversions (km/hr × 5/18 = m/s)",
            "Average Speed for Equal Distance: 2xy / (x + y)",
            "Relative Speed (Opposite: v1 + v2; Same: |v1 - v2|)",
            "Trains Crossing Objects (Pole: Length=L; Platform: Length=L+P)",
            "Boats & Streams: Downstream = b+s, Upstream = b-s"
        ],
        "theory": {
            "overview": "Time, Speed and Distance problems depend on the relation Distance = Speed × Time. When distances are equal, speed is inversely proportional to time.",
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
                "options": ["5 m/s", "20 m/s", "15 m/s", "18 m/s"],
                "correctIndex": 2,
                "explanation": "Speed in km/hr = 216 / 4 = 54 km/hr. Converting to m/s: 54 × (5/18) = 3 × 5 = 15 m/s."
            },
            {
                "id": 2,
                "question": "Excluding stoppages, the speed of a bus is 64 kmph and including stoppages it is 48 kmph. For how many minutes does the bus stop per hour?",
                "options": ["15 min", "12.5 min", "10 min", "18 min"],
                "correctIndex": 0,
                "explanation": "Time of stoppage per hour = (Difference in speed / Speed without stoppages) × 60 = [(64 - 48)/64] × 60 = (16/64) × 60 = 15 minutes."
            },
            {
                "id": 3,
                "question": "A goods train runs at 72 kmph and crosses a 250 m long platform in 26 seconds. What is the length of the train?",
                "options": ["230 m", "240 m", "260 m", "270 m"],
                "correctIndex": 3,
                "explanation": "Speed = 72 × (5/18) = 20 m/s. Total distance in 26 seconds = 20 × 26 = 520 m. Length of train = Total distance - Platform length = 520 - 250 = 270 m."
            },
            {
                "id": 4,
                "question": "A motorboat whose speed is 15 km/hr in still water goes 30 km downstream and comes back in a total of 4 hours 30 minutes. What is the speed of the stream?",
                "options": ["4 km/hr", "5 km/hr", "6 km/hr", "10 km/hr"],
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
            "Chain Rule: (M1 × D1 × H1)/W1 = (M2 × D2 × H2)/W2",
            "Alternate Days Work",
            "Pipes & Cisterns (Inlet + vs Outlet -)"
        ],
        "theory": {
            "overview": "If A completes work in n days, 1 day's work is 1/n. Total work is usually represented as 1 unit or as the LCM of days for clean integer calculation.",
            "keyRules": [
                "Two persons A and B together finish in: (A × B) / (A + B) days.",
                "Chain Rule: (M1 × D1 × H1) / W1 = (M2 × D2 × H2) / W2.",
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
                "options": ["10", "16", "12", "25"],
                "correctIndex": 3,
                "explanation": "Using MDH: (15 × 6 × 2) / 3240 = (M × 3 × 4) / 5400 => 180 / 3240 = 12M / 5400 => 1/18 = 12M/5400 => 12M = 300 => M = 25 men."
            },
            {
                "id": 2,
                "question": "A, B and C can finish a piece of work in 10, 15 and 30 days respectively. How many days will be required if they work together?",
                "options": ["5 days", "6 days", "7 days", "8 days"],
                "correctIndex": 0,
                "explanation": "LCM(10, 15, 30) = 30 units total work. Daily work: A=3, B=2, C=1. Combined = 3 + 2 + 1 = 6 units/day. Days = 30 / 6 = 5 days."
            },
            {
                "id": 3,
                "question": "Pipes A and B can fill a cistern in 10 and 12 hours respectively and pipe C can empty it in 6 hours. If all three are opened simultaneously, when will the tank be full?",
                "options": ["20 hours", "60 hours", "80 hours", "40 hours"],
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
            "Successive Replacement Formula: Initial × (1 - x/V)^n",
            "Concentration Adjustments"
        ],
        "theory": {
            "overview": "Alligation is a modified form of weighted averages used to find the ratio in which two or more ingredients at given prices/concentrations must be mixed to produce a mixture of desired mean value.",
            "keyRules": [
                "Rule: (Cheaper Quantity) / (Dearer Quantity) = (Price of Dearer - Mean Price) / (Mean Price - Price of Cheaper).",
                "Replacement Formula: If from a vessel containing V litres of liquid, x litres are removed and replaced with water n times, the remaining quantity of pure liquid is: V × [1 - (x/V)]^n."
            ],
            "tips": [
                "Ensure all prices (cheaper, dearer, mean) are expressed on the same basis (e.g. all CP, never mix CP and SP directly without converting)."
            ]
        },
        "questions": [
            {
                "id": 1,
                "question": "A dairyman pays Rs. 6.40 per litre of milk. He adds water and sells the mixture at Rs. 8 per litre, making 37.5% profit. Find the ratio of water to milk.",
                "options": ["1 : 15", "1 : 10", "1 : 20", "1 : 12"],
                "correctIndex": 1,
                "explanation": "Selling price = Rs. 8, Profit = 37.5% = 3/8. Cost price of mixture = 8 / (1 + 3/8) = Rs. 5.818... Milk cost 6.4, water cost 0. Ratio of water to milk = (6.4 - 5.818) / (5.818 - 0) = 1 : 10."
            },
            {
                "id": 2,
                "question": "A container had milk. 10% was removed and replaced with water. This was repeated for a total of 3 days. If 729 L of milk remains, what was the initial quantity?",
                "options": ["1200 L", "1500 L", "1000 L", "1300 L"],
                "correctIndex": 2,
                "explanation": "Remaining = Initial × (1 - 0.10)³ = Initial × (0.9)³ = Initial × 0.729. Since remaining is 729 L: Initial × 0.729 = 729 => Initial = 1000 L."
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
                "Square: Area = a², Perimeter = 4a, Diagonal = a√2.",
                "Rectangle: Area = l × b, Perimeter = 2(l + b), Diagonal = √(l² + b²).",
                "Equilateral Triangle: Area = (√3/4)a², Perimeter = 3a.",
                "Circle: Area = πr², Circumference = 2πr.",
                "Cylinder: Volume = πr²h, CSA = 2πrh, TSA = 2πr(r + h).",
                "Cone: Volume = (1/3)πr²h, Slant height l = √(r² + h²), CSA = πrl.",
                "Sphere: Volume = (4/3)πr³, Surface Area = 4πr².",
                "Cuboid: Volume = l·b·h, TSA = 2(lb + bh + hl), Diagonal = √(l² + b² + h²)."
            ],
            "tips": [
                "When a solid is melted and recast into another shape, its VOLUME remains strictly invariant."
            ]
        },
        "questions": [
            {
                "id": 1,
                "question": "Perimeter of a square and an equilateral triangle is equal. If the diagonal of the square is 15√2 cm, find the area of the square.",
                "options": ["144 sq cm", "225 sq cm", "288 sq cm", "196 sq cm"],
                "correctIndex": 1,
                "explanation": "Diagonal of square = a√2 = 15√2 => Side of square a = 15 cm. Area of square = a² = 15² = 225 sq cm."
            },
            {
                "id": 2,
                "question": "A rectangular carpet has an area of 120 m² and a perimeter of 46 m. What is the length of its diagonal?",
                "options": ["15 m", "16 m", "17 m", "20 m"],
                "correctIndex": 2,
                "explanation": "l · b = 120, 2(l + b) = 46 => l + b = 23. Diagonal d = √(l² + b²) = √((l+b)² - 2lb) = √(23² - 2(120)) = √(529 - 240) = √289 = 17 m."
            },
            {
                "id": 3,
                "question": "A right circular cylinder is filled with water. How many right cones of same diameter and height are needed to hold that water?",
                "options": ["2", "3", "4", "5"],
                "correctIndex": 1,
                "explanation": "Volume of cylinder = πr²h. Volume of cone of same radius and height = (1/3)πr²h. Therefore, exactly 3 cones are required."
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
            "Arrangements with Identical Items: n! / (p! · q!)",
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
                "options": ["100", "120", "50", "24"],
                "correctIndex": 1,
                "explanation": "Number of ways = 5! = 5 × 4 × 3 × 2 × 1 = 120."
            },
            {
                "id": 2,
                "question": "How many different words can be formed using the letters of the word 'BANKER'?",
                "options": ["120", "6", "720", "360"],
                "correctIndex": 2,
                "explanation": "'BANKER' has 6 distinct letters. Number of permutations = 6! = 720."
            },
            {
                "id": 3,
                "question": "In how many ways can 6 persons be seated around a circular table for dinner?",
                "options": ["6!", "5! (120)", "5!/2 (60)", "720"],
                "correctIndex": 1,
                "explanation": "For circular seating of n distinct persons, number of arrangements is (n - 1)! = (6 - 1)! = 5! = 120."
            },
            {
                "id": 4,
                "question": "In a party, there are 15 persons and every person shakes hands with every other person once. What is the total number of handshakes?",
                "options": ["105", "120", "140", "210"],
                "correctIndex": 0,
                "explanation": "Handshakes = C(15, 2) = (15 × 14) / 2 = 105."
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
            "overview": "Probability measures the likelihood of an outcome. The probability of an event always satisfies 0 ≤ P(E) ≤ 1.",
            "keyRules": [
                "P(E) = (Favorable Outcomes) / (Total Outcomes in Sample Space).",
                "At least one condition: P(At least one) = 1 - P(None).",
                "Two dice thrown simultaneously: Total sample space = 6 × 6 = 36."
            ],
            "tips": [
                "For 'At least one' problems, always compute the complementary probability of 'None' and subtract from 1."
            ]
        },
        "questions": [
            {
                "id": 1,
                "question": "When two coins are tossed simultaneously, what is the probability that both show heads?",
                "options": ["1/6", "1/3", "1/2", "1/4"],
                "correctIndex": 3,
                "explanation": "Sample space S = {HH, HT, TH, TT}, size = 4. Favorable = {HH} = 1. Probability = 1/4."
            },
            {
                "id": 2,
                "question": "When two dice are rolled together, what is the probability that the sum of the outputs is 8?",
                "options": ["1/36", "7/36", "5/36", "8/36"],
                "correctIndex": 2,
                "explanation": "Pairs giving sum 8: (2,6), (3,5), (4,4), (5,3), (6,2) -> 5 outcomes out of 36. Probability = 5/36."
            },
            {
                "id": 3,
                "question": "A leap year is selected at random. What is the probability that it will contain 53 Sundays?",
                "options": ["5/7", "3/4", "4/7", "2/7"],
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
            "Pie Charts (Degrees 360° vs Percentage 100%)",
            "Multi-bar Graphs & Financial Metrics (Sales, Profit, Returns)",
            "Line Graphs & Growth Rate Trends"
        ],
        "theory": {
            "overview": "Data Interpretation tests the ability to extract relevant data from visual charts and apply percentage calculations, ratios, and averages quickly.",
            "keyRules": [
                "Degree in Pie Chart: Angle = (Value / Total) × 360°.",
                "Percentage in Pie Chart: % = (Angle / 360) × 100%.",
                "Profit Margin = (Profit / Sales) × 100%.",
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
                "options": ["54°", "64.8°", "45°", "72°"],
                "correctIndex": 1,
                "explanation": "Central angle = 18% of 360° = (18 / 100) × 360° = 64.8°."
            },
            {
                "id": 2,
                "question": "If total employees = 3600 and IT department represents 15%, how many employees work in IT?",
                "options": ["540", "450", "600", "360"],
                "correctIndex": 0,
                "explanation": "IT employees = 15% of 3600 = 0.15 × 3600 = 540 employees."
            }
        ]
    }
]

print("Quant topics compiled:", len(quant_topics))

verbal_topics = [
    {
        "id": "verbal-spot-errors",
        "title": "Spotting the Errors",
        "category": "Verbal Ability",
        "categoryOrder": 4,
        "icon": "AlertCircle",
        "estimatedTime": "30 min",
        "description": "Grammar rules for noun agreement, plural nouns, pronoun consistency, conjunctions, and prepositions.",
        "subtopics": [
            "Plural Forms of Singular-looking Nouns (Cattle, Police)",
            "Measure Nouns with Numbers (nine-metre cloth vs nine yards)",
            "Pronoun Consistency ('One' must take 'one's')",
            "'Fewer' (Countable) vs 'Less' (Uncountable)",
            "Correlative Conjunctions (Scarcely/Hardly... when, No sooner... than)"
        ],
        "theory": {
            "overview": "Spot the errors evaluates standard English grammar conventions. Sentences are divided into parts (A, B, C, D) where candidates pinpoint grammatical irregularities.",
            "keyRules": [
                "Rule 1: 'Cattle, people, police, clergy' are plural nouns and take plural verbs (e.g. 'The Police have come').",
                "Rule 2: 'Scissors, trousers, spectacles, premises' are always plural.",
                "Rule 3: 'One' must be followed by 'one's', not 'his' (e.g. 'One must respect one's elders').",
                "Rule 4: 'Whose' is used for living beings; 'which' for non-living objects.",
                "Rule 5: 'Less' denotes quantity (uncountable); 'fewer' denotes number (countable).",
                "Rule 6: 'One of' is always followed by a plural noun ('one of the least important people').",
                "Rule 7: 'Scarcely' and 'Hardly' are followed by 'when' (NEVER 'than').",
                "Rule 8: 'No sooner' is followed by 'than'.",
                "Rule 9: 'Though' is paired with 'yet', NEVER with 'but'."
            ],
            "tips": [
                "Check Subject-Verb agreement first in every sentence.",
                "Watch out for inverted sentence structures after negative adverbs (Hardly had he...)."
            ]
        },
        "questions": [
            {
                "id": 1,
                "question": "Identify the part containing an error: (A) We discussed about the problem / (B) on the eve of examination / (C) that I found it easy / (D) No error.",
                "options": ["Part A", "Part B", "Part C", "No error (D)"],
                "correctIndex": 0,
                "explanation": "The verb 'discuss' is transitive and does not take the preposition 'about'. It should be 'We discussed the problem'."
            },
            {
                "id": 2,
                "question": "Identify error: (A) The customer handed over / (B) a hundred-rupees note / (C) to the shopkeeper / (D) No error.",
                "options": ["Part A", "Part B", "Part C", "No error (D)"],
                "correctIndex": 1,
                "explanation": "When a noun denotes measure/money and acts as an adjective preceding another noun, it remains singular: 'a hundred-rupee note'."
            },
            {
                "id": 3,
                "question": "Identify error: (A) No sooner did the sun rise / (B) when we took a hasty breakfast / (C) and resumed journey / (D) No error.",
                "options": ["Part A", "Part B", "Part C", "No error (D)"],
                "correctIndex": 1,
                "explanation": "'No sooner' is always paired with 'than', not 'when'. It must be: 'than we took a hasty breakfast'."
            },
            {
                "id": 4,
                "question": "Identify error: (A) She is / (B) five years / (C) senior than me / (D) No error.",
                "options": ["Part A", "Part B", "Part C", "No error (D)"],
                "correctIndex": 2,
                "explanation": "Adjectives like senior, junior, superior, inferior, prefer take 'to', not 'than'. Hence: 'senior to me'."
            }
        ]
    },
    {
        "id": "verbal-sentence-correction",
        "title": "Sentence Correction",
        "category": "Verbal Ability",
        "categoryOrder": 4,
        "icon": "Edit3",
        "estimatedTime": "30 min",
        "description": "Improving sentence phrasing, fixing dangling modifiers, tautology, and parallelism.",
        "subtopics": [
            "Parallelism in Gerunds & Infinitives",
            "Tautology & Redundant Phrasing ('returned back')",
            "Misplaced & Dangling Participle Modifiers",
            "Subjunctive Mood ('As if she were')",
            "Phrasal Verbs & Idiomatic Collocations"
        ],
        "theory": {
            "overview": "Sentence Correction requires choosing the phrasing that adheres to standard English grammar, parallelism, conciseness, and clarity.",
            "keyRules": [
                "Parallelism: Elements in a series must have parallel grammatical form (e.g. 'She likes cooking, dancing, and playing').",
                "Tautology: Avoid redundant phrasing such as 'return back', 'revert back', 'sufficient enough'.",
                "Dangling Modifiers: An introductory participial phrase must be immediately followed by the noun it modifies.",
                "Subjunctive 'Were': When expressing an unreal hypothetical ('as if'), use 'were' even with singular subjects."
            ],
            "tips": [
                "Choose the most concise and direct phrasing that maintains grammatical integrity."
            ]
        },
        "questions": [
            {
                "id": 1,
                "question": "Improve: 'The poor villagers [have waited] in the bitter cold for more than 4 hours now.'",
                "options": ["have been waiting", "had waited", "has been waiting", "No improvement"],
                "correctIndex": 0,
                "explanation": "An action that began in the past and is still ongoing right now ('for more than 4 hours now') requires the present perfect continuous tense: 'have been waiting'."
            },
            {
                "id": 2,
                "question": "Improve: 'The old man felled some trees in the garden with [hardly no effort] at all.'",
                "options": ["hard effort", "hardly any effort", "a hardly any effort", "No improvement"],
                "correctIndex": 1,
                "explanation": "'Hardly' is already negative. Using 'no' creates a double negative error. The correct phrase is 'hardly any effort'."
            },
            {
                "id": 3,
                "question": "Improve: 'I hope you won't object to [me watching] while you work.'",
                "options": ["against me watching", "me to watch", "to my watching", "No improvement"],
                "correctIndex": 2,
                "explanation": "A gerund ('watching') should be preceded by a possessive pronoun ('my watching') rather than an objective pronoun."
            }
        ]
    },
    {
        "id": "verbal-reading-comprehension",
        "title": "Reading Comprehension",
        "category": "Verbal Ability",
        "categoryOrder": 4,
        "icon": "BookOpen",
        "estimatedTime": "35 min",
        "description": "Techniques for analyzing passages, discerning main ideas, inferring implied premises, and evaluating tone.",
        "subtopics": [
            "Main Idea & Author's Primary Purpose",
            "Supporting Details & Direct Citations",
            "Inference & Implied Claims",
            "Style, Tone & Perspective Analysis"
        ],
        "theory": {
            "overview": "Reading comprehension tests the ability to read, analyze, and synthesize long-form arguments from business, economics, science, and history.",
            "keyRules": [
                "Base answers STRICTLY on facts or implications directly present in the text.",
                "Beware of extreme words in options (always, never, all, completely) unless explicitly endorsed by the author.",
                "Main idea questions must encompass the entire scope of the passage, not just one supporting paragraph."
            ],
            "tips": [
                "Read the first and last paragraph with extra focus to capture the thesis and conclusion."
            ]
        },
        "questions": [
            {
                "id": 1,
                "question": "In the passage on minority business federal contracts (1978), what is described as a potential risk of rapid expansion for small minority firms?",
                "options": ["Lack of skilled labor", "Incurring crippling fixed expenses if subcontracts are later reduced", "Antitrust litigation by competitors", "Sudden increase in corporate taxes"],
                "correctIndex": 1,
                "explanation": "The text states that small firms must make substantial capital investments in new equipment and staff; if subcontracts are subsequently reduced, they face crippling fixed overheads."
            },
            {
                "id": 2,
                "question": "Regarding tectonic ocean basins, what key challenge does the Mid-Atlantic and Indian Ocean plate pose to the traditional convection hypothesis?",
                "options": ["The plate is shrinking rapidly", "The plate is growing on both sides without an intermediate trench", "Sedimentation is completely absent", "Convection is too hot to measure"],
                "correctIndex": 1,
                "explanation": "The passage notes the plate between the Mid-Atlantic Ridge and the Indian Ocean Ridge is expanding on both sides without an intermediate subduction trench, making simple convection sync unlikely."
            }
        ]
    },
    {
        "id": "verbal-critical-reasoning",
        "title": "Critical Reasoning",
        "category": "Verbal Ability",
        "categoryOrder": 4,
        "icon": "HelpCircle",
        "estimatedTime": "25 min",
        "description": "Argument analysis, identifying unstated assumptions, strengthening/weakening claims, and logical fallacies.",
        "subtopics": [
            "Premise, Assumption & Conclusion Triad",
            "Strengthen & Weaken Strategies",
            "Identifying Logical Flaws (Circular reasoning, Ad hominem)",
            "Evaluating Plans & Proposals"
        ],
        "theory": {
            "overview": "Critical Reasoning short passages (~100 words) present arguments that require structural breakdown into Premises (evidence), Assumptions (unstated links), and Conclusions.",
            "keyRules": [
                "Premise + Assumption = Conclusion.",
                "Negation Test for Assumptions: If negating the assumption collapses the conclusion, the assumption is vital.",
                "Weaken Questions: Find an alternative explanation or a counter-fact that severs the link between premise and conclusion."
            ],
            "tips": [
                "Never challenge the stated premises; evaluate the reasoning linking the premises to the author's deduction."
            ]
        },
        "questions": [
            {
                "id": 1,
                "question": "Alba: 'I won't vote for Senator Frank; she is soft on crime.' Tam: 'Frank sponsored the latest anticrime law.' Alba: 'If Frank sponsored it, it can't be a strong law.' What is Alba's logical flaw?",
                "options": ["She argues in a circle, using an unsupported assertion to dismiss conflicting evidence", "She attacks Frank on personal grounds", "She assumes crime is the only issue", "She relies on statistics that are outdated"],
                "correctIndex": 0,
                "explanation": "Alba assumes her conclusion (that Frank is soft on crime) to reject counter-evidence, exhibiting classic circular reasoning."
            },
            {
                "id": 2,
                "question": "If A implies B, B implies C, and C implies D. Which statement MUST logically be true?",
                "options": ["If D, then A", "If not D, then not A", "If not B, then not C", "If not A, then not D"],
                "correctIndex": 1,
                "explanation": "By transitivity, A implies D. The contrapositive of 'If A then D' is 'If not D, then not A', which is logically equivalent and must be true."
            }
        ]
    },
    {
        "id": "verbal-fill-blanks",
        "title": "Fill in the Blanks",
        "category": "Verbal Ability",
        "categoryOrder": 4,
        "icon": "FileCheck",
        "estimatedTime": "25 min",
        "description": "Contextual vocabulary, dual blank synchronization, idiom accuracy, and tone consistency.",
        "subtopics": [
            "Tone Matching (Positive vs Negative Connotation)",
            "Grammar & Syntax Clues (Articles 'a' vs 'an', preposition pairs)",
            "Dual-Blank Elimination Technique",
            "Common Collocations & Idiomatic Usage"
        ],
        "theory": {
            "overview": "Fill in the Blank questions evaluate contextual vocabulary and grammatical flow. In double-blank sentences, both words must harmonize with the sentence logic.",
            "keyRules": [
                "Step 1: Read the sentence and predict an initial word before looking at options.",
                "Step 2: Pay attention to contrast words like 'although', 'despite', 'however', which flip the expected meaning.",
                "Step 3: Eliminate options where either word fails the tone or grammatical requirement."
            ],
            "tips": [
                "For dual blanks, test the second blank first if the first blank has many plausible options."
            ]
        },
        "questions": [
            {
                "id": 1,
                "question": "Choose the word fitted in both blanks: 'Almost 90% of spices are utilized within country, only the ___ is exported.' and 'Rohit was advised to take ___ since he broke his leg.'",
                "options": ["Medicine", "Rest", "Leftover", "Coffee"],
                "correctIndex": 1,
                "explanation": "'Rest' fits both meanings: remainder/residual portion in the first sentence, and physical relaxation/recuperation in the second."
            },
            {
                "id": 2,
                "question": "The boy was ______ of cheating in the examination.",
                "options": ["Condemned", "Accused", "Charged", "Punished"],
                "correctIndex": 1,
                "explanation": "The appropriate preposition after 'accused' is 'of' ('accused of cheating'). 'Charged' would take 'with'."
            },
            {
                "id": 3,
                "question": "I have no ______ motive in offering this advice.",
                "options": ["Posterior", "Interior", "Ulterior", "Exterior"],
                "correctIndex": 2,
                "explanation": "The idiomatic standard English phrase is 'ulterior motive', meaning an undisclosed, hidden intention."
            }
        ]
    }
]

print("Verbal topics compiled:", len(verbal_topics))

all_topics = [intro_topic] + reasoning_topics + quant_topics + verbal_topics

# Save modular data files
with open("src/data/introData.js", "w", encoding="utf-8") as f:
    f.write("export const introTopic = " + json.dumps(intro_topic, indent=2) + ";\n")

with open("src/data/reasoningData.js", "w", encoding="utf-8") as f:
    f.write("export const reasoningTopics = " + json.dumps(reasoning_topics, indent=2) + ";\n")


with open("src/data/quantData.js", "w", encoding="utf-8") as f:
    f.write("export const quantTopics = " + json.dumps(quant_topics, indent=2) + ";\n")

with open("src/data/verbalData.js", "w", encoding="utf-8") as f:
    f.write("export const verbalTopics = " + json.dumps(verbal_topics, indent=2) + ";\n")

# Save master topics file
with open("src/data/topics.js", "w", encoding="utf-8") as f:
    f.write("""import { introTopic } from './introData';
import { reasoningTopics } from './reasoningData';
import { quantTopics } from './quantData';
import { verbalTopics } from './verbalData';

export const allTopics = [
  introTopic,
  ...reasoningTopics,
  ...quantTopics,
  ...verbalTopics
];

export const categories = [
  { id: 'all', name: 'All Modules' },
  { id: 'Exam Pattern', name: 'Exam Pattern' },
  { id: 'Reasoning Ability', name: 'Reasoning Ability' },
  { id: 'Quantitative Aptitude', name: 'Quantitative Aptitude' },
  { id: 'Verbal Ability', name: 'Verbal Ability' }
];

export function getTopicById(id) {
  return allTopics.find(t => t.id === id);
}

export function getTotalStats() {
  const totalTopics = allTopics.length;
  const totalQuestions = allTopics.reduce((sum, t) => sum + (t.questions ? t.questions.length : 0), 0);
  return { totalTopics, totalQuestions };
}
""")

print("Successfully written all topics into src/data/! Total topics:", len(all_topics))
