#!/usr/bin/env node
import { gameCalc, gameRules } from '../games/calc';
import { gameProcess } from '..';

gameProcess(gameCalc, gameRules);
