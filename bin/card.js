#!/usr/bin/env node
'use strict'

import chalk from 'chalk';
import boxen from 'boxen';

// Define options for Boxen
const options = {
    padding: 1,
    margin: 1,
    borderStyle: 'round'
};

const data = {
    name: chalk.white('           Hector Triana'),
    handle: chalk.white('@HectorTriana'),
    shorthandle: chalk.white('ht1204'),
    work: chalk.white('Full Stack Engineer'),
    twitter: chalk.gray('https://twitter.com/') + chalk.cyan('HectorTriana_4'),
    github: chalk.gray('https://github.com/') + chalk.green('ht1204'),
    linkedin: chalk.gray('https://www.linkedin.com/in/') + chalk.blue('hector-triana'),
    web: chalk.cyan('https://makeitreal.camp'),
    npx: chalk.red('npx') + ' ' + chalk.white('ht1204'),
    labelWork: chalk.white.bold('    Work:'),
    labelTwitter: chalk.white.bold(' Twitter:'),
    labelGitHub: chalk.white.bold('  GitHub:'),
    labelLinkedIn: chalk.white.bold('LinkedIn:'),
    labelWeb: chalk.white.bold('     Web:'),
    labelCard: chalk.white.bold('    Card:')
};

const newline = '\n';
const heading = `${data.name} / ${data.handle} / ${data.shorthandle}`;
const working = `${data.labelWork}  ${data.work}`;
const twittering = `${data.labelTwitter}  ${data.twitter}`;
const githubing = `${data.labelGitHub}  ${data.github}`;
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`;
const webing = `${data.labelWeb}  ${data.web}`;
const carding = `${data.labelCard}  ${data.npx}`;

const output = [
               heading, // data.name + data.handle
               newline, newline, // Add one whole blank line
               working, newline, // data.labelWork + data.work
               twittering, newline, // data.labelTwitter + data.twitter
               githubing, newline, // data.labelGitHub + data.github
               linkedining, newline, // data.labelLinkedIn + data.linkedin
               webing, newline, newline, // data.labelWeb + data.web
               carding /* data.labelCard + data.npx*/
            ].join('');

console.log(chalk.green(boxen(output, options)));



