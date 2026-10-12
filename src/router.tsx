import { createBrowserRouter, Navigate } from 'react-router-dom'
import SiteLayout from './components/SiteLayout'
import HomePage from './pages/HomePage'
import NextRunwayPage from './pages/NextRunwayPage'
import GalleryPage from './pages/GalleryPage'
import BrandsPage from './pages/BrandsPage'
import ParentsPage from './pages/ParentsPage'
import ContactPage from './pages/ContactPage'
import ApplyPage from './pages/ApplyPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <SiteLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'next-runway', element: <NextRunwayPage /> },
      { path: 'gallery', element: <GalleryPage /> },
      { path: 'brands', element: <BrandsPage /> },
      { path: 'parents', element: <ParentsPage /> },
      { path: 'contact', element: <ContactPage /> },
      { path: 'apply', element: <ApplyPage /> },
      { path: '*', element: <Navigate to="/" replace /> },
    ],
  },
])
