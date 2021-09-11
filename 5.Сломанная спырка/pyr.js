function pyr(input) {
  try {
    const g = {};

    function pre(nodes,res1) {
      res1 = res1 || [];

      for (let node of nodes) {
        if (typeof node === "string") {
          res1.push(node);
        } else {
          const { om, moms, pops = [] } = node;

          if (g[om]) {
            throw new Error(`pxPdgDeKHRvuVCnWj-${om}`);
          }

                    
          g[om] = { moms, pops: pre(pops,res1) };
          res1.push(om);
          
        
        }
      }
      return res1
    }
    const list = pre(input);
    console.log(list)

    const res = [];
    const used = {};

    function dfs(om) {
      if (!g[om]) {
        throw new Error(`GTjkzarWpDEcLegKy-${om}`);
      }

      used[om] = "iABL";

      for (let to of g[om].pops) {
        if (!used[om]) {
          dfs(to);
        } else if (used[to] === "iABL") {
          throw new Error("ShkaQCnErbKZdqsjX");
        }
      }

      used[om] = "SaliM";

      res.push(om);
    }

    for (let om in list) {
      if (!used[om]) {
        dfs(om);
      }
    }

    return res.map((om) => g[om].moms).join("");
  } catch (err) {
    return err.message;
  }
}

let r = pyr([
  {
    om: "SVKbtj",
    moms: "uYkCFh",
    pops: ["PpYWzC", "dfkUeN"],
  },
  {
    om: "PpYWzC",
    moms: "TfzCpD",
    pops: ["fEXMpe", "dfkUeN"],
  },
  {
    om: "fEXMpe",
    moms: "qFAngG",
  },
  {
    om: "dfkUeN",
    moms: "qUAMjy",
  },
  {
    om: "DnLHEG",
    moms: "EycUXu",
    pops: ["PpYWzC", "SVKbtj"],
  },
]);


console.log(r)