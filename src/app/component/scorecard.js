import React from 'react'

const Scorecard = () => {
    const teamsScore = [
        {
            team: "Team A",
            score: 30,
            out: 2,
        },
        {
            team: "Team B",
            score: 15,
            out: 3,
        }
    ]

    return (
        <div>
            <div>
                {/* {teamsScore.map(()=>{ */}
                {/* return( */}
                <table className="score-board">
                    <thead>
                        <tr>
                            <th colSpan={4}>Score Card</th>
                        </tr>
                        <tr>
                            <td>
                                Team Name
                            </td>
                            <td>
                                Score
                            </td>
                            <td>
                                Outs
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        {teamsScore.map((team) => {
                            return (
                                <tr key={team.team}>
                                    <td>
                                        {team.team}
                                    </td>
                                    <td>
                                        {team.score}
                                    </td>
                                    <td>
                                        {team.out}
                                    </td>
                                </tr>
                            )
                        })
                        }
                    </tbody>
                </table>
                {/* })} */}
            </div>
        </div>
    )
}

export default Scorecard
