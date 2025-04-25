import * as fs from 'fs';

const testUserPath = 'test-data/testUser.json';

export interface TestUser {
  userID: string;
  password: string;
}

export function saveTestUser(user: TestUser): void {
  fs.writeFileSync(testUserPath, JSON.stringify(user, null, 2));
}

export function loadTestUser(): TestUser {
  const data = fs.readFileSync(testUserPath, 'utf-8');
  return JSON.parse(data);
}