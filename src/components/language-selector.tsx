import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
const loption = [
  { value: 'af', key: ' Afrikaans' },
  { value: 'sq', key: ' Albanian' },
  { value: 'am', key: ' Amharic' },
  { value: 'ar', key: ' Arabic' },
  { value: 'hy', key: ' Armenian' },
  { value: 'az', key: ' Azerbaijani' },
  { value: 'eu', key: ' Basque' },
  { value: 'be', key: ' Belarusian' },
  { value: 'bn', key: ' Bengali' },
  { value: 'bs', key: ' Bosnian' },
  { value: 'bg', key: ' Bulgarian' },
  { value: 'ca', key: ' Catalan' },
  { value: 'ceb', key: ' Cebuano' },
  { value: 'ny', key: ' Chichewa' },
  { value: 'zh-CN', key: 'Chinese (Simplified)' },
  { value: 'zh-TW', key: 'Chinese (Traditional)' },
  { value: 'co', key: ' Corsican' },
  { value: 'hr', key: ' Croatian' },
  { value: 'cs', key: ' Czech' },
  { value: 'da', key: ' Danish' },
  { value: 'nl', key: ' Dutch' },
  { value: 'en', key: ' English' },
  { value: 'eo', key: ' Esperanto' },
  { value: 'et', key: ' Estonian' },
  { value: 'tl', key: ' Filipino' },
  { value: 'fi', key: ' Finnish' },
  { value: 'fr', key: ' French' },
  { value: 'fy', key: ' Frisian' },
  { value: 'gl', key: ' Galician' },
  { value: 'ka', key: ' Georgian' },
  { value: 'de', key: ' German' },
  { value: 'el', key: ' Greek' },
  { value: 'gu', key: ' Gujarati' },
  { value: 'ht', key: ' Haitian Creole' },
  { value: 'ha', key: ' Hausa' },
  { value: 'haw', key: ' Hawaiian' },
  { value: 'iw', key: ' Hebrew' },
  { value: 'hi', key: ' Hindi' },
  { value: 'hmn', key: ' Hmong' },
  { value: 'hu', key: ' Hungarian' },
  { value: 'is', key: ' Icelandic' },
  { value: 'ig', key: ' Igbo' },
  { value: 'id', key: ' Indonesian' },
  { value: 'ga', key: ' Irish' },
  { value: 'it', key: ' Italian' },
  { value: 'ja', key: ' Japanese' },
  { value: 'jw', key: ' Javanese' },
  { value: 'kn', key: ' Kannada' },
  { value: 'kk', key: ' Kazakh' },
  { value: 'km', key: ' Khmer' },
  { value: 'rw', key: ' Kinyarwanda' },
  { value: 'ko', key: ' Korean' },
  { value: 'ku', key: ' Kurdish (Kurmanji)' },
  { value: 'ky', key: ' Kyrgyz' },
  { value: 'lo', key: ' Lao' },
  { value: 'la', key: ' Latin' },
  { value: 'lv', key: ' Latvian' },
  { value: 'lt', key: ' Lithuanian' },
  { value: 'lb', key: ' Luxembourgish' },
  { value: 'mk', key: ' Macedonian' },
  { value: 'mg', key: ' Malagasy' },
  { value: 'ms', key: ' Malay' },
  { value: 'ml', key: ' Malayalam' },
  { value: 'mt', key: ' Maltese' },
  { value: 'mi', key: ' Maori' },
  { value: 'mr', key: ' Marathi' },
  { value: 'mn', key: ' Mongolian' },
  { value: 'my', key: ' Myanmar (Burmese)' },
  { value: 'ne', key: ' Nepali' },
  { value: 'no', key: ' Norwegian' },
  { value: 'or', key: ' Odiya (Oriya)' },
  { value: 'ps', key: ' Pashto' },
  { value: 'fa', key: ' Persian' },
  { value: 'pl', key: ' Polish' },
  { value: 'pt', key: ' Portuguese' },
  { value: 'pa', key: ' Punjabi' },
  { value: 'ro', key: ' Romanian' },
  { value: 'ru', key: ' Russian' },
  { value: 'sm', key: ' Samoan' },
  { value: 'gd', key: ' Scots Gaelic' },
  { value: 'sr', key: ' Serbian' },
  { value: 'st', key: ' Sesotho' },
  { value: 'sn', key: ' Shona' },
  { value: 'sd', key: ' Sindhi' },
  { value: 'si', key: ' Sinhala' },
  { value: 'sk', key: ' Slovak' },
  { value: 'sl', key: ' Slovenian' },
  { value: 'so', key: ' Somali' },
  { value: 'es', key: ' Spanish' },
  { value: 'su', key: ' Sundanese' },
  { value: 'sw', key: ' Swahili' },
  { value: 'sv', key: ' Swedish' },
  { value: 'tg', key: ' Tajik' },
  { value: 'ta', key: ' Tamil' },
  { value: 'tt', key: ' Tatar' },
  { value: 'te', key: ' Telugu' },
  { value: 'th', key: ' Thai' },
  { value: 'tr', key: ' Turkish' },
  { value: 'tk', key: ' Turkmen' },
  { value: 'uk', key: ' Ukrainian' },
  { value: 'ur', key: ' Urdu' },
  { value: 'ug', key: ' Uyghur' },
  { value: 'uz', key: ' Uzbek' },
  { value: 'vi', key: ' Vietnamese' },
  { value: 'cy', key: ' Welsh' },
  { value: 'xh', key: ' Xhosa' },
  { value: 'yi', key: ' Yiddish' },
  { value: 'yo', key: ' Yoruba' },
  { value: 'zu', key: ' Zulu' }
];

const LanguageSelector = ({ className = '' }) => {
  const router = useRouter();
  const { pathname, locale } = router;

  useEffect(() => undefined, [locale]);

  function onSelect(e: React.ChangeEvent<HTMLSelectElement>) {
    document.cookie = `lang=${e.target.value}`;
    const isEng = e.target.value === 'en';
    const lang = `/${e.target.value}`;
    window.location.href = `${window.location.origin}${
      isEng ? '' : lang
    }${pathname}?localeFrom=${locale}`;
  }

  return (
    <div className={className}>
      <label htmlFor="browser">Language: </label>
      <select onChange={onSelect} defaultValue={locale}>
        {loption.map((op) => (
          <option key={op.key} value={op.value}>
            {op.key}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSelector;
