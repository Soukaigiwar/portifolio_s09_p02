import { Routes, Route } from "react-router-dom"

import { Home } from '../pages/Home'
import { CreateMovie } from '../pages/CreateMovie'
import { Profile } from '../pages/Profile'
import { MoviePreview } from '../pages/MoviePreview'

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/createmovie" element={<CreateMovie />} />
            <Route path="/details/:id" element={<MoviePreview />} />
        </Routes>
    )
}