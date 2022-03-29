// The data object contains all relevant country information for each category.
// Each option within each category has an array of applicable countries.
// Each time an option is selected, all applicable countries associated with that option are given a point.
export const data = {
    
    // How common each country's official coverage is (according to https://geohints.com/Countries.html)
    commonality: { "Botswana": 3, "Denmark": 3, "Croatia": 3, "Czech Republic": 3, "Estonia": 3, "Latvia": 3, "San Marino": 3, "Slovakia": 3, "Canada": 3, "Andorra": 3, "Bulgaria": 3, "Finland": 3, "Hungary": 3, "Ireland": 3, "Isle of Man": 3, "Italy": 3, "Jersey": 3, "Lithuania": 3, "Monaco": 3, "Netherlands": 3, "Poland": 3, "Portugal": 3, "Romania": 3, "Slovenia": 3, "Spain": 3, "Sweden": 3, "United Kingdom": 3, "United States": 3, "Australia": 3, "Brazil": 3, "Peru": 3, "South Africa": 3, "Bhutan": 3, "Cambodia": 3, "Israel": 3, "Japan": 3, "Taiwan": 3, "France": 3, "Greece": 3, "Switzerland": 3, "Turkey": 3, "New Zealand": 3, "Argentina": 3, "Chile": 3, "Uganda": 3, "Bangladesh": 3, "Laos": 3, "Malaysia": 3, "Mongolia": 3, "Thailand": 3, "North Macedonia": 3, "Norway": 3, "Serbia": 3, "Ukraine": 3, "Greenland": 3, "Mexico": 3, "American Samoa": 3, "Bolivia": 3, "Colombia": 3, "Ecuador": 3, "Uruguay": 3, "Tunisia": 3, "Indonesia": 3, "Kyrgyzstan": 3, "Philippines": 3, "Russia": 3, "Sri Lanka": 3, "United Arab Emirates": 3, "Albania": 3, "Gibraltar": 3, "Malta": 3, "Montenegro": 3, "Puerto Rico": 3, "Eswatini": 3, "Ghana": 3, "Lesotho": 3, "Nigeria": 3, "Senegal": 3, "Jordan": 3, "Belgium": 3, "Germany": 3, "Iceland": 3, "Luxembourg": 3, "Guatemala": 3, "US Virgin Islands": 3, "Kenya": 3, "Austria": 3, "Curaçao": 3, "Singapore": 3, "South Korea": 3, "Madagascar": 2, "Vietnam": 3, "Dominican Republic": 3, "Christmas Island": 3, "India": 2, "Faroe Islands": 3, "Guam": 3, "Northern Mariana Islands": 3, "China": 1 },
    
    // How road lines are colored. These are not mutually exclusive since a country could color road lines several different ways
    // (according to https://geohints.com/Lines.html).
    roads: [
        // Yellow sidelines + white middle
        ['Russia', 'Botswana', 'Eswatini', 'Lesotho', 'Nigeria', 'South Africa', 'Israel', 'Jordan', 'Singapore', 'United Arab Emirates', 'Gibraltar', 'Ireland', 'Isle of Man', 'Jersey', 'United Kingdom', 'New Zealand'],
        // White sidelines + white middle
        ['Ghana', 'Madagascar', 'Senegal', 'Tunisia', 'Uganda', 'Bangladesh', 'Bhutan', 'Christmas Island', 'India', 'Indonesia', 'Japan', 'Kyrgyzstan', 'Laos', 'Malaysia', 'Mongolia', 'Philippines', 'Russia', 'Singapore', 'Sri Lanka', 'Vietnam', 'Albania', 'Andorra', 'Austria', 'Belgium', 'Bulgaria', 'Croatia', 'Czech Republic', 'Denmark', 'Estonia', 'Faroe Islands', 'Finland', 'France', 'Germany', 'Gibraltar', 'Greece', 'Hungary', 'Iceland', 'Isle of Man', 'Italy', 'Latvia', 'Lithuania', 'Luxembourg', 'Malta', 'Monaco', 'Montenegro', 'Netherlands', 'North Macedonia', 'Poland', 'Portugal', 'Romania', 'San Marino', 'Serbia', 'Slovakia', 'Slovenia', 'Spain', 'Sweden', 'Switzerland', 'Turkey', 'Ukraine', 'United Kingdom', 'Curaçao', 'Greenland', 'Australia', 'New Zealand', 'Argentina', 'Bolivia', 'Chile', 'Peru', 'Ireland'],
        // White sidelines + yellow middle
        ['Japan', 'Kenya', 'Uganda', 'Cambodia', 'Indonesia', 'Philippines', 'South Korea', 'Taiwan', 'Thailand', 'Vietnam', 'Albania', 'Finland', 'Norway', 'Canada', 'Dominican Republic', 'Guatemala', 'Mexico', 'Puerto Rico', 'United States', 'US Virgin Islands', 'American Samoa', 'Guam', 'New Zealand', 'Northern Mariana Islands', 'Argentina', 'Bolivia', 'Brazil', 'Colombia', 'Ecuador', 'Peru'],
        // Yellow sidelines + yellow middle
        ['South Korea', 'North Macedonia', 'Australia', 'New Zealand', 'Chile', 'United Arab Emerates'],
        // White sidelines + white and yellow middle
        ['Finland', 'Philippines', 'New Zealand', 'Argentina', 'Uruguay'],
        // White sidelines + white and green middle
        ['Netherlands']
    ],
    
    // Which direction traffic moves (i.e. which side of the road you drive on) (according to https://geohints.com/Driving.html).
    traffic: [
        // Left-hand traffic
        ['Botswana', 'Eswatini', 'Kenya', 'Lesotho', 'South Africa', 'Uganda', 'Bangladesh', 'Bhutan', 'Christmas Island', 'India', 'Indonesia', 'Japan', 'Malaysia', 'Singapore', 'Sri Lanka', 'Thailand', 'Ireland', 'Isle of Man', 'Jersey', 'Malta', 'United Kingdom', 'US Virgin Islands', 'Australia', 'New Zealand'],
        // Right-hand traffic
        ['China', 'Ghana', 'Madagascar', 'Nigeria', 'Senegal', 'Tunisia', 'Cambodia', 'Israel', 'Jordan', 'Kyrgyzstan', 'Laos', 'Mongolia', 'Philippines', 'Russia', 'South Korea', 'Taiwan', 'United Arab Emirates', 'Vietnam', 'Albania', 'Andorra', 'Austria', 'Belgium', 'Bulgaria', 'Croatia', 'Czech Republic', 'Denmark', 'Estonia', 'Faroe Islands', 'Finland', 'France', 'Germany', 'Gibraltar', 'Greece', 'Hungary', 'Iceland', 'Italy', 'Latvia', 'Lithuania', 'Luxembourg', 'Monaco', 'Montenegro', 'Netherlands', 'North Macedonia', 'Norway', 'Poland', 'Portugal', 'Romania', 'San Marino', 'Serbia', 'Slovakia', 'Slovenia', 'Spain', 'Sweden', 'Switzerland', 'Turkey', 'Ukraine', 'Canada', 'Curaçao', 'Dominican Republic', 'Greenland', 'Guatemala', 'Mexico', 'Puerto Rico', 'United States', 'American Samoa', 'Guam', 'Northern Mariana Islands', 'Argentina', 'Bolivia', 'Brazil', 'Chile', 'Colombia', 'Ecuador', 'Peru', 'Uruguay']
    ],
    
    // The year indicated in the '©20__ Google' watermark (according to https://geohints.com/Years.html).
    watermark: {
        "2011": ['South Africa', 'Isle of Man', 'Jersey', 'Australia'],
        "2012": ['Botswana', 'Denmark', 'Croatia', 'Czech Republic', 'Estonia', 'Latvia', 'San Marino', 'Slovakia', 'Canada'],
        "2013": ['Botswana', 'Andorra', 'Bulgaria', 'Croatia', 'Czech Republic', 'Estonia', 'Finland', 'Hungary', 'Ireland', 'Isle of Man', 'Italy', 'Jersey', 'Latvia', 'Lithuania', 'Monaco', 'Netherlands', 'Poland', 'Portugal', 'Romania', 'San Marino', 'Slovakia', 'Slovenia', 'Spain', 'Sweden', 'United Kingdom', 'Canada', 'United States', 'Australia', 'Brazil', 'Peru'],
        "2014": ['South Africa', 'Bhutan', 'Cambodia', 'Israel', 'Japan', 'Taiwan', 'Finland', 'France', 'Greece', 'Hungary', 'Ireland', 'Italy', 'Latvia', 'Lithuania', 'Poland', 'Portugal', 'Romania', 'Spain', 'Switzerland', 'Turkey', 'United Kingdom', 'Canada', 'United States', 'New Zealand', 'Argentina', 'Brazil', 'Chile', 'Peru'],
        "2015": ['South Africa', 'Uganda', 'Bangladesh', 'Israel', 'Laos', 'Malaysia', 'Mongolia', 'Taiwan', 'Thailand', 'Bulgaria', 'Greece', 'Netherlands', 'North Macedonia', 'Norway', 'Serbia', 'Slovakia', 'Spain', 'Switzerland', 'Turkey', 'Ukraine', 'United Kingdom', 'Canada', 'Greenland', 'Mexico', 'United States', 'American Samoa', 'Australia', 'Argentina', 'Bolivia', 'Brazil', 'Chile', 'Colombia', 'Ecuador', 'Uruguay'],
        "2016": ['Botswana', 'South Africa', 'Tunisia', 'Bangladesh', 'Cambodia', 'Indonesia', 'Israel', 'Japan', 'Kyrgyzstan', 'Laos', 'Philippines', 'Russia', 'Sri Lanka', 'Taiwan', 'Thailand', 'United Arab Emirates', 'Albania', 'Bulgaria', 'Croatia', 'Denmark', 'France', 'Gibraltar', 'Greece', 'Hungary', 'Isle of Man', 'Italy', 'Latvia', 'Lithuania', 'Malta', 'Montenegro', 'Netherlands', 'North Macedonia', 'Norway', 'Poland', 'Serbia', 'Slovenia', 'Spain', 'Sweden', 'Turkey', 'United Kingdom', 'Canada', 'Greenland', 'Mexico', 'Puerto Rico', 'United States', 'Australia', 'New Zealand', 'Argentina', 'Bolivia', 'Chile', 'Colombia', 'Peru', 'Uruguay'],
        "2017": ['Botswana', 'Eswatini', 'Ghana', 'Lesotho', 'Nigeria', 'Senegal', 'South Africa', 'Bhutan', 'Cambodia', 'Israel', 'Jordan', 'Mongolia', 'Philippines', 'Russia', 'Thailand', 'United Arab Emirates', 'Andorra', 'Belgium', 'Bulgaria', 'Denmark', 'Estonia', 'Finland', 'France', 'Germany', 'Iceland', 'Ireland', 'Italy', 'Luxembourg', 'North Macedonia', 'Norway', 'Poland', 'Portugal', 'Romania', 'Serbia', 'Slovenia', 'Spain', 'Sweden', 'Ukraine', 'United Kingdom', 'Canada', 'Guatemala', 'Mexico', 'United States', 'US Virgin Islands', 'Australia', 'New Zealand', 'Argentina', 'Bolivia', 'Ecuador', 'Peru', 'Uruguay', 'Netherlands'],
        "2018": ['Kenya', 'South Africa', 'Bhutan', 'Japan', 'Laos', 'Philippines', 'Russia', 'Austria', 'Belgium', 'Denmark', 'France', 'Hungary', 'Iceland', 'Isle of Man', 'Italy', 'Lithuania', 'Netherlands', 'Norway', 'Poland', 'Slovakia', 'Spain', 'Sweden', 'Turkey', 'United Kingdom', 'Canada', 'Curaçao', 'Mexico', 'United States', 'Australia', 'Argentina', 'Bolivia', 'Ecuador'],
        "2019": ['Botswana', 'Eswatini', 'Ghana', 'Kenya', 'Lesotho', 'Nigeria', 'Senegal', 'South Africa', 'Uganda', 'Bangladesh', 'Bhutan', 'Cambodia', 'Indonesia', 'Israel', 'Japan', 'Jordan', 'Kyrgyzstan', 'Laos', 'Malaysia', 'Mongolia', 'Philippines', 'Russia', 'Singapore', 'South Korea', 'Sri Lanka', 'Taiwan', 'Thailand', 'United Arab Emirates', 'Albania', 'Andorra', 'Austria', 'Belgium', 'Bulgaria', 'Croatia', 'Czech Republic', 'Denmark', 'Estonia', 'Finland', 'France', 'Germany', 'Gibraltar', 'Greece', 'Hungary', 'Iceland', 'Ireland', 'Isle of Man', 'Italy', 'Jersey', 'Latvia', 'Lithuania', 'Luxembourg', 'Malta', 'Monaco', 'Montenegro', 'Netherlands', 'North Macedonia', 'Norway', 'Poland', 'Portugal', 'Romania', 'San Marino', 'Serbia', 'Slovakia', 'Slovenia', 'Spain', 'Sweden', 'Switzerland', 'Turkey', 'Ukraine', 'United Kingdom', 'Canada', 'Greenland', 'Guatemala', 'Mexico', 'United States', 'US Virgin Islands', 'American Samoa', 'Australia', 'New Zealand', 'Argentina', 'Bolivia', 'Brazil', 'Chile', 'Colombia', 'Ecuador', 'Peru', 'Uruguay'],
        "2020": ['Luxembourg', 'Eswatini', 'Lesotho', 'Madagascar', 'Senegal', 'South Africa', 'Tunisia', 'Bangladesh', 'Cambodia', 'Indonesia', 'Israel', 'Japan', 'Malaysia', 'Philippines', 'Russia', 'Sri Lanka', 'Thailand', 'United Arab Emirates', 'Vietnam', 'Austria', 'Belgium', 'Bulgaria', 'Croatia', 'Czech Republic', 'Denmark', 'Estonia', 'France', 'Germany', 'Gibraltar', 'Greece', 'Iceland', 'Italy', 'Jersey', 'Latvia', 'Lithuania', 'Netherlands', 'Norway', 'Poland', 'Portugal', 'Serbia', 'Slovakia', 'Slovenia', 'Spain', 'Sweden', 'Switzerland', 'Turkey', 'Ukraine', 'United Kingdom', 'Canada', 'Dominican Republic', 'Greenland', 'Mexico', 'United States', 'Australia', 'New Zealand', 'Argentina', 'Bolivia', 'Brazil', 'Chile', 'Colombia', 'Ecuador', 'Peru', 'Uruguay'],
        "2021": ['South Africa', 'Indonesia', 'Japan', 'Malaysia', 'Russia', 'Singapore', 'Taiwan', 'Thailand', 'Vietnam', 'Albania', 'Belgium', 'Czech Republic', 'France', 'Hungary', 'Italy', 'Montenegro', 'Norway', 'Poland', 'Portugal', 'Switzerland', 'United Kingdom', 'Canada', 'United States', 'Australia', 'New Zealand', 'Ecuador'],
        "2022": ['Australia'],
        "None": ['Christmas Island', 'India', 'United Arab Emirates', 'Faroe Islands', 'Guam', 'Northern Mariana Islands']
    },
    
    // General coloring of license plates (according to https://geohints.com/LicensePlates.html).
    plates: {
        // Front license plates
        front: {
            // All white
            0: ['Argentina', 'Sweden', 'United States', 'Greenland', 'Lesotho', 'San Marino', 'Monaco', 'Cambodia', 'Botswana', 'Eswatini', 'Ghana', 'Kenya', 'Nigeria', 'South Africa', 'Uganda', 'Bangladesh', 'India', 'Japan', 'Jordan', 'Kyrgyzstan', 'Mongolia', 'Philippines', 'Russia', 'Singapore', 'South Korea', 'Sri Lanka', 'Taiwan', 'Thailand', 'United Arab Emirates', 'Vietnam', 'Andorra', 'Iceland', 'Italy', 'Jersey', 'Serbia', 'Switzerland', 'United Kingdom', 'Canada', 'Curaçao', 'Mexico', 'Puerto Rico', 'Australia', 'Guam', 'New Zealand', 'Northern Mariana Islands', 'Brazil', 'Chile', 'Ecuador', 'Peru', 'Uruguay'],
            // All yellow
            1: ['United States', 'Christmas Island', 'Japan', 'Laos', 'Australia', 'Colombia'],
            // All black
            2: ['Madagascar', 'Tunisia', 'Indonesia', 'Malaysia', 'Argentina'],
            // White with left blue bar
            3: ['Austria', 'Iceland', 'India', 'Bulgaria', 'Croatia', 'Czech Republic', 'Estonia', 'Faroe Islands', 'Finland', 'France', 'Germany', 'Gibraltar', 'Greece', 'Hungary', 'Ireland', 'Latvia', 'Lithuania', 'Malta', 'Montenegro', 'North Macedonia', 'Norway', 'Poland', 'Portugal', 'Romania', 'Serbia', 'Slovakia', 'Slovenia', 'Spain', 'Sweden', 'Turkey', 'Ukraine', 'United Kingdom'],
            // Yellow with left blue bar
            4: ['Israel', 'Luxembourg', 'Netherlands'],
            // White with left and right blue bar
            5: ['Albania', 'France', 'Italy'],
            // White with left red bar
            6: ['Kyrgyzstan', 'United Arab Emirates', 'Albania', 'Isle of Man', 'Montenegro'],
            // All red
            7: ['Bhutan'],
            // All blue
            8: ['Senegal', 'Canada', 'US Virgin Islands', 'American Samoa', 'United States'],
            // White with top blue bar
            9: ['Australia', 'Argentina', 'Brazil', 'Uruguay'],
            // White with blue outline
            10: ['Lesotho', 'South Africa', 'Cambodia', 'Monaco', 'San Marino', 'Guatemala', 'American Samoa', 'Australia', 'Bolivia'],
            // White with red outline
            11: ['Belgium', 'Australia', 'North Macedonia', 'Greenland'],
            // White with red outline and left blue bar
            12: ['Belgium', 'Denmark', 'Austria'],
            // White with green outline and left blue bar
            13: ['Slovenia'],
            // White with left blue bar and right yellow bar
            14: ['Portugal'],
        },
        // Back license plates
        back: {
            // All white
            0: ['Argentina', 'Sweden', 'United States', 'Greenland', 'Lesotho', 'San Marino', 'Cambodia', 'Monaco', 'Eswatini', 'Ghana', 'Nigeria', 'South Africa', 'Bangladesh', 'India', 'Japan', 'Jordan', 'Kyrgyzstan', 'Mongolia', 'Philippines', 'Russia', 'South Korea', 'Taiwan', 'Thailand', 'United Arab Emirates', 'Vietnam', 'Andorra', 'Iceland', 'Italy', 'Jersey', 'Serbia', 'Switzerland', 'Canada', 'Curaçao', 'Mexico', 'Puerto Rico', 'Australia', 'Guam', 'New Zealand', 'Northern Mariana Islands', 'Brazil', 'Chile', 'Ecuador', 'Peru', 'Uruguay'],
            // All yellow
            1: ['United States', 'Botswana', 'Kenya', 'Uganda', 'Christmas Island', 'Japan', 'Laos', 'Singapore', 'Sri Lanka', 'Jersey', 'United Kingdom', 'Dominican Republic', 'Australia', 'Colombia'],
            // All black
            2: ['Madagascar', 'Tunisia', 'Indonesia', 'Malaysia', 'Argentina'],
            // White with left blue bar
            3: ['Austria', 'Iceland', 'India', 'Bulgaria', 'Croatia', 'Czech Republic', 'Estonia', 'Faroe Islands', 'Finland', 'Germany', 'Greece', 'Hungary', 'Ireland', 'Latvia', 'Lithuania', 'Malta', 'Montenegro', 'North Macedonia', 'Norway', 'Poland', 'Portugal', 'Romania', 'Serbia', 'Slovakia', 'Slovenia', 'Spain', 'Sweden', 'Turkey', 'Ukraine'],
            // Yellow with left blue bar
            4: ['Israel', 'France', 'Gibraltar', 'Luxembourg', 'Netherlands', 'United Kingdom'],
            // White with left and right blue bar
            5: ['Albania', 'France', 'Italy'],
            // White with left red bar
            6: ['Kyrgyzstan', 'United Arab Emirates', 'Albania', 'Montenegro'],
            // All red
            7: ['Bhutan'],
            // All blue
            8: ['Senegal', 'Canada', 'US Virgin Islands', 'American Samoa', 'United States'],
            // White with top blue bar
            9: ['Australia', 'Argentina', 'Brazil', 'Uruguay'],
            // White with blue outline
            10: ['Lesotho', 'South Africa', 'Cambodia', 'Monaco', 'San Marino', 'Guatemala', 'American Samoa', 'Australia', 'Bolivia'],
            // White with red outline
            11: ['Belgium', 'Australia', 'North Macedonia', 'Greenland'],
            // White with red outline and left blue bar
            12: ['Belgium', 'Denmark', 'Austria'],
            // White with green outline and left blue bar
            13: ['Slovenia'],
            // White with left blue bar and right yellow bar
            14: ['Portugal'],
            // Yellow with left red bar
            15: ['Isle of Man']
        }
    },
    
    // Which hemisphere each country is in (used when sun is due north or south) 
    // (according to https://en.wikipedia.org/wiki/Northern_Hemisphere and https://en.wikipedia.org/wiki/Southern_Hemisphere).
    hemisphere: {
        'southern': ["American Samoa", "Christmas Island", "Argentina", "Australia", "Bolivia", "Botswana", "Brazil", "Chile", "Colombia", "Ecuador", "Eswatini", "Indonesia", "Kenya", "Lesotho", "Madagascar", "New Zealand", "Peru", "South Africa", "Uganda", "Uruguay"],
        'northern': ["Dominican Republic", "Ghana", "Nigeria", "Senegal", "Tunisia", "Kenya", "Uganda", "Bangladesh", "Bhutan", "Cambodia", "China", "India", "Israel", "Jordan", "Kyrgyzstan", "Laos", "Malaysia", "Mongolia", "Philippines", "Singapore", "South Korea", "Sri Lanka", "Thailand", "Turkey", "United Arab Emirates", "Vietnam", "Indonesia", "Canada", "Guatemala", "Mexico", "United States", "Colombia", "Brazil", "Ecuador", "Albania", "Andorra", "Austria", "Belgium", "Bulgaria", "Croatia", "Czech Republic", "Denmark", "Estonia", "Finland", "Germany", "Greece", "Hungary", "Iceland", "Ireland", "Italy", "Latvia", "Lithuania", "Luxembourg", "Malta", "Monaco", "Montenegro", "Netherlands", "North Macedonia", "Norway", "Poland", "Portugal", "Romania", "Russia", "San Marino", "Serbia", "Slovakia", "Slovenia", "Spain", "Sweden", "Switzerland", "Ukraine", "France", "United Kingdom", "Jersey", "Curaçao", "Faroe Islands", "US Virgin Islands", "Puerto Rico", "Greenland", "Guam", "Japan", "Northern Mariana Islands", "Gibraltar", "Isle of Man"]
    },
    
    // Countries where snow could be visible (according to https://geohints.com/Snow.html).
    snow: ['Japan', 'Kyrgyzstan', 'Mongolia', 'Russia', 'South Korea', 'Andorra', 'Austria', 'Belgium', 'Bulgaria', 'Croatia', 'Czech Republic', 'Faroe Islands', 'Finland', 'France', 'Denmark', 'Germany', 'Greece', 'Hungary', 'Iceland', 'Italy', 'Norway', 'Portugal', 'Slovakia', 'Slovenia', 'Spain', 'Sweden', 'Switzerland', 'Turkey', 'United Kingdom', 'Canada', 'Greenland', 'United States', 'Australia', 'New Zealand', 'Argentina', 'Chile'],
    
    // Determining possible countries by identifying possible languages.
    // Data is gathered using https://en.wikipedia.org/wiki/Wikipedia:Language_recognition_chart.
    language: {
        // General alphabets (letters) or characters you may be able to see.
        // All relevant countries whose official language(s) use a certain alphabet are added to each array.
        // For languages that use characters instead of alphabets, a small selection of characters are provided in order to associate
        // characters you may be seeing with visually similar sample character styles.
        alphabet: {
            'latin': ['United States', 'Canada', 'United Kingdom', 'Scotland', 'South Africa', 'Australia', 'New Zealand', 'Bahamas', 'Botswana', 'Nigeria', 'Fiji', 'Ghana', 'Singapore', 'Ireland', 'Jamaica', 'Indonesia', 'Netherlands', 'Denmark', 'Norway', 'Finland', 'Sweden', 'Estonia', 'Germany', 'Iraq', 'Romania', 'Moldova', 'Serbia', 'Turkey', 'Iceland', 'Hungary', 'Andorra', 'Belgium', 'France', 'Luxembourg', 'Switzerland', 'Portugal', 'Spain', 'Brazil', 'Argentina', 'Bolivia', 'Chile', 'Columbia', 'Costa Rica', 'Cuba', 'Dominican Republic', 'Ecuador', 'Guatemala', 'Honduras', 'Mexico', 'Nicaragua', 'Panama', 'Paraguay', 'Peru', 'Uruguay', 'Venezuela', 'Italy', 'San Marino', 'Poland', 'Slovenia', 'Bosnia', 'Montenegro', 'Croatia', 'Austria', 'Czech Republic', 'Latvia', 'Lithuania', 'Vietnam', 'Puerto Rico', 'US Virgin Islands', 'Greenland', 'American Samoa', 'Guam', 'Christmas Island', 'Northern Mariana Islands', 'Colombia', 'Slovakia', 'Isle of Man', 'Kenya', 'Lesotho', 'Senegal', 'Tunisia', 'Uganda', 'Madagascar', 'Faroe Islands', 'Philippines', 'Malaysia'],
            'arabic': ['Egypt', 'Iraq', 'Jordan', 'Tunusia', 'United Arab Emirates'],
            'bengali': ['Bangladesh', 'India'],
            'devanāgarī': ['India'],
            'gurmukhi': ['India', 'Pakistan'],
            'gujarati': ['India', 'Pakistan'],
            'tibetan': ['Tibet'],
            'cyrillic': ['Bulgaria', 'Belarus', 'Russia', 'Ukraine', 'Kyrgyzstan', 'Mongolia', 'Romania', 'Serbia', 'Montenegro', 'North Macedonia'],
            'greek': ['Greece', 'Cyprus', 'Albania'],
            'hebrew': ['Israel'],
            'japanese': ['Japan'],
            'mandarin': ['China', 'Singapore', 'Taiwan'],
            'korean': ['South Korea'],
            'khmer': ['Cambodia'],
            'thai': ['Thailand', 'Laos']
        },
        // Each language has an array of countries where that language is an official language, and a list of possible diacritics that
        // may be seen in the language. These attributes are used to build a map between each diacritic and all of the countries
        // where that diacritic may be found. 
        diacritic: { 
            "á": ["South Africa", "Botswana", "Iceland", "Hungary", "Angola", "Brazil", "Portugal", "São Tomé and Príncipe", "Argentina", "Bolivia", "Chile", "Colombia", "Costa Rica", "Cuba", "Dominican Republic", "Ecuador", "Guatemala", "Honduras", "Mexico", "Nicaragua", "Paraguay", "Peru", "Puerto Rico", "Spain", "Uruguay", "Venezuela", "Czech Republic", "Slovakia", "Vietnam"], 
            "é": ["Belgium", "Netherlands", "Suriname", "South Africa", "Botswana", "Iceland", "Hungary", "Andorra", "Cameroon", "Canada", "France", "Luxembourg", "Switzerland", "Angola", "Brazil", "Portugal", "São Tomé and Príncipe", "Argentina", "Bolivia", "Chile", "Colombia", "Costa Rica", "Cuba", "Dominican Republic", "Ecuador", "Guatemala", "Honduras", "Mexico", "Nicaragua", "Paraguay", "Peru", "Puerto Rico", "Spain", "Uruguay", "Venezuela", "Italy", "San Marino", "Czech Republic", "Slovakia", "Vietnam"], 
            "í": ["South Africa", "Botswana", "Iceland", "Hungary", "Andorra", "Angola", "Brazil", "Portugal", "São Tomé and Príncipe", "Argentina", "Bolivia", "Chile", "Colombia", "Costa Rica", "Cuba", "Dominican Republic", "Ecuador", "Guatemala", "Honduras", "Mexico", "Nicaragua", "Paraguay", "Peru", "Puerto Rico", "Spain", "Uruguay", "Venezuela", "Czech Republic", "Slovakia", "Vietnam"], 
            "ó": ["South Africa", "Botswana", "Iceland", "Hungary", "Andorra", "Angola", "Brazil", "Portugal", "São Tomé and Príncipe", "Argentina", "Bolivia", "Chile", "Colombia", "Costa Rica", "Cuba", "Dominican Republic", "Ecuador", "Guatemala", "Honduras", "Mexico", "Nicaragua", "Paraguay", "Peru", "Puerto Rico", "Spain", "Uruguay", "Venezuela", "Poland", "Czech Republic", "Slovakia", "Vietnam"], 
            "ú": ["South Africa", "Botswana", "Iceland", "Hungary", "Andorra", "Angola", "Brazil", "Portugal", "São Tomé and Príncipe", "Argentina", "Bolivia", "Chile", "Colombia", "Costa Rica", "Cuba", "Dominican Republic", "Ecuador", "Guatemala", "Honduras", "Mexico", "Nicaragua", "Paraguay", "Peru", "Puerto Rico", "Spain", "Uruguay", "Venezuela", "Czech Republic", "Slovakia", "Vietnam"], 
            "ý": ["Iceland", "Paraguay", "Bolivia", "Argentina", "Czech Republic", "Slovakia", "Vietnam"], 
            "à": ["Belgium", "Netherlands", "Suriname", "Andorra", "Cameroon", "Canada", "France", "Luxembourg", "Switzerland", "Angola", "Brazil", "Portugal", "São Tomé and Príncipe", "Italy", "San Marino", "Vietnam"], 
            "è": ["Belgium", "Netherlands", "Suriname", "South Africa", "Botswana", "Andorra", "Cameroon", "Canada", "France", "Luxembourg", "Switzerland", "Italy", "San Marino", "Vietnam"], 
            "ì": ["Italy", "San Marino", "Vietnam"], 
            "ò": ["Andorra", "Italy", "San Marino", "Vietnam"], 
            "ù": ["Belgium", "Cameroon", "Canada", "France", "Luxembourg", "Switzerland", "Italy", "San Marino", "Vietnam"], 
            "ỳ": ["Vietnam"], 
            "ä": ["Belgium", "Netherlands", "Suriname", "Finland", "Sweden", "Estonia", "Austria", "Germany", "Liechtenstein", "Luxembourg", "Switzerland", "Slovakia"], 
            "ë": ["Belgium", "Netherlands", "Suriname", "South Africa", "Botswana", "Cameroon", "Canada", "France", "Luxembourg", "Switzerland", "Belarus", "Russia", "Kyrgyzstan"], 
            "ï": ["Belgium", "Netherlands", "Suriname", "South Africa", "Botswana", "Andorra", "Cameroon", "Canada", "France", "Luxembourg", "Switzerland"], 
            "ö": ["Belgium", "Netherlands", "Suriname", "Finland", "Sweden", "Estonia", "Austria", "Germany", "Liechtenstein", "Luxembourg", "Switzerland", "Cyprus", "Turkey", "Iceland", "Hungary"], 
            "ü": ["Belgium", "Netherlands", "Suriname", "Estonia", "Austria", "Germany", "Liechtenstein", "Luxembourg", "Switzerland", "Cyprus", "Turkey", "Hungary", "Andorra", "Cameroon", "Canada", "France", "Argentina", "Bolivia", "Chile", "Colombia", "Costa Rica", "Cuba", "Dominican Republic", "Ecuador", "Guatemala", "Honduras", "Mexico", "Nicaragua", "Paraguay", "Peru", "Puerto Rico", "Spain", "Uruguay", "Venezuela"], 
            "ÿ": ["Belgium", "Cameroon", "Canada", "France", "Luxembourg", "Switzerland"], 
            "â": ["Romania", "Moldova", "Serbia", "Belgium", "Cameroon", "Canada", "France", "Luxembourg", "Switzerland", "Angola", "Brazil", "Portugal", "São Tomé and Príncipe", "Vietnam"], 
            "ê": ["South Africa", "Botswana", "Iraq", "Belgium", "Cameroon", "Canada", "France", "Luxembourg", "Switzerland", "Angola", "Brazil", "Portugal", "São Tomé and Príncipe", "Vietnam"], 
            "î": ["South Africa", "Botswana", "Iraq", "Romania", "Moldova", "Serbia", "Belgium", "Cameroon", "Canada", "France", "Luxembourg", "Switzerland"], 
            "ô": ["South Africa", "Botswana", "Belgium", "Cameroon", "Canada", "France", "Luxembourg", "Switzerland", "Angola", "Brazil", "Portugal", "São Tomé and Príncipe", "Slovakia"], 
            "û": ["South Africa", "Botswana", "Iraq", "Belgium", "Cameroon", "Canada", "France", "Luxembourg", "Switzerland"], 
            "æ": ["Denmark", "Faroe Islands", "Norway", "Iceland", "Belgium", "Cameroon", "Canada", "France", "Luxembourg", "Switzerland"], 
            "ß": ["Austria", "Belgium", "Germany", "Liechtenstein", "Luxembourg", "Switzerland"], 
            "ç": ["Iraq", "Cyprus", "Turkey", "Andorra", "Belgium", "Cameroon", "Canada", "France", "Luxembourg", "Switzerland", "Angola", "Brazil", "Portugal", "São Tomé and Príncipe"], 
            "þ": ["Iceland"], 
            "ã": ["Angola", "Brazil", "Portugal", "São Tomé and Príncipe", "Paraguay", "Bolivia", "Argentina", "Vietnam"],
            "ā": ["Latvia"], 
            "å": ["Denmark", "Faroe Islands", "Norway", "Sweden"], 
            "ă": ["Romania", "Moldova", "Serbia", "Vietnam"], 
            "ą": ["Lithuania"], 
            "ć": ["Poland", "Bosnia", "Croatia", "Serbia"], 
            "č": ["Slovenia", "Bosnia", "Croatia", "Serbia"], 
            "ď": ["Czech Republic", "Slovakia"], 
            "đ": ["Bosnia", "Croatia", "Serbia", "Vietnam"], 
            "ē": ["Latvia"], 
            "ė": ["Lithuania"], 
            "ę": ["Poland", "Lithuania"], 
            "ě": ["Czech Republic"], 
            "ğ": ["Cyprus", "Turkey"], 
            "ģ": ["Latvia"], 
            "ĩ": ["Paraguay", "Bolivia", "Argentina", "Vietnam"], 
            "ī": ["Latvia"], 
            "į": ["Lithuania"], 
            "ı": ["Cyprus", "Turkey"], 
            "ĳ": ["Belgium", "Netherlands", "Suriname"], 
            "ķ": ["Latvia"], 
            "ĺ": ["Slovakia"], 
            "ļ": ["Latvia"], 
            "ľ": ["Slovakia"], 
            "ł": ["Poland"], 
            "ñ": ["Argentina", "Bolivia", "Chile", "Colombia", "Costa Rica", "Cuba", "Dominican Republic", "Ecuador", "Guatemala", "Honduras", "Mexico", "Nicaragua", "Paraguay", "Peru", "Puerto Rico", "Spain", "Uruguay", "Venezuela"],
            "ń": ["Poland"], 
            "ņ": ["Latvia"], 
            "ň": ["Czech Republic", "Slovakia"], 
            "õ": ["Estonia", "Angola", "Brazil", "Portugal", "São Tomé and Príncipe", "Paraguay", "Bolivia", "Argentina", "Vietnam"], 
            "ð": ["Iceland"], 
            "ø": ["Denmark", "Faroe Islands", "Norway"], 
            "ō": ["Latvia"], 
            "ő": ["Hungary"], 
            "œ": ["Belgium", "Cameroon", "Canada", "France", "Luxembourg", "Switzerland"], 
            "ŕ": ["Slovakia"], 
            "ŗ": ["Latvia"], 
            "ř": ["Czech Republic"], 
            "ś": ["Poland"], 
            "ş": ["Iraq", "Cyprus", "Turkey"], 
            "š": ["Slovenia", "Bosnia", "Croatia", "Serbia"], 
            "ť": ["Czech Republic", "Slovakia"], 
            "ũ": ["Paraguay", "Bolivia", "Argentina", "Vietnam"], 
            "ū": ["Latvia", "Lithuania"], 
            "ů": ["Czech Republic"], 
            "ű": ["Hungary"], 
            "ų": ["Lithuania"], 
            "ź": ["Poland"], 
            "ż": ["Poland"], 
            "ž": ["Slovenia", "Bosnia", "Croatia", "Serbia"], 
            "ơ": ["Vietnam"], 
            "ư": ["Vietnam"],
            "ș": ["Romania", "Moldova", "Serbia"], 
            "ț": ["Romania", "Moldova", "Serbia"], 
            "Є": ["Ukraine"], 
            "Ў": ["Belarus"], 
            "Й": ["Bulgaria", "Belarus", "Russia", "Kyrgyzstan", "Ukraine"], 
            "Щ": ["Bulgaria", "Belarus", "Russia", "Kyrgyzstan", "Ukraine"], 
            "Ъ": ["Bulgaria"], 
            "Ь": ["Bulgaria", "Belarus", "Russia", "Kyrgyzstan", "Ukraine"], 
            "Э": ["Belarus", "Russia", "Kyrgyzstan"], 
            "Ю": ["Bulgaria", "Belarus", "Russia", "Kyrgyzstan", "Ukraine"], 
            "Я": ["Bulgaria", "Belarus", "Russia", "Kyrgyzstan", "Ukraine"], 
            "Ґ": ["Ukraine"], 
            "ạ": ["Vietnam"], 
            "ả": ["Vietnam"], 
            "ấ": ["Vietnam"], 
            "ầ": ["Vietnam"], 
            "ẩ": ["Vietnam"], 
            "ẫ": ["Vietnam"], 
            "ậ": ["Vietnam"], 
            "ắ": ["Vietnam"], 
            "ằ": ["Vietnam"], 
            "ẳ": ["Vietnam"], 
            "ẵ": ["Vietnam"], 
            "ặ": ["Vietnam"], 
            "ẹ": ["Vietnam"], 
            "ẻ": ["Vietnam"], 
            "ẽ": ["Paraguay", "Bolivia", "Argentina", "Vietnam"], 
            "ế": ["Vietnam"], 
            "ề": ["Vietnam"],
            "ể": ["Vietnam"], 
            "ễ": ["Vietnam"], 
            "ệ": ["Vietnam"], 
            "ỉ": ["Vietnam"], 
            "ị": ["Vietnam"], 
            "ọ": ["Vietnam"], 
            "ỏ": ["Vietnam"], 
            "ố": ["Vietnam"],
            "ồ": ["Vietnam"], 
            "ổ": ["Vietnam"], 
            "ỗ": ["Vietnam"], 
            "ớ": ["Vietnam"], 
            "ờ": ["Vietnam"], 
            "ở": ["Vietnam"], 
            "ỡ": ["Vietnam"], 
            "ợ": ["Vietnam"], 
            "ụ": ["Vietnam"], 
            "ủ": ["Vietnam"], 
            "ứ": ["Vietnam"], 
            "ừ": ["Vietnam"], 
            "ử": ["Vietnam"], 
            "ữ": ["Vietnam"], 
            "ự": ["Vietnam"], 
            "ỷ": ["Vietnam"], 
            "ỹ": ["Paraguay", "Bolivia", "Argentina", "Vietnam"]
        }
    }
}