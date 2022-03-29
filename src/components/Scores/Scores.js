import { data } from '../../utils/data';
import { StateManager } from '../../utils/state';
import { continents, getColor } from '../../utils/utils';
import './Scores.scss';

export default function Scores({ scores }) {
    // Turn our score object into an array so that we can sort it
    scores = Object.keys(scores).map(key => new Object({ country: key, score: (scores[key] / (StateManager.active || 1)) * 100 }))
        // First we sort alphabetically
        .sort((a, b) => a.country < b.country ? -1 : a.country > b.country ? 1 : 0)
        // Next we sort by commonality in order to present the most likely countries first
        .sort((a, b) => data.commonality[b.country] - data.commonality[a.country])
        // Finally we sort by score
        .sort((a, b) => b.score - a.score);

    return (
        <aside className='Scores'>
            <div className='Scores__content'>
                {Object.keys(continents).map(continent => (
                    <div className='Scores__continent' key={continent}>
                        <h3>{continent}</h3>
                        {scores.filter(country => continents[continent].includes(country.country)).map(country => (
                            <p className='Scores__country' key={country.country} title={country.country}>
                                <span className='Scores__score' style={{ backgroundColor: getColor(country.score) }}>{country.score.toFixed(0)}%</span>
                                <span className={`Scores__name ${country.score === 100 ? 'Scores__name--bold' : ''}`}>{country.country}</span>
                            </p>
                        ))}
                    </div>
                ))}
            </div>
        </aside>
    );
}