# Project 'MOOST!'

Moost is a simple random message generator designed to randomly generate suggestions on simple mood boosting activities for when you are feeling low.

## Table of contents

* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)
* [Status](#status)
* [Inspiration](#inspiration)
* [Contact](#contact)

## General info

As part of my 100 Days of Code challenge I have been tasked with creating a 'Mixed Messages' generator by the Codecadamy school and was allowed to take the project in a direction of my choosing.
In the midst of this pandemic, and the ensuing lockdowns, mental health in the UK is at an all time low and when you feel yourself in a mental slump you can not always think of ways to pick your mood back up. MOOST is a simple Mood Boosting tool to randomly suggest an activity to pull you out of your mental slump. It comprises of 3 parts: An inspirational quote, a suggest mood boosting activity with scientific backing and finally a rhetorical question.

## Technologies

* VS Code - Version: 1.51.1
* Node. js - Verson: 12.14.1
* JavaScript

## Setup

Users must have node installed on their device in order to run MOOST.

## Code Examples

    generateMOOST: function () {
        const voteOfConf = this.randomise(this._votesOfConf);
        const activitySuggestion = this.randomise(this._activitySuggestion);
        const rhetoricalQ = this.randomise(this._rhetoricalQ);

        console.log(voteOfConf.quote + ' - ' + voteOfConf.source);
        console.log(activitySuggestion.activity);
        console.log(activitySuggestion.scientificBacking);
        console.log(rhetoricalQ);

## Features

* An inspiration quote that gives the reader a vote of confidence.
* A suggested activity proven to help to boost people's mood.
* A final question to challenge people quick to dismiss the activity without trying it.

## Status

Project is: _Complete_

## Contact

Created by [@TDCShep] - feel free to contact me!
