import React from 'react';

export default function initTranslate() {

  let i18n = {};
  let defaultLang = '';
  let gp = '';

//  console.log('initTranslate', i18n);

  return {

    set: (langSet, lang = 'zh', group = '') => {
      i18n = langSet;
      defaultLang = lang;
      gp = group;
    },

    translate: (name, param0, param1) => {

//      console.log('translate.js 1', name, param0, param1);

      let argv;
      let toLang;
      if(param0 instanceof Array){
        toLang = param1;
        argv = param0;
      }else{
        toLang = param0;
      }

      const lang = toLang || defaultLang;

//      console.log('translate.js 2', argv, toLang);

      let pa = {
        className: 'waiting_translate',
        t: lang
      };

      if(i18n[lang]){

        const t = i18n[lang];

        //console.log('initTranslate, translate', lang, name, i18n[lang][name]);
        if(gp){
          if(t['.'+gp] && t['.'+gp][name]){
            return t['.'+gp][name];
          }
        }

        if(t[name]){
          pa = null;
          name = t[name];
        }
      }

//      console.log('translate.js 3', name);

      if(argv){
        for(let x=0; x<argv.length; x++){
          name = name.replace("$"+x.toString(), argv[x]);
//          console.log('translate.js 4', x, name);
        }
      }

      if(pa){
        return (
          <span { ...pa }>{ name }</span>
        );
      }else{
        return name;
      }

    },

  };
};
