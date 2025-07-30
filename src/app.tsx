import { BrowserRouter, Route, Routes } from "react-router-dom"
import CreateRooms from "./pages/create-rooms"
import Room from "./pages/room"
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route index element={<CreateRooms />}></Route>
          <Route path="/room/:id" element={<Room />}></Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
