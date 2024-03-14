export default function ToggleTab({ isLoggedIn, onToggle }: { isLoggedIn: boolean, onToggle: Function }) {


    return (
        <div className="feed-toggle">
            <ul className="nav nav-pills outline-active">
                {isLoggedIn ?
                    <li className="nav-item" onClick={() => onToggle('feed')}>
                        <a className="nav-link" href=''>Your Feed</a>
                    </li> : ''}
                <li className="nav-item" onClick={() => onToggle('global')}>
                    <a className="nav-link active" href="">Global Feed</a>
                </li>
            </ul>
        </div>
    )
}