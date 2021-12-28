export default function mobileRemote(text) {
  let digitMapping = {
    1: ["1"],
    2: ["2", "a", "b", "c"],
    3: ["3", "d", "e", "f"],
    4: ["4", "g", "h", "i"],
    5: ["5", "j", "k", "l"],
    6: ["6", "m", "n", "o"],
    7: ["7", "p", "q", "r", "s"],
    8: ["8", "t", "u", "v"],
    9: ["9", "w", "x", "y", "z"],
    "*": [],
    0: [],
    "#": [],
  };

  let graph = {
    1: [3, "*", 2, 4],
    2: [1, 0, 3, 5],
    3: [2, "#", 1, 6],
    4: [6, 1, 5, 7],
    5: [4, 2, 6, 8],
    6: [5, 3, 4, 9],
    7: [9, 4, 8, "*"],
    8: [7, 5, 9, 0],
    9: [8, 6, 7, "#"],
    "*": ["#", 7, 0, 1],
    0: ["*", 8, "#", 2],
    "#": [0, 9, "*", 3],
  };

  function bfs(graph, start, end) {
    let queue = [[start, []]],
      seen = new Set();

    while (queue.length) {
      let [curVert, [...path]] = queue.shift();
      path.push(curVert);
      if (curVert === end) return path;

      if (!seen.has(curVert) && graph[curVert]) {
        queue.push(...graph[curVert].map((v) => [v, path]));
      }
      seen.add(curVert);
    }
  }

  let distance = 0;
  let btns = [];
  let cur = 1;
  text = text.split("");

  for (let i = 0; i < text.length; i++) {
    text[i];
    btns.push(
      Object.keys(digitMapping).filter((el) =>
        digitMapping[el].includes(text[i])
      )[0]
    );
  }

  btns; //?
  for (let i = 0; i < btns.length; i++) {
    distance++;
    btns[i];
    let steps = bfs(graph, cur, parseInt(btns[i]));
    distance += steps.length;

    let last = steps[steps.length - 1];

    distance += digitMapping[last].indexOf(text[i]);
    if (btns[i] === btns[i - 1])
      distance -= digitMapping[last].indexOf(text[i]);

    cur = btns[i];
  }
  bfs(graph, 4, 6); //?

  return distance;
}

mobileRemote("mobileremote"); //?

let text = 12345;
