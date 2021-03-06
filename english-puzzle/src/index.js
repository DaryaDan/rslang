import { Component } from './app/core.component';
import overlay from './app/overlay.component';
import levels from './app/levels.component';
import puzzle from './app/puzzle.component';
import control from './app/control.component';

const component = new Component({
  components: [
    overlay,
    levels,
    puzzle,
    control,
  ],
});

component.start();
