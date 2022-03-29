import { data } from '../../utils/data';
import { StateManager } from '../../utils/state';
import './Roads.scss';

export default function Roads({updateScores}) {
    const apply = (opt, e) => {
        if (e.currentTarget.classList.contains('active')) {
            e.currentTarget.classList.remove('active');
            data.roads[opt].forEach(country => StateManager.scores[country]--);
            StateManager.active--;
        } else {
            e.currentTarget.classList.add('active');
            data.roads[opt].forEach(country => StateManager.scores[country]++);
            StateManager.active++;
        }
        updateScores();
    }
    return (
        <section className='Roads' id="roads">
            <h1>Road Lines</h1>
            <p className='Roads__subtext'>How are the lines on the roads colored?</p>
            <div className='Roads__options'>
                <div className='Road Road--yellow-white' onClick={(e) => apply(0, e)}>
                    <div className='sideline'></div>
                    <div className='middleline'></div>
                    <div className='sideline'></div>
                    <div className='Road__border'></div>
                </div>
                <div className='Road Road--white-white' onClick={(e) => apply(1, e)}>
                    <div className='sideline'></div>
                    <div className='middleline'></div>
                    <div className='sideline'></div>
                    <div className='Road__border'></div>
                </div>
                <div className='Road Road--white-yellow' onClick={(e) => apply(2, e)}>
                    <div className='sideline'></div>
                    <div className='middleline'></div>
                    <div className='sideline'></div>
                    <div className='Road__border'></div>
                </div>
                <div className='Road Road--yellow-yellow' onClick={(e) => apply(3, e)}>
                    <div className='sideline'></div>
                    <div className='middleline'></div>
                    <div className='sideline'></div>
                    <div className='Road__border'></div>
                </div>
                <div className='Road Road--white-white-yellow' onClick={(e) => apply(4, e)}>
                    <div className='sideline'></div>
                    <div className='middleline'></div>
                    <div className='sideline'></div>
                    <div className='Road__border'></div>
                </div>
                <div className='Road Road--white-white-green' onClick={(e) => apply(5, e)}>
                    <div className='sideline'></div>
                    <div className='middleline'></div>
                    <div className='sideline'></div>
                    <div className='Road__border'></div>
                </div>
            </div>
        </section>
    );
}