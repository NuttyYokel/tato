import { Component, loadComponents, setRoot } from '@csereimarton/droplet';
import template from './main.html';
import '../style/main.scss';

class Main extends Component {
  currentName = '';
  names = ['Anne', 'Billy', 'Charlotte', 'Dan'];

  constructor() {
    super(`<div>
      <p>
        Name: <input type="text" onchange="{setCurrentName}" />
        <button onclick="{addName}">Add</button>
        <button onclick="{removeName}">Remove</button>
      </p>
      <span *for="name of names">
        <big-red-box name="{name}"/>
      </span>
    </div>`);
  }

  setCurrentName(event) {
    this.currentName = event.target.value;
  }

  addName() {
    this.names = [...this.names, this.currentName];
  }

  removeName() {
    this.names = this.names.filter((name) => name !== this.currentName);
  }
}

class BigRedBox extends Component {
  constructor() {
    super(template);
  }
}

loadComponents(Main, BigRedBox);
setRoot(Main);
