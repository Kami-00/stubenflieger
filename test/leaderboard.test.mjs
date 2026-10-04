import test from 'node:test';
import assert from 'node:assert/strict';
import {validateScore} from '../worker/index.mjs';
import {unrotateDelta} from '../src/viewport.js';
const run='01234567-89ab-4cde-8fab-0123456789ab';
test('leaderboard computes points and validates score limits',()=>{assert.deepEqual(validateScore({run,name:'  Pilot  Eins ',blocks:18,flightMs:3200}),{run,name:'Pilot Eins',blocks:18,flightMs:3200,points:1832});for(const blocks of [-1,64,1.5])assert.throws(()=>validateScore({run,name:'Pilot',blocks,flightMs:1000}));assert.throws(()=>validateScore({run,name:'<script>',blocks:3,flightMs:1000}));assert.throws(()=>validateScore({run,name:'Pilot',blocks:3,flightMs:Infinity}));});
test('manual screen rotation keeps pointer axes aligned',()=>{for(const angle of [0,90,180,270]){const a=angle*Math.PI/180;const physical={x:12*Math.cos(a)-30*Math.sin(a),y:12*Math.sin(a)+30*Math.cos(a)};const local=unrotateDelta(physical.x,physical.y,angle);assert.ok(Math.abs(local.x-12)<1e-8);assert.ok(Math.abs(local.y-30)<1e-8);}});
