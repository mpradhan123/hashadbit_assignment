import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './index.css';

const IPLPointsTable = () => {
    const [teams, setTeams] = useState([]);

    useEffect(() => {
        const fetchTeams = async () => {
            try {
                const response = await axios.get('https://my-json-server.typicode.com/FreSauce/json-ipl/data');
                const sortedTeams = response.data.sort((a, b) => a.NRR - b.NRR);
                setTeams(sortedTeams);
            } catch (error) {
                console.error("Error fetching the data", error);
            }
        };

        fetchTeams();
    }, []);

    return (
        <div>
            <h1>IPL 2022 Points Table</h1>
            <table>
                <thead>
                    <tr>
                        <th>Team</th>
                        <th>Matches</th>
                        <th>Won</th>
                        <th>Lost</th>
                        <th>NRR</th>
                        <th>Points</th>
                    </tr>
                </thead>
                <tbody>
                    {teams.map((team, index) => (
                        <tr key={index}>
                            <td>{team.Team}</td>
                            <td>{team.Matches}</td>
                            <td>{team.Won}</td>
                            <td>{team.Lost}</td>
                            <td>{team.NRR}</td>
                            <td>{team.Points}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default IPLPointsTable;
