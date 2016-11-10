// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "<h1>Two Languages, One Classroom</h1>",
        "main":    "<p>How much do you know about dual language programs in New York public schools? Find out by taking this quiz!</p>",
        "results": "<h5>Where can you find these programs?</h5><p>Take a look at the map below to find a dual language program near you.</p>",
        "level1":  "Expert, Experto, 專家, বিশেষজ্ঞ",
        "level2":  "Highly Informed, Informado, 通知, অবগত",
        "level3":  "Knowledgable, Entendido, 知識淵博的, বুদ্ধিমান",
        "level4":  "Aware, Consciente, 知道的, সচেতন",
        "level5":  "Unfamiliar, Desconocido, 陌生, অপরিচিত" // no comma here
    },
    "questions": [
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "There are 1600 public schools in New York City. How many of these operate any sort of Bilingual Education Program?",
            "a": [
                {"option": "820",      "correct": false},
                {"option": "154",     "correct": true},
                {"option": "405",      "correct": false},
                {"option": "675",     "correct": false} // no comma here
            ],
            "correct": "<p><span>That's right!</span> According to the Department of Education, only 154 public schools in the city currently offer a dual language program. After the expansion, New York city will have 183 programs, a 19 percent increase.</p>",
            "incorrect": "<p><span>Incorrect.</span> According to the Department of Education, only 154 public schools in the city currently offer a dual language program.</p>" // no comma here
        },//End of question 1
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "When was the first bilingual program taught in the United States?",
            "a": [
                {"option": "1950s",               "correct": false},
                {"option": "1700s",   "correct": true},
                {"option": "2001",               "correct": false},
                {"option": "1985", "correct": false} // no comma here
            ],
            // "select_any": true, //Make it select any rather than all.
            "correct": "<p><span>Correct!</span> In 17th century Virginia when Polish settlers landed to help the colony improve its shipbuilding and glasswork skills. Because of their help, the colony allowed them to establish the first the first bilingual education program in the United States.",
            "incorrect": "<p><span>Incorrect</span> In 17th century Virginia when Polish settlers landed to help the colony improve its shipbuilding and glasswork skills. Because of their help, the colony allowed them to establish the first the first bilingual education program in the United States.</p>" // no comma here
        }, //End of question 2
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "There are 180 languages spoken in the homes of students in New York City. What are the top three non-English languages spoken citywide?",
            "a": [
                {"option": "Spanish",           "correct": true},
                {"option": "Russian",                  "correct": false},
                {"option": "Bengali",  "correct": true},
                {"option": "Chinese",          "correct": true} // no comma here
            ],
            "correct": "<p><span>Good job!</span> According to the Office of English Language Learners 2013-14 Demographic Report, 61.8 percent of New Yorkers speak Spanish, 14.2 percent speak Chinese, and 4.2 speak Bengali.</p>",
            "incorrect": "<p><span>Not Quite.</span> According to the Office of English Language Learners 2013-14 Demographic Report, 61.8 percent of New Yorkers speak Spanish, 14.2 percent speak Chinese, and 4.2 speak Bengali.  </p>" // no comma here
        },//End of question 3
        { // Question 4
            "q": "Dual language programs have also been shown to improve proficiency in the student’s home language. A lack in this proficiency has been associated with annual income losses of ______.",
            "a": [
                {"option": "between $0 and $1,800",    "correct": false},
                {"option": "between $2,100 and $2,300",     "correct": true},
                {"option": "between $3,000 and $3,500",      "correct": false},
                {"option": "between $4,200 and $5,000",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span> A lack of proficiency in the student’s home language has been associated with annual income losses of between $2,100 and $2,300, according to recent research.</p>",
            "incorrect": "<p><span>Incorrect.</span> A lack of proficiency in the student’s home language has been associated with annual income losses of between $2,100 and $2,300, according to recent research.</p>" // no comma here
        },//End of question 4
        { // Question 5
            "q": "True or False? High school graduation rates for English second language students are the same as native English speakers.",
            "a": [
                {"option": "True",    "correct": false},
                {"option": "False",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Good Job! </span>Graduation rates for non-native English speaking students dropped from 41.5 percent to 32.5 percent from 2010 to 2014. Meanwhile, overall graduation rates continued to rise. </p>",
            "incorrect": "<p><span>Not Quite! </span>Graduation rates for non-native English speaking students dropped from 41.5 percent to 32.5 percent from 2010 to 2014. Meanwhile, overall graduation rates continued to rise. </p>" // no comma here
        }
    ]
};
