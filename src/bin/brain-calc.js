#!/usr/bin/env node
import { gameCalc, gameDescription } from '../games/calc';
import { gameProcess } from '..';

gameProcess(gameCalc, gameDescription);
