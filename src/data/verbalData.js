export const verbalTopics = [
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
        "options": [
          "Part A",
          "Part B",
          "Part C",
          "No error (D)"
        ],
        "correctIndex": 0,
        "explanation": "The verb 'discuss' is transitive and does not take the preposition 'about'. It should be 'We discussed the problem'."
      },
      {
        "id": 2,
        "question": "Identify error: (A) The customer handed over / (B) a hundred-rupees note / (C) to the shopkeeper / (D) No error.",
        "options": [
          "Part A",
          "Part B",
          "Part C",
          "No error (D)"
        ],
        "correctIndex": 1,
        "explanation": "When a noun denotes measure/money and acts as an adjective preceding another noun, it remains singular: 'a hundred-rupee note'."
      },
      {
        "id": 3,
        "question": "Identify error: (A) No sooner did the sun rise / (B) when we took a hasty breakfast / (C) and resumed journey / (D) No error.",
        "options": [
          "Part A",
          "Part B",
          "Part C",
          "No error (D)"
        ],
        "correctIndex": 1,
        "explanation": "'No sooner' is always paired with 'than', not 'when'. It must be: 'than we took a hasty breakfast'."
      },
      {
        "id": 4,
        "question": "Identify error: (A) She is / (B) five years / (C) senior than me / (D) No error.",
        "options": [
          "Part A",
          "Part B",
          "Part C",
          "No error (D)"
        ],
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
        "options": [
          "have been waiting",
          "had waited",
          "has been waiting",
          "No improvement"
        ],
        "correctIndex": 0,
        "explanation": "An action that began in the past and is still ongoing right now ('for more than 4 hours now') requires the present perfect continuous tense: 'have been waiting'."
      },
      {
        "id": 2,
        "question": "Improve: 'The old man felled some trees in the garden with [hardly no effort] at all.'",
        "options": [
          "hard effort",
          "hardly any effort",
          "a hardly any effort",
          "No improvement"
        ],
        "correctIndex": 1,
        "explanation": "'Hardly' is already negative. Using 'no' creates a double negative error. The correct phrase is 'hardly any effort'."
      },
      {
        "id": 3,
        "question": "Improve: 'I hope you won't object to [me watching] while you work.'",
        "options": [
          "against me watching",
          "me to watch",
          "to my watching",
          "No improvement"
        ],
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
        "options": [
          "Lack of skilled labor",
          "Incurring crippling fixed expenses if subcontracts are later reduced",
          "Antitrust litigation by competitors",
          "Sudden increase in corporate taxes"
        ],
        "correctIndex": 1,
        "explanation": "The text states that small firms must make substantial capital investments in new equipment and staff; if subcontracts are subsequently reduced, they face crippling fixed overheads."
      },
      {
        "id": 2,
        "question": "Regarding tectonic ocean basins, what key challenge does the Mid-Atlantic and Indian Ocean plate pose to the traditional convection hypothesis?",
        "options": [
          "The plate is shrinking rapidly",
          "The plate is growing on both sides without an intermediate trench",
          "Sedimentation is completely absent",
          "Convection is too hot to measure"
        ],
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
        "options": [
          "She argues in a circle, using an unsupported assertion to dismiss conflicting evidence",
          "She attacks Frank on personal grounds",
          "She assumes crime is the only issue",
          "She relies on statistics that are outdated"
        ],
        "correctIndex": 0,
        "explanation": "Alba assumes her conclusion (that Frank is soft on crime) to reject counter-evidence, exhibiting classic circular reasoning."
      },
      {
        "id": 2,
        "question": "If A implies B, B implies C, and C implies D. Which statement MUST logically be true?",
        "options": [
          "If D, then A",
          "If not D, then not A",
          "If not B, then not C",
          "If not A, then not D"
        ],
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
        "options": [
          "Medicine",
          "Rest",
          "Leftover",
          "Coffee"
        ],
        "correctIndex": 1,
        "explanation": "'Rest' fits both meanings: remainder/residual portion in the first sentence, and physical relaxation/recuperation in the second."
      },
      {
        "id": 2,
        "question": "The boy was ______ of cheating in the examination.",
        "options": [
          "Condemned",
          "Accused",
          "Charged",
          "Punished"
        ],
        "correctIndex": 1,
        "explanation": "The appropriate preposition after 'accused' is 'of' ('accused of cheating'). 'Charged' would take 'with'."
      },
      {
        "id": 3,
        "question": "I have no ______ motive in offering this advice.",
        "options": [
          "Posterior",
          "Interior",
          "Ulterior",
          "Exterior"
        ],
        "correctIndex": 2,
        "explanation": "The idiomatic standard English phrase is 'ulterior motive', meaning an undisclosed, hidden intention."
      }
    ]
  }
];
