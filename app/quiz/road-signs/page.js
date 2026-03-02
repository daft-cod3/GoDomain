'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { useLanguage } from '../../components/LanguageContext';

const roadSignQuizzes = [
  {
    "slug": "quiz-1",
    "title": "Road Signs Quiz 1",
    "questions": [
      {
        "question": "What does a red octagonal sign require vehicles to do?",
        "options": [
          "Slow down and proceed with caution",
          "Come to a complete stop",
          "Yield to oncoming traffic",
          "No entry"
        ],
        "correctAnswer": "Come to a complete stop"
      },
      {
        "question": "What does a triangular sign with a red border indicate?",
        "options": [
          "A warning of a hazard ahead",
          "A regulatory rule that must be obeyed",
          "An informatory message",
          "A pedestrian crossing"
        ],
        "correctAnswer": "A warning of a hazard ahead"
      },
      {
        "question": "What does a 'No Overtaking' sign prohibit?",
        "options": [
          "Overtaking only heavy vehicles",
          "Overtaking any moving vehicle",
          "Overtaking on weekdays",
          "Driving faster than 50 km/h"
        ],
        "correctAnswer": "Overtaking any moving vehicle"
      },
      {
        "question": "A sign showing a bicycle inside a red circle means what?",
        "options": [
          "Compulsory route for cyclists",
          "Bicycle parking ahead",
          "No entry for bicycles",
          "Cyclists must dismount"
        ],
        "correctAnswer": "No entry for bicycles"
      },
      {
        "question": "What is the meaning of a 'Keep Left' sign?",
        "options": [
          "You must turn left at the next junction",
          "You must pass to the left of the sign or obstruction",
          "The road ahead is a one-way street to the left",
          "Only light vehicles should keep left"
        ],
        "correctAnswer": "You must pass to the left of the sign or obstruction"
      }
    ]
  },
  {
    "slug": "quiz-2",
    "title": "Road Signs Quiz 2",
    "questions": [
      {
        "image": "/roadSign/regulatory/proh/noEntry.png",
        "question": "What is the meaning of a 'No Entry' sign?",
        "options": [
          "The road is closed ahead",
          "You cannot enter the road in the direction you are traveling",
          "No U-turn allowed",
          "Speed limit in force"
        ],
        "correctAnswer": "You cannot enter the road in the direction you are traveling"
      },
      {
        "image": "/roadSign/regulatory/priority/giveWay.jpeg",
        "question": "What should you do when you see a 'Give Way' sign?",
        "options": [
          "Come to a complete stop",
          "Accelerate to merge with traffic",
          "Yield to traffic on the major road",
          "Hoot to alert other drivers"
        ],
        "correctAnswer": "Yield to traffic on the major road"
      },
      {
        "image": "/roadSign/warning/roadWork.jpeg",
        "question": "A sign depicting a man digging indicates what?",
        "options": [
          "Ancient burial ground ahead",
          "Pedestrian crossing",
          "Road works ahead",
          "Public footpath"
        ],
        "correctAnswer": "Road works ahead"
      },
      {
        "image": "/roadSign/warning/severeBump.jpeg",
        "question": "What does a sign showing a car skidding warn you about?",
        "options": [
          "Racing track nearby",
          "Slippery road surface",
          "Steep descent",
          "No drifting zone"
        ],
        "correctAnswer": "Slippery road surface"
      },
      {
        "image": "/roadSign/regulatory/proh/speedLimit.png",
        "question": "What does a circular sign with a number like '50' on it mean?",
        "options": [
          "The road is designated as Route 50",
          "The minimum speed is 50 km/h",
          "The maximum speed limit is 50 km/h",
          "You are 50 km from the next town"
        ],
        "correctAnswer": "The maximum speed limit is 50 km/h"
      }
    ]
  },
  {
    "slug": "quiz-3",
    "title": "Road Signs Quiz 3",
    "questions": [
      {
        "question": "A circular sign with a blue background and a white bicycle symbol means what?",
        "options": [
          "No entry for bicycles",
          "Compulsory route for cyclists",
          "Bicycle parking area",
          "Bicycle crossing ahead"
        ],
        "correctAnswer": "Compulsory route for cyclists"
      },
      {
        "question": "What does a 'Speed Limit 50' sign indicate?",
        "options": [
          "The minimum speed allowed is 50 km/h",
          "The recommended speed is 50 km/h",
          "The maximum speed allowed is 50 km/h",
          "The road is 50 km long"
        ],
        "correctAnswer": "The maximum speed allowed is 50 km/h"
      },
      {
        "question": "What does a warning sign showing a deer mean?",
        "options": [
          "Zoo ahead",
          "Animal sanctuary",
          "Wild animals may be on or near the road",
          "No hunting allowed"
        ],
        "correctAnswer": "Wild animals may be on or near the road"
      },
      {
        "question": "A blue rectangular sign with a white 'P' indicates what?",
        "options": [
          "Priority road",
          "Police station ahead",
          "Designated parking area",
          "Private road"
        ],
        "correctAnswer": "Designated parking area"
      },
      {
        "question": "What does a 'No U-Turn' sign prohibit?",
        "options": [
          "Turning left or right",
          "Making a 180-degree turn",
          "Stopping at the intersection",
          "Using the horn"
        ],
        "correctAnswer": "Making a 180-degree turn"
      }
    ]
  },
  {
    "slug": "quiz-4",
    "title": "Road Signs Quiz 4",
    "questions": [
      {
        "question": "What does a sign with a bed symbol on a blue background indicate?",
        "options": [
          "Hospital ahead",
          "Rest area",
          "Hotel or motel accommodation",
          "Residential area"
        ],
        "correctAnswer": "Hotel or motel accommodation"
      },
      {
        "question": "A warning sign with a depiction of a falling rock means what?",
        "options": [
          "Quarry ahead",
          "Uneven road surface",
          "Risk of falling rocks",
          "Roadworks ahead"
        ],
        "correctAnswer": "Risk of falling rocks"
      },
      {
        "question": "A sign showing a car and a motorcycle with a red line through the car means?",
        "options": [
          "No motor vehicles allowed",
          "No overtaking by any vehicle",
          "No overtaking by heavy vehicles",
          "Motorcycles have priority"
        ],
        "correctAnswer": "No overtaking by heavy vehicles"
      },
      {
        "question": "What must you do at a 'Stop at Customs' sign?",
        "options": [
          "Slow down and check for officers",
          "Stop only if you have goods to declare",
          "Come to a complete stop for inspection",
          "Yield to vehicles exiting the customs area"
        ],
        "correctAnswer": "Come to a complete stop for inspection"
      },
      {
        "question": "A warning sign with an exclamation mark '!' inside a triangle warns of what?",
        "options": [
          "A specific, standard hazard shown on another sign",
          "The end of all restrictions",
          "A general hazard not covered by other standard signs",
          "A police checkpoint ahead"
        ],
        "correctAnswer": "A general hazard not covered by other standard signs"
      }
    ]
  }
];

