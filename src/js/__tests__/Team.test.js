import Team from '../Team';
import Character from '../Character';

// const types = [
//   "Bowman",
//   "Swordsman",
//   "Magician",
//   "Daemon",
//   "Undead",
//   "Zombie"
// ];

test('Новый персонаж добавлен успешно', () => {

  const team = new Team();
  const user = new Character('Serg');
  team.add(user);

  expect(team.members).toEqual(new Set([user]));
});

test('Невозможно добавить существующего персонажа', () => {

  const team = new Team();
  const user = new Character('Serg');
  team.add(user)

  expect(() => team.add(user)).toThrow('Такой персонаж уже есть в команде');
});

test('Группа новых персонажей добавлена с помощью метода addAll() успешно', () => {

  const team = new Team();
  const user1 = new Character('Serg');
  const user2 = new Character('Serg');
  const user3 = new Character('Serg');
  team.addAll(user1, user2, user3);
  

  expect(team.members).toEqual(new Set([user1, user2, user3]));
});

test('Метод toArray() преобрзаует в массив', () => {

  const team = new Team();
  const user1 = new Character('Serg');
  const user2 = new Character('Serg');
  const user3 = new Character('Serg');
  team.addAll(user1, user2, user3);
  

  expect(team.toArray()).toEqual([user1, user2, user3]);
});





