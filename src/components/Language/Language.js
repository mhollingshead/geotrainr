import { data } from '../../utils/data';
import { StateManager } from '../../utils/state';
import './Language.scss';

export default function Language({updateScores}) {
    const apply = (opt1, opt2, e) => {
        if (e.currentTarget.classList.contains('active')) {
            e.currentTarget.classList.remove('active');
            data.language[opt1][opt2].forEach(country => typeof StateManager.scores[country] === 'number' ? StateManager.scores[country]-- : null);
            StateManager.active--;
        } else {
            e.currentTarget.classList.add('active');
            data.language[opt1][opt2].forEach(country => typeof StateManager.scores[country] === 'number' ? StateManager.scores[country]++ : null);
            StateManager.active++;
        }
        updateScores();
    }

    return (
        <section className='Language' id="language">
            <h1>Language</h1>
            <p className='Language__subtext'>Which letters or characters can you see? <i>Keep in mind that some languages have thousands of characters, so keep an eye out for commonalities or similar characters to the samples listed below.</i></p>
            <h3>General Alphabet / Characters</h3>
            <div className='Language__options'>
                <div className='Language__option' onClick={(e) => apply('alphabet', 'latin', e)}>
                    <p>A B C D E F G H I J K L M N O P Q R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z</p>
                </div>
                <div className='Language__option' onClick={(e) => apply('alphabet', 'cyrillic', e)}>
                    <p>А Б В Г Д Е Ж З И К Л М Н О П Р С Т У Ф Х Ц Ч Ш а б в г д е ж з и к л м н о п р с т у ф х ц ч ш</p>
                </div>
                <div className='Language__option' onClick={(e) => apply('alphabet', 'greek', e)}>
                    <p>Α Β Γ Δ Ε Ζ Η Θ Ι Κ Λ Μ Ν Ξ Ο Π Ρ Σ Τ Υ Φ Χ Ψ Ω α β γ δ ε ζ η θ ι κ λ μ ν ξ ο π ρ σ ς τ υ φ χ ψ ω</p>
                </div>
                <div className='Language__option' onClick={(e) => apply('alphabet', 'arabic', e)}>
                    <p>ا ب ت ث ج ح خ د ذ ر ز س ش ص ض ط ظ ع غ ف ق ك ل م ن ه و ي</p>
                </div>
                <div className='Language__option' onClick={(e) => apply('alphabet', 'hebrew', e)}>
                    <p>א ב ג ד ה ו ז ח ט י כ ל מ נ ס ע פ צ ק ר ש ת</p>
                </div>
                <div className='Language__option' onClick={(e) => apply('alphabet', 'japanese', e)}>
                    <p>あ い う え お か き く け こ さ し す せ そ た ち つ て と な に ぬ ね の は ひ ふ へ ほ ま み む め も や</p>
                </div>
                <div className='Language__option' onClick={(e) => apply('alphabet', 'mandarin', e)}>
                    <p>诶 比 西 迪 伊 弗 吉 尺 艾 杰 开 勒 马 娜 哦 屁 吾 儿 丝 提 维 豆 贝 尔 克 斯 贼 德</p>
                </div>
                <div className='Language__option' onClick={(e) => apply('alphabet', 'korean', e)}>
                    <p>것 수 나 그 거 년 한 말 일 이 씨 안 더 집 속 데 앞 중 잘 원 명 개 다 좀 너 점 곳 안 위 돈 날 후 몸 왜 물</p>
                </div>
                <div className='Language__option' onClick={(e) => apply('alphabet', 'khmer', e)}>
                    <p>ក ខ គ ឃ ង ច ឆ ជ ឈ ញ ដ ឋ ឌ ឍ ណ ត ថ ទ ធ ន ប ផ ព ភ ម ស ហ យ រ ល ឡ អ</p>
                </div>
                <div className='Language__option' onClick={(e) => apply('alphabet', 'thai', e)}>
                    <p>ก ข ฃ ค ฅ ฆ ง จ ฉ ช ฌ ญ ฎ ฐ ฑ ฒ ณ ด ถ ท ธ น ป ผ ฝ พ ฟ ม ย ร ฤ ล ฦ ว ศ ษ ส ห อ ฯ ะ เ โ ไ ๅ ๆ</p>
                </div>
                <div className='Language__option' onClick={(e) => apply('alphabet', 'bengali', e)}>
                    <p>অ আ কা কি কী উ কু ঊ কূ ঋ কৃ এ কে ঐ কৈ ও কো ঔ কৌ ক্ ক ত্‍ কং কঃ কঁ ক খ গ ঘ ঙ চ ছ জ ঝ</p>
                </div>
                <div className='Language__option' onClick={(e) => apply('alphabet', 'devanāgarī', e)}>
                    <p>अ आ इ ई उ ऊ ऋ ॠ ऌ ॡ ऍ ऎ ए ऐ ऑ ऒ ओ ओ क ख ग घ ङ च छ ज झ ञ ट ठ ड ढ ण त थ द ध न प फ ब भ</p>
                </div>
                <div className='Language__option' onClick={(e) => apply('alphabet', 'gurmukhi', e)}>
                    <p>ਅ ਆ ਇ ਈ ਉ ਊ ਏ ਐ ਓ ਔ ਕ ਖ ਗ ਘ ਙ ਚ ਛ ਜ ਝ ਞ ਟ ਠ ਡ ਢ ਣ ਤ ਥ ਦ ਧ ਨ ਪ ਫ ਬ ਭ ਮ ਯ ਰ ਲ ਲ਼ ਵ ਸ਼ ਸ ਹ</p>
                </div>
                <div className='Language__option' onClick={(e) => apply('alphabet', 'gujarati', e)}>
                    <p>અ આ ઇ ઈ ઉ ઊ ઋ ઌ ઍ એ ઐ ઑ ઓ ઔ ક ખ ગ ઘ ઙ ચ છ જ ઝ ઞ ટ ઠ ડ ઢ ણ ત થ દ ધ ન પ ફ બ ભ મ</p>
                </div>
                {/* <div className='Language__option' onClick={(e) => apply('alphabet', 'tibetan', e)}>
                    <p>ཀ ཁ ག ང ཅ ཆ ཇ ཉ ཏ ཐ ད ན པ ཕ བ མ ཙ ཚ ཛ ཝ ཞ ཟ འ ཡ ར ལ ཤ ས ཧ</p>
                </div> */}
            </div>
            <h3 style={{paddingTop: '1rem'}}>Diacritics</h3>
            <div className='Language__options'>
                {Object.keys(data.language.diacritic)/*.sort((a, b) => data.language.diacritic[b].length > data.language.diacritic[a].length ? 1 : data.language.diacritic[b].length < data.language.diacritic[a].length ? -1 : 0)*/.map(c => (
                    <div className='Language__option Language__option--small' onClick={(e) => apply('diacritic', c, e)}>
                        <p>{c}</p>
                    </div>
                ))}
                
            </div>
        </section>
    );
}