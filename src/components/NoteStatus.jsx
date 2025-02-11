function NoteStatus({ notes }) {
	const allNotes = notes.length
	const completedNotes = notes.filter(n => n.completed).length
	const openNotes = allNotes - completedNotes

	if (!allNotes) return <h2>No Notes has already been added.</h2>

	return (
		<ul className="note-status">
			<li>
				All <span>{allNotes}</span>
			</li>
			<li>
				completed <span>{completedNotes}</span>
			</li>
			<li>
				open <span>{openNotes}</span>
			</li>
		</ul>
	)
}

export default NoteStatus
