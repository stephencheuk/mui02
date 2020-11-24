import io from "socket.io-client";

//class fetchbase{
//  constructor(socket) {
//    this.collect = '';
//    this.socket = socket;
//    this.onUpdate = function (){};
//  }
//}

class collectbase {
  constructor(socket) {
    this.collect = '';
    this.socket = socket;
    this.onUpdate = function (){};
  }

  collection (collectDB, argv) {

    const { database, collect } = (argv ? argv : {});

    this.collect = collectDB;
    if(database){ this.database = database; }

    console.log('use collect', collectDB, this);
    return this;
  }

  doc (id){
    this.fetchOne(id);
  }

  fetchOne (id){
    console.log('fetchOne', this.socket);

    this.socket.on('response', res => {
      console.log('socket fetchOne received', res);
    });

    let hash = {
      database: this.database,
      collection: this.collect,
      start: 0,
      limit: 1,
    };

    this.socket.emit('findAll', hash, (...error) => {
      if(error) {
        console.log('fetchOne ERROR', error);
      }
    });
  }

  reformat(res) {
    var retData = [];
    if(res.result && res.result.length){
      for (var x=0; x<res.result.length; x++){
        const { _id, ..._data } = res.result[x];
        const data = () => _data;
        console.log('reformat', res, _id, data);
        retData.push({id: _id, data });
      }
    }
    console.log('end of reformat', retData);
    return retData;
  }

  onSnapshot(func, argv){

    const { database, collect, start, limit } = (argv ? argv : {});

    this.onUpdate = func;

    console.log("onSnapshot start", [this.database, this.collect, this.start, this.limit]);

    if(start){ this.start = start; }
                                    ///else{ delete this.start }
    if(limit){ this.limit = limit; }
                                    //else{ delete this.limit }
    if(database){ this.database = database; }
                                    //else{ delete this.database }
    if(collect){ this.collect = collect; }
                                    //else{ delete this.collect }

    console.log("onSnapshot end", [this.database, this.collect, this.start, this.limit]);

    this.onReceive();

    this.Join2Sync();

    this.fetchAll();


    return this.unsubscribe.bind(this);
  }

  fetchAll(){
    console.log('fetchAll', this.socket);

    let hash = {
      collection: this.collect,
      start: this.start||0,
      limit: this.limit||3,
    };
    if(this.limit === -1){ delete hash.start; delete hash.limit }
    if(this.database){ hash.database = this.database; }
    if(this.collect){ hash.collection = this.collect; }

    this.socket.emit('findAll', hash, (error) => {
      console.log('findAll', error);
      if(error) {
        alert(error);
      }
    });
  }

  Join2Sync(){
    let hash = {};
    if(this.database){ hash.database = this.database; }
    if(this.collect){ hash.collection = this.collect; }
    this.socket.emit('update', hash, (error) => {
      if(error) {
        alert(error);
      }
    });
  }

  onReceive(){
    this.socket.on('response', res => {
      console.log('socket received', res);
      this.onUpdate(this.reformat(res));
    });
    this.socket.on('update', res => {
      console.log('monogobase db update notice', res);
      this.onUpdate(this.reformat(res));
    });
  }

  unsubscribe(){
    console.log('unsubscribe => this', this);
    let hash = {};
    if(this.database){ hash.database = this.database; }
    if(this.collect){ hash.collection = this.collect; }
    this.socket.emit('unsubscribe', hash, (error) => {
      if(error) {
        alert(error);
      }
      this.socket.close();
    });
  }
}

const collectBase = (socket) => {

//  const collectBase = {
//    socket,
//    collect: '',
//    onUpdate: () => {},
//    collection (collectDB) {
//      this.collect = collectDB;
//      return this;
//    },
//    reformat: () => {
//    },
//    onSnapshot: (func) => {
//      this.onUpdate = func;
//
//      this.socket.on('response', res => {
//        console.log('socket response', res);
//        this.onUpdate(res);
//      });
//
//      this.socket.on('update', res => {
//        console.log('monogobase db update notice', res);
//        this.onUpdate(res);
//      });
//
//      this.socket.emit('update', { collection: this.collect }, (error) => {
//        if(error) {
//          alert(error);
//        }
//      });
//
//      return this.unsubscribe;
//    },
//    unsubscribe: () => {
//      this.socket.emit('unsubscribe', { collection: this.collect }, (error) => {
//        if(error) {
//          alert(error);
//        }
//      });
//    }
//  };
//
//  return collectBase;
    //const unsubscribe = firebase.firestore().collection(collectDB).onSnapshot(onCollectionUpdate);

  return new collectbase(socket);
};

class base {
  constructor() {
    this.conf = {};
    this.socket = null;
  }

  setting(config) {
    this.conf = config;
    return this;
  }

  firestore(){
    console.log('start create web socket', this.conf.databaseURL + this.conf.projectId, this);
    if(!this.socket){
      this.socket = io(this.conf.databaseURL + this.conf.projectId);
    }
    return this;
  }

  collection(collectDB){
    return collectBase(this.socket).collection(collectDB)
  }
}

const mongobase = () => {

//  const base = {
//    conf: {},
//    socket: null,
//    setting: (config) => {
//      this.conf = config;
//      return this;
//    },
//    firestore: (config) => {
//      if(!this.socket){
//        this.socket = io(this.conf.databaseURL + this.conf.projectId);
//      }
//      return this;
//    },
//    collection: (collectDB) => {
//      return collectBase(this.socket).collection(collectDB)
//    },
//  };
//
//  return base;

  return new base();
};

export default mongobase;


