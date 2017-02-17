/**
 * 这个 getter 函数会返回 count 的值
 * 在 ES6 里你可以这样写
 * export const getCount = state => state.count
 */
const getCount = state => state.count

const notes = state => state.notes

const activeNote = state => state.activeNote

const activeNoteText = state => state.activeNote.text

export { getCount, notes, activeNote, activeNoteText }
