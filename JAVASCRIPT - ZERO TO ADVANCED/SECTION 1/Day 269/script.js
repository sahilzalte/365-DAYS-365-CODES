function getGrade(score) {
    // Handle invalid scores
    if (score < 0 || score > 100) {
        return "Invalid marks ";
    }

    // Determine the grade based on the score range
    if (score >= 90) {
        return "A+";
    } else if (score >= 80) {
        return "A";
    } else if (score >= 70) {
        return "B";
    } else if (score >= 60) {
        return "C";
    } else if (score >= 33) {
        return "D";
    } else {
        // Scores from 0 to 32
        return "Fail";
    }
}

// Example usage
console.log(getGrade(95));  // Output: A+
console.log(getGrade(85));  // Output: A
console.log(getGrade(72));  // Output: B
console.log(getGrade(65));  // Output: C
console.log(getGrade(50));  // Output: D
console.log(getGrade(25));  // Output: Fail
console.log(getGrade(101)); // Output: Invalid marks 


// Question 2

// Rock-paper-scissors logic
function rps(user, computer) {
    // Check for a draw
    if (user === computer) {
        return "draw";
    }

    // Check all winning conditions for the user
    if (
        (user === "rock" && computer === "scissors") ||
        (user === "scissors" && computer === "paper") ||
        (user === "paper" && computer === "rock")
    ) {
        return "user";
    }

    // If it's not a draw and the user didn't win, the computer must have won
    return "computer";
}

// Example usage
console.log(rps("rock", "scissors"));
console.log(rps("scissors", "paper"));
console.log(rps("paper", "rock"));
console.log(rps("rock", "rock"));
console.log(rps("rock", "paper"));