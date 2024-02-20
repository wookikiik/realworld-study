export default function ToggleButton({onToggleAll}) {
    return (
        <>
            <input id="toggle-all" className="toggle-all" type="checkbox"
                onChange={onToggleAll}
            />
            <label htmlFor="toggle-all">Mark all as complete</label>
        </>
    )
}