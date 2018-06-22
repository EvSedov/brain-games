#!/usr/bin/env node
import { gameEvenNumber, gameRules } from '../games/even';
import { gameProcess } from '..';

gameProcess(gameEvenNumber, gameRules);
