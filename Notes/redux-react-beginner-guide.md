# Redux in React — Beginner-Friendly Guide

Redux is a **state management library** used in React applications to manage and share data between multiple components.

## 1. What is Redux?

Imagine you're building an e-commerce application:

- `Navbar` displays the cart count.
- `Product` adds a product to the cart.
- `Cart` displays selected products.
- `Checkout` uses cart data to place an order.

Without Redux, you might need to pass data through multiple components using props. This is called **prop drilling**.

Redux lets these components access shared state through a central store.

### Important Redux terms

| Term | Meaning |
|---|---|
| **Store** | The central place that holds shared state. |
| **State** | The actual data, such as a cart count or username. |
| **Action** | Describes what you want to do, such as increment a counter. |
| **Reducer** | Defines how the state changes when an action occurs. |
| **Dispatch** | Sends an action to Redux. |
| **Selector** | Reads data from the store. |
| **Slice** | Contains related state and reducer logic, using Redux Toolkit. |

**Remember the flow:**

`Component → Dispatch Action → Reducer → Store Updates → UI Re-renders`

For new React projects, the recommended approach is **Redux Toolkit (RTK)** rather than writing Redux manually.

## 2. Install Redux Toolkit

Inside your existing React + Vite project, open the terminal and run:

```bash
npm install @reduxjs/toolkit react-redux
```

- `@reduxjs/toolkit` provides functions to create the Redux store and manage state.
- `react-redux` connects Redux with React components.

## 3. Redux folder structure

Create a simple **Counter application** with Increment, Decrement, and Reset buttons.

```text
my-redux-app/
└── src/
    ├── app/
    │   └── store.js
    ├── features/
    │   └── counter/
    │       └── counterSlice.js
    ├── components/
    │   └── Counter.jsx
    ├── App.jsx
    └── main.jsx
```

## 4. Code for each file

### File 1: `src/features/counter/counterSlice.js`

This file defines the initial state and the functions that update it.

```javascript
import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',

  initialState: {
    value: 0
  },

  reducers: {
    increment: (state) => {
      state.value += 1;
    },

    decrement: (state) => {
      state.value -= 1;
    },

    reset: (state) => {
      state.value = 0;
    }
  }
});

export const { increment, decrement, reset } =
  counterSlice.actions;

export default counterSlice.reducer;
```

**Understand these parts:**

- `name`: identifies the slice.
- `initialState`: the starting value is `0`.
- `reducers`: defines the operations that change the state.
- `counterSlice.actions`: exports actions for components to dispatch.
- `counterSlice.reducer`: exports the reducer that the store uses.

Notice that `state.value += 1` looks like direct mutation. Redux Toolkit uses Immer internally to make this safe when writing reducers this way.

### File 2: `src/app/store.js`

This file creates the central Redux store.

```javascript
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer
  }
});
```

The `counter` key determines where this slice's state lives. You can access the value using:

```javascript
state.counter.value
```

The store manages the state for your application.

### File 3: `src/main.jsx`

Wrap your React application with `Provider` so that components can access the Redux store.

```jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import App from './App.jsx';
import { store } from './app/store.js';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
```

**Why do we use `Provider`?**

Without `Provider`, your React components won't have access to this Redux store through React-Redux hooks.

### File 4: `src/components/Counter.jsx`

This is the component where the user interacts with the counter.

```jsx
import { useSelector, useDispatch } from 'react-redux';

import {
  increment,
  decrement,
  reset
} from '../features/counter/counterSlice';

function Counter() {
  const count = useSelector(
    (state) => state.counter.value
  );

  const dispatch = useDispatch();

  return (
    <div>
      <h2>Count: {count}</h2>

      <button onClick={() => dispatch(increment())}>
        Increment
      </button>

      <button onClick={() => dispatch(decrement())}>
        Decrement
      </button>

      <button onClick={() => dispatch(reset())}>
        Reset
      </button>
    </div>
  );
}

export default Counter;
```

**Two important hooks:**

- `useSelector()` reads the required state from the store.
- `useDispatch()` lets the component send actions to Redux.

For example:

```javascript
dispatch(increment());
```

This dispatches the `increment` action. The reducer updates the state, and React re-renders the component with the new count.

### File 5: `src/App.jsx`

Render the counter component.

```jsx
import Counter from './components/Counter';

function App() {
  return (
    <div>
      <h1>Redux Toolkit Counter</h1>
      <Counter />
    </div>
  );
}

export default App;
```

## 5. How the code works

Let's say you click **Increment** once:

1. **User clicks the button:** `dispatch(increment())`
2. **Reducer runs:** `state.value += 1`
3. **Store updates:** the count changes from `0` to `1`.
4. **UI updates automatically:** the component displays `Count: 1`.

## 6. Run the application

In your project terminal, run:

```bash
npm run dev
```

Open the local URL Vite provides, usually `http://localhost:5173`.

You should see a heading, the current count, and three buttons: Increment, Decrement, and Reset.

## 7. When should you use Redux?

| React `useState` | Redux Toolkit |
|---|---|
| Local component state | Shared application state |
| Good for form inputs and toggles | Good for shared cart, user, or app data |
| Simple to set up | Requires a store and slices |
| State is managed inside the component | State can be accessed by many components |

For MERN projects, Redux Toolkit can be useful for:

- **Authentication:** sharing user information across pages.
- **E-commerce:** sharing cart items and quantities.
- **Dashboards:** sharing filters and application-wide data.

**Important:** Redux is not a replacement for your MongoDB database or backend API. It manages client-side application state; your backend remains responsible for persistent data and server-side operations.

## Recommended learning order

Understand `useState` first, then learn:

1. `createSlice`
2. `configureStore`
3. `Provider`
4. `useSelector`
5. `useDispatch`

These are the main concepts you'll use when working with Redux Toolkit.
