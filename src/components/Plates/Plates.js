import { data } from '../../utils/data';
import { StateManager } from '../../utils/state';
import './Plates.scss';

export default function Plates({updateScores}) {
    const apply = (opt1, opt2, e) => {
        if (e.currentTarget.classList.contains('active')) {
            e.currentTarget.classList.remove('active');
            data.plates[opt1][opt2].forEach(country => StateManager.scores[country]--);
            StateManager.active--;
        } else {
            e.currentTarget.classList.add('active');
            data.plates[opt1][opt2].forEach(country => StateManager.scores[country]++);
            StateManager.active++;
        }
        updateScores();
    }
    return (
        <section className='Plates' id="plates">
            <h1>License Plates</h1>
            <p className='Plates__subtext'>What color license plates can you see?</p>
            <h3 id="plates-front">Front</h3>
            <div className='Plates__options'>
                <div className='Plate__wrapper' onClick={(e) => apply('front', 0, e)}>
                    <div className='Plate Plate--0'></div>
                    <div className='Plate__border'></div>
                </div>
                <div className='Plate__wrapper' onClick={(e) => apply('front', 1, e)}>
                    <div className='Plate Plate--1'></div>
                    <div className='Plate__border'></div>
                </div>
                <div className='Plate__wrapper' onClick={(e) => apply('front', 2, e)}>
                    <div className='Plate Plate--2'></div>
                    <div className='Plate__border'></div>
                </div>
                <div className='Plate__wrapper' onClick={(e) => apply('front', 3, e)}>
                    <div className='Plate Plate--3'>
                        <div className='VBar VBar--blue'></div>
                    </div>
                    <div className='Plate__border'></div>
                </div>
                <div className='Plate__wrapper' onClick={(e) => apply('front', 4, e)}>
                    <div className='Plate Plate--4'>
                        <div className='VBar VBar--blue'></div>
                    </div>
                    <div className='Plate__border'></div>
                </div>
                <div className='Plate__wrapper' onClick={(e) => apply('front', 5, e)}>
                    <div className='Plate Plate--5'>
                        <div className='VBar VBar--blue'></div>
                        <div className='VBar VBar--blue'></div>
                    </div>
                    <div className='Plate__border'></div>
                </div>
                <div className='Plate__wrapper' onClick={(e) => apply('front', 6, e)}>
                    <div className='Plate Plate--6'>
                        <div className='VBar VBar--red'></div>
                    </div>
                    <div className='Plate__border'></div>
                </div>
                <div className='Plate__wrapper' onClick={(e) => apply('front', 7, e)}>
                    <div className='Plate Plate--7'></div>
                    <div className='Plate__border'></div>
                </div>
                <div className='Plate__wrapper' onClick={(e) => apply('front', 8, e)}>
                    <div className='Plate Plate--8'></div>
                    <div className='Plate__border'></div>
                </div>
                <div className='Plate__wrapper' onClick={(e) => apply('front', 9, e)}>
                    <div className='Plate Plate--9'>
                        <div className='HBar HBar--blue'></div>
                    </div>
                    <div className='Plate__border'></div>
                </div>
                <div className='Plate__wrapper' onClick={(e) => apply('front', 10, e)}>
                    <div className='Plate Plate--10'></div>
                    <div className='Plate__border'></div>
                </div>
                <div className='Plate__wrapper' onClick={(e) => apply('front', 11, e)}>
                    <div className='Plate Plate--11'></div>
                    <div className='Plate__border'></div>
                </div>
                <div className='Plate__wrapper' onClick={(e) => apply('front', 12, e)}>
                    <div className='Plate Plate--12'>
                        <div className='VBar VBar--blue'></div>
                    </div>
                    <div className='Plate__border'></div>
                </div>
                <div className='Plate__wrapper' onClick={(e) => apply('front', 13, e)}>
                    <div className='Plate Plate--13'>
                        <div className='VBar VBar--blue'></div>
                    </div>
                    <div className='Plate__border'></div>
                </div>
                <div className='Plate__wrapper' onClick={(e) => apply('front', 14, e)}>
                    <div className='Plate Plate--14'>
                        <div className='VBar VBar--blue'></div>
                        <div className='VBar VBar--yellow'></div>
                    </div>
                    <div className='Plate__border'></div>
                </div>
            </div>
            <h3 id="plates-back">Back</h3>
            <div className='Plates__options'>
                <div className='Plate__wrapper' onClick={(e) => apply('back', 0, e)}>
                    <div className='Plate Plate--0'></div>
                    <div className='Plate__border'></div>
                </div>
                <div className='Plate__wrapper' onClick={(e) => apply('back', 1, e)}>
                    <div className='Plate Plate--1'></div>
                    <div className='Plate__border'></div>
                </div>
                <div className='Plate__wrapper' onClick={(e) => apply('back', 2, e)}>
                    <div className='Plate Plate--2'></div>
                    <div className='Plate__border'></div>
                </div>
                <div className='Plate__wrapper' onClick={(e) => apply('back', 3, e)}>
                    <div className='Plate Plate--3'>
                        <div className='VBar VBar--blue'></div>
                    </div>
                    <div className='Plate__border'></div>
                </div>
                <div className='Plate__wrapper' onClick={(e) => apply('back', 4, e)}>
                    <div className='Plate Plate--4'>
                        <div className='VBar VBar--blue'></div>
                    </div>
                    <div className='Plate__border'></div>
                </div>
                <div className='Plate__wrapper' onClick={(e) => apply('back', 5, e)}>
                    <div className='Plate Plate--5'>
                        <div className='VBar VBar--blue'></div>
                        <div className='VBar VBar--blue'></div>
                    </div>
                    <div className='Plate__border'></div>
                </div>
                <div className='Plate__wrapper' onClick={(e) => apply('back', 6, e)}>
                    <div className='Plate Plate--6'>
                        <div className='VBar VBar--red'></div>
                    </div>
                    <div className='Plate__border'></div>
                </div>
                <div className='Plate__wrapper' onClick={(e) => apply('back', 7, e)}>
                    <div className='Plate Plate--7'></div>
                    <div className='Plate__border'></div>
                </div>
                <div className='Plate__wrapper' onClick={(e) => apply('back', 8, e)}>
                    <div className='Plate Plate--8'></div>
                    <div className='Plate__border'></div>
                </div>
                <div className='Plate__wrapper' onClick={(e) => apply('back', 9, e)}>
                    <div className='Plate Plate--9'>
                        <div className='HBar HBar--blue'></div>
                    </div>
                    <div className='Plate__border'></div>
                </div>
                <div className='Plate__wrapper' onClick={(e) => apply('back', 10, e)}>
                    <div className='Plate Plate--10'></div>
                    <div className='Plate__border'></div>
                </div>
                <div className='Plate__wrapper' onClick={(e) => apply('back', 11, e)}>
                    <div className='Plate Plate--11'></div>
                    <div className='Plate__border'></div>
                </div>
                <div className='Plate__wrapper' onClick={(e) => apply('back', 12, e)}>
                    <div className='Plate Plate--12'>
                        <div className='VBar VBar--blue'></div>
                    </div>
                    <div className='Plate__border'></div>
                </div>
                <div className='Plate__wrapper' onClick={(e) => apply('back', 13, e)}>
                    <div className='Plate Plate--13'>
                        <div className='VBar VBar--blue'></div>
                    </div>
                    <div className='Plate__border'></div>
                </div>
                <div className='Plate__wrapper' onClick={(e) => apply('back', 14, e)}>
                    <div className='Plate Plate--14'>
                        <div className='VBar VBar--blue'></div>
                        <div className='VBar VBar--yellow'></div>
                    </div>
                    <div className='Plate__border'></div>
                </div>
                <div className='Plate__wrapper' onClick={(e) => apply('back', 15, e)}>
                    <div className='Plate Plate--15'>
                        <div className='VBar VBar--red'></div>
                    </div>
                    <div className='Plate__border'></div>
                </div>
            </div>
        </section>
    );
}