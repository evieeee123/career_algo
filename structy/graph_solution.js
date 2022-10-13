// closest carrot

// way 1 (breadth first)
// r = number of rows
// c = number of columns
// Time: O(rc)
// Space: O(rc)
const closestCarrot = (grid, startRow, startCol) => {
    const queue = [[startRow, startCol, 0]];
    const visited = new Set([startRow + ',' + startCol]);

    while (queue.length > 0) {
        const [row, col, distance] = queue.shift();

        if (grid[row][col] === 'C') return distance;

        const deltas = [[1, 0], [-1, 0], [0, 1], [0, -1]];
        for (let delta of deltas) {
            const [deltaRow, deltaCol] = delta;
            const neighborRow = row + deltaRow;
            const neighborCol = col + deltaCol;
            const neighborPos = neighborRow + ',' + neighborCol;
            const rowInbounds = 0 <= neighborRow && neighborRow < grid.length;
            const colInbounds = 0 <= neighborCol && neighborCol < grid[0].length;
            if (rowInbounds && colInbounds && !visited.has(neighborPos) && grid[neighborRow][neighborCol] !== 'X') {
                visited.add(neighborPos);
                queue.push([neighborRow, neighborCol, distance + 1]);
            }
        }
    }

    return -1;
};




// longest path

// way 1 (depth first) 
// e = # edges
// n = # nodes
// Time: O(e)
// Space: O(n)
const longestPath = (graph) => {
    const distance = {};
    for (let node in graph) {
        if (graph[node].length === 0) {
            distance[node] = 0;
        }
    }

    for (let node in graph) {
        traverseDistance(graph, node, distance);
    }

    return Math.max(...Object.values(distance));
};

const traverseDistance = (graph, node, distance) => {
    if (node in distance) return distance[node];

    let maxDistance = 0;
    for (let neighbor of graph[node]) {
        const attempt = traverseDistance(graph, neighbor, distance);
        if (attempt > maxDistance) maxDistance = attempt;
    }

    distance[node] = 1 + maxDistance;
    return distance[node];
};




// semesters required

// way 1 (depth first)
// p = # prereqs
// c = # courses
// Time: O(p)
// Space: O(c)
// strategy:
// 1. build the graph  2. eage case(if the len node arr equal to 0, distance = 0/1)  3.traverseDistance(recursive)
const semestersRequired = (numCourses, prereqs) => {
    const graph = buildGraph(numCourses, prereqs);
    const distance = {};

    for (let i = 0; i < numCourses; i += 1) {
        if (graph[i].length === 0) distance[i] = 1;
    }

    for (let i = 0; i < numCourses; i += 1) {
        traverseDistance2(graph, i, distance)
    }

    return Math.max(...Object.values(distance));
};

const traverseDistance2 = (graph, node, distance) => {
    if (node in distance) return distance[node];

    let maxDistance = 0;
    for (let neighbor of graph[node]) {
        const neighborDistance = traverseDistance2(graph, neighbor, distance);
        if (neighborDistance > maxDistance) maxDistance = neighborDistance;
    }

    distance[node] = maxDistance + 1;
    return distance[node];
};

const buildGraph = (numCourses, prereqs) => {
    const graph = {};

    for (let i = 0; i < numCourses; i += 1) {
        graph[i] = [];
    }

    for (let prereq of prereqs) {
        const [a, b] = prereq;
        graph[a].push(b);
    }

    return graph;
};

// way 2
// const semestersRequired = (numCourses, prereqs) => {
//     const graph = buildGraph(numCourses, prereqs);

//     let distance = {};
//     for (let course in graph) {
//         if (graph[course].length === 0) distance[course] = 1;
//     }

//     for (let course in graph) {
//         traverseDistance(graph, course, distance)
//     }
//     return Math.max(...Object.values(distance))
// };

// const traverseDistance = (graph, node, distance) => {
//     let max = 0;
//     for (let neighbor of graph[node]) {
//         let attampt = traverseDistance(graph, neighbor, distance)
//         if (attampt > max) max = attampt;
//     }
//     distance[node] = 1 + max;
//     return distance[node];
// }

// const buildGraph = (numCourses, prereqs) => {
//     let graph = {};
//     for (let i = 0; i < numCourses; i++) {
//         graph[i] = [];
//     }

//     for (let prereq of prereqs) {
//         const [a, b] = prereq;
//         graph[a].push(b);
//     }
//     return graph;
// }




// best bridge

// way 1
// r = number of rows
// c = number of columns
// Time: O(rc)
// Space: O(rc)
const bestBridge = (grid) => {
    let mainIsland;
    for (let r = 0; r < grid.length; r += 1) {
        for (let c = 0; c < grid[0].length; c += 1) {
            const possibleIsland = traverseIsland(grid, r, c, new Set());
            if (possibleIsland.size > 0) {
                mainIsland = possibleIsland;
                break;
            }
        }
    }

    const visited = new Set(mainIsland);
    const queue = [];
    for (let pos of mainIsland) {
        const [row, col] = pos.split(',').map(Number);
        queue.push([row, col, 0]);
    }

    while (queue.length > 0) {
        const [row, col, distance] = queue.shift();

        const pos = row + ',' + col;
        if (grid[row][col] === 'L' && !mainIsland.has(pos)) return distance - 1;

        const deltas = [[-1, 0], [1, 0], [0, -1], [0, 1]];
        for (let delta of deltas) {
            const [deltaRow, deltaCol] = delta;
            const neighborRow = row + deltaRow;
            const neighborCol = col + deltaCol;
            const neighborPos = neighborRow + ',' + neighborCol;
            if (isInbounds(grid, neighborRow, neighborCol) && !visited.has(neighborPos)) {
                visited.add(neighborPos);
                queue.push([neighborRow, neighborCol, distance + 1]);
            }
        }
    }
};

const isInbounds = (grid, row, col) => {
    const rowInbounds = 0 <= row && row < grid.length;
    const colInbounds = 0 <= col && col < grid[0].length;
    return rowInbounds && colInbounds;
};

const traverseIsland = (grid, row, col, visited) => {
    if (!isInbounds(grid, row, col) || grid[row][col] === 'W') return visited;

    const pos = row + ',' + col;
    if (visited.has(pos)) return visited;

    visited.add(pos);

    traverseIsland(grid, row - 1, col, visited);
    traverseIsland(grid, row + 1, col, visited);
    traverseIsland(grid, row, col - 1, visited);
    traverseIsland(grid, row, col + 1, visited);

    return visited;
};