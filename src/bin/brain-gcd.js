#!/usr/bin/env node
import { gameGcd, gameDescription } from '../games/gcd';
import { gameProcess } from '..';

gameProcess(gameGcd, gameDescription);
