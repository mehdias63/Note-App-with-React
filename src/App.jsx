import { useState } from 'react'
import AddNewNote from './components/AddNewNote'
import './App.css'
import NoteList from './components/NoteList'
function App() {
	const [notes, setNotes] = useState([])
	const handleDeleteNote = id => {
		setNotes(prevNotes => prevNotes.filter(n => n.id !== id))
	}
	const handleCompleteNote = e => {
		const noteId = Number(e.target.value)
		setNotes(prevNotes =>
			prevNotes.map(note =>
				note.id === noteId
					? { ...note, completed: !note.completed }
					: note,
			),
		)
	}
	return (
		<div className="container">
			<div className="note-header">Headre Note</div>
			<div className="note-app">
				<AddNewNote setNotes={setNotes} />
				<div className="note-container">
					<NoteList
						notes={notes}
						onDelete={handleDeleteNote}
						onComplete={handleCompleteNote}
					/>
				</div>
			</div>
		</div>
	)
}

export default App
