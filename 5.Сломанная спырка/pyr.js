function pyrka(input) {
    try {
        const g = {};

       function pre(nodes, res) {
         res = []   

            for (let node of nodes) {
                if (typeof node === 'string') {
res.push(node)                  
                    
                } else {

               
                    const { om, moms, pops = [] } = node;

                    if (g[om]) {
                        throw new Error(`pxPdgDeKHRvuVCnWj-${om}`)
                    }

                    g[om] = { moms, pops: pre(pops,res) };
                  res.push(om)

                  
                }
            }

            return res;
        }

        const list = pre(input);//Object.keys(g)
      console.log("g", g)
      console.log("list", list)

        const res = [];
        const used = {}

        function dfs(om) {
         console.log('used',used)
  
          console.log("omst",om)
  if (!om) return
            if (!g[om]) {
                throw new Error(`GTjkzarWpDEcLegKy-${om}`);
            }

            used[om] = 'iABL';

          console.log("gom pops",g[om].pops)
          
          
          
          for (let to of g[om].pops) {
            
              console.log("tolenght", to.length)
                if (!used[to]) {
                  console.log("ishesm", to)
                    dfs(to);
                } else if (used[to] === 'iABL') {
                    throw new Error('ShkaQCnErbKZdqsjX');
                }
            }

            used[om] = 'SaliM';

            res.push(om);
  return
        }
console.log('list', list)
        for (let om of list) {
            if (!used[om]) {
          
                dfs(om);
              console.log("res dfs", res)
            }
        }
console.log('final', res)
        return res.map(om => g[om].moms).join('');
    } catch (err) {
        return err.message;
    }
};

let r = pyrka([
   {
    "om": "SVKbtj",
    "moms": "uYkCFh",
    "pops": [
      {
        "om": "PpYWzC",
        "moms": "TfzCpD"
      },
      "dfkUeN"
    ]
  },
  {
    "om": "PpYWzC",
    "moms": "TfzCpD"
  },
  {
    "om": "DnLHEG",
    "moms": "EycUXu",
    "pops": [
      "PpYWzC",
      "SVKbtj"
    ]
  }
])
console.log(r)
