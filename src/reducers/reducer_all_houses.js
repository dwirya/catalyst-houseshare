import House1 from '../media/Houses/11-Max-Avenue-St.jpg';

export default function() {
    return (
        [
            {address: '11 Max Street', description: 'A very comfy home', 
            chores: ['Washing clothes', 'Doing laundry'], price: '$120 pw', available: 'now', image:  House1},

            {address: '60 Moreland Road', description: 'Nice secluded home in the suburbs', 
            chores: ['Washing clothes', 'Doing laundry'], price: '$203 pw', available: 'in 1 week', image: House1}
        ]
    )
}