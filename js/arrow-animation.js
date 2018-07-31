let startBtn = document.getElementById('start');
let nodeTexts = document.getElementsByClassName('node-text');
let arrowRects = document.getElementsByClassName('arrow-rect');
let arrowTriangles = document.getElementsByClassName('arrow-triangle');

// startBtn.onclick = function() {
//     let count = 0;
//     let timer = setInterval(function() {
//         if (count < arrowRects.length) {
//             arrowRects[count].style.display = 'block';
//             arrowTriangles[count].style.display = 'block';
//             count++;
//         } else {
//             clearInterval(timer);
//         }
//     }, 500);
// };

function showArrow(arrowNo) {
    if (typeof arrowNo !== 'number' || 
        arrowNo >= arrowRects.length || arrowNo >= arrowTriangles.length) {
            throw new Error('Wrong number for lighting the arrow');
    }

    for (let i = 0; i <= arrowNo; i++) {
        arrowRects[i].style.display = 'block';
        arrowTriangles[i].style.display = 'block';
    }
}

function showCodeSnippet(componentId) {
    let element = document.getElementById(componentId);
    element.onclick = function() {
        document.getElementById(idCodeMap[componentId]).style.display = 'block';

        for (let id in idCodeMap) {
            if (id !== componentId) {
                document.getElementById(idCodeMap[id]).style.display = 'none';
            }
        }
    };
}

let idCodeMap = {
    'roslibjs': 'roslibjs-code',
    // 'ros2-web-bridge': 'ros2-web-bridge-code',
    'rclnodejs': 'rclnodejs-code'
};

for (let id in idCodeMap) {
    showCodeSnippet(id);
}

// let count = 0;
// let timer = setInterval(function() {
//     if (count < arrowRects.length) {
//         arrowRects[count].style.display = 'block';
//         arrowTriangles[count].style.display = 'block';
//         count++;
//     } else {
//         clearInterval(timer);
//     }
// }, 500);

let start = document.getElementById('start-animation');
let clickNum = 0;
let nodeIds = ['roslibjs', 'webbrowser', 'ros2-web-bridge', 'rclnodejs', 'rcl-node'];
const nodeBgColor = '#5bc0de';
const textColor = '#ddf8c6';
const nodeBorderColor = '#c2e1f5';

start.onclick = function() {
    
    console.log(clickNum);

    document.getElementById(nodeIds[clickNum]).style.fill = nodeBgColor;
    document.getElementById(nodeIds[clickNum]).style.stroke = nodeBorderColor;

    nodeTexts[clickNum].style.color = textColor;

    arrowRects[clickNum].style.fill = nodeBgColor;
    arrowTriangles[clickNum].style.fill = nodeBgColor;

    arrowRects[clickNum].style.display = 'block';
    arrowTriangles[clickNum].style.display = 'block';

    clickNum++;

    if (clickNum === 4) {
        document.getElementById(nodeIds[clickNum]).style.fill = nodeBgColor;
        document.getElementById(nodeIds[clickNum]).style.stroke = nodeBorderColor;
    }
    if (clickNum >= arrowRects.length) {
        clickNum = 0;
    }
}
