
import RosebudHouse1 from '../media/Houses/rosebudhouse1.jpg';
import RosebudHouse2 from '../media/Houses/rosebudhouse2.jpg';
import RosebudHouse3 from '../media/Houses/rosebudhouse3.jpg';
import RosebudHouse4 from '../media/Houses/rosebudhouse4.jpg';
import RosebudHouse5 from '../media/Houses/rosebudhouse5.jpg';
import RosebudHouse6 from '../media/Houses/rosebudhouse6.jpg';

export default function() {
    return (
        [
            {id: 1, address: '4 Grenfell Way', description: 'A very comfy home', 
            chores: ['Washing clothes', 'Doing laundry'], price: 120, available: 'now', image: RosebudHouse1},

            {id: 2, address: '107 Ocean Street', description: 'Everything at your doorstep', 
            chores: ['Gardening’, ‘Cooking'], price: 140, available: 'now', image: RosebudHouse2},

            {id: 3, address: '17 Lockhart Drive', description: 'Perfect for a student', 
            chores: ['Doing dishes’, ‘Doing laundry’, ‘Take out trash'], price: 110, available: 'in 1-2 months', image: RosebudHouse3},

            {id: 4, address: '8 Hartigan Court', description: 'Great place to start out', 
            chores: ['Washing clothes', 'Doing dishes', 'Gardening' ], price: 120, available: 'now', image: RosebudHouse4},

            {id: 5, address: '23 Widdop Avenue', description: 'Convenient living', 
            chores: ['Washing clothes', 'Gardening', 'Cooking'], price: 100, available: 'now', image: RosebudHouse5},

            {id: 6, address: '5 Currawong Court', description: 'Calming Currawong Court', 
            chores: ['Cleaning bathrooms', 'Take out trash'], price: 80, available: 'now', image: RosebudHouse6}

        ]
    )
}