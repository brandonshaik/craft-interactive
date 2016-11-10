// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Warhol Wisdom",
        "main":    "<p>How well do you know 1960s Pop Artist Andy Warhol? Find out by taking this quiz!</p> <img src = http://cp91279.biography.com/1000509261001/1000509261001_1283298450001_Bio-Mini-Bio-Andy-Warhol-SF.jpg>",
        "results": "<h5>Learn More</h5><p>Etiam scelerisque, nunc ac egestas consequat, odio nibh euismod nulla, eget auctor orci nibh vel nisi. Aliquam erat volutpat. Mauris vel neque sit amet nunc gravida congue sed sit amet purus.</p> <img src = https://upload.wikimedia.org/wikipedia/commons/2/2b/Andy_Warhol_by_Jack_Mitchell.jpg>",
        "level1":  "Warhol Superstar",
        "level2":  "Warhol Wizard",
        "level3":  "Andy Amateur",
        "level4":  "Warhol Wannabe",
        "level5":  "Brush up on your Pop Art history" // no comma here
    },
    "questions": [
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "Which brand of soup's can is Warhol best known for depicting?",
            "a": [
                {"option": "Progresso",      "correct": false},
                {"option": "Campbells",     "correct": true},
                {"option": "Trader Joe's",      "correct": false},
                {"option": "Amy's Organic",     "correct": false} // no comma here
            ],
            "correct": "<p><span>That's right!</span> Warhol did a series of screen printed soup cans with every flavor Campbell's made at the time.</p>",
            "incorrect": "<p><span>Incorrect.</span> Andy ate Campbell's tomato soup for lunch everyday and was inspired to turn it into art.</p>" // no comma here
        },//End of question 1
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "What did much of Warhol's work feature?",
            "a": [
                {"option": "Animals",               "correct": false},
                {"option": "Celebrities",   "correct": true},
                {"option": "Clothing",               "correct": false},
                {"option": "Household products", "correct": true} // no comma here
            ],
            "select_any": true, //Make it select any rather than all.
            "correct": "<p><span>Correct!</span> Warhol often featured celebrities like Marilyn Monroe and Elizabeth Taylor, but also products like Brillo Pads and Coca Cola.</p> <img src = http://www.tate.org.uk/art/images/work/P/P07/P07125_8.jpg>",
            "incorrect": "<p><span>Incorrect</span> Andy liked to create art with celebrities and household products because he felt they were icons of American culture.</p>" // no comma here
        }, //End of question 2
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "Which of these artists did Andy Warhol collaborate within his lifetime?",
            "a": [
                {"option": "Keith Haring",           "correct": true},
                {"option": "Yoko Ono",                  "correct": false},
                {"option": "John Michel Basquiat",  "correct": true},
                {"option": "Pablo Picasso",          "correct": false} // no comma here
            ],
            "correct": "<p><span>Brilliant!</span> Haring and Basquiat were both famous painters in the 80s, all three died within three years of each other.</p>",
            "incorrect": "<p><span>Not Quite.</span> Picasso and Ono were not exactly contemporaries of Warhol, they all saw artistic fame at different times.</p>" // no comma here
        },//End of question 3
        { // Question 4
            "q": "Finish the quote: 'In the future, everyone will be famous for ______'",
            "a": [
                {"option": "one year",    "correct": false},
                {"option": "fifteen minutes",     "correct": true},
                {"option": "three seconds",      "correct": false},
                {"option": "two days",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span> Andy coined the term 'fifteen minutes of fame' which was made famous by this quote.</p>",
            "incorrect": "<p><span>Incorrect.</span> Andy believed in short lived fame and coined the term 'fifteen minutes of fame'.</p>" // no comma here
        },//End of question 4
        { // Question 5
            "q": "True or false: Andy Warhol was a devout Catholic, which was reflected in some of his work.",
            "a": [
                {"option": "True",    "correct": true},
                {"option": "False",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Good Job!</span> Towards the end of his life Warhol often drew and painted religious work, like the Last Supper.</p>",
            "incorrect": "<p><span>Not Quite!</span> Andy was very religious, in fact his funeral was held at St. Patrick's Cathedral on Fifth Avenue.</p>" // no comma here
        },

        { // Question 6 - Multiple Choice, Multiple True Answers, Select All
            "q": "Which of these mediums did Andy Warhol in?",
            "a": [
                {"option": "Painting",           "correct": true},
                {"option": "Film",                  "correct": true},
                {"option": "Performance Art",  "correct": false},
                {"option": "Music",          "correct": true} // no comma here
            ],
            "correct": "<p><span>Brilliant!</span> Andy Warhol was a jack of all trades, he also worked in sculpture and wrote several books. Here's one of his films:</p> <iframe width= 420 height= 315 src= https://www.youtube.com/embed/Ejr9KBQzQPM frameborder= 0 allowfullscreen></iframe>",
            "incorrect": "<p><span>Not Quite.</span> Andy Warhol worked in many different mediums, but he preferred to stay out of the spotlight. Performance art was never his thing.</p>" // no comma here
        }
    ]
};
