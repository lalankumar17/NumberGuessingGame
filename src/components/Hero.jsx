import { useState, useEffect, useRef } from 'react'

const Hero = () => {
  const [inputValue, setInputValue] = useState("");
  const [rand, setRand] = useState(0);
  const [help, setHelp] = useState("Guess a number between 1 and 50!");
  const audioRef = useRef(null);

  // Set the initial random number when the component loads
  useEffect(() => {
    generateRandomNumber();
  }, [])

  // Function to generate a random number between 1 and 50
  const generateRandomNumber = () => {
    // Generates a number from 1 to 50 to match the placeholder
    const random = Math.floor(Math.random() * 50) + 1;
    setRand(random);
    console.log("Random number (for testing):", random); // For testing purposes
  }

  // Handle changes to the input field
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  }

  // Handle the "Guess" button click
  const handleGuess = (e) => {
    e.preventDefault();
    
    // It's better to compare numbers to numbers, not strings to numbers
    const userGuess = parseInt(inputValue);

    if (isNaN(userGuess)) {
      setHelp("Please enter a valid number!");
      audioRef.current.src = "/no.mp3";
    } else if (userGuess === rand) {
      setHelp("🎉 Hurray! You guessed it right! 🎉");
      audioRef.current.src = "/win.mp3";
    } else if (userGuess > rand) {
      setHelp("Try a smaller number ⬇️");
      audioRef.current.src = "/no.mp3";
    } else { // userGuess < rand
      setHelp("Try a larger number ⬆️");
      audioRef.current.src = "/no.mp3";
    }
    
    // Play the sound after setting the correct source
    audioRef.current.play().catch(error => console.log("Audio playback error:", error));
  }

  return (
    <div className='flex flex-col items-center justify-center flex-grow pb-40'>
      <p className='text-3xl font-bold text-center m-4'>
        Number Guessing Game
      </p>

      <div className='flex justify-center items-center'>
        {/* Input form */}
        <form onSubmit={handleGuess}>
          <input 
            placeholder='Enter a Number (1-50)'
            className='border m-10 rounded-xl w-100 h-12 p-4 text-xl'
            type="number"
            min={1}
            max={50}
            value={inputValue}
            onChange={handleInputChange}
            name="number"
            id="number" 
          />
          <button 
            className='border text-xl rounded-xl cursor-pointer bg-purple-500 text-white w-32 sm:w-28 p-2 h-12 m-2 block mx-auto sm:inline-block' 
            type="submit">
              Guess
          </button>
        </form>
      </div>

      {/* Helper text to guide the user */}
      <div className='text-lg min-[400px]:text-xl sm:text-2xl my-6 mx-2 sm:m-6 text-center font-bold text-green-800 whitespace-nowrap'>
        {help}
      </div>
      
      {/* The audio element is hidden but accessible via the ref */}
      <audio ref={audioRef} />
    </div>
  )
}

export default Hero