import { data } from '../../utils/data';
import { StateManager } from '../../utils/state';
import './Sun.scss';

export default function Sun({updateScores}) {
    const apply = (opt, e) => {
        if (e.currentTarget.classList.contains('active')) {
            e.currentTarget.classList.remove('active');
            data.hemisphere[opt].forEach(country => StateManager.scores[country]--);
            StateManager.active--;
        } else {
            e.currentTarget.classList.add('active');
            data.hemisphere[opt].forEach(country => StateManager.scores[country]++);
            StateManager.active++;
        }
        updateScores();
    }
    return (
        <section className='Sun' id="sun">
            <h1>Sun</h1>
            <p className='Sun__subtext'>If you look at the sun, which direction does the compass point? <i>Only select an option if the sun is <b>directly</b> north or south.</i></p>
            <div className='Sun__options'>
                <div className='Sun__option' onClick={(e) => apply('southern', e)}>
                    <p>North</p>
                </div>
                <div className='Sun__option' onClick={(e) => apply('northern', e)}>
                    <p>South</p>
                </div>
            </div>
        </section>
    );
}