// import _ from 'lodash';

import RosebudHouse1 from '../media/Houses/rosebudhouse1.jpg';
import RosebudHouse2 from '../media/Houses/rosebudhouse2.jpg';
import RosebudHouse3 from '../media/Houses/rosebudhouse3.jpg';
import RosebudHouse4 from '../media/Houses/rosebudhouse4.jpg';
import RosebudHouse5 from '../media/Houses/rosebudhouse5.jpg';
import RosebudHouse6 from '../media/Houses/rosebudhouse6.jpg';

export const HOUSEKEEPING = 'Housekeeping';
export const WASHINGDISHES = 'Washing dishes';
export const WASHINGTOILET = 'Washing toilet';
export const COOKING = 'Cooking';
export const GROCERY = 'Grocery';
export const WASHINGCLOTHES = 'Wash clothes';
export const GARDENING = 'Gardening';

function getSlug(string) {
    string = string.replace(/\s+/g, '-').toLowerCase();
    return string;
}



export default function() {
     let houseArray = 
        [
            {address: '4 Grenfell Way', description: 'A very comfy home', 
            chores: [WASHINGCLOTHES, WASHINGDISHES], price: 120, available: 'now', image: RosebudHouse1},

            {address: '107 Ocean Street', description: 'Everything at your doorstep', 
            chores: [HOUSEKEEPING, COOKING], price: 140, available: 'now', image: RosebudHouse2},

            {address: '17 Lockhart Drive', description: 'Perfect for a student', 
            chores: [WASHINGDISHES, WASHINGCLOTHES, 'Take out trash'], price: 110, available: 'in 1-2 months', image: RosebudHouse3},

            {address: '8 Hartigan Court', description: 'Great place to start out', 
            chores: [WASHINGCLOTHES, WASHINGDISHES, GARDENING ], price: 120, available: 'in 3 weeks', image: RosebudHouse4},

            {address: '23 Widdop Avenue', description: 'Convenient living', 
            chores: [WASHINGCLOTHES, GARDENING, COOKING], price: 100, available: 'now', image: RosebudHouse5},

            {address: '5 Currawong Court', description: 'Calming Currawong Court', 
            chores: [WASHINGTOILET, HOUSEKEEPING], price: 80, available: 'in 6 days', image: RosebudHouse6}

        ]
    
    houseArray.map((house) => {
        house.slug = getSlug(house.address)
    });

    return houseArray;
}