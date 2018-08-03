let bridgeHost = '127.0.0.1';
let bridgePort = 9090;

let ros = new ROSLIB.Ros();
ros.on('connection', function() {
  console.log('bridge connected');
});
ros.on('error', function(data) {
  console.log('error');
});
ros.on('closed', function() {
  console.log('bridge closed');
});

ros.connect('ws://' + bridgeHost + ':' + bridgePort);

let velocityTopic = new ROSLIB.Topic({
  ros: ros,
  name: '/cmd_vel',
  messageType: 'geometry_msgs/Twist'
});


let btnIds = ['foraward', 'left', 'right', 'back'];

// let ctrlBtns = [];
// btnIds.forEach((btnId) => {
//   ctrlBtns.push({btnId: document.getElementById(btnId)});
// });
// ctrlBtns.forEach((btn) => {
// });
let zeroVelocity = {
  linear: {x: 0.0, y: 0.0, z: 0.0},
  angular: {x: 0.0, y: 0.0, z: 0.0}
};

let btnForward = document.getElementById('forward');
btnForward.onclick = function() {
  console.log('forward button clicked');
  let forwardVelocity = Object.assign(zeroVelocity);
  forwardVelocity.linear.x += 0.05;
  setInterval(() => {
    velocityTopic.publish(forwardVelocity);
  }, 100);
};

let btnLeft = document.getElementById('left');
btnLeft.onclick = function() {
  let leftVelocity = Object.assign(zeroVelocity);
  leftVelocity.angular.z += 0.05;
  setInterval(() => {
    velocityTopic.publish(leftVelocity);
  }, 100);
};

let btnRight = document.getElementById('right');
btnRight.onclick = function() {
  let rightVelocity = Object.assign(zeroVelocity);
  rightVelocity.angular.z -= 0.05;
  setInterval(() => {
    velocityTopic.publish(rightVelocity);
  }, 100);
};

let btnBack = document.getElementById('back');
btnBack.onclick = function() {
  let backVelocity = Object.assign(zeroVelocity);
  backVelocity.linear.x -= 0.05;
  setInterval(() => {
    velocityTopic.publish(backVelocity);
  }, 100);
};
