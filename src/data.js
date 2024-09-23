import bruschetta from "./assets/Bruchetta.jpg"
import lemonCake from "./assets/lemon_dessert.jpg"
import greekSalad from "./assets/greek-salad-2.jpg"

// food cards

export const food = [
    {
        title: "Lemon Cake",
        ingredients: ["flour", "sugar", "eggs", "lemon cream"],
        price: 12.0,
        img: lemonCake,
        id: 1,
        // quantity: 0
    },
    {
        title: "Greek Salad",
        ingredients: [
            "tomatoes",
            "cucumbers",
            "onion",
            "feta cheese",
            "olives",
        ],
        price: 17.0,
        img: greekSalad,
        id: 2,
        // quantity: 0
    },
    {
        title: "Bruschetta",
        ingredients: ["bread", "tomato", "mozzarella", "basil", "garlic"],
        price: 20.0,
        img: bruschetta,
        id: 3,
        // quantity: 0
    },
]

// testimonials cards

import woman from "./assets/woman.jpg"
import man1 from "./assets/man1.jpg"
import man2 from "./assets/man2.jpg"

export const testimonials = [
    {
        img: woman,
        rate: [1, 1, 1, 0, 0],
        text: "Family owned Mediterranean restaurant. recipes served with a modern twist.Family owned Mediterranean restaurant.Traditional recipes served with a modern twist.",
        name: "jane doe",
    },
    {
        img: man1,
        rate: [1, 1, 1, 1, 1],
        text: "Family owned restaurant.Traditional recipes served with a modern twist.Family owned Mediterranean restaurant.Traditional recipes served with a modern twist.",
        name: "john doe",
    },
    {
        img: man2,
        rate: [1, 1, 1, 1, 0],
        text: "Family owned Mediterranean restaurant.Traditional recipes served with a modern twist.Family owned Mediterranean restaurant.Traditional recipes served with a modern twist.",
        name: "Mr.nobody",
    },
]
