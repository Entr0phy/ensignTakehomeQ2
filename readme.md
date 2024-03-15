# Ensign Take Home Question 2 Shopping Cart

## Technologies Used

### Vite + Typescript + React
As per the requirement react needs to be used. The reason i went with vite + typescript compared to other frameworks available is mainly due to vite is lightweight to spin up. Create React App is heavier to spin up and used and the default webpack needs to be ejected to use tailwind which is why it is not suitable. NextJs was also something i considered but since there is not a need for SSR and build in api integration it would be unncessary bundle size of features and functions i would not be using. The build in page routing is very useful however there react router exist so overall it is not justifiable to use Next which leads me to choose Vite as the best choice since it is light weight and allow me to use the technologies i wish to use with no drawbacks. Typescript was used instead of javascript as i wanted to ensure that there is consistency and also prevent unwanted bugs from occuring

### React Router
I chose to use react router as it is a very well documented and supported libraries for routing availbale in the react ecosystem. Reason why i used react router is to easily route between the home page, cart page as well as the product page

### Tailwind
Tailwind was used as it is a technology i am familiar with and it is also in bonus requirements hence i used tailwind

### React-icons
React icons is a lightweight library for icons so i used it to beautify the web it is alot better than using images

### useContext
I used useContext over other state management tools available such as redux or zustand due to useContext is able to achieve what i want to do with state management and there is not a need to install and use other dependencies since its built in, reducing the bundle size needed. useContext was mainly used to store the cart items and preventing the need for props drilling. For the context itself, i have initialised it to have 3 variables. first is the cartItems array. The cart items array has 4 variables namely the image, price, item count as well as the name. This is used to display in the cart page. The second variable is the total item count. The total item count is necessary as it is used to display the total number of items in the cart at a given time which is a requirement. Lastly, totalPrice is used to store the total price of all the cart items. This is used to prevent calculating the total price at render time as there is no backend available and we cannot do all the logic at the backend, all the logic and calculations are instead done on the onClick functions instead.

### Local Storage
As part of the requirements was to be able to show the cart items when the browser open and closed, i decided to leverage and make use of local storage to store the cart items so it persist even when the tab is closed. How i achieve this is by using a useEffect hook on the context and have a dependecy on the cart, so whenever the cart is changed, the hook will trigger and automatically store the new cart items context into local storage, this way the local storage will always be updated with the latest changes to cart. The cart context is also initialised to first check the local storage if there is already an existing cart available, if there isnt any available cart, it will then initialise a default empty cart.
