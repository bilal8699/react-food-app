// src/assets/menu.js

// ✅ Menu images
import menu1 from './menu_1.png'
import menu2 from './menu_2.png'
import menu3 from './menu_3.png'
import menu4 from './menu_4.png'
import menu5 from './menu_5.png'
import menu6 from './menu_6.png'
import menu7 from './menu_7.png'
import menu8 from './menu_8.png'

// ✅ Food images (1–32)
import food1 from './food_1.png'
import food2 from './food_2.png'
import food3 from './food_3.png'
import food4 from './food_4.png'
import food5 from './food_5.png'
import food6 from './food_6.png'
import food7 from './food_7.png'
import food8 from './food_8.png'
import food9 from './food_9.png'
import food10 from './food_10.png'
import food11 from './food_11.png'
import food12 from './food_12.png'
import food13 from './food_13.png'
import food14 from './food_14.png'
import food15 from './food_15.png'
import food16 from './food_16.png'
import food17 from './food_17.png'
import food18 from './food_18.png'
import food19 from './food_19.png'
import food20 from './food_20.png'
import food21 from './food_21.png'
import food22 from './food_22.png'
import food23 from './food_23.png'
import food24 from './food_24.png'
import food25 from './food_25.png'
import food26 from './food_26.png'
import food27 from './food_27.png'
import food28 from './food_28.png'
import food29 from './food_29.png'
import food30 from './food_30.png'
import food31 from './food_31.png'
import food32 from './food_32.png'

// ✅ Categories for ExploreMenu
export const items = [
  { id: 1, title: "Pizza", image: menu1 },
  { id: 2, title: "Burger", image: menu2 },
  { id: 3, title: "Pasta", image: menu3 },
  { id: 4, title: "Dessert", image: menu4 },
  { id: 5, title: "Drinks", image: menu5 },
  { id: 6, title: "Sandwich", image: menu6 },
  { id: 7, title: "Salad", image: menu7 },
  { id: 8, title: "Fries", image: menu8 },
]

// ✅ Food items list (32 items)
export const foodList = [
  // 🍕 Pizza
  { id: 1, name: "Cheese Pizza", category: "Pizza", price: 12, image: food1, description: "Classic mozzarella cheese pizza." },
  { id: 2, name: "Pepperoni Pizza", category: "Pizza", price: 15, image: food2, description: "Loaded with spicy pepperoni." },
  { id: 3, name: "Veggie Pizza", category: "Pizza", price: 13, image: food3, description: "Topped with fresh vegetables." },
  { id: 4, name: "BBQ Chicken Pizza", category: "Pizza", price: 16, image: food4, description: "BBQ chicken with onions & cheese." },

  // 🍔 Burgers
  { id: 5, name: "Beef Burger", category: "Burger", price: 10, image: food5, description: "Juicy grilled beef patty." },
  { id: 6, name: "Chicken Burger", category: "Burger", price: 9, image: food6, description: "Grilled chicken with lettuce." },
  { id: 7, name: "Veggie Burger", category: "Burger", price: 8, image: food7, description: "Healthy vegetarian burger." },
  { id: 8, name: "Double Cheese Burger", category: "Burger", price: 12, image: food8, description: "Double beef, double cheese." },

  // 🍝 Pasta
  { id: 9, name: "Spaghetti Pasta", category: "Pasta", price: 11, image: food9, description: "Classic spaghetti with tomato sauce." },
  { id: 10, name: "White Sauce Pasta", category: "Pasta", price: 13, image: food10, description: "Creamy white sauce pasta." },
  { id: 11, name: "Chicken Alfredo Pasta", category: "Pasta", price: 14, image: food11, description: "Pasta in alfredo sauce with chicken." },
  { id: 12, name: "Lasagna", category: "Pasta", price: 15, image: food12, description: "Layered pasta with cheese & meat." },

  // 🍰 Desserts
  { id: 13, name: "Chocolate Cake", category: "Dessert", price: 7, image: food13, description: "Rich chocolate layered cake." },
  { id: 14, name: "Ice Cream Sundae", category: "Dessert", price: 6, image: food14, description: "Vanilla ice cream with toppings." },
  { id: 15, name: "Brownie", category: "Dessert", price: 5, image: food15, description: "Warm chocolate brownie." },
  { id: 16, name: "Donut", category: "Dessert", price: 4, image: food16, description: "Glazed sweet donut." },

  // 🥤 Drinks
  { id: 17, name: "Coca Cola", category: "Drinks", price: 2, image: food17, description: "Chilled fizzy cola." },
  { id: 18, name: "Orange Juice", category: "Drinks", price: 3, image: food18, description: "Fresh orange juice." },
  { id: 19, name: "Milkshake", category: "Drinks", price: 5, image: food19, description: "Creamy milkshake with ice cream." },
  { id: 20, name: "Coffee", category: "Drinks", price: 4, image: food20, description: "Hot brewed coffee." },

  // 🥪 Sandwich
  { id: 21, name: "Club Sandwich", category: "Sandwich", price: 7, image: food21, description: "Triple layer chicken sandwich." },
  { id: 22, name: "Grilled Cheese Sandwich", category: "Sandwich", price: 6, image: food22, description: "Cheesy grilled sandwich." },
  { id: 23, name: "Veggie Sandwich", category: "Sandwich", price: 5, image: food23, description: "Healthy veggie sandwich." },
  { id: 24, name: "Chicken Mayo Sandwich", category: "Sandwich", price: 6, image: food24, description: "Chicken & mayo sandwich." },

  // 🥗 Salads
  { id: 25, name: "Caesar Salad", category: "Salad", price: 9, image: food25, description: "Lettuce with dressing & croutons." },
  { id: 26, name: "Greek Salad", category: "Salad", price: 8, image: food26, description: "Tomatoes, olives & feta cheese." },
  { id: 27, name: "Chicken Salad", category: "Salad", price: 10, image: food27, description: "Grilled chicken with greens." },
  { id: 28, name: "Fruit Salad", category: "Salad", price: 7, image: food28, description: "Mixed fresh fruits." },

  // 🍟 Fries
  { id: 29, name: "French Fries", category: "Fries", price: 4, image: food29, description: "Crispy golden fries." },
  { id: 30, name: "Cheese Fries", category: "Fries", price: 5, image: food30, description: "Fries topped with melted cheese." },
  { id: 31, name: "Peri Peri Fries", category: "Fries", price: 5, image: food31, description: "Spicy peri peri fries." },
  { id: 32, name: "Curly Fries", category: "Fries", price: 6, image: food32, description: "Crispy curly fries." },
]
