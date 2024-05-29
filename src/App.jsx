import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"
import MainLayout from "./components/MainLayout"
import Protected from "./feature/auth/Componenet/Protected"
import PageNotFound from "./pages/PageNotFound"
import Loader from "./components/Loader"
import { lazy, Suspense } from "react"




const HomePage = lazy(() => import("./pages/Home"));
const LoginPage = lazy(() => import("./pages/Login"));
const SignUpPage = lazy(() => import("./pages/SignUp"));
const ProductDetailPage = lazy(() => import("./pages/ProductDetail"));

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <MainLayout>
        <Protected>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </Protected>
      </MainLayout>
    ),
    children: [
      { 
        index: true, 
        element: (
          <Suspense fallback={<Loader />}>
            <HomePage />
          </Suspense>
        ),
      },
      {
        path: 'product-details/:id', 
        element: (
          <Suspense fallback={<Loader />}>
            <ProductDetailPage />
          </Suspense>
        ),
      },
    ]
  },
  { 
    path: '/login', 
    element: (
      <Suspense fallback={<Loader />}>
        <LoginPage />
      </Suspense>
    ) 
  },
  { 
    path: '/signup', 
    element: (
      <Suspense fallback={<Loader />}>
        <SignUpPage />
      </Suspense>
    ) 
  },
  { 
    path: '*', 
    element: <PageNotFound /> 
  },
]);


function App() {
  return (
    <>
 <RouterProvider router={router} />
    </>
  )
}

export default App
