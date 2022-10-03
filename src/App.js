import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './component/Home/Home';
import About from './component/About/About';
import Product from './component/Product/Product';
import Main from './component/Main/Main';
import Friends from './component/Friends/Friends';
import FriendDetails from './component/FriendDetails/FriendDetails';
import Posts from './component/Posts/Posts';
import PostDetails from './component/PostDetails/PostDetails';

function App() {
  const router = createBrowserRouter([
    {path: "/",
     element: <Main></Main>,
      children: [
      { path: "home", element: <Home></Home> },
      { path: "about", element: <About></About> },
      { path: "product", element: <Product></Product> },
      { path: "friend",
       element: <Friends></Friends>,
       loader: async () => {
         return fetch('https://jsonplaceholder.typicode.com/users')
      } },
      {path: '/friend/:friendId',
       element: <FriendDetails></FriendDetails>,
       loader: async ({params}) => {
         return fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`)
       }},
       {path:'posts',
        element: <Posts></Posts>,
         loader: async() => {
           return fetch('https://jsonplaceholder.typicode.com/posts')
         }},
        {
          path: '/post/:postId',
          element: <PostDetails></PostDetails>,
          loader: async ({ params }) => {
            return fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
          }}
    ]},
    {path: "*", element: <div>This route not found</div>}
  ])
  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
