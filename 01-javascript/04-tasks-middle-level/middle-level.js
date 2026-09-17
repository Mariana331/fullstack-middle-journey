// 🧩 Middle Task #1 — групування даних

// Є масив замовлень:

// const orders = [
//   { id: 1, user: "Anna", category: "books", price: 30 },
//   { id: 2, user: "John", category: "electronics", price: 500 },
//   { id: 3, user: "Anna", category: "electronics", price: 200 },
//   { id: 4, user: "Kate", category: "books", price: 50 },
//   { id: 5, user: "John", category: "books", price: 20 },
//   { id: 6, user: "Anna", category: "books", price: 40 },
// ];

// Напиши функцію:

// function getUserStats(orders) {
//   // твій код
// }

// Вона повинна повернути:

// {
//   Anna: {
//     total: 270,
//     orders: 3
//   },
//   John: {
//     total: 520,
//     orders: 2
//   },
//   Kate: {
//     total: 50,
//     orders: 1
//   }
// }

// function getUserStats(orders) {
//   const result = orders.reduce((acc, order) => {
//     if (!acc[order.user]) {
//       acc[order.user] = { total: 0, orders: 0 };
//     }

//     acc[order.user].total += order.price;

//     acc[order.user].orders++;

//     return acc;
//   }, {});

//   return result;
// }

"======================================";
"======================================";
// 🔥 Middle Task #2 — без підказок

// Тепер складніше.

// Є транзакції:

// const transactions = [
//   { user: "Anna", type: "income", amount: 1000 },
//   { user: "Anna", type: "expense", amount: 300 },
//   { user: "John", type: "income", amount: 2000 },
//   { user: "John", type: "expense", amount: 500 },
//   { user: "Anna", type: "expense", amount: 200 },
//   { user: "Kate", type: "income", amount: 1500 },
// ];

// // Напиши:

// // function getBalance(transactions) {
// //   // твій код
// // }

// // Результат повинен бути:

// // {
// //   Anna: 500,
// //   John: 1500,
// //   Kate: 1500
// // }

// function getBalance(transactions) {
//   const result = transactions.reduce((acc, trans) => {
//     if (!acc[trans.user]) {
//       acc[trans.user] = 0;
//     }
//     if (trans.type === "income") {
//       acc[trans.user] += trans.amount;
//     } else {
//       acc[trans.user] -= trans.amount;
//     }
//     return acc;
//   }, {});
//   return result;
// }
// console.log(getBalance(transactions));
"======================================";
"======================================";
// Middle Task #3 — асинхронність

// Тепер задача вже ближча до реальної роботи з API.

// Є функція:

// function fetchUser() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve({
//         name: "Anna",
//         age: 25,
//       });
//     }, 1000);
//   });
// }

// async function getUser() {
//   const result = await fetchUser();
//   return result;
// }

// const user = await getUser();

// console.log(user);
"======================================";
"======================================";
// function fetchUser() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve({ name: "Anna" });
//     }, 1000);
//   });
// }

// function fetchPosts() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve([{ title: "Post 1" }, { title: "Post 2" }]);
//     }, 1000);
//   });
// }

// async function getUserData() {
//   const user = await fetchUser();
//   const posts = await fetchPosts();
//   return { user, posts };
// }

// // {
// //   user: { name: "Anna" },
// //   posts: [
// //     { title: "Post 1" },
// //     { title: "Post 2" }
// //   ]
// // }

// const data = await getUserData();
// console.log(data);
"======================================";
"======================================";
// 🧩 Наступна задача

// Тепер уяви реальну ситуацію: отримуємо користувача, а потім його замовлення.

// function fetchUser() {
//   return Promise.resolve({
//     id: 5,
//     name: "Anna",
//   });
// }

// function fetchOrders(userId) {
//   return Promise.resolve([
//     { id: 1, userId: 5, total: 100 },
//     { id: 2, userId: 5, total: 250 },
//     { id: 3, userId: 5, total: 50 },
//   ]);
// }

// // Напиши:

// async function getUserOrders() {
//   const user = await fetchUser();
//   const orders = await fetchOrders(user.id);
//   return { user, orders };
// }

// const data = await getUserOrders();
// console.log(data);
"======================================";
"======================================";
// 🔥 Middle Task — тепер бізнес-логіка

// Не просто отримати дані, а обробити їх.

// const orders = [
//   { id: 1, status: "paid", total: 100 },
//   { id: 2, status: "cancelled", total: 200 },
//   { id: 3, status: "paid", total: 300 },
//   { id: 4, status: "pending", total: 150 },
//   { id: 5, status: "paid", total: 50 },
// ];

// // Напиши функцію:

// function getOrderStats(orders) {
//   const totalOrders = orders.reduce((acc, order) => {
//     acc += 1;
//     return acc;
//   }, 0);

//   const paidOrders = orders.reduce((acc, order) => {
//     if (order.status === "paid") {
//       acc += 1;
//     }
//     return acc;
//   }, 0);

//   const paidAmount = orders.reduce((acc, order) => {
//     if (order.status === "paid") {
//       acc += order.total;
//     }
//     return acc;
//   }, 0);

//   return { totalOrders, paidOrders, paidAmount };
// }

// console.log(getOrderStats(orders));

"======================================";
"======================================";
// const orders = [
//   { id: 1, status: "paid", total: 100 },
//   { id: 2, status: "cancelled", total: 200 },
//   { id: 3, status: "paid", total: 300 },
//   { id: 4, status: "pending", total: 150 },
//   { id: 5, status: "paid", total: 50 },
// ];

// // Напиши функцію:

// function getOrderStats(orders) {
//   const totalOrders = orders.reduce(
//     (acc, order) => {
//       acc.totalOrders += 1;
//       if (order.status === "paid") {
//           acc.paidOrders += 1;
//            acc.paidAmount += order.total;
//       }

//       return acc;
//     },
//     { totalOrders: 0, paidOrders: 0, paidAmount: 0 },
//   );

//   return totalOrders;
// }

// console.log(getOrderStats(orders));
"======================================";
"======================================";
const orders = [
  { id: 1, userId: 101, status: "paid", total: 120 },
  { id: 2, userId: 102, status: "paid", total: 80 },
  { id: 3, userId: 101, status: "cancelled", total: 200 },
  { id: 4, userId: 103, status: "paid", total: 150 },
  { id: 5, userId: 101, status: "paid", total: 300 },
  { id: 6, userId: 102, status: "pending", total: 100 },
  { id: 7, userId: 103, status: "paid", total: 50 },
];

// Напиши функцію:

function getCustomerStats(orders) {}

// Вона повинна повернути:

// {
//   101: {
//     orders: 3,
//     paidOrders: 2,
//     spent: 420
//   },
//   102: {
//     orders: 2,
//     paidOrders: 1,
//     spent: 80
//   },
//   103: {
//     orders: 2,
//     paidOrders: 2,
//     spent: 200
//   }
// }
