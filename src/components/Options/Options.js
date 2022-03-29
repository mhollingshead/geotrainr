import { useState } from 'react';
import { StateManager } from '../../utils/state';
import { defaults, labels } from '../../utils/utils';
import './Options.scss';

export default function Options({ categories, updateCategories, updateScores }) {
    const [dropdown, setDropdown] = useState(false);

    const handleOnChange = e => {
        StateManager.categories[e.target.id.split('_')[0]] = !StateManager.categories[e.target.id.split('_')[0]];
        updateCategories();
    }

    const reset = () => {
        document.querySelectorAll('.active').forEach(element => element.classList.remove('active'));
        StateManager.scores = {...defaults.scores};
        StateManager.active = 0;
        updateScores();
    }

    return (
        <section className='Options'>
            <div className='Options__dropdown-wrapper'>
                <div className='Options__option' onClick={() => setDropdown(!dropdown)}>
                    <i className='Options__icon'>settings</i>
                </div>
                {dropdown && <div className='Dropdown'>
                    {Object.keys(categories).map(category => (
                        <div key={category}>
                            <input type="checkbox" id={category + '_opt'} name={category + '_opt'} checked={categories[category]} onChange={handleOnChange} />
                            <label htmlFor={category + '_opt'}>
                                <a href={`#${category}`}>
                                    {labels.categories[category]}
                                </a>
                            </label>
                        </div>
                    ))}
                    <div className='Dropdown__footer'>
                        <a>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
                            <span>View on GitHub</span>
                        </a>
                    </div>
                </div>}
            </div>
            <div className='Options__option Options__option--primary' onClick={reset}>
                <i className='Options__icon'>restart_alt</i>
            </div>
        </section>
    );
}