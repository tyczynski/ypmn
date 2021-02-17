# ynpn (npm > yarn > ypmn)

CLI which decides to use `npm` or `yarn`

**_Proof of concept. It's early alpha. You use at your own risk!_**

## How the decision is made 

1. Check for the file `yarn.lock` in the nearest directory
2. Check if 'yarn' is installed
3. Run `yarn` if 1. and 2. are `true`. Otherwise, run `npm`.

## Installation

``` bash 
$ npm install -g ynpn

# or 

$ yarn global add ynpn
```

## Usage

``` bash
$ ynpm *command*
```
