// =============================================================================
// Logic
// (c) Mathigon
// =============================================================================

import {list} from '@mathigon/core';
import {nearlyEquals} from '@mathigon/fermat';
import {Point} from '@mathigon/euclid';
import {Step} from '@mathigon/studio';
import {CoordinateSystem, EquationSystem} from '../shared/types';

export function noop() {
  // empty
}

export function zeroQuadraticPolynomial($step: Step) {
  $step.model.click = (n: number) => $step.model.b += 1;

  console.log($step.model.a);  // Get the current value of model.a.
  const $chart = $step.$('x-coordinate-system') as CoordinateSystem;
  const f = (x: number) =>  x * x  -3 * x - 4;

  //$chart.setFunctions(f);
  //$chart.drawPoints(list(0, 180, 20).map(p => new Point(p, f(p))));
  const p: Point[]=[];
  //$chart.drawPoints(p);
  let a=true, b=true, c=true,d=true,e=true,f1=true,g=true,h=true;
  $step.model.watch(() => {
    // This callback is triggered whenever model.a changes, but not when model.b changes.
    if($step.model.a==6 && a)
    {
      console.log("pushonga");
      
      p.push(new Point(-2,6));
      a=false;
      $chart.drawPoints(p);
    }
    if($step.model.b==0 && b)
    {
      
      p.push(new Point(-1,0));
      b=false;
      $chart.drawPoints(p);
    }
    if($step.model.c==-4 && c)
    {
      
      p.push(new Point(0,-4));
      c=false;
      $chart.drawPoints(p);
    }
    if($step.model.d==-6 && d)
    {
      
      p.push(new Point(1,-6));
      d=false;
      $chart.drawPoints(p);
    }
    if($step.model.e==-6 && e)
    {
      
      p.push(new Point(2,-6));
      e=false;
      $chart.drawPoints(p);
    }
    if($step.model.f==-4 && f1)
    {
      
      p.push(new Point(3,-4));
      f1=false;
      $chart.drawPoints(p);
    }
    if($step.model.g==0 && g)
    {
      
      p.push(new Point(4,0));
      g=false;
      $chart.drawPoints(p);
    }
    if($step.model.h==6 && h)
    {
      
      p.push(new Point(5,6));
      h=false;
      $chart.setFunctions(f);
      $chart.drawPoints(p);
    }
    
      
  });
}
