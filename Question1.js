// Write a function that takes a user's age and determines if they are old enough to vote (age 18 or older).
// Your ES6 code here

// console.log(isEligibleToVote(20)) // Eligible to vote
// console.log(isEligibleToVote(18)) // Eligible to vote
// console.log(isEligibleToVote(17)) // Not eligible to vote

const isEligibleToVote = (age) => age>=18 ? "Eligible for vote": "not Eligible for vote";

console.log(isEligibleToVote(14));
console.log(isEligibleToVote(20));
console.log(isEligibleToVote(18));