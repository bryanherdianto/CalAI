import React, { useState } from 'react';

interface AddFruitFormProps {
    addFruit: (fruitName: string, fruitColor: string, fruitTaste: string) => void;
}

const AddFruitForm: React.FC<AddFruitFormProps> = ({ addFruit }) => {
    const [fruitName, setFruitName] = useState('');
    const [fruitColor, setFruitColor] = useState('');
    const [fruitTaste, setFruitTaste] = useState('');

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();
        if (fruitName) {
            addFruit(fruitName, fruitColor, fruitTaste);
            setFruitName('');
            setFruitColor('');
            setFruitTaste('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col justify-center space-y-4 p-4 bg-gray-100 rounded shadow-md">
            <input
            type="text"
            value={fruitName}
            onChange={(e) => setFruitName(e.target.value)}
            placeholder="Enter fruit name"
            className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
            />
            <input
            type="text"
            value={fruitColor}
            onChange={(e) => setFruitColor(e.target.value)}
            placeholder="Enter fruit color"
            className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
            type="text"
            value={fruitTaste}
            onChange={(e) => setFruitTaste(e.target.value)}
            placeholder="Enter fruit taste"
            className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
            type="submit"
            className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
            Add Fruit
            </button>
        </form>
    );
};

export default AddFruitForm;