let groups = [
  { name: "This group name is so big i dont know how big it is", members: ["sowmya", "goutham", "aish"] },
  { name: "2nd group", members: ["sowmya", "goutham", "aish"] },
  { name: "3rd group", members: ["sowmya", "goutham", "aish"] },
];

let availableMembers = [
  "Alice",
  "Bob",
  "Charlie",
  "David",
  "Eve",
  "Frank",
  "Grace",
];
const addGroup = (newGroup) => {
  groups = [...groups, newGroup];
};
const addMember = (newMember) => {
  availableMembers = [...availableMembers, newMember];
};

export { groups, availableMembers, addGroup, addMember };
