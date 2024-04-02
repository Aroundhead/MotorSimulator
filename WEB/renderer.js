const wheel = document.getElementById('wheel');
const motorStatus = document.getElementById('motorStatus');

function rotate(direction) {
  motorStatus.textContent = `Motor State: Rotating ${direction.charAt(0).toUpperCase() + direction.slice(1)}`;
  if (direction === 'left') {
    wheel.classList.add('rotating-left');
    wheel.classList.remove('rotating-right');
  } else if (direction === 'right') {
    wheel.classList.add('rotating-right');
    wheel.classList.remove('rotating-left');
  }
}

function stopMotor() {
  motorStatus.textContent = 'Motor State: Stopped';
  wheel.classList.remove('rotating-left', 'rotating-right');
}
