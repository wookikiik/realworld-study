export default function TaskList() {
    return (
        <ul id="task-list" className="task-list">
            <li>
                <input type="checkbox" checked /><span>카프카 박물관 방문하기</span>
                <div className="action-box">
                <button className="btn edit-btn">edit</button>
                <button className="btn delete-btn">delete</button>
                </div>
            </li>
            <li>
                <input type="checkbox" /><input
                type="text"
                className="edit-input"
                value="인형극 보기"
                />
                <div className="action-box">
                <button className="btn save-btn">save</button>
                <button className="btn delete-btn">delete</button>
                </div>
            </li>
        </ul>
    );
}
