System.config({
  baseURL: "/",
  defaultJSExtensions: true,
  transpiler: "babel",
  babelOptions: {
    "optional": [
      "runtime",
      "optimisation.modules.system"
    ]
  },
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },
  bundles: {
    "build.js": [
      "app.js",
      "audio.js",
      "npm:babel-runtime@5.8.38/core-js/promise.js",
      "npm:core-js@1.2.6/library/fn/promise.js",
      "npm:core-js@1.2.6/library/modules/$.core.js",
      "npm:core-js@1.2.6/library/modules/es6.promise.js",
      "github:jspm/nodelibs-process@0.1.2.js",
      "github:jspm/nodelibs-process@0.1.2/index.js",
      "npm:process@0.11.2.js",
      "npm:process@0.11.2/browser.js",
      "npm:core-js@1.2.6/library/modules/$.iter-detect.js",
      "npm:core-js@1.2.6/library/modules/$.wks.js",
      "npm:core-js@1.2.6/library/modules/$.global.js",
      "npm:core-js@1.2.6/library/modules/$.uid.js",
      "npm:core-js@1.2.6/library/modules/$.shared.js",
      "npm:core-js@1.2.6/library/modules/$.set-species.js",
      "npm:core-js@1.2.6/library/modules/$.descriptors.js",
      "npm:core-js@1.2.6/library/modules/$.fails.js",
      "npm:core-js@1.2.6/library/modules/$.js",
      "npm:core-js@1.2.6/library/modules/$.set-to-string-tag.js",
      "npm:core-js@1.2.6/library/modules/$.has.js",
      "npm:core-js@1.2.6/library/modules/$.redefine-all.js",
      "npm:core-js@1.2.6/library/modules/$.redefine.js",
      "npm:core-js@1.2.6/library/modules/$.hide.js",
      "npm:core-js@1.2.6/library/modules/$.property-desc.js",
      "npm:core-js@1.2.6/library/modules/$.microtask.js",
      "npm:core-js@1.2.6/library/modules/$.cof.js",
      "npm:core-js@1.2.6/library/modules/$.task.js",
      "npm:core-js@1.2.6/library/modules/$.dom-create.js",
      "npm:core-js@1.2.6/library/modules/$.is-object.js",
      "npm:core-js@1.2.6/library/modules/$.html.js",
      "npm:core-js@1.2.6/library/modules/$.invoke.js",
      "npm:core-js@1.2.6/library/modules/$.ctx.js",
      "npm:core-js@1.2.6/library/modules/$.a-function.js",
      "npm:core-js@1.2.6/library/modules/$.species-constructor.js",
      "npm:core-js@1.2.6/library/modules/$.an-object.js",
      "npm:core-js@1.2.6/library/modules/$.same-value.js",
      "npm:core-js@1.2.6/library/modules/$.set-proto.js",
      "npm:core-js@1.2.6/library/modules/$.for-of.js",
      "npm:core-js@1.2.6/library/modules/core.get-iterator-method.js",
      "npm:core-js@1.2.6/library/modules/$.iterators.js",
      "npm:core-js@1.2.6/library/modules/$.classof.js",
      "npm:core-js@1.2.6/library/modules/$.to-length.js",
      "npm:core-js@1.2.6/library/modules/$.to-integer.js",
      "npm:core-js@1.2.6/library/modules/$.is-array-iter.js",
      "npm:core-js@1.2.6/library/modules/$.iter-call.js",
      "npm:core-js@1.2.6/library/modules/$.strict-new.js",
      "npm:core-js@1.2.6/library/modules/$.export.js",
      "npm:core-js@1.2.6/library/modules/$.library.js",
      "npm:core-js@1.2.6/library/modules/web.dom.iterable.js",
      "npm:core-js@1.2.6/library/modules/es6.array.iterator.js",
      "npm:core-js@1.2.6/library/modules/$.iter-define.js",
      "npm:core-js@1.2.6/library/modules/$.iter-create.js",
      "npm:core-js@1.2.6/library/modules/$.to-iobject.js",
      "npm:core-js@1.2.6/library/modules/$.defined.js",
      "npm:core-js@1.2.6/library/modules/$.iobject.js",
      "npm:core-js@1.2.6/library/modules/$.iter-step.js",
      "npm:core-js@1.2.6/library/modules/$.add-to-unscopables.js",
      "npm:core-js@1.2.6/library/modules/es6.string.iterator.js",
      "npm:core-js@1.2.6/library/modules/$.string-at.js",
      "npm:core-js@1.2.6/library/modules/es6.object.to-string.js"
    ]
  },

  map: {
    "babel": "npm:babel-core@5.8.38",
    "babel-runtime": "npm:babel-runtime@5.8.38",
    "core-js": "npm:core-js@1.2.6",
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.3.0"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.2"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:assert@1.3.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:babel-runtime@5.8.38": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:core-js@1.2.6": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.1"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:process@0.11.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    }
  }
});
