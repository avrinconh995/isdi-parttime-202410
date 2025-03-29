import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import logic from '../../logic'

function EditEvent({ onEventUpdated, onCancel }) {
    const { eventId } = useParams()
    const navigate = useNavigate()
    const [eventData, setEventData] = useState(null)
    const [editedEventData, setEditedEventData] = useState(null)


    useEffect(() => {
        logic.getEvent(eventId)
            .then((event) => {
                setEventData(event)
                setEditedEventData({ ...event }

                )
            })
    })

}

export default EditEvent