import { useEffect, useState } from "react";
import { IoMdQuote } from "react-icons/io";
import { FaTwitterSquare } from "react-icons/fa";
function App() {
  const [qoute, setQoute] = useState(null);
  const [qoutes, setQoutes] = useState([]);

  const myqoutes = [
    {
      text: "Genius is one percent inspiration and ninety-nine percent perspiration.",
      author: "Thomas Edison",
    },
    {
      text: "You can observe a lot just by watching.",
      author: "Yogi Berra",
    },
    {
      text: "A house divided against itself cannot stand.",
      author: "Abraham Lincoln",
    },
    {
      text: "Difficulties increase the nearer we get to the goal.",
      author: "Johann Wolfgang von Goethe",
    },
    {
      text: "Fate is in your hands and no one elses",
      author: "Byron Pulsifer",
    },
    {
      text: "Be the chief but never the lord.",
      author: "Lao Tzu",
    },
    {
      text: "Nothing happens unless first we dream.",
      author: "Carl Sandburg",
    },
    {
      text: "Well begun is half done.",
      author: "Aristotle",
    },
    {
      text: "Life is a learning experience, only if you learn.",
      author: "Yogi Berra",
    },
    {
      text: "Self-complacency is fatal to progress.",
      author: "Margaret Sangster",
    },
    {
      text: "Peace comes from within. Do not seek it without.",
      author: "Buddha",
    },
    {
      text: "What you give is what you get.",
      author: "Byron Pulsifer",
    },
    {
      text: "We can only learn to love by loving.",
      author: "Iris Murdoch",
    },
    {
      text: "Life is change. Growth is optional. Choose wisely.",
      author: "Karen Clark",
    },
    {
      text: "You'll see it when you believe it.",
      author: "Wayne Dyer",
    },
    {
      text: "Today is the tomorrow we worried about yesterday.",
      author: "Charles Kasasira",
    },
    {
      text: "I can't imagine a person becoming a success who doesn't give this game of life everything hes got.",
      author: "Walter Cronkite",
    },
    {
      text: "If you look at what you have in life, you’ll always have more. If you look at what you don’t have in life, you’ll never have enough.",
      author: "Oprah Winfrey",
    },
    {
      text: "Everyone can taste success when the going is easy, but few know how to taste victory when times get tough.",
      author: "Byron Pulsifer",
    },
    {
      text: "To lead people walk behind them.",
      author: "Lao Tzu",
    },
    {
      text: "Having nothing, nothing can he lose.",
      author: "William Shakespeare",
    },
    {
      text: "Trouble is only opportunity in work clothes.",
      author: "Henry J. Kaiser",
    },
    {
      text: "A rolling stone gathers no moss.",
      author: "Publilius Syrus",
    },
    {
      text: "Ideas are the beginning points of all fortunes.",
      author: "Napoleon Hill",
    },
    {
      text: "Everything in life is luck.",
      author: "Donald Trump",
    },
    {
      text: "Doing nothing is better than being busy doing nothing.",
      author: "Lao Tzu",
    },
    {
      text: "Trust yourself. You know more than you think you do.",
      author: "Benjamin Spock",
    },
    {
      text: "Study the past, if you would divine the future.",
      author: "Confucius",
    },
    {
      text: "As you think, so shall you become.",
      author: "Bruce Lee",
    },
    {
      text: "From error to error one discovers the entire truth.",
      author: "Sigmund Freud",
    },
    {
      text: "Well done is better than well said.",
      author: "Benjamin Franklin",
    },
    {
      text: "Bite off more than you can chew, then chew it.",
      author: "Ella Williams",
    },
    {
      text: "Work out your own salvation. Do not depend on others.",
      author: "Buddha",
    },
    {
      text: "One today is worth two tomorrows.",
      author: "Benjamin Franklin",
    },
    {
      text: "Once you choose hope, anythings possible.",
      author: "Christopher Reeve",
    },
    {
      text: "God always takes the simplest way.",
      author: "Albert Einstein",
    },
    {
      text: "One fails forward toward success.",
      author: "Charles Kettering",
    },
    {
      text: "We must embrace pain and burn it as fuel for our journey.",
      author: "Kenji Miyazawa",
    },
    {
      text: "Learning is a treasure that will follow its owner everywhere",
      author: "Chinese proverb",
    },
    {
      text: "Be as you wish to seem.",
      author: "Socrates",
    },
    {
      text: "The world is always in movement.",
      author: "V. Naipaul",
    },
    {
      text: "Never mistake activity for achievement.",
      author: "John Wooden",
    },
    {
      text: "What worries you masters you.",
      author: "Haddon Robinson",
    },
    {
      text: "One faces the future with ones past.",
      author: "Pearl Buck",
    },
    {
      text: "Goals are the fuel in the furnace of achievement.",
      author: "Brian Tracy",
    },
    {
      text: "Who sows virtue reaps honour.",
      author: "Leonardo da Vinci",
    },
    {
      text: "Be kind whenever possible. It is always possible.",
      author: "Dalai Lama",
    },
    {
      text: "Talk doesn't cook rice.",
      author: "Chinese proverb",
    },
    {
      text: "He is able who thinks he is able.",
      author: "Buddha",
    },
    {
      text: "A goal without a plan is just a wish.",
      author: "Larry Elder",
    },
    {
      text: "To succeed, we must first believe that we can.",
      author: "Michael Korda",
    },
  ];

  useEffect(() => {
    // fetch("https://type.fit/api/quotes")
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setQoutes(data);
    //     setQoute(data[Math.floor(Math.random() * 100)]);
    //   })
    //   .catch();

    setQoute(myqoutes[Math.floor(Math.random() * 50)]);
  }, []);

  const handleNewQoute = () => {
    setQoute(myqoutes[Math.floor(Math.random() * 50)]);
  };

  return (
    <div id="quote-box">
      <IoMdQuote size={50} id="quote-icon" />
      <p id="text">{qoute && qoute.text}</p>
      <p id="author">- {qoute && qoute.author}</p>

      <div className="clickable">
        {qoute && (
          <a
            href={`https://twitter.com/intent/tweet?text=${qoute.text}%0A-%20${qoute.author}`}
            target="_blank"
            id="tweet-quote"
          >
            <FaTwitterSquare size={30} />
          </a>
        )}
        <button id="new-quote" onClick={handleNewQoute}>
          New qoute
        </button>
      </div>
    </div>
  );
}

export default App;
