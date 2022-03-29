export const defaults = {
    // The default score object. Each relevant country has an initial score of 0.
    scores: { "Botswana": 0, "Denmark": 0, "Croatia": 0, "Czech Republic": 0, "Estonia": 0, "Latvia": 0, "San Marino": 0, "Slovakia": 0, "Canada": 0, "Andorra": 0, "Bulgaria": 0, "Finland": 0, "Hungary": 0, "Ireland": 0, "Isle of Man": 0, "Italy": 0, "Jersey": 0, "Lithuania": 0, "Monaco": 0, "Netherlands": 0, "Poland": 0, "Portugal": 0, "Romania": 0, "Slovenia": 0, "Spain": 0, "Sweden": 0, "United Kingdom": 0, "United States": 0, "Australia": 0, "Brazil": 0, "Peru": 0, "South Africa": 0, "Bhutan": 0, "Cambodia": 0, "Israel": 0, "Japan": 0, "Taiwan": 0, "France": 0, "Greece": 0, "Switzerland": 0, "Turkey": 0, "New Zealand": 0, "Argentina": 0, "Chile": 0, "Uganda": 0, "Bangladesh": 0, "Laos": 0, "Malaysia": 0, "Mongolia": 0, "Thailand": 0, "North Macedonia": 0, "Norway": 0, "Serbia": 0, "Ukraine": 0, "Greenland": 0, "Mexico": 0, "American Samoa": 0, "Bolivia": 0, "Colombia": 0, "Ecuador": 0, "Uruguay": 0, "Tunisia": 0, "Indonesia": 0, "Kyrgyzstan": 0, "Philippines": 0, "Russia": 0, "Sri Lanka": 0, "United Arab Emirates": 0, "Albania": 0, "Gibraltar": 0, "Malta": 0, "Montenegro": 0, "Puerto Rico": 0, "Eswatini": 0, "Ghana": 0, "Lesotho": 0, "Nigeria": 0, "Senegal": 0, "Jordan": 0, "Belgium": 0, "Germany": 0, "Iceland": 0, "Luxembourg": 0, "Guatemala": 0, "US Virgin Islands": 0, "Kenya": 0, "Austria": 0, "Curaçao": 0, "Singapore": 0, "South Korea": 0, "Madagascar": 0, "Vietnam": 0, "Dominican Republic": 0, "Christmas Island": 0, "India": 0, "Faroe Islands": 0, "Guam": 0, "Northern Mariana Islands": 0, "China": 0 },
    // The default categories object. By default, all categories are displayed.
    categories: { "traffic": true, "roads": true, "plates": true, "watermark": true, "sun": true, "snow": true, "language": true }
};

export const labels = {
    categories: { "traffic": "Traffic", "roads": "Road Lines", "plates": "License Plates", "watermark": "Watermark", "sun": "Sun", "snow": "Snow", "language": "Language" }
}

// Separate relevant countries (i.e. countries with street view coverage) into their respective continents 
export const continents = {
    "Africa": ["Botswana", "Ghana", "Kenya", "Lesotho", "Madagascar", "Nigeria", "Senegal", "South Africa", "Tunisia", "Uganda"],
    "Asia": ["Bangladesh", "Bhutan", "Cambodia", "China", "India", "Indonesia", "Israel", "Japan", "Jordan", "Kyrgyzstan", "Laos", "Malaysia", "Mongolia", "Philippines", "Russia", "Singapore", "South Korea", "Sri Lanka", "Thailand", "Turkey", "United Arab Emirates", "Vietnam"],
    "Europe": ["Albania", "Andorra", "Austria", "Belgium", "Bulgaria", "Croatia", "Czech Republic", "Denmark", "Estonia", "Faroe Islands", "Finland", "France", "Germany", "Gibraltar", "Greece", "Hungary", "Iceland", "Ireland", "Italy", "Isle of Man", "Jersey", "Latvia", "Lithuania", "Luxembourg", "North Macedonia", "Malta", "Monaco", "Montenegro", "Netherlands", "Norway", "Poland", "Portugal", "Romania", "San Marino", "Serbia", "Slovakia", "Slovenia", "Spain", "Sweden", "Switzerland", "Ukraine", "United Kingdom"],
    "North America": ["Canada", "Dominican Republic", "Greenland", "Guatemala", "Mexico", "Puerto Rico", "United States", "US Virgin Islands"],
    "Oceania": ["American Samoa", "Australia", "Christmas Island", "Guam", "New Zealand", "Northern Mariana Islands"],
    "South America": ["Argentina", "Bolivia", "Brazil", "Chile", "Colombia", "Ecuador", "Peru", "Uruguay"]
}

export const getColor = score => {
    if (score === 100) {
        // Green
        return 'rgb(0, 128, 64)';
    } else if (score >= 80) {
        // Yellow-green
        return 'rgb(99, 153, 0)';
    } else if (score >= 60) {
        // Yellow
        return '#f0bc00'
    } else if (score >= 40) {
        // Orange
        return '#f07800'
    } else if (score >= 20) {
        // Red
        return '#fb3838';
    } else {
        // Grey
        return '#58667e';
    }
}