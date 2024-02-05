import "./App.css";

function App() {
  return (
    <div className="container">
      <h1>프라하에서 해야 할 일</h1>
      <form data-testid="task-add-form" className="task-form">
        <input
          type="text"
          data-testid="new-task"
          className="new-task"
          placeholder="Add task"
        />
        <button type="submit" className="btn add-btn">
          Add
        </button>
      </form>
      <ul data-testid="task-list" className="task-list">
        <li>
          <input type="checkbox" defaultChecked={true} />
          <span>카프카 박물관 방문하기</span>
          <div className="action-box">
            <button className="btn edit-btn">edit</button>
            <button className="btn delete-btn">delete</button>
          </div>
        </li>
        <li>
          <input type="checkbox" />
          <input
            type="text"
            className="edit-input"
            defaultValue="인형극 보기"
          />
          <div className="action-box">
            <button className="btn save-btn">save</button>
            <button className="btn delete-btn">delete</button>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default App;
