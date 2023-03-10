// Copyright 2023, University of Colorado Boulder

/**
 * Copy the pull request template to the core set of common repos.
 * This script is meant to be run in the root of the PhET project
 * directory.
 *
 * @author Liam Mulhall <liammulh@gmail.com>
 */

import { copyFileSync, existsSync, mkdirSync } from 'node:fs';
import coreCommonRepos from './core-common-repos.js';
import isInPhetRoot from './is-in-phet-root.js';
import { join, dirname } from 'node:path';
import { exit, cwd } from 'node:process';

if ( !isInPhetRoot() ) {
  console.log( 'Error: Not in PhET project root. Exiting.' );
  exit( 1 );
}

const pathToPrTemplate = join( cwd(), 'community', '.github', 'pull_request_template.md' );

for ( const repo of coreCommonRepos ) {
  const dest = join( cwd(), repo, '.github', 'pull_request_template.md' )
  const destDir = dirname( dest );
  const destDirDoesNotExist = !existsSync( destDir );
  if ( destDirDoesNotExist ) {
    mkdirSync( destDir, { recursive: true } );
  }
  copyFileSync( pathToPrTemplate, dest );
}