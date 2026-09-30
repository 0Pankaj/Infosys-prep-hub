# Python generator to create topic modules and mock data based on the 153-page PDF
import json
import os

os.makedirs('src/data', exist_ok=True)

# 1. Introduction: Exam Pattern
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

print("Saving intro data...")
with open("src/data/introData.js", "w", encoding="utf-8") as f:
    f.write("export const introTopic = " + json.dumps(intro_topic, indent=2) + ";\n")

print("Intro data created.")
