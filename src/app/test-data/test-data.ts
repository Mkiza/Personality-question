import { PersonalityQuestion } from '../model/personality-question';
import { PersonalityTypes } from '../model/personality-types.enum';


export const testData: PersonalityQuestion[] = [
    {
      questionId: 1,
      questionText: "You're waiting for a lecture to start. What do you do?",
      options: [
        { optionValue: '1', optionText: 'Chat with the person sitting next to me', selectedOption: false, optionType: PersonalityTypes.THINKING_EXTROVERT },
        { optionValue: '2', optionText: 'Do something on my phone', selectedOption: false, optionType: PersonalityTypes.SENTIMENTAL_INTROVERT },
        { optionValue: '3', optionText: 'Observe the audience', selectedOption: false, optionType: PersonalityTypes.INTUITIVE_INTROVERT },
      ],
      selectedOption: undefined
    },
    {
      questionId: 2,
      questionText: "How do you feel about having roommates??",
      options: [
        { optionValue: '1', optionText: "It's nice to have someone there when I get home", selectedOption: false, optionType: PersonalityTypes.SENSITIVE_EXTROVERT },
        { optionValue: '2', optionText: 'I much prefer living alone', selectedOption: false, optionType: PersonalityTypes.SENSITIVE_INTROVERT },
        { optionValue: '3', optionText: "I don't mind, as long as they're clean and responsible", selectedOption: false, optionType: PersonalityTypes.INTUITIVE_EXTROVERT },
      ],
      selectedOption: undefined
    },
    {
      questionId: 3,
      questionText: "How do you prepare for a trip?",
      options: [
        { optionValue: '1', optionText: "I read up and make a detailed schedule", selectedOption: false, optionType: PersonalityTypes.THINKING_INTROVERT },
        { optionValue: '2', optionText: "I may read a little, but generally I'll wing it", selectedOption: false, optionType: PersonalityTypes.INTUITIVE_EXTROVERT },
        { optionValue: '3', optionText: "I find contacts I can hang out with wherever I go", selectedOption: false, optionType: PersonalityTypes.SENTIMENTAL_EXTROVERT },
        { optionValue: '3', optionText: "I check out their local art to get a feel of the culture", selectedOption: false, optionType: PersonalityTypes.SENSITIVE_EXTROVERT },
      ],
      selectedOption: undefined
    },
    {
      questionId: 4,
      questionText: "Your work space is usually",
      options: [
        { optionValue: '1', optionText: "Very organized", selectedOption: false, optionType: PersonalityTypes.THINKING_INTROVERT },
        { optionValue: '2', optionText: 'A total mess', selectedOption: false, optionType: PersonalityTypes.INTUITIVE_EXTROVERT },
        { optionValue: '3', optionText: "Quiet and comfortable", selectedOption: false, optionType: PersonalityTypes.SENSITIVE_INTROVERT },
      ],
      selectedOption: undefined
    },
    {
      questionId: 5,
      questionText: "Which of the following would you rather be?",
      options: [
        { optionValue: '1', optionText: "An interior designer", selectedOption: false, optionType: PersonalityTypes.SENSITIVE_EXTROVERT },
        { optionValue: '2', optionText: 'A financial consultant', selectedOption: false, optionType: PersonalityTypes.INTUITIVE_EXTROVERT },
        { optionValue: '3', optionText: "A therapist", selectedOption: false, optionType: PersonalityTypes.INTUITIVE_INTROVERT },
        { optionValue: '3', optionText: "A researcher", selectedOption: false, optionType: PersonalityTypes.THINKING_INTROVERT },
      ],
      selectedOption: undefined
    },
    {
      questionId: 6,
      questionText: "Which of the following interests you more?",
      options: [
        { optionValue: '1', optionText: "Making and doing", selectedOption: false, optionType: PersonalityTypes.INTUITIVE_EXTROVERT },
        { optionValue: '2', optionText: 'Researching and planning', selectedOption: false, optionType: PersonalityTypes.THINKING_INTROVERT },
        { optionValue: '3', optionText: "Meeting people", selectedOption: false, optionType: PersonalityTypes.INTUITIVE_EXTROVERT },
      ],
      selectedOption: undefined
    },
    {
      questionId: 7,
      questionText: "How do you usually make decisions?",
      options: [
        { optionValue: '1', optionText: "I consider all options and make the sensible choice", selectedOption: false, optionType: PersonalityTypes.THINKING_INTROVERT },
        { optionValue: '2', optionText: 'I go with my gut', selectedOption: false, optionType: PersonalityTypes.INTUITIVE_EXTROVERT },
        { optionValue: '3', optionText: "I ask for advice and consult with friends", selectedOption: false, optionType: PersonalityTypes.INTUITIVE_INTROVERT },
      ],
      selectedOption: undefined
    },
    {
      questionId: 8,
      questionText: "What are you more likely to do?",
      options: [
        { optionValue: '1', optionText: "What I think is right", selectedOption: false, optionType: PersonalityTypes.INTUITIVE_EXTROVERT },
        { optionValue: '2', optionText: 'What society thinks is right', selectedOption: false, optionType: PersonalityTypes.THINKING_INTROVERT },
      ],
      selectedOption: undefined
    },
    {
      questionId: 9,
      questionText: "You're at a social event and you don't know anyone, how do you feel?",
      options: [
        { optionValue: '1', optionText: "Excited to meet new people", selectedOption: false, optionType: PersonalityTypes.INTUITIVE_EXTROVERT },
        { optionValue: '2', optionText: 'When can I go home?', selectedOption: false, optionType: PersonalityTypes.SENTIMENTAL_INTROVERT },
        { optionValue: '3', optionText: "Happy to observe the crowd, and listen to the room", selectedOption: false, optionType: PersonalityTypes.SENSITIVE_INTROVERT },
      ],
      selectedOption: undefined
    },
    {
      questionId: 10,
      questionText: "You get a challenging task at work, how do you tackle it?",
      options: [
        { optionValue: '1', optionText: "I gather all the information before I begin", selectedOption: false, optionType: PersonalityTypes.THINKING_INTROVERT },
        { optionValue: '2', optionText: 'I get started and learn as I go', selectedOption: false, optionType: PersonalityTypes.INTUITIVE_EXTROVERT },
        { optionValue: '3', optionText: "I consult with my colleagues to get some ideas ", selectedOption: false, optionType: PersonalityTypes.INTUITIVE_INTROVERT },
      ],
      selectedOption: undefined
    },
  ];
