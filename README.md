# jqLite + [![Build Status](https://travis-ci.org/douglasduteil/jqLitePlus.png?branch=master)](https://travis-ci.org/douglasduteil/jqLitePlus?branch=master)

***


**Brief explanation:** Many projects are using jQuery in them tests to complete the lacks of jqLite. But all the features of jQuery are not necessary to run them. The goal of this project is to provide some jQuery features in separate jqLite components. The good part is that it's removing the utility dependence of jQuery in karma tests for an on purpose dependence to make tests with it.

**Expected results:** A whole new repo named jqLitePlus that contains jQuery features in separate Angular modules. For example for `jquery.find` a `jqLite+find` module or for `jquery.trigger` a `jqLite+trigger` module.

**Inspiration**: The implementation of the modules are strongly inspired by ["You Might Not Need jQuery"](https://github.com/HubSpot/YouMightNotNeedjQuery).


## Usage

### Requirements

* **AngularJS** >= 1
