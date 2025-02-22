import { useState } from 'react'
import AddNewNote from './components/AddNewNote'
import './App.css'
import NoteList from './components/NoteList'
import NoteStatus from './components/NoteStatus'
import NoteHeader from './components/NoteHeader'
function App() {
	const [notes, setNotes] = useState([])
	const [sortBy, setSortBy] = useState('latest')
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
			<NoteHeader
				notes={notes}
				sortBy={sortBy}
				onSort={e => setSortBy(e.target.value)}
			/>
			<div className="note-app">
				<AddNewNote setNotes={setNotes} />
				<div className="note-container">
					<NoteStatus notes={notes} />
					<NoteList
						notes={notes}
						sortBy={sortBy}
						onDelete={handleDeleteNote}
						onComplete={handleCompleteNote}
					/>
				</div>
			</div>
		</div>
	)
}

export default App
