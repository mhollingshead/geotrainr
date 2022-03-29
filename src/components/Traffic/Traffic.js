
import { data } from '../../utils/data';
import { StateManager } from '../../utils/state';
import './Traffic.scss';

export default function Traffic({updateScores}) {
    const apply = (opt, e) => {
        if (e.currentTarget.classList.contains('active')) {
            e.currentTarget.classList.remove('active');
            data.traffic[opt].forEach(country => StateManager.scores[country]--);
            StateManager.active--;
        } else {
            e.currentTarget.classList.add('active');
            data.traffic[opt].forEach(country => StateManager.scores[country]++);
            StateManager.active++;
        }
        updateScores();
    }
    return (
        <section className='Traffic' id="traffic">
            <h1>Traffic</h1>
            <p className='Traffic__subtext'>Which side of the road are you driving on?</p>
            <div className='Traffic__options'>
                <div className='Traffic__option' onClick={(e) => apply(0, e)}>
                    <p><span className="dir"><b>↑</b>↓</span><br/>Left-Hand Traffic</p>
                </div>
                <div className='Traffic__option' onClick={(e) => apply(1, e)}>
                    <p><span className="dir">↓<b>↑</b></span><br/>Right-Hand Traffic</p>
                </div>
            </div>
        </section>
    );
}