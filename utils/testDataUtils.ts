import { getegid } from "process";

function generateRandomNumber(length: number): string {
  let result = '';
  for (let i = 0; i < length; i++) {
    result += Math.floor(Math.random() * 10).toString();
  }
  return result;
}

export interface TestUser {
  userID: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  mobile: string;
  address1: string;
  address2: string;
  city: string;
  country: string;
}

export function generateTestUser(): TestUser {




  const userID = generateuserID();
  const email = `user_${Math.random().toString(36).substring(2, 6)}@yopmail.com`;
  const password = Math.random().toString(36).slice(-8) + "!A1";
  const firstNames = ["Ahmed", "Mohamed","Mahmoud" , "Fatima" , "Diana", "Ethan", "Fiona", "George", "Hana"];
  const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];

  const lastNames = ["Tim", "Hary","Mahmoud" , "George", "Steve"];
  const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];

   // Mobile number: starts with 9715 and total length 15
const mobile = `9715${generateRandomNumber(11)}`;

// Address 1 and 2
const streets = ["Main Street", "High Street", "Maple Avenue", "Elm Street", "Sunset Blvd", "Palm Drive"];
const address1 = `${Math.floor(Math.random() * 1000)} ${streets[Math.floor(Math.random() * streets.length)]}`;
const address2 = `Apt ${Math.floor(Math.random() * 999 + 1)}`;

// City and Country
const cities = ["Dubai", "Abu Dhabi", "Sharjah", "Ajman", "Al Ain"];
const countries = ["UAE", "USA", "Canada", "UK", "Germany"];
const city = cities[Math.floor(Math.random() * cities.length)];
const country = countries[Math.floor(Math.random() * countries.length)];

console.log(userID,  email,  password,
  firstName,
  lastName,
  mobile,
  address1,
  address2,
  city,
  country);

  return {
    userID,
    email,
    password,
    firstName,
    lastName,
    mobile,
    address1,
    address2,
    city,
    country
  };
}

function generateuserID(): string {
  const letters = Math.random().toString(36).replace(/[^a-z]/g, '').substring(0, 5);
  const digits = Math.floor(10000 + Math.random() * 90000).toString(); // ensures 5 digits
  return letters + digits;
}