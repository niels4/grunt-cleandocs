# grunt-cleandocs

A simple grunt wrapper for [cleandocs](https://github.com/niels4/cleandocs)

Merge code and markdown files to create project documentation.


## Getting Started
Install the module with: `npm install cleandocs`

Add this example task to your Gruntfile (be sure to fix the paths):

    cleandocs: {
        all: {
            options: {
                dirs: [
                  {
                    src: "path/to/src"
                    docs: "path/to/docs"
                    output: "path/to/output"
                  },
                  {
                    src: "path/to/test-src"
                    docs: "path/to/test-docs"
                    output: "path/to/test-output"
                  }
                ]
              }
          }
      }

To run, type:
    grunt cleandocs

Note: It does not clean the folder between each run.

## License
Copyright (c) 2013 Niels Nielsen. Licensed under the MIT license.
