import './App.css';

function App() {
  return (
    <div className="highscore">
      <h1>High Score:</h1>
      <div className="score-box">

        <table>
            <tbody>
              <tr className="highscore-collumn">
                <th>Navn</th>
                <th>Score</th>
              </tr>
              <tr className="highscore-row">
                <td>Andreas</td>
                <td>1</td>
              </tr>
            </tbody>
        </table>

      </div>
    </div>
  )
}

export default App;
