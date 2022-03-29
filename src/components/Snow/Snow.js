import { data } from '../../utils/data';
import { StateManager } from '../../utils/state';
import './Snow.scss';

export default function Snow({updateScores}) {
    const apply = (e) => {
        if (e.currentTarget.classList.contains('active')) {
            e.currentTarget.classList.remove('active');
            data.snow.forEach(country => StateManager.scores[country]--);
            StateManager.active--;
        } else {
            e.currentTarget.classList.add('active');
            data.snow.forEach(country => StateManager.scores[country]++);
            StateManager.active++;
        }
        updateScores();
    }
    return (
        <section className='Snow' id="snow">
            <h1>Snow</h1>
            <p className='Sun__subtext'>Is there snow on the ground?</p>
            <div className='Sun__options'>
                <div className='Sun__option' onClick={(e) => apply(e)}>
                    <p>Snow</p>
                </div>
            </div>
        </section>
    );
}