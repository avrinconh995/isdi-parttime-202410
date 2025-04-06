import { createContext, useContext } from 'react'

const CalendarContext = createContext()

const useCalendarContext = () => useContext(CalendarContext)

export {
    CalendarContext,
    useCalendarContext
} 