export default function RoadSignsQuizPage() {
  const { t } = useLanguage();
  const [activeQuiz, setActiveQuiz] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [questionStatuses, setQuestionStatuses] = useState({});
  const [score, setScore] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const autoNextTimeoutRef = useRef(null);

  useEffect(() => {
    return () => {
      if (autoNextTimeoutRef.current) {
        clearTimeout(autoNextTimeoutRef.current);
      }
    };
  }, []);

  const handleStartQuiz = (quiz) => {
    if (autoNextTimeoutRef.current) {
      clearTimeout(autoNextTimeoutRef.current);
      autoNextTimeoutRef.current = null;
    }
    setActiveQuiz(quiz);
    setCurrentQuestionIndex(0);
    setSelectedAnswers({});
    setQuestionStatuses({});
    setScore(null);
    setIsTransitioning(false);
  };

  const getQuestionState = (question, index) => {
    if (questionStatuses[index]) return questionStatuses[index];
    if (selectedAnswers[index] === undefined) return 'pending';
    return selectedAnswers[index] === question.correctAnswer ? 'correct' : 'incorrect';
  };

  const advanceToNextQuestion = () => {
    if (!activeQuiz) return;
    if (currentQuestionIndex < activeQuiz.questions.length - 1) {
      setIsTransitioning(true);
      autoNextTimeoutRef.current = setTimeout(() => {
        setCurrentQuestionIndex((prev) => prev + 1);
        setIsTransitioning(false);
      }, 170);
      return;
    }
    handleSubmit();
  };

  const handleSkipQuestion = () => {
    if (!activeQuiz || score !== null) return;
    if (questionStatuses[currentQuestionIndex]) return;

    setQuestionStatuses((prev) => ({
      ...prev,
      [currentQuestionIndex]: 'skipped',
    }));

    if (activeQuiz.slug === 'quiz-2') {
      autoNextTimeoutRef.current = setTimeout(() => {
        advanceToNextQuestion();
      }, 220);
    }
  };

  const handleAnswerSelect = (option) => {
    if (!activeQuiz || score !== null) return;
    if (questionStatuses[currentQuestionIndex]) return;

    const currentQuestion = activeQuiz.questions[currentQuestionIndex];
    const isCorrect = option === currentQuestion.correctAnswer;

    setSelectedAnswers((prev) => ({
      ...prev,
      [currentQuestionIndex]: option,
    }));

    setQuestionStatuses((prev) => ({
      ...prev,
      [currentQuestionIndex]: isCorrect ? 'correct' : 'incorrect',
    }));

    if (activeQuiz.slug === 'quiz-2') {
      autoNextTimeoutRef.current = setTimeout(() => {
        advanceToNextQuestion();
      }, 350);
    }
  };

  const handleNextQuestion = () => {
    if (!activeQuiz || activeQuiz.slug === 'quiz-2') return;
    const status = questionStatuses[currentQuestionIndex];
    if (!status || status === 'pending') return;
    advanceToNextQuestion();
  };

  const handleSubmit = () => {
    if (!activeQuiz) return;
    let calculatedScore = 0;
    activeQuiz.questions.forEach((question, index) => {
      if (selectedAnswers[index] === question.correctAnswer) {
        calculatedScore++;
      }
    });
    setScore(calculatedScore);
  };

  const handleGoBack = () => {
    if (autoNextTimeoutRef.current) {
      clearTimeout(autoNextTimeoutRef.current);
      autoNextTimeoutRef.current = null;
    }
    setActiveQuiz(null);
    setSelectedAnswers({});
    setQuestionStatuses({});
    setCurrentQuestionIndex(0);
    setScore(null);
    setIsTransitioning(false);
  }

  const quizImageFallbacks = [
    '/quiz/mainSign.jpg',
    '/quiz/reguLatory.jpg',
    '/quiz/warNing.jpg',
    '/quiz/roadWork.jpg',
    '/quiz/severeBump.jpg',
    '/quiz/informaTory.jpg',
    '/quiz/noRight.jpg',
    '/quiz/noPed.jpg',
    '/quiz/roadClosed.jpg',
  ];

  const progressTabs = useMemo(() => {
    if (!activeQuiz) return [];
    return activeQuiz.questions.map((question, index) => getQuestionState(question, index));
  }, [activeQuiz, questionStatuses, selectedAnswers]);

  const progressStats = useMemo(() => {
    if (!activeQuiz) return { correct: 0, incorrect: 0, skipped: 0, pending: 0 };
    return activeQuiz.questions.reduce(
      (acc, question, index) => {
        const state = getQuestionState(question, index);
        acc[state] += 1;
        return acc;
      },
      { correct: 0, incorrect: 0, skipped: 0, pending: 0 }
    );
  }, [activeQuiz, questionStatuses, selectedAnswers]);

  const getProgressTabClass = (state) => {
    if (state === 'correct') return 'bg-green-500';
    if (state === 'incorrect') return 'bg-red-500';
    if (state === 'skipped') return 'bg-yellow-400';
    return 'bg-gray-300 dark:bg-gray-700';
  };

  const renderProgressTabs = () => (
    <div className="space-y-2">
      <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
        <span>Question Progress</span>
        <span>{progressStats.correct} Correct | {progressStats.incorrect} Incorrect | {progressStats.skipped} Skipped</span>
      </div>
      <div className="flex gap-1.5">
        {progressTabs.map((state, index) => (
          <div
            key={`${activeQuiz.slug}-${index}`}
            className={`h-2.5 flex-1 rounded-full transition-colors duration-300 ${getProgressTabClass(state)}`}
            title={`Question ${index + 1}: ${state}`}
          />
        ))}
      </div>
    </div>
  );

  const getQuestionImage = (question, index) =>
    question.image || quizImageFallbacks[index % quizImageFallbacks.length];

  if (activeQuiz) {
    const currentQuestion = activeQuiz.questions[currentQuestionIndex];
    const currentStatus = questionStatuses[currentQuestionIndex];
    const canProceed = Boolean(currentStatus && currentStatus !== 'pending');
    const isPopupQuiz = activeQuiz.slug === 'quiz-2';
    const nextQuestion = activeQuiz.questions[currentQuestionIndex + 1];

    if (score !== null) {
      return (
        <div className="min-h-screen bg-gray-50 dark:bg-black animate-fade-in text-white">
          <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 sm:p-10 shadow-xl border border-gray-200 dark:border-gray-800">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl mb-4">Quiz Complete!</h1>
              <p className="text-2xl text-gray-700 dark:text-gray-200 mb-6">
                Your score: <span className="font-bold text-green-500">{score}</span> out of {activeQuiz.questions.length}
              </p>

              <div className="max-w-2xl mx-auto mb-7">{renderProgressTabs()}</div>

              <div className="mb-8 flex flex-wrap justify-center gap-2 text-xs font-semibold">
                <span className="rounded-full bg-green-100 text-green-700 px-3 py-1 dark:bg-green-900/30 dark:text-green-300">
                  Correct: {progressStats.correct}
                </span>
                <span className="rounded-full bg-red-100 text-red-700 px-3 py-1 dark:bg-red-900/30 dark:text-red-300">
                  Incorrect: {progressStats.incorrect}
                </span>
                <span className="rounded-full bg-yellow-100 text-yellow-700 px-3 py-1 dark:bg-yellow-900/30 dark:text-yellow-300">
                  Skipped: {progressStats.skipped}
                </span>
              </div>

              <button
                onClick={handleGoBack}
                className="inline-block bg-green-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-green-700 transition-colors"
              >
                {t('backToQuizzes','Back to Quizzes')}
              </button>
            </div>
          </div>
        </div>
      );
    }

    if (isPopupQuiz) {
      return (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm px-4 py-6 overflow-y-auto">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-800 p-5 sm:p-8">
              <div className="mb-4 flex items-start justify-between gap-4">
                <div>
                  <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
                    {activeQuiz.title}
                  </h1>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                    Popup Image Quiz: answer and the next card appears instantly.
                  </p>
                </div>
                <button
                  onClick={handleGoBack}
                  className="rounded-lg px-3 py-2 text-sm font-semibold bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600 transition-colors"
                >
                  Close
                </button>
              </div>

              <div className="mb-6">{renderProgressTabs()}</div>

              <div className={`transition-all duration-200 ${isTransitioning ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'}`}>
                <h2 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Question {currentQuestionIndex + 1} of {activeQuiz.questions.length}
                </h2>

                <div className="relative mb-6 h-64 sm:h-72">
                  {activeQuiz.questions[currentQuestionIndex + 2] && (
                    <div className="absolute inset-0 translate-x-6 translate-y-5 scale-[0.96] rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 opacity-45">
                      <img
                        src={getQuestionImage(activeQuiz.questions[currentQuestionIndex + 2], currentQuestionIndex + 2)}
                        alt="Queued question 2"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  {nextQuestion && (
                    <div className="absolute inset-0 translate-x-3 translate-y-3 scale-[0.98] rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 opacity-65">
                      <img
                        src={getQuestionImage(nextQuestion, currentQuestionIndex + 1)}
                        alt="Queued question 1"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div key={currentQuestionIndex} className="absolute inset-0 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-xl animate-popup-question">
                    <div className="absolute inset-0">
                      <img
                        src={getQuestionImage(currentQuestion, currentQuestionIndex)}
                        alt="Road sign question"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/80 via-black/45 to-transparent p-4">
                      <p className="text-sm sm:text-base text-white font-semibold leading-snug">
                        {currentQuestion.question}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                  {currentQuestion.options.map((option, index) => {
                    const isSelected = selectedAnswers[currentQuestionIndex] === option;
                    const optionClass = isSelected
                      ? currentStatus === 'correct'
                        ? 'bg-green-500 border-green-500 text-white'
                        : 'bg-red-500 border-red-500 text-white'
                      : 'bg-gray-100 dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-700';

                    return (
                      <button
                        key={index}
                        onClick={() => handleAnswerSelect(option)}
                        disabled={Boolean(currentStatus)}
                        className={`w-full text-left p-4 rounded-xl border transition-colors ${optionClass} disabled:cursor-not-allowed`}
                      >
                        {option}
                      </button>
                    );
                  })}
                </div>

                <div className="flex justify-between items-center gap-3">
                  <button
                    onClick={handleSkipQuestion}
                    disabled={Boolean(currentStatus)}
                    className="bg-yellow-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-yellow-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Skip
                  </button>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {currentStatus ? 'Loading next question...' : 'Select one option to continue.'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <style jsx>{`
            @keyframes popupQuestion {
              from {
                opacity: 0;
                transform: translateY(18px) scale(0.975);
              }
              to {
                opacity: 1;
                transform: translateY(0) scale(1);
              }
            }
            .animate-popup-question {
              animation: popupQuestion 320ms cubic-bezier(0.22, 1, 0.36, 1);
            }
          `}</style>
        </div>
      );
    }

    return (
      <div className="min-h-screen bg-gray-50 dark:bg-black animate-fade-in">
        <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl mb-12 text-center">
            {activeQuiz.title}
          </h1>
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Question {currentQuestionIndex + 1} of {activeQuiz.questions.length}
            </h2>
            <div className="mb-6">{renderProgressTabs()}</div>
            <div className="mb-6 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
              <img
                src={getQuestionImage(currentQuestion, currentQuestionIndex)}
                alt="Road sign question"
                className="w-full h-56 object-cover"
              />
            </div>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">{currentQuestion.question}</p>
            <div className="space-y-4">
              {currentQuestion.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(option)}
                  disabled={Boolean(currentStatus)}
                  className={`w-full text-left p-4 rounded-lg border transition-colors
                    ${selectedAnswers[currentQuestionIndex] === option
                      ? currentStatus === 'correct'
                        ? 'bg-green-500 border-green-500 text-white'
                        : 'bg-red-500 border-red-500 text-white'
                      : 'bg-gray-100 dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-700'
                    } disabled:cursor-not-allowed`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
          <div className="mt-8 flex justify-between">
            <button
              onClick={handleGoBack}
              className="bg-gray-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-gray-700 transition-colors"
            >
              Back
            </button>
            {currentQuestionIndex < activeQuiz.questions.length - 1 ? (
              <div className="flex gap-3">
                <button
                  onClick={handleSkipQuestion}
                  disabled={Boolean(currentStatus)}
                  className="bg-yellow-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-yellow-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Skip
                </button>
                <button
                  onClick={handleNextQuestion}
                  disabled={!canProceed}
                  className="bg-green-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Next
                </button>
              </div>
            ) : (
              <div className="flex gap-3">
                <button
                  onClick={handleSkipQuestion}
                  disabled={Boolean(currentStatus)}
                  className="bg-yellow-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-yellow-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Skip
                </button>
                <button
                  onClick={handleSubmit}
                  disabled={!canProceed}
                  className="bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Submit
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black animate-fade-in">
      <div className="relative isolate overflow-hidden pt-14 pb-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-20 sm:py-32 lg:py-40 text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl mb-6">
              Road Sign Quizzes
            </h1>
            <p className="text-lg leading-8 text-gray-600 dark:text-gray-300 mb-10">
              Test your knowledge of Kenyan road signs with these quizzes. Select a quiz below to begin.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <div className="shrink-0 w-80">
            <div className="h-full flex flex-col overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1 hover:border-green-600/30">
              <div className="p-6 flex flex-col">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 text-center">
                  Select a Quiz
                </h3>
                <div className="flex justify-around mt-4">
                  {roadSignQuizzes.map((quiz, index) => (
                    <button 
                      key={quiz.slug} 
                      onClick={() => handleStartQuiz(quiz)}
                      className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white font-bold text-xl hover:bg-green-500 hover:text-white transition-colors"
                    >
                      {index + 1}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
