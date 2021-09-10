'use strict';

((global) => {
    const timeout = 20;

    const _async = (fn, cb) => {
        setTimeout(() => {
            cb(fn());
        }, Math.random() * timeout);
    };

    const Folder = function (a = []) {
        if (!new.target) {
            return new Folder(a);
        }

        this.read = (index, cb) => _async(() => a[index], cb);
        this.size = (cb) => _async(() => a.length, cb);
    };

    Object.freeze(Folder);
    global.Folder = Folder;
})(typeof window === 'undefined' ? global : window);

const input = Folder([
    'file',
    'ffffile',
    Folder([
        'file',
    ]),
    Folder([
        'fiiile',
    ]),
    Folder([
        {},
        null,
        'file',
        'ffiillee',
        'ffiillee',
    ]),
    Folder([
        Folder([
            'filllle',
            'file',
            null,
        ]),
        {},
        Folder([])
    ]),
]);

// проверка решения
solution(input).then(result => {
    const answer = ['ffffile', 'ffiillee', 'ffiillee', 'fiiile', 'filllle'];
    const isEqual = String(answer) === String(result);

    if (isEqual) {
        console.log('OK');
    } else {
        console.log('WRONG');
    }
});

async function solution(input) {
  
    // ... решение задачи
let readItem = (i, folder) => new Promise((resolve)=>folder.read(i, (res)=>resolve(res))) 
    
 let getLength = (folder) => new Promise((resolve)=> {
   folder.size((res)=>resolve(res))
 }
   ) 
    
async function getFiniteValues(obj) {
  
  let props = await getProp(obj)
  return props
  
    async function getProp(o, filenames) {
      filenames = filenames || []
      let length = await getLength(o)
      
        for(let i=0; i < length; i++) {
          let item = await readItem(i, o)
           
            if(item instanceof Folder) {
              await getProp(item, filenames);
            } else { 
              if (typeof item === 'string') filenames.push(item)
            }
        }
      
      return filenames
      
    }
}
 
 let result = await getFiniteValues(input)
 
 
 
 return result.filter((el)=> el.length != [...new Set(...el.split())].length).sort()       
 
 
 }
 
          
 
 
 
 
 
 
 
  
   
   
 

    
    

