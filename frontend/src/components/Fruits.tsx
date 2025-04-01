import { useEffect, useState } from 'react';
import api from "../api.ts";
import AddFruitForm from './AddFruitForm';

interface Fruit {
  name: string;
  color: string;
  taste: string;
}

const FruitList = () => {
  const [fruits, setFruits] = useState<Fruit[]>([]);

  const fetchFruits = async () => {
    try {
      const response = await api.get('/fruits');
      setFruits(response.data.fruits);
    } catch (error) {
      console.error("Error fetching fruits", error);
    }
  };

  const addFruit = async (fruitName: string, fruitColor: string, fruitTaste: string): Promise<void> => {
    try {
      await api.post('/fruits', { name: fruitName, color: fruitColor, taste: fruitTaste });
      fetchFruits();  // Refresh the list after adding a fruit
    } catch (error) {
      console.error("Error adding fruit", error);
    }
  };

  useEffect(() => {
    fetchFruits();
  }, []);

  return (
    <div className='flex flex-col justify-center items-center p-4 bg-gray-100 rounded shadow-md'>
      <h2 className='text-2xl font-bold mb-4 text-gray-800'>Fruits List</h2>
      <table className='table-auto border-collapse border border-gray-300 w-full text-left'>
      <thead>
        <tr className='bg-gray-200'>
        <th className='border border-gray-300 px-4 py-2'>Name</th>
        <th className='border border-gray-300 px-4 py-2'>Color</th>
        <th className='border border-gray-300 px-4 py-2'>Taste</th>
        </tr>
      </thead>
      <tbody>
        {fruits.map((fruit, index) => (
        <tr key={index} className='hover:bg-gray-100'>
          <td className='border border-gray-300 px-4 py-2'>{fruit.name}</td>
          <td className='border border-gray-300 px-4 py-2'>{fruit.color}</td>
          <td className='border border-gray-300 px-4 py-2'>{fruit.taste}</td>
        </tr>
        ))}
      </tbody>
      </table>
      <div className='mt-4 w-full'>
      <AddFruitForm addFruit={addFruit} />
      </div>
    </div>
  );
};

export default FruitList;