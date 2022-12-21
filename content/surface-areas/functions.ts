// =============================================================================
// 3D Solids
// (c) Mathigon
// =============================================================================


import {list} from '@mathigon/core';
import {Point} from '@mathigon/euclid';
import {Slider, Step} from '@mathigon/studio';

import {PenTool, Polypad} from '../shared/types';
import {VoxelPainter} from './components/voxel-painter';
import {Net} from './components/net';
import {Polyhedron} from '../polyhedra/components/polyhedron';
import {BLUE, GREEN, ORANGE, PURPLE, RED, YELLOW} from '../shared/constants';
import {Solid, Vector} from '../shared/components/webgl/solid';
import {BinarySwipe} from '../shared/components/binary-swipe/binary-swipe';
import {layers, templeParts} from './data/voxel-data';
import {pyramid1, triangularPrism, truncatedIcosahedron} from './data/net-data';
import {NetPosition, setupDieFacesPlacement} from './components/util';

import './components/voxel-painter';
import './components/net';
import '../shared/components/webgl/solid';
import '../shared/components/binary-swipe/binary-swipe';
import '../polyhedra/components/polyhedron';

import '../shared/components/webgl/conic-section';
import '../shared/components/scale-box/scale-box';


// -----------------------------------------------------------------------------
// Spheres, Cones and Cylinders

export function solids($step: Step) {
  const $solids = $step.$$('x-solid') as Solid[];

  $solids[0].addMesh(() => {
    const geo = new THREE.CylinderGeometry(1.2, 1.2, 2.6, 32, 1);
    $solids[0].addSolid(geo, 0xcd0e66, 20);
  });

  $solids[1].addMesh(() => {
    const geo = new THREE.ConeGeometry(1.3, 2.6, 128, 1);
    $solids[1].addSolid(geo, 0x0f82f2);
  });

  $solids[2].addMesh(() => {
    const geo = new THREE.SphereGeometry(1.3, 128, 128);
    $solids[2].addSolid(geo, 0xfd8c00);
  });
}

export function solidsProblems($step: Step) {
  const $solids = $step.$$('x-solid') as Solid[];

  $solids[0].addMesh(() => {
    const geo = new THREE.ConeGeometry(1.3, 2.6, 128, 1);
    $solids[0].addSolid(geo, 0x0f82f2);
  });

  $solids[1].addMesh(() => {
    const geo = new THREE.SphereGeometry(1.3, 128, 128);
    $solids[1].addSolid(geo, 0xfd8c00);
  });
}