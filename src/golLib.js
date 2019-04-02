const applyRules = function(length, width, object, aliveList) {
  let allAlives = [];
  for (let pos = 1; pos <= length * width; pos++) {
    let liveNeighbors = getLiveNeighbors(length, width, pos, object);
    const condition1 = aliveList.includes(pos) && liveNeighbors == 2;
    const condition2 = aliveList.includes(pos) && liveNeighbors == 3;
    const condition3 = !aliveList.includes(pos) && liveNeighbors == 3;
    if(condition1 || condition2 || condition3) allAlives.push(pos);
  }
  return allAlives;
};

const getLiveNeighbors = function(length, width, position, object) {
  let neighbours = getAllNeighbors(length, width, position);
  let liveNeighbors = [];
  for (let element of neighbours) {
    if (object[element] == "*") liveNeighbors.push(element);
  }
  return liveNeighbors.length;
};

const getAllNeighbors = function(length, width, position) {
  const neighbours1 = getNeighbors1(length, width, position);
  const neighbours2 = getNeighbors2(length, width, position);
  const neighbours3 = getNeighbors3(length, width, position);
  return neighbours1.concat(neighbours2).concat(neighbours3);
};

const getNeighbors1 = function(length, width, position) {
  const neighbors = [];
  if ((position - 1) % length != 0) return neighbors;
  neighbors.push(position + 1);
  neighbors.push(position - length);
  neighbors.push(position + length);
  neighbors.push(position + length + 1);
  neighbors.push(position - length + 1);
  return filterNeighbors(length, width, neighbors);
};

const getNeighbors2 = function(length, width, position) {
  const neighbors = [];
  if (position % length != 0) return neighbors;
  neighbors.push(position - 1);
  neighbors.push(position + length);
  neighbors.push(position - length);
  neighbors.push(position + length - 1);
  neighbors.push(position - length - 1);
  return filterNeighbors(length, width, neighbors);
};

const getNeighbors3 = function(length, width, position) {
  let neighbors = [];
  if ((position - 1) % length == 0 || position % length == 0) return [];
  neighbors.push(position - 1);
  neighbors.push(position + 1);
  neighbors.push(position - length);
  neighbors.push(position + length);
  neighbors.push(position - length - 1);
  neighbors.push(position - length + 1);
  neighbors.push(position + length - 1);
  neighbors.push(position + length + 1);
  return filterNeighbors(length, width, neighbors);
};

const filterNeighbors = function(length, width, list) {
  let result = [];
  for (let element of list) {
    if (element < 0 || element > length * width) continue;
    result.push(element);
  }
  return result;
};

const createEmptyObject = function(length, width) {
  const result = {};
  for (let count = 1; count <= length * width; count++) {
    result[count] = " ";
  }
  return result;
};

const main = function(length, width, aliveCells) {
  let object = createEmptyObject(length, width);
  aliveCells.forEach(element => (object[element] = "*"));
  return applyRules(length, width, object, aliveCells);
};

export default main;