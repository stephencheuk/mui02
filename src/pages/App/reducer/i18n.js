import initTranslate from '../../../utils/translate';

const initialState = {
  // support en , zh & cn
  type: ['en', 'zh', 'cn'],

  // default lang is en
  default_language: window.localStorage.getItem('lang') || 'zh',

  // lang text mapping hash
  lang: {
    'en': {
      'en': 'English',
      'Language Setup': 'Language Setup',
      'Language': 'Language',
      'Inbox': 'Inbox',
      'Project': 'Project',
      'Payment': 'Payment',
      'Settings': 'Setting',
      'Currency Exchange': 'Currency Exchange',
      'Logout': 'Logout',
      'Loading': 'Loading',
      'List': 'List',
      'New': 'New',
      'Edit': 'Edit',
      'Dense padding': 'Dense padding (EN)',
      'Dashboard': 'Dashboard',
      '.Dashboard': {
        'Title': 'My Dashboard',
      },
      'Users': 'Users',
      'Customers': 'Customers',
      'Vendors': 'Vendors',
      'Account': 'Account',
      'Password': 'Password',
      '$0 Records found': '$0 Records found',
      'Page': 'Page',
      'English': 'English',
      '繁體中文': '繁體中文',
      '简体中文': '简体中文',
      "Page $0 of $1": "Page $0 of $1",
      'Search': 'Search',
    },
    'zh': {
      'zh': '繁體中文',
      'Language Setup': '語言設定',
      'Language': '語言',
      'Inbox': '收件箱',
      'Starred': '已加星標',
      'Project': '項目',
      'Payment': '付款',
      'Settings': '設置',
      'Currency Exchange': '貨幣兌換',
      'Logout': '登出',
      'Loading': '載入中',
      'List': '列表',
      'New': '新增',
      'Edit': '編輯',
      'Dense padding': 'Dense padding (ZH)',
      'Dashboard': '儀表板',
      '.Dashboard': {
        'Title': '我的儀表板',
      },
      'Users': '使用者',
      'Password': '密碼',
      'Customers': '顧客',
      'Vendors': '供應商',
      'Account': '帳戶',
      '$0 Records found': '找到$0條記錄',
      'Page': '頁',
      'English': 'English',
      '繁體中文': '繁體中文',
      '简体中文': '简体中文',
      "Page $0 of $1": "第$0頁，共$1頁",
      'Search': '搜索',
    },
    'cn': {
      'cn': '简体中文',
      'Language Setup': '语言设定',
      'Language': '语言',
      'Inbox': '收件匣',
      'Starred': '已加星标',
      'Project': '项目',
      'Payment': '付款',
      'Settings': '设置',
      'Currency Exchange': '货币兑换',
      'Logout': '退出',
      'Loading': '载入中',
      'List': '列表',
      'New': '添加',
      'Edit': '编辑',
      'Dense padding': 'Dense padding (CN)',
      'Dashboard': '仪表板',
      '.Dashboard': {
        'Title': '我的仪表板',
      },
      'Users': '用户',
      'Password': '密码',
      'Customers': '客户',
      'Vendors': '供应商',
      'Account': '帐户',
      '$0 Records found': '找到$0条记录',
      'Page': '页',
      'English': 'English',
      '繁體中文': '繁體中文',
      '简体中文': '简体中文',
      "Page $0 of $1": "第$0页，共$1页",
      'Search': '搜索',
    },
  },
};


const i18nReducer = (state = initialState, action) => {

  //console.log("src/reducers/i18n.js", state, action);

  if(!state.translate){
    const translate = initTranslate();
    translate.set(state.lang, state.default_language);
    state.translate = translate.translate;
  }

  if (action.type === 'SET_LANGUAGE') {

    let { lang, default_language, translate }  = state;
    default_language = action.payload.language;

    window.localStorage.setItem('lang', default_language);

    translate = initTranslate();
    translate.set(lang, default_language);
    translate = translate.translate;

    return {...state, default_language, translate};
  }
  return state;
};

export default i18nReducer;
