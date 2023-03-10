// Copyright 2023, University of Colorado Boulder

/**
 * Helper function. Determines if in root of PhET checkout for scripts.
 *
 * @author Liam Mulhall <liammulh@gmail.com>
 */

import { basename } from 'node:path';
import { cwd } from 'node:process';

const isInPhetRoot = () => {
  return basename( cwd() ).toLowerCase() === 'phet';
};

export default isInPhetRoot;