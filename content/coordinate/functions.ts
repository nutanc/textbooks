// =============================================================================
// Logic
// (c) Mathigon
// =============================================================================

import {Slider, Step} from '@mathigon/studio';
import {Geopad, GeoPath, Path} from '../shared/types';
function waitToDraw($step: Step, $geopad: Geopad, shapes: string[],
  classes: string[], targets: string[]) {
$geopad.waitForPaths(shapes, {
  onCorrect(path, i) {
    $step.addHint('correct');
    path.$el.addClass(classes[i]);
    path.$el.setAttr('target', targets[i]);
    console.log("i"+i +"is done")
    $step.score('s' + i);
  },
  onIncorrect() {
    $step.addHint('incorrect');
  },
  onHint(path, i) {
    $step.addHint('draw-hint', {force: true});
    path.$el.addClass(classes[i]);
    path.$el.setAttr('target', targets[i]);
    $step.score('s' + i);
  }
});
}

export function intro($step: Step) {
  // empty
  const $geopad = $step.$('x-geopad') as Geopad;
  $geopad.switchTool('line');
}

export function intro1($step: Step) {
  // empty
  const $geopad = $step.$('x-geopad') as Geopad;
  $geopad.switchTool('line');
}

export function distance($step: Step) {
  const $geopad = $step.$('x-geopad') as Geopad;
  $geopad.showGesture('b', 'a');
  $step.onScore('blank-0', () => {
    $geopad.showGesture('d', 'c');
  });
  $step.onScore('blank-1', () => {
    $geopad.drawPath('segment(c,a)', {animated: 1000});
  });
}

export function distance1($step: Step) {
  // empty
  const $geopad = $step.$('x-geopad') as Geopad;
  $geopad.switchTool('line');
  waitToDraw($step, $geopad,
    ['line(p,q)', 'line(p,r)', 'line(q,s)','line(p,t)' ],
    ['red', 'blue', 'green'],
    ['b-red', 'b-blue', 'b-green']);
}

export function section($step: Step) {
  // empty
  const $geopad = $step.$('x-geopad') as Geopad;
  $geopad.switchTool('line');
  waitToDraw($step, $geopad,
    ['line(P,D)', 'line(B,E)', 'line(P,C)'],
    ['red', 'blue', 'green'],
    ['b-red', 'b-blue', 'b-green']);
}