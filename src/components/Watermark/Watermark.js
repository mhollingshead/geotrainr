import { data } from '../../utils/data';
import { StateManager } from '../../utils/state';
import './Watermark.scss';

export default function Watermark({updateScores}) {
    const apply = (opt, e) => {
        if (e.currentTarget.classList.contains('active')) {
            e.currentTarget.classList.remove('active');
            data.watermark[opt].forEach(country => StateManager.scores[country]--);
            StateManager.active--;
        } else {
            e.currentTarget.classList.add('active');
            data.watermark[opt].forEach(country => StateManager.scores[country]++);
            StateManager.active++;
        }
        updateScores();
    }
    return (
        <section className='Watermark' id="watermark">
            <h1>Watermark</h1>
            <p className='Watermark__subtext'>Which year is on the watermark?</p>
            <div className='Watermark__options'>
                <div className='Watermark__option' onClick={(e) => apply(2011, e)}>
                    <p>©2011 Google</p>
                </div>
                <div className='Watermark__option' onClick={(e) => apply(2012, e)}>
                    <p>©2012 Google</p>
                </div>
                <div className='Watermark__option' onClick={(e) => apply(2013, e)}>
                    <p>©2013 Google</p>
                </div>
                <div className='Watermark__option' onClick={(e) => apply(2014, e)}>
                    <p>©2014 Google</p>
                </div>
                <div className='Watermark__option' onClick={(e) => apply(2015, e)}>
                    <p>©2015 Google</p>
                </div>
                <div className='Watermark__option' onClick={(e) => apply(2016, e)}>
                    <p>©2016 Google</p>
                </div>
                <div className='Watermark__option' onClick={(e) => apply(2017, e)}>
                    <p>©2017 Google</p>
                </div>
                <div className='Watermark__option' onClick={(e) => apply(2018, e)}>
                    <p>©2018 Google</p>
                </div>
                <div className='Watermark__option' onClick={(e) => apply(2019, e)}>
                    <p>©2019 Google</p>
                </div>
                <div className='Watermark__option' onClick={(e) => apply(2020, e)}>
                    <p>©2020 Google</p>
                </div>
                <div className='Watermark__option' onClick={(e) => apply(2021, e)}>
                    <p>©2021 Google</p>
                </div>
                <div className='Watermark__option' onClick={(e) => apply(2022, e)}>
                    <p>©2022 Google</p>
                </div>
                <div className='Watermark__option' onClick={(e) => apply('None', e)}>
                    <p>No Watermark</p>
                </div>
            </div>
        </section>
    );
}