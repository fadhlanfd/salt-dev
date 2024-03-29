const peoples = [
    { id: 1, name: 'John Doe', age: 30, imageUrl: 'https://via.placeholder.com/150', role: 'UI/UX Designer' },
    { id: 2, name: 'Jane Smith', age: 25, imageUrl: 'https://via.placeholder.com/150', role: 'Web Developer' },
    { id: 3, name: 'Alice Johnson', age: 35, imageUrl: 'https://via.placeholder.com/150', role: 'Software Engineer' }
];
  
  const getAllPeople = () => {
    return peoples;
  };
  
  const getPeopleById = (id) => {
    return peoples.find(people => people.id === id);
  };
  
  module.exports = {
    getAllPeople,
    getPeopleById
  };
  