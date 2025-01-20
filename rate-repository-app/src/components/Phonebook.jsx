import React, { useState, useEffect } from 'react';

function App() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [persons, setPersons] = useState([]);

  // Hàm gửi yêu cầu POST để thêm người vào backend
  const handleSubmit = async (event) => {
    event.preventDefault();

    const newPerson = { name, number };

    try {
      // Gửi yêu cầu POST đến backend để lưu thông tin người
      const response = await fetch('http://localhost:3002/api/persons', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newPerson),
      });

      if (response.ok) {
        const savedPerson = await response.json();
        setPersons([...persons, savedPerson]); // Cập nhật danh sách người
        setName('');
        setNumber('');
      } else {
        console.error('Failed to add person');
      }
    } catch (error) {
      console.error('Error while saving person:', error);
    }
  };

  // Hàm xóa người khỏi danh bạ
  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this entry?')) {
      try {
        const response = await fetch(`http://localhost:3002/api/persons/${id}`, {
          method: 'DELETE',
        });

        if (response.ok) {
          setPersons(persons.filter((person) => person._id !== id)); // Cập nhật danh sách sau khi xóa
        } else {
          console.error('Failed to delete person');
        }
      } catch (error) {
        console.error('Error deleting person:', error);
      }
    }
  };

  // Hàm để lấy danh sách người từ backend
  const fetchPersons = async () => {
    try {
      const response = await fetch('http://localhost:3002/api/persons');
      if (response.ok) {
        const data = await response.json();
        setPersons(data);
      } else {
        console.error('Failed to fetch persons');
      }
    } catch (error) {
      console.error('Error fetching persons:', error);
    }
  };

  // Lấy danh sách người khi component được render lần đầu
  useEffect(() => {
    fetchPersons(); // Gọi API để lấy danh sách người
  }, []);

  return (
    <div>
      <h1>Phonebook</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            required
          />
        </div>
        <div>
          <input
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            placeholder="Phone Number"
            required
          />
        </div>
        <button type="submit">Add</button>
      </form>

      <h2>Phonebook Entries</h2>
      <ul>
        {persons.map((person) => (
          <li key={person._id}>
            {person.name} {person.number}
            <button onClick={() => handleDelete(person._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
