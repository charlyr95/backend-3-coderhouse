import { faker } from "@faker-js/faker";
import { Types } from "mongoose";
import bcrypt from "bcrypt";

import Pets from "../pets/pets.utils.js";
import Users from "../users/users.utils.js";

const generateSinglePet = () => {
  return {
    _id: new Types.ObjectId(),
    name: faker.animal.petName(),
    birthDate: faker.date.past({ years: 5 }),
    breed: faker.animal.dog(),
    gender: faker.person.sex(),
    size: faker.helpers.arrayElement(['small', 'medium', 'large']),
    description: faker.lorem.paragraph(2),
    isAdopted: Math.random() > 0.5,
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent(),
  };
};

const generateSingleUser = async () => {
  return {
    _id: new Types.ObjectId(),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email(),
    password: await bcrypt.hash("coder123", 10),
    role: faker.helpers.arrayElement(["user", "admin"]),
    pets: [],
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent(),
  };
};

export const generateMockPets = (quantity) => {
  const pets = [];
  for (let i = 0; i < quantity; i++) {
    pets.push(generateSinglePet());
  }
  return pets;
};


export const generateMockUsers = async (quantity) => {
  const users = [];
  for (let i = 0; i < quantity; i++) {
    users.push(await generateSingleUser());
  }
  return users;
};

export const generateMockData = async (usersQty, petsQty) => {
  const users = await generateMockUsers(usersQty);
  const pets = generateMockPets(petsQty);
  await Users.insertMany(users);
  await Pets.insertMany(pets);
  return { users, pets };
}